import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { BaseAccount } from "../../../cosmos/auth/v1beta1/auth";
export declare const protobufPackage = "initia.move.v1";
/** ObjectAccount defines an account for objects that holds coins without pubkey. */
export interface ObjectAccount {
    baseAccount?: BaseAccount | undefined;
}
/** TableAccount defines an account for tables that holds items without pubkey. */
export interface TableAccount {
    baseAccount?: BaseAccount | undefined;
}
export declare const ObjectAccount: MessageFns<ObjectAccount>;
export declare const TableAccount: MessageFns<TableAccount>;
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
