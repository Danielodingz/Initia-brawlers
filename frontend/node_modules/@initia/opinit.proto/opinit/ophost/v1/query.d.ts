import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BatchInfoWithOutput, BridgeConfig, MigrationInfo, Output, Params, TokenPair } from "./types";
export declare const protobufPackage = "opinit.ophost.v1";
/** QueryBridgeRequest is request type for Query/Bridge RPC method. */
export interface QueryBridgeRequest {
    bridgeId: bigint;
}
/** QueryBridgeResponse is response type for the Query/Bridge RPC method */
export interface QueryBridgeResponse {
    bridgeId: bigint;
    bridgeAddr: string;
    bridgeConfig?: BridgeConfig | undefined;
}
/** QueryBridgesRequest is request type for Query/Bridges RPC method. */
export interface QueryBridgesRequest {
    /** pagination defines the pagination in the request. */
    pagination?: PageRequest | undefined;
}
/** QueryBridgesResponse is response type for the Query/Bridges RPC method */
export interface QueryBridgesResponse {
    bridges: QueryBridgeResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryTokenPairByL1DenomRequest is response type for the Query/TokenPairByL1Denom RPC method */
export interface QueryTokenPairByL1DenomRequest {
    bridgeId: bigint;
    l1Denom: string;
}
/** QueryTokenPairByL1DenomResponse is response type for the Query/TokenPairByL1Denom RPC method */
export interface QueryTokenPairByL1DenomResponse {
    tokenPair?: TokenPair | undefined;
}
/** QueryTokenPairByL2DenomRequest is response type for the Query/TokenPairByL2Denom RPC method */
export interface QueryTokenPairByL2DenomRequest {
    bridgeId: bigint;
    l2Denom: string;
}
/** QueryTokenPairByL2DenomResponse is response type for the Query/TokenPairByL2Denom RPC method */
export interface QueryTokenPairByL2DenomResponse {
    tokenPair?: TokenPair | undefined;
}
/** QueryTokenPairsRequest is response type for the Query/TokenPairs RPC method */
export interface QueryTokenPairsRequest {
    bridgeId: bigint;
    /** pagination defines the pagination in the request. */
    pagination?: PageRequest | undefined;
}
/** QueryTokenPairsResponse is response type for the Query/TokenPairs RPC method */
export interface QueryTokenPairsResponse {
    tokenPairs: TokenPair[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryLastFinalizedOutputRequest is request type for the Query/LastFinalizedOutput RPC method. */
export interface QueryLastFinalizedOutputRequest {
    bridgeId: bigint;
}
/** QueryLastFinalizedOutputResponse is response type for the Query/LastFinalizedOutput RPC method */
export interface QueryLastFinalizedOutputResponse {
    outputIndex: bigint;
    outputProposal?: Output | undefined;
}
/** QueryOutputProposalRequest is response type for the Query/OutputProposal RPC method */
export interface QueryOutputProposalRequest {
    bridgeId: bigint;
    outputIndex: bigint;
}
/** QueryOutputProposalResponse is response type for the Query/OutputProposal RPC method */
export interface QueryOutputProposalResponse {
    bridgeId: bigint;
    outputIndex: bigint;
    outputProposal?: Output | undefined;
}
/** QueryOutputProposalsRequest is response type for the Query/OutputProposals RPC method */
export interface QueryOutputProposalsRequest {
    bridgeId: bigint;
    /** pagination defines the pagination in the request. */
    pagination?: PageRequest | undefined;
}
/** QueryOutputProposalsResponse is response type for the Query/OutputProposals RPC method */
export interface QueryOutputProposalsResponse {
    outputProposals: QueryOutputProposalResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params | undefined;
}
/** QueryClaimedRequest is request type for the Query/Claimed RPC method. */
export interface QueryClaimedRequest {
    bridgeId: bigint;
    withdrawalHash: Uint8Array;
}
/** QueryClaimedResponse is response type for the Query/Claimed RPC method */
export interface QueryClaimedResponse {
    claimed: boolean;
}
/** QueryNextL1SequenceRequest is request type for the Query/NextL1Sequence RPC method. */
export interface QueryNextL1SequenceRequest {
    bridgeId: bigint;
}
/** QueryNextL1SequenceResponse is response type for the Query/NextL1Sequence RPC method. */
export interface QueryNextL1SequenceResponse {
    nextL1Sequence: bigint;
}
/** QueryBatchInfosRequest is request type for Query/BatchInfos RPC method. */
export interface QueryBatchInfosRequest {
    bridgeId: bigint;
    pagination?: PageRequest | undefined;
}
/** QueryBatchInfosResponse is response type for Query/BatchInfos RPC method. */
export interface QueryBatchInfosResponse {
    batchInfos: BatchInfoWithOutput[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryMigrationInfoRequest is request type for Query/MigrationInfo RPC method. */
export interface QueryMigrationInfoRequest {
    bridgeId: bigint;
    l1Denom: string;
}
/** QueryMigrationInfoResponse is response type for Query/MigrationInfo RPC method. */
export interface QueryMigrationInfoResponse {
    migrationInfo?: MigrationInfo | undefined;
}
export declare const QueryBridgeRequest: MessageFns<QueryBridgeRequest>;
export declare const QueryBridgeResponse: MessageFns<QueryBridgeResponse>;
export declare const QueryBridgesRequest: MessageFns<QueryBridgesRequest>;
export declare const QueryBridgesResponse: MessageFns<QueryBridgesResponse>;
export declare const QueryTokenPairByL1DenomRequest: MessageFns<QueryTokenPairByL1DenomRequest>;
export declare const QueryTokenPairByL1DenomResponse: MessageFns<QueryTokenPairByL1DenomResponse>;
export declare const QueryTokenPairByL2DenomRequest: MessageFns<QueryTokenPairByL2DenomRequest>;
export declare const QueryTokenPairByL2DenomResponse: MessageFns<QueryTokenPairByL2DenomResponse>;
export declare const QueryTokenPairsRequest: MessageFns<QueryTokenPairsRequest>;
export declare const QueryTokenPairsResponse: MessageFns<QueryTokenPairsResponse>;
export declare const QueryLastFinalizedOutputRequest: MessageFns<QueryLastFinalizedOutputRequest>;
export declare const QueryLastFinalizedOutputResponse: MessageFns<QueryLastFinalizedOutputResponse>;
export declare const QueryOutputProposalRequest: MessageFns<QueryOutputProposalRequest>;
export declare const QueryOutputProposalResponse: MessageFns<QueryOutputProposalResponse>;
export declare const QueryOutputProposalsRequest: MessageFns<QueryOutputProposalsRequest>;
export declare const QueryOutputProposalsResponse: MessageFns<QueryOutputProposalsResponse>;
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
export declare const QueryClaimedRequest: MessageFns<QueryClaimedRequest>;
export declare const QueryClaimedResponse: MessageFns<QueryClaimedResponse>;
export declare const QueryNextL1SequenceRequest: MessageFns<QueryNextL1SequenceRequest>;
export declare const QueryNextL1SequenceResponse: MessageFns<QueryNextL1SequenceResponse>;
export declare const QueryBatchInfosRequest: MessageFns<QueryBatchInfosRequest>;
export declare const QueryBatchInfosResponse: MessageFns<QueryBatchInfosResponse>;
export declare const QueryMigrationInfoRequest: MessageFns<QueryMigrationInfoRequest>;
export declare const QueryMigrationInfoResponse: MessageFns<QueryMigrationInfoResponse>;
/** Query defines the gRPC querier service. */
export interface Query {
    /** Bridge queries bridge info. */
    Bridge(request: DeepPartial<QueryBridgeRequest>, metadata?: grpc.Metadata): Promise<QueryBridgeResponse>;
    /** Bridges queries bridge infos. */
    Bridges(request: DeepPartial<QueryBridgesRequest>, metadata?: grpc.Metadata): Promise<QueryBridgesResponse>;
    /** TokenPairByL1Denom queries token pair by l1 denom. */
    TokenPairByL1Denom(request: DeepPartial<QueryTokenPairByL1DenomRequest>, metadata?: grpc.Metadata): Promise<QueryTokenPairByL1DenomResponse>;
    /** TokenPairByL2Denom queries token pair by l2 denom. */
    TokenPairByL2Denom(request: DeepPartial<QueryTokenPairByL2DenomRequest>, metadata?: grpc.Metadata): Promise<QueryTokenPairByL2DenomResponse>;
    /** TokenPairs queries all (l1 denom, l2 denom) pair. */
    TokenPairs(request: DeepPartial<QueryTokenPairsRequest>, metadata?: grpc.Metadata): Promise<QueryTokenPairsResponse>;
    /** LastFinalizedOutput queries last finalized output. */
    LastFinalizedOutput(request: DeepPartial<QueryLastFinalizedOutputRequest>, metadata?: grpc.Metadata): Promise<QueryLastFinalizedOutputResponse>;
    /** OutputProposal queries output proposal by output index. */
    OutputProposal(request: DeepPartial<QueryOutputProposalRequest>, metadata?: grpc.Metadata): Promise<QueryOutputProposalResponse>;
    /** OutputProposals queries all output proposals. */
    OutputProposals(request: DeepPartial<QueryOutputProposalsRequest>, metadata?: grpc.Metadata): Promise<QueryOutputProposalsResponse>;
    /** Parameters queries the rollup parameters. */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    /** Claimed queries whether the output is claimed. */
    Claimed(request: DeepPartial<QueryClaimedRequest>, metadata?: grpc.Metadata): Promise<QueryClaimedResponse>;
    /** NextL1Sequence queries the next l1 sequence. */
    NextL1Sequence(request: DeepPartial<QueryNextL1SequenceRequest>, metadata?: grpc.Metadata): Promise<QueryNextL1SequenceResponse>;
    /** BatchInfos queries all batch infos. */
    BatchInfos(request: DeepPartial<QueryBatchInfosRequest>, metadata?: grpc.Metadata): Promise<QueryBatchInfosResponse>;
    /** MigrationInfo queries the migration info. */
    MigrationInfo(request: DeepPartial<QueryMigrationInfoRequest>, metadata?: grpc.Metadata): Promise<QueryMigrationInfoResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Bridge(request: DeepPartial<QueryBridgeRequest>, metadata?: grpc.Metadata): Promise<QueryBridgeResponse>;
    Bridges(request: DeepPartial<QueryBridgesRequest>, metadata?: grpc.Metadata): Promise<QueryBridgesResponse>;
    TokenPairByL1Denom(request: DeepPartial<QueryTokenPairByL1DenomRequest>, metadata?: grpc.Metadata): Promise<QueryTokenPairByL1DenomResponse>;
    TokenPairByL2Denom(request: DeepPartial<QueryTokenPairByL2DenomRequest>, metadata?: grpc.Metadata): Promise<QueryTokenPairByL2DenomResponse>;
    TokenPairs(request: DeepPartial<QueryTokenPairsRequest>, metadata?: grpc.Metadata): Promise<QueryTokenPairsResponse>;
    LastFinalizedOutput(request: DeepPartial<QueryLastFinalizedOutputRequest>, metadata?: grpc.Metadata): Promise<QueryLastFinalizedOutputResponse>;
    OutputProposal(request: DeepPartial<QueryOutputProposalRequest>, metadata?: grpc.Metadata): Promise<QueryOutputProposalResponse>;
    OutputProposals(request: DeepPartial<QueryOutputProposalsRequest>, metadata?: grpc.Metadata): Promise<QueryOutputProposalsResponse>;
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    Claimed(request: DeepPartial<QueryClaimedRequest>, metadata?: grpc.Metadata): Promise<QueryClaimedResponse>;
    NextL1Sequence(request: DeepPartial<QueryNextL1SequenceRequest>, metadata?: grpc.Metadata): Promise<QueryNextL1SequenceResponse>;
    BatchInfos(request: DeepPartial<QueryBatchInfosRequest>, metadata?: grpc.Metadata): Promise<QueryBatchInfosResponse>;
    MigrationInfo(request: DeepPartial<QueryMigrationInfoRequest>, metadata?: grpc.Metadata): Promise<QueryMigrationInfoResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryBridgeDesc: UnaryMethodDefinitionish;
export declare const QueryBridgesDesc: UnaryMethodDefinitionish;
export declare const QueryTokenPairByL1DenomDesc: UnaryMethodDefinitionish;
export declare const QueryTokenPairByL2DenomDesc: UnaryMethodDefinitionish;
export declare const QueryTokenPairsDesc: UnaryMethodDefinitionish;
export declare const QueryLastFinalizedOutputDesc: UnaryMethodDefinitionish;
export declare const QueryOutputProposalDesc: UnaryMethodDefinitionish;
export declare const QueryOutputProposalsDesc: UnaryMethodDefinitionish;
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QueryClaimedDesc: UnaryMethodDefinitionish;
export declare const QueryNextL1SequenceDesc: UnaryMethodDefinitionish;
export declare const QueryBatchInfosDesc: UnaryMethodDefinitionish;
export declare const QueryMigrationInfoDesc: UnaryMethodDefinitionish;
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
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
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
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
