module initia_brawlers::battle {
    use std::vector;
    use initia_std::signer;
    use initia_std::table::{Self, Table};

    // --- CONSTANTS ---
    const STATE_ACTIVE: u8 = 1;
    const STATE_FINISHED: u8 = 2;

    const MOVE_ATTACK: u8 = 0;
    const MOVE_DEFEND: u8 = 2;

    // --- ERRORS ---
    const E_ALREADY_SUBMITTED: u64 = 2;
    const E_BATTLE_FINISHED: u64 = 3;

    struct Battle has store, copy, drop {
        battle_id: u64,
        player1: address,
        creature1_id: u64,
        creature1_hp: u64,
        creature2_hp: u64,
        p1_move: u8,
        state: u8,
        winner: address,
        is_pve: bool,
        bot_difficulty: u8,
        turn: u64,
        battle_log: vector<u32>,
    }

    struct Registry has key {
        battles: Table<u64, Battle>,
        total_battles: u64,
    }

    public entry fun initialize(account: &signer) {
        move_to(account, Registry {
            battles: table::new(),
            total_battles: 0,
        });
    }

    /// Start a PvE battle. creature_max_hp is passed from the frontend
    /// so we don't need to cross-import the brawlers module.
    public entry fun start_pve_battle(
        account: &signer,
        creature_id: u64,
        creature_max_hp: u64,
        difficulty: u8
    ) acquires Registry {
        let addr = signer::address_of(account);
        let registry = borrow_global_mut<Registry>(@initia_brawlers);
        registry.total_battles = registry.total_battles + 1;

        let bot_hp = creature_max_hp * get_bot_multiplier(difficulty) / 100;

        let battle = Battle {
            battle_id: registry.total_battles,
            player1: addr,
            creature1_id: creature_id,
            creature1_hp: creature_max_hp,
            creature2_hp: bot_hp,
            p1_move: 255,
            state: STATE_ACTIVE,
            winner: @0x0,
            is_pve: true,
            bot_difficulty: difficulty,
            turn: 1,
            battle_log: vector::empty(),
        };

        table::add(&mut registry.battles, registry.total_battles, battle);
    }

    public entry fun submit_move(
        account: &signer,
        battle_id: u64,
        move_type: u8
    ) acquires Registry {
        let addr = signer::address_of(account);
        let registry = borrow_global_mut<Registry>(@initia_brawlers);
        let battle = table::borrow_mut(&mut registry.battles, battle_id);

        assert!(battle.state == STATE_ACTIVE, E_BATTLE_FINISHED);
        assert!(battle.p1_move == 255 && battle.player1 == addr, E_ALREADY_SUBMITTED);

        battle.p1_move = move_type;

        // Bot picks defend when low HP, otherwise attacks
        let bot_move = if (battle.creature2_hp < 30) MOVE_DEFEND else MOVE_ATTACK;

        resolve_turn(battle, move_type, bot_move);
    }

    // --- INTERNAL ---

    fun resolve_turn(battle: &mut Battle, p1_move: u8, p2_move: u8) {
        let p1_defending = p1_move == MOVE_DEFEND;
        let p2_defending = p2_move == MOVE_DEFEND;

        // Heal on defend (8%)
        if (p1_defending) {
            let heal = battle.creature1_hp * 8 / 100;
            battle.creature1_hp = battle.creature1_hp + heal;
        };
        if (p2_defending) {
            let heal = battle.creature2_hp * 8 / 100;
            battle.creature2_hp = battle.creature2_hp + heal;
        };

        // Damage
        if (!p1_defending) {
            if (battle.creature2_hp >= 12) {
                battle.creature2_hp = battle.creature2_hp - 12;
            } else {
                battle.creature2_hp = 0;
            };
        };
        if (!p2_defending) {
            if (battle.creature1_hp >= 15) {
                battle.creature1_hp = battle.creature1_hp - 15;
            } else {
                battle.creature1_hp = 0;
            };
        };

        // Check game over
        if (battle.creature1_hp == 0 || battle.creature2_hp == 0) {
            battle.state = STATE_FINISHED;
            if (battle.creature2_hp == 0) {
                battle.winner = battle.player1;
            };
        } else {
            battle.turn = battle.turn + 1;
            battle.p1_move = 255;
        };
    }

    fun get_bot_multiplier(difficulty: u8): u64 {
        if (difficulty == 0) return 60;
        if (difficulty == 1) return 90;
        120
    }

    #[view]
    public fun get_battle(battle_id: u64): Battle acquires Registry {
        *table::borrow(&borrow_global<Registry>(@initia_brawlers).battles, battle_id)
    }
}
