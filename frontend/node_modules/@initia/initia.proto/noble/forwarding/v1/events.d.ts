import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "noble.forwarding.v1";
/** AccountRegistered is emitted whenever a new forwarding account is registered. */
export interface AccountRegistered {
    /** address is the address of the forwarding account. */
    address: string;
    /** channel is the channel id that funds are forwarded through. */
    channel: string;
    /** recipient is the address of the recipient of forwards. */
    recipient: string;
    /** fallback is the address of the fallback account. */
    fallback: string;
}
/** AccountCleared is emitted whenever a forwarding account is cleared. */
export interface AccountCleared {
    /** address is the address of the forwarding account. */
    address: string;
    /** recipient is the address of the fallback account. */
    recipient: string;
}
/** AllowedDenomsConfigured is emitted whenever the allowed denoms are updated. */
export interface AllowedDenomsConfigured {
    /** previous_denoms is the list of previously allowed denoms. */
    previousDenoms: string[];
    /** current_denoms is the list of currently allowed denoms. */
    currentDenoms: string[];
}
/** MemoSet is emitted whenever a memo is set or cleared for a forwarding account. */
export interface MemoSet {
    /** address is the address of the forwarding account. */
    address: string;
    /** denom is the denom for which the memo is set. */
    denom: string;
    /** memo is the memo that was set. */
    memo: string;
}
export declare const AccountRegistered: MessageFns<AccountRegistered>;
export declare const AccountCleared: MessageFns<AccountCleared>;
export declare const AllowedDenomsConfigured: MessageFns<AllowedDenomsConfigured>;
export declare const MemoSet: MessageFns<MemoSet>;
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
