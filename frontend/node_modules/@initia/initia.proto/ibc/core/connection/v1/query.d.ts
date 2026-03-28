import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { ConnectionEnd, IdentifiedConnection, Params } from "./connection";
export declare const protobufPackage = "ibc.core.connection.v1";
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequest {
    /** connection unique identifier */
    connectionId: string;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponse {
    /** connection associated with the request identifier */
    connection?: ConnectionEnd | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height | undefined;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequest {
    pagination?: PageRequest | undefined;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponse {
    /** list of stored connections of the chain. */
    connections: IdentifiedConnection[];
    /** pagination response */
    pagination?: PageResponse | undefined;
    /** query block height */
    height?: Height | undefined;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequest {
    /** client identifier associated with a connection */
    clientId: string;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponse {
    /** slice of all the connection paths associated with a client. */
    connectionPaths: string[];
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was generated */
    proofHeight?: Height | undefined;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequest {
    /** connection identifier */
    connectionId: string;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponse {
    /** client state associated with the channel */
    identifiedClientState?: IdentifiedClientState | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height | undefined;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequest {
    /** connection identifier */
    connectionId: string;
    revisionNumber: bigint;
    revisionHeight: bigint;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponse {
    /** consensus state associated with the channel */
    consensusState?: Any | undefined;
    /** client ID associated with the consensus state */
    clientId: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height | undefined;
}
/** QueryConnectionParamsRequest is the request type for the Query/ConnectionParams RPC method. */
export interface QueryConnectionParamsRequest {
}
/** QueryConnectionParamsResponse is the response type for the Query/ConnectionParams RPC method. */
export interface QueryConnectionParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params | undefined;
}
export declare const QueryConnectionRequest: MessageFns<QueryConnectionRequest>;
export declare const QueryConnectionResponse: MessageFns<QueryConnectionResponse>;
export declare const QueryConnectionsRequest: MessageFns<QueryConnectionsRequest>;
export declare const QueryConnectionsResponse: MessageFns<QueryConnectionsResponse>;
export declare const QueryClientConnectionsRequest: MessageFns<QueryClientConnectionsRequest>;
export declare const QueryClientConnectionsResponse: MessageFns<QueryClientConnectionsResponse>;
export declare const QueryConnectionClientStateRequest: MessageFns<QueryConnectionClientStateRequest>;
export declare const QueryConnectionClientStateResponse: MessageFns<QueryConnectionClientStateResponse>;
export declare const QueryConnectionConsensusStateRequest: MessageFns<QueryConnectionConsensusStateRequest>;
export declare const QueryConnectionConsensusStateResponse: MessageFns<QueryConnectionConsensusStateResponse>;
export declare const QueryConnectionParamsRequest: MessageFns<QueryConnectionParamsRequest>;
export declare const QueryConnectionParamsResponse: MessageFns<QueryConnectionParamsResponse>;
/** Query provides defines the gRPC querier service */
export interface Query {
    /** Connection queries an IBC connection end. */
    Connection(request: DeepPartial<QueryConnectionRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionResponse>;
    /** Connections queries all the IBC connections of a chain. */
    Connections(request: DeepPartial<QueryConnectionsRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionsResponse>;
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    ClientConnections(request: DeepPartial<QueryClientConnectionsRequest>, metadata?: grpc.Metadata): Promise<QueryClientConnectionsResponse>;
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    ConnectionClientState(request: DeepPartial<QueryConnectionClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionClientStateResponse>;
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    ConnectionConsensusState(request: DeepPartial<QueryConnectionConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionConsensusStateResponse>;
    /** ConnectionParams queries all parameters of the ibc connection submodule. */
    ConnectionParams(request: DeepPartial<QueryConnectionParamsRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Connection(request: DeepPartial<QueryConnectionRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionResponse>;
    Connections(request: DeepPartial<QueryConnectionsRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionsResponse>;
    ClientConnections(request: DeepPartial<QueryClientConnectionsRequest>, metadata?: grpc.Metadata): Promise<QueryClientConnectionsResponse>;
    ConnectionClientState(request: DeepPartial<QueryConnectionClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionClientStateResponse>;
    ConnectionConsensusState(request: DeepPartial<QueryConnectionConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionConsensusStateResponse>;
    ConnectionParams(request: DeepPartial<QueryConnectionParamsRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionParamsResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryConnectionDesc: UnaryMethodDefinitionish;
export declare const QueryConnectionsDesc: UnaryMethodDefinitionish;
export declare const QueryClientConnectionsDesc: UnaryMethodDefinitionish;
export declare const QueryConnectionClientStateDesc: UnaryMethodDefinitionish;
export declare const QueryConnectionConsensusStateDesc: UnaryMethodDefinitionish;
export declare const QueryConnectionParamsDesc: UnaryMethodDefinitionish;
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
