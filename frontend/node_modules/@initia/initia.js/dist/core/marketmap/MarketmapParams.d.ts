import { AccAddress } from '../bech32';
import { JSONSerializable } from '../../util/json';
import { Params as Params_pb } from '@initia/initia.proto/connect/marketmap/v2/params';
export declare class MarketmapParams extends JSONSerializable<MarketmapParams.Amino, MarketmapParams.Data, MarketmapParams.Proto> {
    market_authorities: AccAddress[];
    admin: AccAddress;
    constructor(market_authorities: AccAddress[], admin: AccAddress);
    static fromAmino(data: MarketmapParams.Amino): MarketmapParams;
    toAmino(): MarketmapParams.Amino;
    static fromData(data: MarketmapParams.Data): MarketmapParams;
    toData(): MarketmapParams.Data;
    static fromProto(data: MarketmapParams.Proto): MarketmapParams;
    toProto(): MarketmapParams.Proto;
}
export declare namespace MarketmapParams {
    interface Amino {
        market_authorities: AccAddress[];
        admin: AccAddress;
    }
    interface Data {
        market_authorities: AccAddress[];
        admin: AccAddress;
    }
    type Proto = Params_pb;
}
