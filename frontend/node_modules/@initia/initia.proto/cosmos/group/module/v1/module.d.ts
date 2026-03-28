import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Duration } from "../../../../google/protobuf/duration";
export declare const protobufPackage = "cosmos.group.module.v1";
/** Module is the config object of the group module. */
export interface Module {
    /**
     * max_execution_period defines the max duration after a proposal's voting period ends that members can send a MsgExec
     * to execute the proposal.
     */
    maxExecutionPeriod?: Duration | undefined;
    /**
     * max_metadata_len defines the max length of the metadata bytes field for various entities within the group module.
     * Defaults to 255 if not explicitly set.
     */
    maxMetadataLen: bigint;
}
export declare const Module: MessageFns<Module>;
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
