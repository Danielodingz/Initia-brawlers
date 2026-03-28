import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "celestia.blob.v1";
/**
 * EventPayForBlobs defines an event that is emitted after a pay for blob has
 * been processed.
 */
export interface EventPayForBlobs {
    signer: string;
    blobSizes: number[];
    /**
     * namespaces is a list of namespaces that the blobs in blob_sizes belong to.
     * A namespace has length of 29 bytes where the first byte is the
     * namespaceVersion and the subsequent 28 bytes are the namespaceID.
     */
    namespaces: Uint8Array[];
}
export declare const EventPayForBlobs: MessageFns<EventPayForBlobs>;
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
