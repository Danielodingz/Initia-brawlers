import { JSONSerializable } from '../../util/json';
import { Coins } from '../Coins';
import { AccAddress } from '../bech32';
import { Params as Params_pb } from '@initia/opinit.proto/opinit/opchild/v1/types';
export declare class OpchildParams extends JSONSerializable<OpchildParams.Amino, OpchildParams.Data, OpchildParams.Proto> {
    max_validators: number;
    historical_entries: number;
    bridge_executors: AccAddress[];
    admin: AccAddress;
    fee_whitelist: string[];
    hook_max_gas: number;
    min_gas_prices: Coins;
    constructor(max_validators: number, historical_entries: number, min_gas_prices: Coins.Input, bridge_executors: AccAddress[], admin: AccAddress, fee_whitelist: string[], hook_max_gas: number);
    static fromAmino(data: OpchildParams.Amino): OpchildParams;
    toAmino(): OpchildParams.Amino;
    static fromData(data: OpchildParams.Data): OpchildParams;
    toData(): OpchildParams.Data;
    static fromProto(data: OpchildParams.Proto): OpchildParams;
    toProto(): OpchildParams.Proto;
}
export declare namespace OpchildParams {
    interface Amino {
        type: 'opchild/Params';
        value: {
            max_validators: number;
            historical_entries: number;
            min_gas_prices: Coins.Amino;
            bridge_executors: AccAddress[] | null;
            admin: AccAddress;
            fee_whitelist: string[] | null;
            hook_max_gas: string;
        };
    }
    interface Data {
        '@type': '/opinit.opchild.v1.Params';
        max_validators: number;
        historical_entries: number;
        min_gas_prices: Coins.Data;
        bridge_executors: AccAddress[];
        admin: AccAddress;
        fee_whitelist: string[];
        hook_max_gas: string;
    }
    type Proto = Params_pb;
}
