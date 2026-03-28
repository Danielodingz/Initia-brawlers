import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { ParamChange } from "./params";
export declare const protobufPackage = "cosmos.params.v1beta1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
    /** subspace defines the module to query the parameter for. */
    subspace: string;
    /** key defines the key of the parameter in the subspace. */
    key: string;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** param defines the queried parameter. */
    param?: ParamChange | undefined;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesRequest {
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySubspacesResponse {
    subspaces: Subspace[];
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Subspace {
    subspace: string;
    keys: string[];
}
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
export declare const QuerySubspacesRequest: MessageFns<QuerySubspacesRequest>;
export declare const QuerySubspacesResponse: MessageFns<QuerySubspacesResponse>;
export declare const Subspace: MessageFns<Subspace>;
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    /**
     * Subspaces queries for all registered subspaces and all keys for a subspace.
     *
     * Since: cosmos-sdk 0.46
     */
    Subspaces(request: DeepPartial<QuerySubspacesRequest>, metadata?: grpc.Metadata): Promise<QuerySubspacesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    Subspaces(request: DeepPartial<QuerySubspacesRequest>, metadata?: grpc.Metadata): Promise<QuerySubspacesResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QuerySubspacesDesc: UnaryMethodDefinitionish;
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
