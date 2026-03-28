import { JSONSerializable } from '../../util/json';
import { Params as Params_pb } from '@initia/initia.proto/initia/move/v1/types';
export declare class MoveParams extends JSONSerializable<MoveParams.Amino, MoveParams.Data, MoveParams.Proto> {
    base_denom: string;
    base_min_gas_price: string;
    contract_shared_revenue_ratio: string;
    script_enabled: boolean;
    allowed_publishers: string[];
    constructor(base_denom: string, base_min_gas_price: string, contract_shared_revenue_ratio: string, script_enabled: boolean, allowed_publishers: string[]);
    static fromAmino(data: MoveParams.Amino): MoveParams;
    toAmino(): MoveParams.Amino;
    static fromData(data: MoveParams.Data): MoveParams;
    toData(): MoveParams.Data;
    static fromProto(data: MoveParams.Proto): MoveParams;
    toProto(): MoveParams.Proto;
}
export declare namespace MoveParams {
    interface Amino {
        type: 'move/Params';
        value: {
            base_denom: string;
            base_min_gas_price: string;
            contract_shared_revenue_ratio: string;
            script_enabled: boolean;
            allowed_publishers: string[] | null;
        };
    }
    interface Data {
        '@type': '/initia.move.v1.Params';
        base_denom: string;
        base_min_gas_price: string;
        contract_shared_revenue_ratio: string;
        script_enabled: boolean;
        allowed_publishers: string[];
    }
    type Proto = Params_pb;
}
