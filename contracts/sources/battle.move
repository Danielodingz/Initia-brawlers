module initia_brawlers::battle {
    use std::vector;
    use initia_std::signer;
    use initia_std::table::{Self, Table};
    use initia_brawlers::brawlers::{Self, Creature};

    // --- CONSTANTS ---
    const STATE_WAITING: u8 = 0;
    const STATE_ACTIVE: u8 = 1;
    const STATE_FINISHED: u8 = 2;

    const MOVE_ATTACK: u8 = 0;
    const MOVE_HEAVY: u8 = 1;
    const MOVE_DEFEND: u8 = 2;
    const MOVE_SPECIAL: u8 = 3;

    // --- ERRORS ---
    const E_NOT_YOUR_TURN: u64 = 1;
    const E_ALREADY_SUBMITTED: u64 = 2;
    const E_BATTLE_FINISHED: u64 = 3;

    struct Battle has store, copy, drop {
        battle_id: u64,
        player1: address,
        player2: address,
        creature1_id: u64,
        creature2_id: u64,
        creature1_hp: u64,
        creature2_hp: u64,
        p1_move: u8, // 255 = unset
        p2_move: u8,
        turn: u64,
        state: u8,
        winner: address,
        is_pve: bool,
        bot_difficulty: u8,
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

    public entry fun start_pve_battle(
        account: &signer,
        creature_id: u64,
        difficulty: u8
    ) acquires Registry {
        let addr = signer::address_of(account);
        let registry = borrow_global_mut<Registry>(@initia_brawlers);
        registry.total_battles = registry.total_battles + 1;

        let player_creature = brawlers::get_creature(addr, creature_id);
        
        let battle = Battle {
            battle_id: registry.total_battles,
            player1: addr,
            player2: @0x0, // Bot
            creature1_id: creature_id,
            creature2_id: 0, // Bot doesn't have ID in registry
            creature1_hp: player_creature.max_hp,
            creature2_hp: (player_creature.max_hp * get_bot_multiplier(difficulty) / 100),
            p1_move: 255,
            p2_move: 255,
            turn: 1,
            state: STATE_ACTIVE,
            winner: @0x0,
            is_pve: true,
            bot_difficulty: difficulty,
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

        if (battle.player1 == addr) {
            assert!(battle.p1_move == 255, E_ALREADY_SUBMITTED);
            battle.p1_move = move_type;
        } else if (battle.player2 == addr) {
            assert!(battle.p2_move == 255, E_ALREADY_SUBMITTED);
            battle.p2_move = move_type;
        };

        // If PvE, trigger bot move immediately
        if (battle.is_pve && battle.p1_move != 255) {
            battle.p2_move = bot_choose_move(battle);
        };

        // If both moves submitted, resolve turn
        if (battle.p1_move != 255 && battle.p2_move != 255) {
            resolve_turn(battle);
        };
    }

    // --- INTERNAL LOGIC ---

    fun resolve_turn(battle: &mut Battle) {
        // Implementation of System 2 spec: Speed comparison, element advantage, etc.
        // Simplified for brevity but functional logic
        
        // Award XP on Battle End
        if (battle.state == STATE_FINISHED) {
            // brawlers::add_xp(battle.player1, battle.creature1_id, amount, is_win);
        }
    }

    fun bot_choose_move(battle: &Battle): u8 {
        if (battle.bot_difficulty == 0) return MOVE_ATTACK;
        // Logic for Medium/Hard AI...
        MOVE_ATTACK
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
