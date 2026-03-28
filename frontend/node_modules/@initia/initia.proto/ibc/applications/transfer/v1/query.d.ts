import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { DenomTrace, Params } from "./transfer";
export declare const protobufPackage = "ibc.applications.transfer.v1";
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequest {
    /** hash (in hex format) or denom (full denom with ibc prefix) of the denomination trace information. */
    hash: string;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponse {
    /** denom_trace returns the requested denomination trace information. */
    denomTrace?: DenomTrace | undefined;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponse {
    /** denom_traces returns all denominations trace information. */
    denomTraces: DenomTrace[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params | undefined;
}
/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */
export interface QueryDenomHashRequest {
    /** The denomination trace ([port_id]/[channel_id])+/[denom] */
    trace: string;
}
/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */
export interface QueryDenomHashResponse {
    /** hash (in hex format) of the denomination trace information. */
    hash: string;
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
/** QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomRequest {
    denom: string;
}
/** QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomResponse {
    amount?: Coin | undefined;
}
export declare const QueryDenomTraceRequest: MessageFns<QueryDenomTraceRequest>;
export declare const QueryDenomTraceResponse: MessageFns<QueryDenomTraceResponse>;
export declare const QueryDenomTracesRequest: MessageFns<QueryDenomTracesRequest>;
export declare const QueryDenomTracesResponse: MessageFns<QueryDenomTracesResponse>;
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
export declare const QueryDenomHashRequest: MessageFns<QueryDenomHashRequest>;
export declare const QueryDenomHashResponse: MessageFns<QueryDenomHashResponse>;
export declare const QueryEscrowAddressRequest: MessageFns<QueryEscrowAddressRequest>;
export declare const QueryEscrowAddressResponse: MessageFns<QueryEscrowAddressResponse>;
export declare const QueryTotalEscrowForDenomRequest: MessageFns<QueryTotalEscrowForDenomRequest>;
export declare const QueryTotalEscrowForDenomResponse: MessageFns<QueryTotalEscrowForDenomResponse>;
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** DenomTraces queries all denomination traces. */
    DenomTraces(request: DeepPartial<QueryDenomTracesRequest>, metadata?: grpc.Metadata): Promise<QueryDenomTracesResponse>;
    /** DenomTrace queries a denomination trace information. */
    DenomTrace(request: DeepPartial<QueryDenomTraceRequest>, metadata?: grpc.Metadata): Promise<QueryDenomTraceResponse>;
    /** Params queries all parameters of the ibc-transfer module. */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    /** DenomHash queries a denomination hash information. */
    DenomHash(request: DeepPartial<QueryDenomHashRequest>, metadata?: grpc.Metadata): Promise<QueryDenomHashResponse>;
    /** EscrowAddress returns the escrow address for a particular port and channel id. */
    EscrowAddress(request: DeepPartial<QueryEscrowAddressRequest>, metadata?: grpc.Metadata): Promise<QueryEscrowAddressResponse>;
    /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
    TotalEscrowForDenom(request: DeepPartial<QueryTotalEscrowForDenomRequest>, metadata?: grpc.Metadata): Promise<QueryTotalEscrowForDenomResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    DenomTraces(request: DeepPartial<QueryDenomTracesRequest>, metadata?: grpc.Metadata): Promise<QueryDenomTracesResponse>;
    DenomTrace(request: DeepPartial<QueryDenomTraceRequest>, metadata?: grpc.Metadata): Promise<QueryDenomTraceResponse>;
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    DenomHash(request: DeepPartial<QueryDenomHashRequest>, metadata?: grpc.Metadata): Promise<QueryDenomHashResponse>;
    EscrowAddress(request: DeepPartial<QueryEscrowAddressRequest>, metadata?: grpc.Metadata): Promise<QueryEscrowAddressResponse>;
    TotalEscrowForDenom(request: DeepPartial<QueryTotalEscrowForDenomRequest>, metadata?: grpc.Metadata): Promise<QueryTotalEscrowForDenomResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryDenomTracesDesc: UnaryMethodDefinitionish;
export declare const QueryDenomTraceDesc: UnaryMethodDefinitionish;
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QueryDenomHashDesc: UnaryMethodDefinitionish;
export declare const QueryEscrowAddressDesc: UnaryMethodDefinitionish;
export declare const QueryTotalEscrowForDenomDesc: UnaryMethodDefinitionish;
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
