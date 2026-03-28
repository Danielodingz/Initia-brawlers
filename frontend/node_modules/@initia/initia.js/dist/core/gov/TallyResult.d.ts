import { JSONSerializable } from '../../util/json';
import { TallyResult as TallyResult_pb } from '@initia/initia.proto/initia/gov/v1/gov';
export declare class TallyResult extends JSONSerializable<TallyResult.Amino, TallyResult.Data, TallyResult.Proto> {
    tally_height: number;
    total_staking_power: string;
    total_vesting_power: string;
    v1_tally_result: TallyResult.V1TallyResult;
    constructor(tally_height: number, total_staking_power: string, total_vesting_power: string, v1_tally_result: TallyResult.V1TallyResult);
    static fromAmino(data: TallyResult.Amino): TallyResult;
    toAmino(): TallyResult.Amino;
    static fromData(data: TallyResult.Data): TallyResult;
    toData(): TallyResult.Data;
    static fromProto(data: TallyResult.Proto): TallyResult;
    toProto(): TallyResult.Proto;
}
export declare namespace TallyResult {
    interface V1TallyResult {
        yes_count: string;
        abstain_count: string;
        no_count: string;
        no_with_veto_count: string;
    }
    interface Amino {
        tally_height: string;
        total_staking_power: string;
        total_vesting_power: string;
        v1_tally_result: V1TallyResult;
    }
    interface Data {
        tally_height: string;
        total_staking_power: string;
        total_vesting_power: string;
        v1_tally_result: V1TallyResult;
    }
    type Proto = TallyResult_pb;
}
