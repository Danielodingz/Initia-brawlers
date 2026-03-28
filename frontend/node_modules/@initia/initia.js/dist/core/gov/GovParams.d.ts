import { JSONSerializable } from '../../util/json';
import { AccAddress } from '../bech32';
import { Coins } from '../Coins';
import { Duration } from '../Duration';
import { Vesting } from './Vesting';
import { Params as Params_pb } from '@initia/initia.proto/initia/gov/v1/gov';
export declare class GovParams extends JSONSerializable<GovParams.Amino, GovParams.Data, GovParams.Proto> {
    max_deposit_period: Duration;
    voting_period: Duration;
    quorum: string;
    threshold: string;
    veto_threshold: string;
    min_initial_deposit_ratio: string;
    proposal_cancel_ratio: string;
    proposal_cancel_dest: AccAddress;
    expedited_voting_period: Duration;
    expedited_threshold: string;
    burn_vote_quorum: boolean;
    burn_proposal_deposit_prevote: boolean;
    burn_vote_veto: boolean;
    min_deposit_ratio: string;
    emergency_tally_interval: Duration;
    low_threshold_functions: string[];
    vesting: Vesting | undefined;
    emergency_submitters: string[];
    min_deposit: Coins;
    expedited_min_deposit: Coins;
    emergency_min_deposit: Coins;
    constructor(min_deposit: Coins.Input, max_deposit_period: Duration, voting_period: Duration, quorum: string, threshold: string, veto_threshold: string, min_initial_deposit_ratio: string, proposal_cancel_ratio: string, proposal_cancel_dest: AccAddress, expedited_voting_period: Duration, expedited_threshold: string, expedited_min_deposit: Coins.Input, burn_vote_quorum: boolean, burn_proposal_deposit_prevote: boolean, burn_vote_veto: boolean, min_deposit_ratio: string, emergency_min_deposit: Coins.Input, emergency_tally_interval: Duration, low_threshold_functions: string[], vesting: Vesting | undefined, emergency_submitters: string[]);
    static fromAmino(data: GovParams.Amino): GovParams;
    toAmino(): GovParams.Amino;
    static fromData(data: GovParams.Data): GovParams;
    toData(): GovParams.Data;
    static fromProto(data: GovParams.Proto): GovParams;
    toProto(): GovParams.Proto;
}
export declare namespace GovParams {
    interface Amino {
        min_deposit: Coins.Amino | null;
        max_deposit_period: Duration.Amino;
        voting_period: Duration.Amino;
        quorum: string;
        threshold: string;
        veto_threshold: string;
        min_initial_deposit_ratio: string;
        proposal_cancel_ratio: string;
        proposal_cancel_dest: AccAddress;
        expedited_voting_period: Duration.Amino;
        expedited_threshold: string;
        expedited_min_deposit: Coins.Amino | null;
        burn_vote_quorum: boolean;
        burn_proposal_deposit_prevote: boolean;
        burn_vote_veto: boolean;
        min_deposit_ratio: string;
        emergency_min_deposit: Coins.Amino | null;
        emergency_tally_interval: Duration.Amino;
        low_threshold_functions: string[];
        vesting?: Vesting.Amino;
        emergency_submitters: string[] | null;
    }
    interface Data {
        min_deposit: Coins.Data;
        max_deposit_period: Duration.Data;
        voting_period: Duration.Data;
        quorum: string;
        threshold: string;
        veto_threshold: string;
        min_initial_deposit_ratio: string;
        proposal_cancel_ratio: string;
        proposal_cancel_dest: AccAddress;
        expedited_voting_period: Duration.Data;
        expedited_threshold: string;
        expedited_min_deposit: Coins.Data;
        burn_vote_quorum: boolean;
        burn_proposal_deposit_prevote: boolean;
        burn_vote_veto: boolean;
        min_deposit_ratio: string;
        emergency_min_deposit: Coins.Data;
        emergency_tally_interval: Duration.Data;
        low_threshold_functions: string[];
        vesting?: Vesting.Data;
        emergency_submitters: string[];
    }
    type Proto = Params_pb;
}
