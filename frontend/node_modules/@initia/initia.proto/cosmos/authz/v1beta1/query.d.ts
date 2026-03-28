import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAuthorization } from "./authz";
export declare const protobufPackage = "cosmos.authz.v1beta1";
/** Since: cosmos-sdk 0.43 */
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequest {
    granter: string;
    grantee: string;
    /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
    msgTypeUrl: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponse {
    /** authorizations is a list of grants granted for grantee by granter. */
    grants: Grant[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse | undefined;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequest {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponse {
    /** grants is a list of grants granted by the granter. */
    grants: GrantAuthorization[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse | undefined;
}
/** QueryGranteeGrantsRequest is the request type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsRequest {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponse {
    /** grants is a list of grants granted to the grantee. */
    grants: GrantAuthorization[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse | undefined;
}
export declare const QueryGrantsRequest: MessageFns<QueryGrantsRequest>;
export declare const QueryGrantsResponse: MessageFns<QueryGrantsResponse>;
export declare const QueryGranterGrantsRequest: MessageFns<QueryGranterGrantsRequest>;
export declare const QueryGranterGrantsResponse: MessageFns<QueryGranterGrantsResponse>;
export declare const QueryGranteeGrantsRequest: MessageFns<QueryGranteeGrantsRequest>;
export declare const QueryGranteeGrantsResponse: MessageFns<QueryGranteeGrantsResponse>;
/** Query defines the gRPC querier service. */
export interface Query {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */
    Grants(request: DeepPartial<QueryGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGrantsResponse>;
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     *
     * Since: cosmos-sdk 0.46
     */
    GranterGrants(request: DeepPartial<QueryGranterGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGranterGrantsResponse>;
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     *
     * Since: cosmos-sdk 0.46
     */
    GranteeGrants(request: DeepPartial<QueryGranteeGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGranteeGrantsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Grants(request: DeepPartial<QueryGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGrantsResponse>;
    GranterGrants(request: DeepPartial<QueryGranterGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGranterGrantsResponse>;
    GranteeGrants(request: DeepPartial<QueryGranteeGrantsRequest>, metadata?: grpc.Metadata): Promise<QueryGranteeGrantsResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryGrantsDesc: UnaryMethodDefinitionish;
export declare const QueryGranterGrantsDesc: UnaryMethodDefinitionish;
export declare const QueryGranteeGrantsDesc: UnaryMethodDefinitionish;
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
