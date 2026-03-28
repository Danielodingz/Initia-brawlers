import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DenomAuthorityMetadata } from "./authority_metadata";
import { Params } from "./params";
export declare const protobufPackage = "miniwasm.tokenfactory.v1";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
    /** params defines the parameters of the module. */
    params?: Params | undefined;
    factoryDenoms: GenesisDenom[];
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenom {
    denom: string;
    authorityMetadata?: DenomAuthorityMetadata | undefined;
}
export declare const GenesisState: MessageFns<GenesisState>;
export declare const GenesisDenom: MessageFns<GenesisDenom>;
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
