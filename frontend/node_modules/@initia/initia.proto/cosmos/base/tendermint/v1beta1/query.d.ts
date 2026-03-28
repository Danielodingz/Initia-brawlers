import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Any } from "../../../../google/protobuf/any";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types";
import { Block } from "../../../../tendermint/types/block";
import { BlockID } from "../../../../tendermint/types/types";
import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Block as Block1 } from "./types";
export declare const protobufPackage = "cosmos.base.tendermint.v1beta1";
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequest {
    height: bigint;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponse {
    blockHeight: bigint;
    validators: Validator[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse | undefined;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequest {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponse {
    blockHeight: bigint;
    validators: Validator[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse | undefined;
}
/** Validator is the type for the validator-set. */
export interface Validator {
    address: string;
    pubKey?: Any | undefined;
    votingPower: bigint;
    proposerPriority: bigint;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequest {
    height: bigint;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponse {
    blockId?: BlockID | undefined;
    /** Deprecated: please use `sdk_block` instead */
    block?: Block | undefined;
    /** Since: cosmos-sdk 0.47 */
    sdkBlock?: Block1 | undefined;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequest {
}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponse {
    blockId?: BlockID | undefined;
    /** Deprecated: please use `sdk_block` instead */
    block?: Block | undefined;
    /** Since: cosmos-sdk 0.47 */
    sdkBlock?: Block1 | undefined;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponse {
    syncing: boolean;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {
}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponse {
    defaultNodeInfo?: DefaultNodeInfo | undefined;
    applicationVersion?: VersionInfo | undefined;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfo {
    name: string;
    appName: string;
    version: string;
    gitCommit: string;
    buildTags: string;
    goVersion: string;
    buildDeps: Module[];
    /** Since: cosmos-sdk 0.43 */
    cosmosSdkVersion: string;
}
/** Module is the type for VersionInfo */
export interface Module {
    /** module path */
    path: string;
    /** module version */
    version: string;
    /** checksum */
    sum: string;
}
/** ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query. */
export interface ABCIQueryRequest {
    data: Uint8Array;
    path: string;
    height: bigint;
    prove: boolean;
}
/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.
 *
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 */
export interface ABCIQueryResponse {
    code: number;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    index: bigint;
    key: Uint8Array;
    value: Uint8Array;
    proofOps?: ProofOps | undefined;
    height: bigint;
    codespace: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing necessary data for example neighbouring node
 * hash.
 *
 * Note: This type is a duplicate of the ProofOp proto type defined in Tendermint.
 */
export interface ProofOp {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
}
/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 *
 * Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.
 */
export interface ProofOps {
    ops: ProofOp[];
}
export declare const GetValidatorSetByHeightRequest: MessageFns<GetValidatorSetByHeightRequest>;
export declare const GetValidatorSetByHeightResponse: MessageFns<GetValidatorSetByHeightResponse>;
export declare const GetLatestValidatorSetRequest: MessageFns<GetLatestValidatorSetRequest>;
export declare const GetLatestValidatorSetResponse: MessageFns<GetLatestValidatorSetResponse>;
export declare const Validator: MessageFns<Validator>;
export declare const GetBlockByHeightRequest: MessageFns<GetBlockByHeightRequest>;
export declare const GetBlockByHeightResponse: MessageFns<GetBlockByHeightResponse>;
export declare const GetLatestBlockRequest: MessageFns<GetLatestBlockRequest>;
export declare const GetLatestBlockResponse: MessageFns<GetLatestBlockResponse>;
export declare const GetSyncingRequest: MessageFns<GetSyncingRequest>;
export declare const GetSyncingResponse: MessageFns<GetSyncingResponse>;
export declare const GetNodeInfoRequest: MessageFns<GetNodeInfoRequest>;
export declare const GetNodeInfoResponse: MessageFns<GetNodeInfoResponse>;
export declare const VersionInfo: MessageFns<VersionInfo>;
export declare const Module: MessageFns<Module>;
export declare const ABCIQueryRequest: MessageFns<ABCIQueryRequest>;
export declare const ABCIQueryResponse: MessageFns<ABCIQueryResponse>;
export declare const ProofOp: MessageFns<ProofOp>;
export declare const ProofOps: MessageFns<ProofOps>;
/** Service defines the gRPC querier service for tendermint queries. */
export interface Service {
    /** GetNodeInfo queries the current node info. */
    GetNodeInfo(request: DeepPartial<GetNodeInfoRequest>, metadata?: grpc.Metadata): Promise<GetNodeInfoResponse>;
    /** GetSyncing queries node syncing. */
    GetSyncing(request: DeepPartial<GetSyncingRequest>, metadata?: grpc.Metadata): Promise<GetSyncingResponse>;
    /** GetLatestBlock returns the latest block. */
    GetLatestBlock(request: DeepPartial<GetLatestBlockRequest>, metadata?: grpc.Metadata): Promise<GetLatestBlockResponse>;
    /** GetBlockByHeight queries block for given height. */
    GetBlockByHeight(request: DeepPartial<GetBlockByHeightRequest>, metadata?: grpc.Metadata): Promise<GetBlockByHeightResponse>;
    /** GetLatestValidatorSet queries latest validator-set. */
    GetLatestValidatorSet(request: DeepPartial<GetLatestValidatorSetRequest>, metadata?: grpc.Metadata): Promise<GetLatestValidatorSetResponse>;
    /** GetValidatorSetByHeight queries validator-set at a given height. */
    GetValidatorSetByHeight(request: DeepPartial<GetValidatorSetByHeightRequest>, metadata?: grpc.Metadata): Promise<GetValidatorSetByHeightResponse>;
    /**
     * ABCIQuery defines a query handler that supports ABCI queries directly to the
     * application, bypassing Tendermint completely. The ABCI query must contain
     * a valid and supported path, including app, custom, p2p, and store.
     *
     * Since: cosmos-sdk 0.46
     */
    ABCIQuery(request: DeepPartial<ABCIQueryRequest>, metadata?: grpc.Metadata): Promise<ABCIQueryResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetNodeInfo(request: DeepPartial<GetNodeInfoRequest>, metadata?: grpc.Metadata): Promise<GetNodeInfoResponse>;
    GetSyncing(request: DeepPartial<GetSyncingRequest>, metadata?: grpc.Metadata): Promise<GetSyncingResponse>;
    GetLatestBlock(request: DeepPartial<GetLatestBlockRequest>, metadata?: grpc.Metadata): Promise<GetLatestBlockResponse>;
    GetBlockByHeight(request: DeepPartial<GetBlockByHeightRequest>, metadata?: grpc.Metadata): Promise<GetBlockByHeightResponse>;
    GetLatestValidatorSet(request: DeepPartial<GetLatestValidatorSetRequest>, metadata?: grpc.Metadata): Promise<GetLatestValidatorSetResponse>;
    GetValidatorSetByHeight(request: DeepPartial<GetValidatorSetByHeightRequest>, metadata?: grpc.Metadata): Promise<GetValidatorSetByHeightResponse>;
    ABCIQuery(request: DeepPartial<ABCIQueryRequest>, metadata?: grpc.Metadata): Promise<ABCIQueryResponse>;
}
export declare const ServiceDesc: {
    serviceName: string;
};
export declare const ServiceGetNodeInfoDesc: UnaryMethodDefinitionish;
export declare const ServiceGetSyncingDesc: UnaryMethodDefinitionish;
export declare const ServiceGetLatestBlockDesc: UnaryMethodDefinitionish;
export declare const ServiceGetBlockByHeightDesc: UnaryMethodDefinitionish;
export declare const ServiceGetLatestValidatorSetDesc: UnaryMethodDefinitionish;
export declare const ServiceGetValidatorSetByHeightDesc: UnaryMethodDefinitionish;
export declare const ServiceABCIQueryDesc: UnaryMethodDefinitionish;
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
