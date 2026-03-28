import { JSONSerializable } from '../../util/json';
import { ProviderConfig } from './ProviderConfig';
import { Ticker } from './Ticker';
import { Market as Market_pb } from '@initia/initia.proto/connect/marketmap/v2/market';
export declare class Market extends JSONSerializable<Market.Amino, Market.Data, Market.Proto> {
    ticker: Ticker;
    provider_configs: ProviderConfig[];
    constructor(ticker: Ticker, provider_configs: ProviderConfig[]);
    static fromAmino(data: Market.Amino): Market;
    toAmino(): Market.Amino;
    static fromData(data: Market.Data): Market;
    toData(): Market.Data;
    static fromProto(proto: Market.Proto): Market;
    toProto(): Market.Proto;
}
export declare namespace Market {
    interface Amino {
        ticker: Ticker.Amino;
        provider_configs: ProviderConfig.Amino[];
    }
    interface Data {
        ticker: Ticker.Data;
        provider_configs: ProviderConfig.Data[];
    }
    type Proto = Market_pb;
}
