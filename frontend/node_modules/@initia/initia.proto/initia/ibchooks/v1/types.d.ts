import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "initia.ibchooks.v1";
/** Params defines the set of hook parameters. */
export interface Params {
    /**
     * if the ACL of a address is not set,
     * then we use this value to decide the ACL.
     */
    defaultAllowed: boolean;
}
/** ACL defines the ACL entry of an address. */
export interface ACL {
    address: string;
    allowed: boolean;
}
/** TransferFunds defines the transfer funds. */
export interface TransferFunds {
    balanceChange?: Coin | undefined;
    amountInPacket?: Coin | undefined;
}
export declare const Params: MessageFns<Params>;
export declare const ACL: MessageFns<ACL>;
export declare const TransferFunds: MessageFns<TransferFunds>;
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
