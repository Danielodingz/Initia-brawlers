import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "celestia.core.v1.blob";
/**
 * Blob (named after binary large object) is a chunk of data submitted by a user
 * to be published to the Celestia blockchain. The data of a Blob is published
 * to a namespace and is encoded into shares based on the format specified by
 * share_version.
 */
export interface Blob {
    namespaceId: Uint8Array;
    data: Uint8Array;
    shareVersion: number;
    namespaceVersion: number;
}
/**
 * BlobTx wraps an encoded sdk.Tx with a second field to contain blobs of data.
 * The raw bytes of the blobs are not signed over, instead we verify each blob
 * using the relevant MsgPayForBlobs that is signed over in the encoded sdk.Tx.
 */
export interface BlobTx {
    tx: Uint8Array;
    blobs: Blob[];
    typeId: string;
}
export declare const Blob: MessageFns<Blob>;
export declare const BlobTx: MessageFns<BlobTx>;
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
