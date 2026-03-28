import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { ACL, Params } from "./types";
export declare const protobufPackage = "initia.ibchooks.v1";
/**
 * QueryACLRequest is the request type for the Query/ACL RPC
 * method
 */
export interface QueryACLRequest {
    /** Address is a contract address (wasm, evm) or a contract deployer address (move). */
    address: string;
}
/**
 * QueryACLResponse is the response type for the Query/ACL RPC
 * method
 */
export interface QueryACLResponse {
    acl?: ACL | undefined;
}
/**
 * QueryACLsRequest is the request type for the Query/ACLAddrs
 * RPC method
 */
export interface QueryACLsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryACLsResponse is the response type for the
 * Query/ACLAddrs RPC method
 */
export interface QueryACLsResponse {
    acls: ACL[];
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
export declare const QueryACLRequest: MessageFns<QueryACLRequest>;
export declare const QueryACLResponse: MessageFns<QueryACLResponse>;
export declare const QueryACLsRequest: MessageFns<QueryACLsRequest>;
export declare const QueryACLsResponse: MessageFns<QueryACLsResponse>;
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
/** Query provides defines the gRPC querier service */
export interface Query {
    /** ACL gets ACL entry of an address. */
    ACL(request: DeepPartial<QueryACLRequest>, metadata?: grpc.Metadata): Promise<QueryACLResponse>;
    /** ACLs gets ACL entries. */
    ACLs(request: DeepPartial<QueryACLsRequest>, metadata?: grpc.Metadata): Promise<QueryACLsResponse>;
    /** Params queries all parameters. */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ACL(request: DeepPartial<QueryACLRequest>, metadata?: grpc.Metadata): Promise<QueryACLResponse>;
    ACLs(request: DeepPartial<QueryACLsRequest>, metadata?: grpc.Metadata): Promise<QueryACLsResponse>;
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryACLDesc: UnaryMethodDefinitionish;
export declare const QueryACLsDesc: UnaryMethodDefinitionish;
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
