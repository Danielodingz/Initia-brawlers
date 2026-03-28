import { JSONSerializable } from '../../util/json';
import { GasEnforcement } from './GasEnforcement';
import { Params as Params_pb } from '@initia/initia.proto/minievm/evm/v1/types';
export declare class EvmParams extends JSONSerializable<EvmParams.Amino, EvmParams.Data, EvmParams.Proto> {
    extra_eips: number[];
    allowed_publishers: string[];
    allow_custom_erc20: boolean;
    allowed_custom_erc20s: string[];
    fee_denom: string;
    gas_refund_ratio: string;
    num_retain_block_hashes: number;
    gas_enforcement?: GasEnforcement | undefined;
    constructor(extra_eips: number[], allowed_publishers: string[], allow_custom_erc20: boolean, allowed_custom_erc20s: string[], fee_denom: string, gas_refund_ratio: string, num_retain_block_hashes: number, gas_enforcement?: GasEnforcement | undefined);
    static fromAmino(data: EvmParams.Amino): EvmParams;
    toAmino(): EvmParams.Amino;
    static fromData(data: EvmParams.Data): EvmParams;
    toData(): EvmParams.Data;
    static fromProto(proto: EvmParams.Proto): EvmParams;
    toProto(): EvmParams.Proto;
}
export declare namespace EvmParams {
    interface Amino {
        extra_eips: string[];
        allowed_publishers: string[] | null;
        allow_custom_erc20: boolean;
        allowed_custom_erc20s: string[] | null;
        fee_denom: string;
        gas_refund_ratio: string;
        num_retain_block_hashes: string;
        gas_enforcement: GasEnforcement.Amino | null;
    }
    interface Data {
        extra_eips: string[];
        allowed_publishers: string[];
        allow_custom_erc20: boolean;
        allowed_custom_erc20s: string[];
        fee_denom: string;
        gas_refund_ratio: string;
        num_retain_block_hashes: string;
        gas_enforcement: GasEnforcement.Data | null;
    }
    type Proto = Params_pb;
}
