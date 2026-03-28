import { JSONSerializable } from '../../util/json';
import { Duration } from '../Duration';
import { Params as Params_pb } from '@initia/initia.proto/initia/mstaking/v1/staking';
export declare class MstakingParams extends JSONSerializable<MstakingParams.Amino, MstakingParams.Data, MstakingParams.Proto> {
    unbonding_time: Duration;
    max_validators: number;
    max_entries: number;
    historical_entries: number;
    bond_denoms: string[];
    min_voting_power: number;
    min_commission_rate: string;
    constructor(unbonding_time: Duration, max_validators: number, max_entries: number, historical_entries: number, bond_denoms: string[], min_voting_power: number, min_commission_rate: string);
    static fromAmino(data: MstakingParams.Amino): MstakingParams;
    toAmino(): MstakingParams.Amino;
    static fromData(data: MstakingParams.Data): MstakingParams;
    toData(): MstakingParams.Data;
    static fromProto(data: MstakingParams.Proto): MstakingParams;
    toProto(): MstakingParams.Proto;
}
export declare namespace MstakingParams {
    interface Amino {
        type: 'mstaking/Params';
        value: {
            unbonding_time: Duration.Amino;
            max_validators: number;
            max_entries: number;
            historical_entries: number;
            bond_denoms: string[];
            min_voting_power: string;
            min_commission_rate: string;
        };
    }
    interface Data {
        '@type': '/initia.mstaking.v1.Params';
        unbonding_time: Duration.Data;
        max_validators: number;
        max_entries: number;
        historical_entries: number;
        bond_denoms: string[];
        min_voting_power: string;
        min_commission_rate: string;
    }
    type Proto = Params_pb;
}
