import { JSONSerializable } from '../../util/json';
import { GasEnforcement as GasEnforcement_pb } from '@initia/initia.proto/minievm/evm/v1/types';
export declare class GasEnforcement extends JSONSerializable<GasEnforcement.Amino, GasEnforcement.Data, GasEnforcement.Proto> {
    max_gas_fee_cap: string;
    max_gas_limit: number;
    unlimited_gas_senders: string[];
    constructor(max_gas_fee_cap: string, max_gas_limit: number, unlimited_gas_senders: string[]);
    static fromAmino(data: GasEnforcement.Amino): GasEnforcement;
    toAmino(): GasEnforcement.Amino;
    static fromData(data: GasEnforcement.Data): GasEnforcement;
    toData(): GasEnforcement.Data;
    static fromProto(data: GasEnforcement.Proto): GasEnforcement;
    toProto(): GasEnforcement.Proto;
}
export declare namespace GasEnforcement {
    interface Amino {
        max_gas_fee_cap: string;
        max_gas_limit: string;
        unlimited_gas_senders: string[];
    }
    interface Data {
        max_gas_fee_cap: string;
        max_gas_limit: string;
        unlimited_gas_senders: string[];
    }
    type Proto = GasEnforcement_pb;
}
