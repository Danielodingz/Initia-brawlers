import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { BatchInfoWithOutput, BridgeConfig, MigrationInfo, Output, Params, TokenPair } from "./types";
export declare const protobufPackage = "opinit.ophost.v1";
/** GenesisState defines the rollup module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to deposit. */
    params?: Params | undefined;
    /** bridges defines the registered bridges. */
    bridges: Bridge[];
    /** the id will be asisgned to a new bridge. */
    nextBridgeId: bigint;
    /** migration_infos defines the registered migration infos. */
    migrationInfos: MigrationInfo[];
}
/** Bridge defeins a bridge state. */
export interface Bridge {
    bridgeId: bigint;
    /** l1 sequence number. */
    nextL1Sequence: bigint;
    /** next output index. */
    nextOutputIndex: bigint;
    /** a bridge config. */
    bridgeConfig?: BridgeConfig | undefined;
    /** a list of (l1, l2) token pairs */
    tokenPairs: TokenPair[];
    /** a list of l2 output proposals, which has been proven. */
    provenWithdrawals: Uint8Array[];
    /** a list of l2 output proposals. */
    proposals: WrappedOutput[];
    /** a list of batch infos. */
    batchInfos: BatchInfoWithOutput[];
}
/** WrappedOutput defines a wrapped output containing its index and proposal. */
export interface WrappedOutput {
    outputIndex: bigint;
    outputProposal?: Output | undefined;
}
export declare const GenesisState: MessageFns<GenesisState>;
export declare const Bridge: MessageFns<Bridge>;
export declare const WrappedOutput: MessageFns<WrappedOutput>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
