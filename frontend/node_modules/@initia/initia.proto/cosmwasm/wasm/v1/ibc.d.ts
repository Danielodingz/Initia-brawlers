import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "cosmwasm.wasm.v1";
/** MsgIBCSend */
export interface MsgIBCSend {
    /** the channel by which the packet will be sent */
    channel: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeoutHeight: bigint;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeoutTimestamp: bigint;
    /**
     * Data is the payload to transfer. We must not make assumption what format or
     * content is in here.
     */
    data: Uint8Array;
}
/** MsgIBCSendResponse */
export interface MsgIBCSendResponse {
    /** Sequence number of the IBC packet sent */
    sequence: bigint;
}
/** MsgIBCWriteAcknowledgementResponse */
export interface MsgIBCWriteAcknowledgementResponse {
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
    channel: string;
}
export declare const MsgIBCSend: MessageFns<MsgIBCSend>;
export declare const MsgIBCSendResponse: MessageFns<MsgIBCSendResponse>;
export declare const MsgIBCWriteAcknowledgementResponse: MessageFns<MsgIBCWriteAcknowledgementResponse>;
export declare const MsgIBCCloseChannel: MessageFns<MsgIBCCloseChannel>;
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
