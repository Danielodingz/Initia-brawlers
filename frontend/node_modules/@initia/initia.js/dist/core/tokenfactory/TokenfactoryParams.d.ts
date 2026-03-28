import { JSONSerializable } from '../../util/json';
import { Coins } from '../Coins';
import { Params as Params_pb } from '@initia/initia.proto/miniwasm/tokenfactory/v1/params';
export declare class TokenfactoryParams extends JSONSerializable<TokenfactoryParams.Amino, TokenfactoryParams.Data, TokenfactoryParams.Proto> {
    denom_creation_gas_consume: number;
    denom_creation_fee: Coins;
    constructor(denom_creation_fee: Coins.Input, denom_creation_gas_consume: number);
    static fromAmino(data: TokenfactoryParams.Amino): TokenfactoryParams;
    toAmino(): TokenfactoryParams.Amino;
    static fromData(data: TokenfactoryParams.Data): TokenfactoryParams;
    toData(): TokenfactoryParams.Data;
    static fromProto(data: TokenfactoryParams.Proto): TokenfactoryParams;
    toProto(): TokenfactoryParams.Proto;
}
export declare namespace TokenfactoryParams {
    interface Amino {
        denom_creation_fee: Coins.Amino;
        denom_creation_gas_consume: string;
    }
    interface Data {
        denom_creation_fee: Coins.Data;
        denom_creation_gas_consume: string;
    }
    type Proto = Params_pb;
}
