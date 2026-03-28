import { JSONSerializable } from '../../util/json';
import { CurrencyPair } from '../oracle';
import { ProviderConfig as ProviderConfig_pb } from '@initia/initia.proto/connect/marketmap/v2/market';
export declare class ProviderConfig extends JSONSerializable<ProviderConfig.Amino, ProviderConfig.Data, ProviderConfig.Proto> {
    name: string;
    off_chain_ticker: string;
    normalize_by_pair: CurrencyPair | undefined;
    invert: boolean;
    metadata_JSON: string;
    constructor(name: string, off_chain_ticker: string, normalize_by_pair: CurrencyPair | undefined, invert: boolean, metadata_JSON: string);
    static fromAmino(data: ProviderConfig.Amino): ProviderConfig;
    toAmino(): ProviderConfig.Amino;
    static fromData(data: ProviderConfig.Data): ProviderConfig;
    toData(): ProviderConfig.Data;
    static fromProto(proto: ProviderConfig.Proto): ProviderConfig;
    toProto(): ProviderConfig.Proto;
}
export declare namespace ProviderConfig {
    interface Amino {
        name: string;
        off_chain_ticker: string;
        normalize_by_pair?: CurrencyPair.Amino;
        invert: boolean;
        metadata_JSON: string;
    }
    interface Data {
        name: string;
        off_chain_ticker: string;
        normalize_by_pair?: CurrencyPair.Data;
        invert: boolean;
        metadata_JSON: string;
    }
    type Proto = ProviderConfig_pb;
}
