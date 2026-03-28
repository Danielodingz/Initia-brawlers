import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { CurrencyPair } from "../../types/v2/currency_pair";
export declare const protobufPackage = "connect.oracle.v2";
/**
 * QuotePrice is the representation of the aggregated prices for a CurrencyPair,
 * where price represents the price of Base in terms of Quote
 */
export interface QuotePrice {
    price: string;
    /**
     * BlockTimestamp tracks the block height associated with this price update.
     * We include block timestamp alongside the price to ensure that smart
     * contracts and applications are not utilizing stale oracle prices
     */
    blockTimestamp?: Date | undefined;
    /** BlockHeight is height of block mentioned above */
    blockHeight: bigint;
}
/**
 * CurrencyPairState represents the stateful information tracked by the x/oracle
 * module per-currency-pair.
 */
export interface CurrencyPairState {
    /**
     * QuotePrice is the latest price for a currency-pair, notice this value can
     * be null in the case that no price exists for the currency-pair
     */
    price?: QuotePrice | undefined;
    /** Nonce is the number of updates this currency-pair has received */
    nonce: bigint;
    /** ID is the ID of the CurrencyPair */
    id: bigint;
}
/**
 * CurrencyPairGenesis is the information necessary for initialization of a
 * CurrencyPair.
 */
export interface CurrencyPairGenesis {
    /** The CurrencyPair to be added to module state */
    currencyPair?: CurrencyPair | undefined;
    /**
     * A genesis price if one exists (note this will be empty, unless it results
     * from forking the state of this module)
     */
    currencyPairPrice?: QuotePrice | undefined;
    /**
     * nonce is the nonce (number of updates) for the CP (same case as above,
     * likely 0 unless it results from fork of module)
     */
    nonce: bigint;
    /** id is the ID of the CurrencyPair */
    id: bigint;
}
/**
 * GenesisState is the genesis-state for the x/oracle module, it takes a set of
 * predefined CurrencyPairGeneses
 */
export interface GenesisState {
    /**
     * CurrencyPairGenesis is the set of CurrencyPairGeneses for the module. I.e
     * the starting set of CurrencyPairs for the module + information regarding
     * their latest update.
     */
    currencyPairGenesis: CurrencyPairGenesis[];
    /** NextID is the next ID to be used for a CurrencyPair */
    nextId: bigint;
}
export declare const QuotePrice: MessageFns<QuotePrice>;
export declare const CurrencyPairState: MessageFns<CurrencyPairState>;
export declare const CurrencyPairGenesis: MessageFns<CurrencyPairGenesis>;
export declare const GenesisState: MessageFns<GenesisState>;
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
