import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { BaseAccount } from "../../../cosmos/auth/v1beta1/auth";
export declare const protobufPackage = "minievm.evm.v1";
/** ContractAccount defines an account of contract. */
export interface ContractAccount {
    baseAccount?: BaseAccount | undefined;
    codeHash: Uint8Array;
}
/**
 * ShorthandAccount defines an account of shorthand address
 * which is used to store the original long address (32bytes).
 *
 * Also it is used to check the existence of the account before
 * creating a new account.
 */
export interface ShorthandAccount {
    baseAccount?: BaseAccount | undefined;
    originalAddress: string;
}
export declare const ContractAccount: MessageFns<ContractAccount>;
export declare const ShorthandAccount: MessageFns<ShorthandAccount>;
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
