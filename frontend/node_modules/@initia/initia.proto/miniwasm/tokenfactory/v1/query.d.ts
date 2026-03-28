import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { DenomAuthorityMetadata } from "./authority_metadata";
import { Params } from "./params";
export declare const protobufPackage = "miniwasm.tokenfactory.v1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params | undefined;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequest {
    denom: string;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponse {
    authorityMetadata?: DenomAuthorityMetadata | undefined;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequest {
    creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponse {
    denoms: string[];
}
/**
 * QueryBeforeSendHookAddressRequest defines the request structure for the
 * BeforeSendHookAddress gRPC query.
 */
export interface QueryBeforeSendHookAddressRequest {
    denom: string;
}
/**
 * QueryBeforeSendHookAddressResponse defines the response structure for the
 * DenomBeforeSendHook gRPC query.
 */
export interface QueryBeforeSendHookAddressResponse {
    cosmwasmAddress: string;
}
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
export declare const QueryDenomAuthorityMetadataRequest: MessageFns<QueryDenomAuthorityMetadataRequest>;
export declare const QueryDenomAuthorityMetadataResponse: MessageFns<QueryDenomAuthorityMetadataResponse>;
export declare const QueryDenomsFromCreatorRequest: MessageFns<QueryDenomsFromCreatorRequest>;
export declare const QueryDenomsFromCreatorResponse: MessageFns<QueryDenomsFromCreatorResponse>;
export declare const QueryBeforeSendHookAddressRequest: MessageFns<QueryBeforeSendHookAddressRequest>;
export declare const QueryBeforeSendHookAddressResponse: MessageFns<QueryBeforeSendHookAddressResponse>;
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    /**
     * DenomAuthorityMetadata defines a gRPC query method for fetching
     * DenomAuthorityMetadata for a particular denom.
     */
    DenomAuthorityMetadata(request: DeepPartial<QueryDenomAuthorityMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomAuthorityMetadataResponse>;
    /**
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    DenomsFromCreator(request: DeepPartial<QueryDenomsFromCreatorRequest>, metadata?: grpc.Metadata): Promise<QueryDenomsFromCreatorResponse>;
    /**
     * BeforeSendHookAddress defines a gRPC query method for
     * getting the address registered for the before send hook.
     */
    BeforeSendHookAddress(request: DeepPartial<QueryBeforeSendHookAddressRequest>, metadata?: grpc.Metadata): Promise<QueryBeforeSendHookAddressResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    DenomAuthorityMetadata(request: DeepPartial<QueryDenomAuthorityMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomAuthorityMetadataResponse>;
    DenomsFromCreator(request: DeepPartial<QueryDenomsFromCreatorRequest>, metadata?: grpc.Metadata): Promise<QueryDenomsFromCreatorResponse>;
    BeforeSendHookAddress(request: DeepPartial<QueryBeforeSendHookAddressRequest>, metadata?: grpc.Metadata): Promise<QueryBeforeSendHookAddressResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QueryDenomAuthorityMetadataDesc: UnaryMethodDefinitionish;
export declare const QueryDenomsFromCreatorDesc: UnaryMethodDefinitionish;
export declare const QueryBeforeSendHookAddressDesc: UnaryMethodDefinitionish;
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
