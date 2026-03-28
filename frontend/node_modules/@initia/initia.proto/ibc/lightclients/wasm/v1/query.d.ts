import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "ibc.lightclients.wasm.v1";
/** QueryChecksumsRequest is the request type for the Query/Checksums RPC method. */
export interface QueryChecksumsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** QueryChecksumsResponse is the response type for the Query/Checksums RPC method. */
export interface QueryChecksumsResponse {
    /** checksums is a list of the hex encoded checksums of all wasm codes stored. */
    checksums: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
    /** checksum is a hex encoded string of the code stored. */
    checksum: string;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method. */
export interface QueryCodeResponse {
    data: Uint8Array;
}
export declare const QueryChecksumsRequest: MessageFns<QueryChecksumsRequest>;
export declare const QueryChecksumsResponse: MessageFns<QueryChecksumsResponse>;
export declare const QueryCodeRequest: MessageFns<QueryCodeRequest>;
export declare const QueryCodeResponse: MessageFns<QueryCodeResponse>;
/** Query service for wasm module */
export interface Query {
    /** Get all Wasm checksums */
    Checksums(request: DeepPartial<QueryChecksumsRequest>, metadata?: grpc.Metadata): Promise<QueryChecksumsResponse>;
    /** Get Wasm code for given checksum */
    Code(request: DeepPartial<QueryCodeRequest>, metadata?: grpc.Metadata): Promise<QueryCodeResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Checksums(request: DeepPartial<QueryChecksumsRequest>, metadata?: grpc.Metadata): Promise<QueryChecksumsResponse>;
    Code(request: DeepPartial<QueryCodeRequest>, metadata?: grpc.Metadata): Promise<QueryCodeResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryChecksumsDesc: UnaryMethodDefinitionish;
export declare const QueryCodeDesc: UnaryMethodDefinitionish;
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
