import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
export declare const protobufPackage = "opinit.ophost.v1";
/** Params defines the set of ophost parameters. */
export interface Params {
    /** The amount to be paid by l2 creator. */
    registrationFee: Coin[];
}
/** BridgeConfig defines the set of bridge config. */
export interface BridgeConfig {
    /** The address of the challenger. */
    challenger: string;
    /** The address of the proposer. */
    proposer: string;
    /** The information about batch submission. */
    batchInfo?: BatchInfo | undefined;
    /**
     * The time interval at which checkpoints must be submitted.
     * NOTE: this param is currently not used, but will be used for challenge in future.
     */
    submissionInterval?: Duration | undefined;
    /** The minimum time duration that must elapse before a withdrawal can be finalized. */
    finalizationPeriod?: Duration | undefined;
    /** The the first l2 block will be recorded on l1. */
    submissionStartHeight: bigint;
    /** oracle_enabled is a flag to enable oracle. */
    oracleEnabled: boolean;
    /** Normally it is IBC channelID for permissioned IBC relayer. */
    metadata: Uint8Array;
    /** bridge_disabled is a flag to disable the bridge. */
    bridgeDisabled: boolean;
    /** bridge_disabled_at is the timestamp when the bridge is disabled. */
    bridgeDisabledAt?: Date | undefined;
}
/** BatchInfo defines the set of batch information. */
export interface BatchInfo {
    /** The address of the batch submitter. */
    submitter: string;
    /** The target chain type. */
    chainType: BatchInfo_ChainType;
}
/** ChainType defines the type of chain. */
export declare enum BatchInfo_ChainType {
    /** UNSPECIFIED - Unspecified chain type. */
    UNSPECIFIED = 0,
    /** INITIA - The chain type of the initia chain. */
    INITIA = 1,
    /** CELESTIA - The chain type of the celestia chain. */
    CELESTIA = 2,
    UNRECOGNIZED = -1
}
export declare function batchInfo_ChainTypeFromJSON(object: any): BatchInfo_ChainType;
export declare function batchInfo_ChainTypeToJSON(object: BatchInfo_ChainType): string;
/** TokenPair defines l1 and l2 token pair */
export interface TokenPair {
    l1Denom: string;
    l2Denom: string;
}
/** Output is a l2 block submitted by proposer. */
export interface Output {
    /** Hash of the l2 output. */
    outputRoot: Uint8Array;
    /** The l1 block number that the output root was submitted in. */
    l1BlockNumber: bigint;
    /** Timestamp of the l1 block that the output root was submitted in. */
    l1BlockTime?: Date | undefined;
    /** The l2 block number that the output root was submitted in. */
    l2BlockNumber: bigint;
}
/** BatchInfoWithOutput defines the batch information with output. */
export interface BatchInfoWithOutput {
    batchInfo?: BatchInfo | undefined;
    output?: Output | undefined;
}
/** MigrationInfo defines the information for migration. */
export interface MigrationInfo {
    /** BridgeID is the id of the bridge. */
    bridgeId: bigint;
    /** IBC ChannelID is the channel id of the ibc. */
    ibcChannelId: string;
    /** IBC PortID is the port id of the ibc. */
    ibcPortId: string;
    /** L1Denom is the denom of the l1. */
    l1Denom: string;
}
export declare const Params: MessageFns<Params>;
export declare const BridgeConfig: MessageFns<BridgeConfig>;
export declare const BatchInfo: MessageFns<BatchInfo>;
export declare const TokenPair: MessageFns<TokenPair>;
export declare const Output: MessageFns<Output>;
export declare const BatchInfoWithOutput: MessageFns<BatchInfoWithOutput>;
export declare const MigrationInfo: MessageFns<MigrationInfo>;
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
