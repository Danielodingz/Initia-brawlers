import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { BaseAccount } from "../../../cosmos/auth/v1beta1/auth";
export declare const protobufPackage = "noble.forwarding.v1";
export interface ForwardingAccount {
    baseAccount?: BaseAccount | undefined;
    channel: string;
    recipient: string;
    createdAt: bigint;
    fallback: string;
}
export interface ForwardingPubKey {
    key: Uint8Array;
}
export declare const ForwardingAccount: MessageFns<ForwardingAccount>;
export declare const ForwardingPubKey: MessageFns<ForwardingPubKey>;
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
