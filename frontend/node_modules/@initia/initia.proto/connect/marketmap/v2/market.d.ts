import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { CurrencyPair } from "../../types/v2/currency_pair";
export declare const protobufPackage = "connect.marketmap.v2";
/** Market encapsulates a Ticker and its provider-specific configuration. */
export interface Market {
    /**
     * Ticker represents a price feed for a given asset pair i.e. BTC/USD. The
     * price feed is scaled to a number of decimal places and has a minimum number
     * of providers required to consider the ticker valid.
     */
    ticker?: Ticker | undefined;
    /** ProviderConfigs is the list of provider-specific configs for this Market. */
    providerConfigs: ProviderConfig[];
}
/**
 * Ticker represents a price feed for a given asset pair i.e. BTC/USD. The price
 * feed is scaled to a number of decimal places and has a minimum number of
 * providers required to consider the ticker valid.
 */
export interface Ticker {
    /** CurrencyPair is the currency pair for this ticker. */
    currencyPair?: CurrencyPair | undefined;
    /**
     * Decimals is the number of decimal places for the ticker. The number of
     * decimal places is used to convert the price to a human-readable format.
     */
    decimals: bigint;
    /**
     * MinProviderCount is the minimum number of providers required to consider
     * the ticker valid.
     */
    minProviderCount: bigint;
    /**
     * Enabled is the flag that denotes if the Ticker is enabled for price
     * fetching by an oracle.
     */
    enabled: boolean;
    /**
     * MetadataJSON is a string of JSON that encodes any extra configuration
     * for the given ticker.
     */
    metadataJSON: string;
}
export interface ProviderConfig {
    /**
     * Name corresponds to the name of the provider for which the configuration is
     * being set.
     */
    name: string;
    /**
     * OffChainTicker is the off-chain representation of the ticker i.e. BTC/USD.
     * The off-chain ticker is unique to a given provider and is used to fetch the
     * price of the ticker from the provider.
     */
    offChainTicker: string;
    /**
     * NormalizeByPair is the currency pair for this ticker to be normalized by.
     * For example, if the desired Ticker is BTC/USD, this market could be reached
     * using: OffChainTicker = BTC/USDT NormalizeByPair = USDT/USD This field is
     * optional and nullable.
     */
    normalizeByPair?: CurrencyPair | undefined;
    /**
     * Invert is a boolean indicating if the BASE and QUOTE of the market should
     * be inverted. i.e. BASE -> QUOTE, QUOTE -> BASE
     */
    invert: boolean;
    /**
     * MetadataJSON is a string of JSON that encodes any extra configuration
     * for the given provider config.
     */
    metadataJSON: string;
}
/** MarketMap maps ticker strings to their Markets. */
export interface MarketMap {
    /**
     * Markets is the full list of tickers and their associated configurations
     * to be stored on-chain.
     */
    markets: Map<string, Market>;
}
export interface MarketMap_MarketsEntry {
    key: string;
    value?: Market | undefined;
}
export declare const Market: MessageFns<Market>;
export declare const Ticker: MessageFns<Ticker>;
export declare const ProviderConfig: MessageFns<ProviderConfig>;
export declare const MarketMap: MessageFns<MarketMap>;
export declare const MarketMap_MarketsEntry: MessageFns<MarketMap_MarketsEntry>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
