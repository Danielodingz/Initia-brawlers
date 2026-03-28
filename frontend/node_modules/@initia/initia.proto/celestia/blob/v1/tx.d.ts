import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
export declare const protobufPackage = "celestia.blob.v1";
/** MsgPayForBlobs pays for the inclusion of a blob in the block. */
export interface MsgPayForBlobs {
    /**
     * signer is the bech32 encoded signer address. See
     * https://en.bitcoin.it/wiki/Bech32.
     */
    signer: string;
    /**
     * namespaces is a list of namespaces that the blobs are associated with. A
     * namespace is a byte slice of length 29 where the first byte is the
     * namespaceVersion and the subsequent 28 bytes are the namespaceId.
     */
    namespaces: Uint8Array[];
    /** blob_sizes is a list of blob sizes (one per blob). Each size is in bytes. */
    blobSizes: number[];
    /** share_commitments is a list of share commitments (one per blob). */
    shareCommitments: Uint8Array[];
    /**
     * share_versions are the versions of the share format that the blobs
     * associated with this message should use when included in a block. The
     * share_versions specified must match the share_versions used to generate the
     * share_commitment in this message.
     */
    shareVersions: number[];
}
/**
 * MsgPayForBlobsResponse describes the response returned after the submission
 * of a PayForBlobs
 */
export interface MsgPayForBlobsResponse {
}
export declare const MsgPayForBlobs: MessageFns<MsgPayForBlobs>;
export declare const MsgPayForBlobsResponse: MessageFns<MsgPayForBlobsResponse>;
/** Msg defines the blob Msg service. */
export interface Msg {
    /** PayForBlobs allows the user to pay for the inclusion of one or more blobs */
    PayForBlobs(request: DeepPartial<MsgPayForBlobs>, metadata?: grpc.Metadata): Promise<MsgPayForBlobsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    PayForBlobs(request: DeepPartial<MsgPayForBlobs>, metadata?: grpc.Metadata): Promise<MsgPayForBlobsResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgPayForBlobsDesc: UnaryMethodDefinitionish;
interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
    requestStream: any;
    responseStream: any;
}
type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;
interface Rpc {
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export declare class GrpcWebImpl {
    private host;
    private options;
    constructor(host: string, options: {
        transport?: grpc.TransportFactory;
        debug?: boolean;
        metadata?: grpc.Metadata;
        upStreamRetryCodes?: number[];
    });
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
declare const gt: any;
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export declare class GrpcWebError extends gt.Error {
    code: grpc.Code;
    metadata: grpc.Metadata;
    constructor(message: string, code: grpc.Code, metadata: grpc.Metadata);
}
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
