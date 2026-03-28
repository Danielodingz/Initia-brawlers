import { JSONSerializable } from '../../util/json';
import { CurrencyPair } from '../oracle';
import { Ticker as Ticker_pb } from '@initia/initia.proto/connect/marketmap/v2/market';
export declare class Ticker extends JSONSerializable<Ticker.Amino, Ticker.Data, Ticker.Proto> {
    currency_pair: CurrencyPair;
    decimals: number;
    min_provider_count: number;
    enabled: boolean;
    metadata_JSON: string;
    constructor(currency_pair: CurrencyPair, decimals: number, min_provider_count: number, enabled: boolean, metadata_JSON: string);
    static fromAmino(data: Ticker.Amino): Ticker;
    toAmino(): Ticker.Amino;
    static fromData(data: Ticker.Data): Ticker;
    toData(): Ticker.Data;
    static fromProto(proto: Ticker.Proto): Ticker;
    toProto(): Ticker.Proto;
}
export declare namespace Ticker {
    interface Amino {
        currency_pair: CurrencyPair.Amino;
        decimals: string;
        min_provider_count: string;
        enabled: boolean;
        metadata_JSON: string;
    }
    interface Data {
        currency_pair: CurrencyPair.Data;
        decimals: string;
        min_provider_count: string;
        enabled: boolean;
        metadata_JSON: string;
    }
    type Proto = Ticker_pb;
}
