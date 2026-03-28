import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "connect.abci.v2";
/** OracleVoteExtension defines the vote extension structure for oracle prices. */
export interface OracleVoteExtension {
    /**
     * Prices defines a map of id(CurrencyPair) -> price.Bytes() . i.e. 1 ->
     * 0x123.. (bytes). Notice the `id` function is determined by the
     * `CurrencyPairIDStrategy` used in the VoteExtensionHandler.
     */
    prices: Map<bigint, Uint8Array>;
}
export interface OracleVoteExtension_PricesEntry {
    key: bigint;
    value: Uint8Array;
}
export declare const OracleVoteExtension: MessageFns<OracleVoteExtension>;
export declare const OracleVoteExtension_PricesEntry: MessageFns<OracleVoteExtension_PricesEntry>;
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
