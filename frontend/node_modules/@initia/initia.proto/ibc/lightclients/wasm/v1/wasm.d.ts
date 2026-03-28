import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Height } from "../../../core/client/v1/client";
export declare const protobufPackage = "ibc.lightclients.wasm.v1";
/** Wasm light client's Client state */
export interface ClientState {
    /**
     * bytes encoding the client state of the underlying light client
     * implemented as a Wasm contract.
     */
    data: Uint8Array;
    checksum: Uint8Array;
    latestHeight?: Height | undefined;
}
/** Wasm light client's ConsensusState */
export interface ConsensusState {
    /**
     * bytes encoding the consensus state of the underlying light client
     * implemented as a Wasm contract.
     */
    data: Uint8Array;
}
/** Wasm light client message (either header(s) or misbehaviour) */
export interface ClientMessage {
    data: Uint8Array;
}
/**
 * Checksums defines a list of all checksums that are stored
 *
 * Deprecated: This message is deprecated in favor of storing the checksums
 * using a Collections.KeySet.
 *
 * @deprecated
 */
export interface Checksums {
    checksums: Uint8Array[];
}
export declare const ClientState: MessageFns<ClientState>;
export declare const ConsensusState: MessageFns<ConsensusState>;
export declare const ClientMessage: MessageFns<ClientMessage>;
export declare const Checksums: MessageFns<Checksums>;
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
