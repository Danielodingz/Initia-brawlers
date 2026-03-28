import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Params } from "./mint";
export declare const protobufPackage = "cosmos.mint.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params | undefined;
}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequest {
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponse {
    /** inflation is the current minting inflation value. */
    inflation: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequest {
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponse {
    /** annual_provisions is the current minting annual provisions value. */
    annualProvisions: Uint8Array;
}
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
export declare const QueryInflationRequest: MessageFns<QueryInflationRequest>;
export declare const QueryInflationResponse: MessageFns<QueryInflationResponse>;
export declare const QueryAnnualProvisionsRequest: MessageFns<QueryAnnualProvisionsRequest>;
export declare const QueryAnnualProvisionsResponse: MessageFns<QueryAnnualProvisionsResponse>;
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Params returns the total set of minting parameters. */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    /** Inflation returns the current minting inflation value. */
    Inflation(request: DeepPartial<QueryInflationRequest>, metadata?: grpc.Metadata): Promise<QueryInflationResponse>;
    /** AnnualProvisions current minting annual provisions value. */
    AnnualProvisions(request: DeepPartial<QueryAnnualProvisionsRequest>, metadata?: grpc.Metadata): Promise<QueryAnnualProvisionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    Inflation(request: DeepPartial<QueryInflationRequest>, metadata?: grpc.Metadata): Promise<QueryInflationResponse>;
    AnnualProvisions(request: DeepPartial<QueryAnnualProvisionsRequest>, metadata?: grpc.Metadata): Promise<QueryAnnualProvisionsResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QueryInflationDesc: UnaryMethodDefinitionish;
export declare const QueryAnnualProvisionsDesc: UnaryMethodDefinitionish;
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
