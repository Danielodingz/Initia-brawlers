import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ClassTrace, Params } from "./types";
export declare const protobufPackage = "ibc.applications.nft_transfer.v1";
/**
 * QueryClassTraceRequest is the request type for the Query/ClassTrace RPC
 * method
 */
export interface QueryClassTraceRequest {
    /** hash (in hex format) of the class id trace information. */
    hash: string;
}
/**
 * QueryClassTraceResponse is the response type for the Query/ClassTrace RPC
 * method.
 */
export interface QueryClassTraceResponse {
    /** class_trace returns the requested class id trace information. */
    classTrace?: ClassTrace | undefined;
}
/**
 * QueryClassTracesRequest is the request type for the Query/ClassTraces RPC
 * method
 */
export interface QueryClassTracesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryClassTracesResponse is the response type for the Query/ClassTraces RPC
 * method.
 */
export interface QueryClassTracesResponse {
    /** class_traces returns all class id traces information. */
    classTraces: ClassTrace[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/**
 * QueryClassHashRequest is the request type for the Query/ClassHash RPC
 * method
 */
export interface QueryClassHashRequest {
    /** The class id trace ([port_id]/[channel_id])+/[class_id] */
    trace: string;
}
/**
 * QueryClassHashResponse is the response type for the Query/ClassHash RPC
 * method.
 */
export interface QueryClassHashResponse {
    /** hash (in hex format) of the class id trace information. */
    hash: string;
}
/**
 * QueryClassDataRequest is the request type for the Query/ClassData RPC
 * method
 */
export interface QueryClassDataRequest {
    /** hash (in hex format) of the class id trace information. */
    hash: string;
}
/**
 * QueryClassDataResponse is the response type for the Query/ClassData RPC
 * method.
 */
export interface QueryClassDataResponse {
    /** data returns the requested class id data information. */
    data: string;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequest {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponse {
    /** the escrow account address */
    escrowAddress: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params | undefined;
}
export declare const QueryClassTraceRequest: MessageFns<QueryClassTraceRequest>;
export declare const QueryClassTraceResponse: MessageFns<QueryClassTraceResponse>;
export declare const QueryClassTracesRequest: MessageFns<QueryClassTracesRequest>;
export declare const QueryClassTracesResponse: MessageFns<QueryClassTracesResponse>;
export declare const QueryClassHashRequest: MessageFns<QueryClassHashRequest>;
export declare const QueryClassHashResponse: MessageFns<QueryClassHashResponse>;
export declare const QueryClassDataRequest: MessageFns<QueryClassDataRequest>;
export declare const QueryClassDataResponse: MessageFns<QueryClassDataResponse>;
export declare const QueryEscrowAddressRequest: MessageFns<QueryEscrowAddressRequest>;
export declare const QueryEscrowAddressResponse: MessageFns<QueryEscrowAddressResponse>;
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** ClassTrace queries a denomination trace information. */
    ClassTrace(request: DeepPartial<QueryClassTraceRequest>, metadata?: grpc.Metadata): Promise<QueryClassTraceResponse>;
    /** ClassTraces queries all denomination traces. */
    ClassTraces(request: DeepPartial<QueryClassTracesRequest>, metadata?: grpc.Metadata): Promise<QueryClassTracesResponse>;
    /** ClassHash queries a class id hash information. */
    ClassHash(request: DeepPartial<QueryClassHashRequest>, metadata?: grpc.Metadata): Promise<QueryClassHashResponse>;
    /** ClassData queries a class id data information. */
    ClassData(request: DeepPartial<QueryClassDataRequest>, metadata?: grpc.Metadata): Promise<QueryClassDataResponse>;
    /** EscrowAddress returns the escrow address for a particular port and channel id. */
    EscrowAddress(request: DeepPartial<QueryEscrowAddressRequest>, metadata?: grpc.Metadata): Promise<QueryEscrowAddressResponse>;
    /** Params queries all parameters of the ibc-transfer module. */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ClassTrace(request: DeepPartial<QueryClassTraceRequest>, metadata?: grpc.Metadata): Promise<QueryClassTraceResponse>;
    ClassTraces(request: DeepPartial<QueryClassTracesRequest>, metadata?: grpc.Metadata): Promise<QueryClassTracesResponse>;
    ClassHash(request: DeepPartial<QueryClassHashRequest>, metadata?: grpc.Metadata): Promise<QueryClassHashResponse>;
    ClassData(request: DeepPartial<QueryClassDataRequest>, metadata?: grpc.Metadata): Promise<QueryClassDataResponse>;
    EscrowAddress(request: DeepPartial<QueryEscrowAddressRequest>, metadata?: grpc.Metadata): Promise<QueryEscrowAddressResponse>;
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryClassTraceDesc: UnaryMethodDefinitionish;
export declare const QueryClassTracesDesc: UnaryMethodDefinitionish;
export declare const QueryClassHashDesc: UnaryMethodDefinitionish;
export declare const QueryClassDataDesc: UnaryMethodDefinitionish;
export declare const QueryEscrowAddressDesc: UnaryMethodDefinitionish;
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
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
