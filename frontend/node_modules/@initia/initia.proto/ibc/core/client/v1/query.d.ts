import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { MerklePath } from "../../commitment/v1/commitment";
import { ConsensusStateWithHeight, Height, IdentifiedClientState, Params } from "./client";
export declare const protobufPackage = "ibc.core.client.v1";
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequest {
    /** client state unique identifier */
    clientId: string;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponse {
    /** client state associated with the request identifier */
    clientState?: Any | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height | undefined;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequest {
    /** pagination request */
    pagination?: PageRequest | undefined;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponse {
    /** list of stored ClientStates of the chain. */
    clientStates: IdentifiedClientState[];
    /** pagination response */
    pagination?: PageResponse | undefined;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequest {
    /** client identifier */
    clientId: string;
    /** consensus state revision number */
    revisionNumber: bigint;
    /** consensus state revision height */
    revisionHeight: bigint;
    /**
     * latest_height overrrides the height field and queries the latest stored
     * ConsensusState
     */
    latestHeight: boolean;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponse {
    /** consensus state associated with the client identifier at the given height */
    consensusState?: Any | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height | undefined;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequest {
    /** client identifier */
    clientId: string;
    /** pagination request */
    pagination?: PageRequest | undefined;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponse {
    /** consensus states associated with the identifier */
    consensusStates: ConsensusStateWithHeight[];
    /** pagination response */
    pagination?: PageResponse | undefined;
}
/**
 * QueryConsensusStateHeightsRequest is the request type for Query/ConsensusStateHeights
 * RPC method.
 */
export interface QueryConsensusStateHeightsRequest {
    /** client identifier */
    clientId: string;
    /** pagination request */
    pagination?: PageRequest | undefined;
}
/**
 * QueryConsensusStateHeightsResponse is the response type for the
 * Query/ConsensusStateHeights RPC method
 */
export interface QueryConsensusStateHeightsResponse {
    /** consensus state heights */
    consensusStateHeights: Height[];
    /** pagination response */
    pagination?: PageResponse | undefined;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */
export interface QueryClientStatusRequest {
    /** client unique identifier */
    clientId: string;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */
export interface QueryClientStatusResponse {
    status: string;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsRequest {
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params | undefined;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */
export interface QueryUpgradedClientStateRequest {
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */
export interface QueryUpgradedClientStateResponse {
    /** client state associated with the request identifier */
    upgradedClientState?: Any | undefined;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */
export interface QueryUpgradedConsensusStateRequest {
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */
export interface QueryUpgradedConsensusStateResponse {
    /** Consensus state associated with the request identifier */
    upgradedConsensusState?: Any | undefined;
}
/** QueryVerifyMembershipRequest is the request type for the Query/VerifyMembership RPC method */
export interface QueryVerifyMembershipRequest {
    /** client unique identifier. */
    clientId: string;
    /** the proof to be verified by the client. */
    proof: Uint8Array;
    /** the height of the commitment root at which the proof is verified. */
    proofHeight?: Height | undefined;
    /** the commitment key path. */
    merklePath?: MerklePath | undefined;
    /** the value which is proven. */
    value: Uint8Array;
    /** optional time delay */
    timeDelay: bigint;
    /** optional block delay */
    blockDelay: bigint;
}
/** QueryVerifyMembershipResponse is the response type for the Query/VerifyMembership RPC method */
export interface QueryVerifyMembershipResponse {
    /** boolean indicating success or failure of proof verification. */
    success: boolean;
}
export declare const QueryClientStateRequest: MessageFns<QueryClientStateRequest>;
export declare const QueryClientStateResponse: MessageFns<QueryClientStateResponse>;
export declare const QueryClientStatesRequest: MessageFns<QueryClientStatesRequest>;
export declare const QueryClientStatesResponse: MessageFns<QueryClientStatesResponse>;
export declare const QueryConsensusStateRequest: MessageFns<QueryConsensusStateRequest>;
export declare const QueryConsensusStateResponse: MessageFns<QueryConsensusStateResponse>;
export declare const QueryConsensusStatesRequest: MessageFns<QueryConsensusStatesRequest>;
export declare const QueryConsensusStatesResponse: MessageFns<QueryConsensusStatesResponse>;
export declare const QueryConsensusStateHeightsRequest: MessageFns<QueryConsensusStateHeightsRequest>;
export declare const QueryConsensusStateHeightsResponse: MessageFns<QueryConsensusStateHeightsResponse>;
export declare const QueryClientStatusRequest: MessageFns<QueryClientStatusRequest>;
export declare const QueryClientStatusResponse: MessageFns<QueryClientStatusResponse>;
export declare const QueryClientParamsRequest: MessageFns<QueryClientParamsRequest>;
export declare const QueryClientParamsResponse: MessageFns<QueryClientParamsResponse>;
export declare const QueryUpgradedClientStateRequest: MessageFns<QueryUpgradedClientStateRequest>;
export declare const QueryUpgradedClientStateResponse: MessageFns<QueryUpgradedClientStateResponse>;
export declare const QueryUpgradedConsensusStateRequest: MessageFns<QueryUpgradedConsensusStateRequest>;
export declare const QueryUpgradedConsensusStateResponse: MessageFns<QueryUpgradedConsensusStateResponse>;
export declare const QueryVerifyMembershipRequest: MessageFns<QueryVerifyMembershipRequest>;
export declare const QueryVerifyMembershipResponse: MessageFns<QueryVerifyMembershipResponse>;
/** Query provides defines the gRPC querier service */
export interface Query {
    /** ClientState queries an IBC light client. */
    ClientState(request: DeepPartial<QueryClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryClientStateResponse>;
    /** ClientStates queries all the IBC light clients of a chain. */
    ClientStates(request: DeepPartial<QueryClientStatesRequest>, metadata?: grpc.Metadata): Promise<QueryClientStatesResponse>;
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    ConsensusState(request: DeepPartial<QueryConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStateResponse>;
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    ConsensusStates(request: DeepPartial<QueryConsensusStatesRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStatesResponse>;
    /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */
    ConsensusStateHeights(request: DeepPartial<QueryConsensusStateHeightsRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStateHeightsResponse>;
    /** Status queries the status of an IBC client. */
    ClientStatus(request: DeepPartial<QueryClientStatusRequest>, metadata?: grpc.Metadata): Promise<QueryClientStatusResponse>;
    /** ClientParams queries all parameters of the ibc client submodule. */
    ClientParams(request: DeepPartial<QueryClientParamsRequest>, metadata?: grpc.Metadata): Promise<QueryClientParamsResponse>;
    /** UpgradedClientState queries an Upgraded IBC light client. */
    UpgradedClientState(request: DeepPartial<QueryUpgradedClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedClientStateResponse>;
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
    UpgradedConsensusState(request: DeepPartial<QueryUpgradedConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedConsensusStateResponse>;
    /** VerifyMembership queries an IBC light client for proof verification of a value at a given key path. */
    VerifyMembership(request: DeepPartial<QueryVerifyMembershipRequest>, metadata?: grpc.Metadata): Promise<QueryVerifyMembershipResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ClientState(request: DeepPartial<QueryClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryClientStateResponse>;
    ClientStates(request: DeepPartial<QueryClientStatesRequest>, metadata?: grpc.Metadata): Promise<QueryClientStatesResponse>;
    ConsensusState(request: DeepPartial<QueryConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStateResponse>;
    ConsensusStates(request: DeepPartial<QueryConsensusStatesRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStatesResponse>;
    ConsensusStateHeights(request: DeepPartial<QueryConsensusStateHeightsRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStateHeightsResponse>;
    ClientStatus(request: DeepPartial<QueryClientStatusRequest>, metadata?: grpc.Metadata): Promise<QueryClientStatusResponse>;
    ClientParams(request: DeepPartial<QueryClientParamsRequest>, metadata?: grpc.Metadata): Promise<QueryClientParamsResponse>;
    UpgradedClientState(request: DeepPartial<QueryUpgradedClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedClientStateResponse>;
    UpgradedConsensusState(request: DeepPartial<QueryUpgradedConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedConsensusStateResponse>;
    VerifyMembership(request: DeepPartial<QueryVerifyMembershipRequest>, metadata?: grpc.Metadata): Promise<QueryVerifyMembershipResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryClientStateDesc: UnaryMethodDefinitionish;
export declare const QueryClientStatesDesc: UnaryMethodDefinitionish;
export declare const QueryConsensusStateDesc: UnaryMethodDefinitionish;
export declare const QueryConsensusStatesDesc: UnaryMethodDefinitionish;
export declare const QueryConsensusStateHeightsDesc: UnaryMethodDefinitionish;
export declare const QueryClientStatusDesc: UnaryMethodDefinitionish;
export declare const QueryClientParamsDesc: UnaryMethodDefinitionish;
export declare const QueryUpgradedClientStateDesc: UnaryMethodDefinitionish;
export declare const QueryUpgradedConsensusStateDesc: UnaryMethodDefinitionish;
export declare const QueryVerifyMembershipDesc: UnaryMethodDefinitionish;
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
