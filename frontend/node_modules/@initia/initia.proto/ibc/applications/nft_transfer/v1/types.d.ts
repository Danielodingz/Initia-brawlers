import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "ibc.applications.nft_transfer.v1";
/**
 * ClassTrace contains the base class id for ICS721 non fungible tokens and the
 * source tracing information path.
 */
export interface ClassTrace {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the non fungible token.
     */
    path: string;
    /** base class id of the relayed non fungible token. */
    baseClassId: string;
}
/** Params defines the set of IBC nft transfer parameters. */
export interface Params {
    /** send_enabled enables or disables all cross-chain token transfers from this chain. */
    sendEnabled: boolean;
    /** receive_enabled enables or disables all cross-chain token transfers to this chain. */
    receiveEnabled: boolean;
}
export declare const ClassTrace: MessageFns<ClassTrace>;
export declare const Params: MessageFns<Params>;
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
