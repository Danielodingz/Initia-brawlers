import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Order, Timeout } from "./channel";
export declare const protobufPackage = "ibc.core.channel.v1";
/**
 * Upgrade is a verifiable type which contains the relevant information
 * for an attempted upgrade. It provides the proposed changes to the channel
 * end, the timeout for this upgrade attempt and the next packet sequence
 * which allows the counterparty to efficiently know the highest sequence it has received.
 * The next sequence send is used for pruning and upgrading from unordered to ordered channels.
 */
export interface Upgrade {
    fields?: UpgradeFields | undefined;
    timeout?: Timeout | undefined;
    nextSequenceSend: bigint;
}
/**
 * UpgradeFields are the fields in a channel end which may be changed
 * during a channel upgrade.
 */
export interface UpgradeFields {
    ordering: Order;
    connectionHops: string[];
    version: string;
}
/**
 * ErrorReceipt defines a type which encapsulates the upgrade sequence and error associated with the
 * upgrade handshake failure. When a channel upgrade handshake is aborted both chains are expected to increment to the
 * next sequence.
 */
export interface ErrorReceipt {
    /** the channel upgrade sequence */
    sequence: bigint;
    /** the error message detailing the cause of failure */
    message: string;
}
export declare const Upgrade: MessageFns<Upgrade>;
export declare const UpgradeFields: MessageFns<UpgradeFields>;
export declare const ErrorReceipt: MessageFns<ErrorReceipt>;
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
