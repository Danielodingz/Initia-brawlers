import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Params } from "./types";
export declare const protobufPackage = "initia.reward.v1";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** Params defines all the parameters of the module. */
    params?: Params | undefined;
    lastReleaseTimestamp?: Date | undefined;
    lastDilutionTimestamp?: Date | undefined;
}
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
