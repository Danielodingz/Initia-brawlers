import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "noble.forwarding.v1";
export interface RegisterAccountData {
    recipient: string;
    channel: string;
    fallback: string;
}
export interface RegisterAccountMemo {
    noble?: RegisterAccountMemo_RegisterAccountDataWrapper | undefined;
}
export interface RegisterAccountMemo_RegisterAccountDataWrapper {
    forwarding?: RegisterAccountData | undefined;
}
export declare const RegisterAccountData: MessageFns<RegisterAccountData>;
export declare const RegisterAccountMemo: MessageFns<RegisterAccountMemo>;
export declare const RegisterAccountMemo_RegisterAccountDataWrapper: MessageFns<RegisterAccountMemo_RegisterAccountDataWrapper>;
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
