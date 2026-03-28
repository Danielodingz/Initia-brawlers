import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "sdk.proposals.v1";
/**
 * ProposalInfo contains the metadata about a given proposal that was built by
 * the block-sdk. This is used to verify and consilidate proposal data across
 * the network.
 */
export interface ProposalInfo {
    /**
     * TxsByLane contains information about how each partial proposal
     * was constructed by the block-sdk lanes.
     */
    txsByLane: Map<string, bigint>;
    /**
     * MaxBlockSize corresponds to the upper bound on the size of the
     * block that was used to construct this block proposal.
     */
    maxBlockSize: bigint;
    /**
     * MaxGasLimit corresponds to the upper bound on the gas limit of the
     * block that was used to construct this block proposal.
     */
    maxGasLimit: bigint;
    /** BlockSize corresponds to the size of this block proposal. */
    blockSize: bigint;
    /** GasLimit corresponds to the gas limit of this block proposal. */
    gasLimit: bigint;
}
export interface ProposalInfo_TxsByLaneEntry {
    key: string;
    value: bigint;
}
export declare const ProposalInfo: MessageFns<ProposalInfo>;
export declare const ProposalInfo_TxsByLaneEntry: MessageFns<ProposalInfo_TxsByLaneEntry>;
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
