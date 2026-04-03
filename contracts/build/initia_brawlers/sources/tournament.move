module initia_brawlers::tournament {
    use std::vector;
    use initia_std::signer;
    use initia_std::table::{Self, Table};

    const STATE_OPEN: u8 = 0;
    const STATE_ACTIVE: u8 = 1;

    struct Tournament has store, copy, drop {
        id: u64,
        participants: vector<address>,
        creature_ids: vector<u64>,
        state: u8,
        prize_pool: u64,
    }

    struct Registry has key {
        tournaments: Table<u64, Tournament>,
        total_tournaments: u64,
        all_winners: vector<address>,
    }

    public entry fun initialize(account: &signer) {
        move_to(account, Registry {
            tournaments: table::new(),
            total_tournaments: 0,
            all_winners: vector::empty(),
        });
    }

    public entry fun enter_tournament(
        account: &signer,
        creature_id: u64,
        _fee: u64
    ) acquires Registry {
        let addr = signer::address_of(account);
        let registry = borrow_global_mut<Registry>(@initia_brawlers);
        
        // Find open tournament or create one
        let t_id = registry.total_tournaments;
        if (!table::contains(&registry.tournaments, t_id)) {
             // create new
        };
        
        let tournament = table::borrow_mut(&mut registry.tournaments, t_id);
        vector::push_back(&mut tournament.participants, addr);
        vector::push_back(&mut tournament.creature_ids, creature_id);

        if (vector::length(&tournament.participants) == 8) {
            tournament.state = STATE_ACTIVE;
        };
    }
}
