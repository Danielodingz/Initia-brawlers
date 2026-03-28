import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ClassTrace, Params } from "./types";
export declare const protobufPackage = "ibc.applications.nft_transfer.v1";
/** GenesisState defines the ibc nft-transfer genesis state */
export interface GenesisState {
    portId: string;
    classTraces: ClassTrace[];
    classData: ClassData[];
    tokenData: TokenData[];
    params?: Params | undefined;
}
/**
 * ClassData contains the class trace hash and the class data
 * for genesis.
 */
export interface ClassData {
    traceHash: Uint8Array;
    data: string;
}
/**
 * TokenData contains the trace hash, token id, and the token data
 * for genesis.
 */
export interface TokenData {
    traceHash: Uint8Array;
    tokenId: string;
    data: string;
}
export declare const GenesisState: MessageFns<GenesisState>;
export declare const ClassData: MessageFns<ClassData>;
export declare const TokenData: MessageFns<TokenData>;
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
