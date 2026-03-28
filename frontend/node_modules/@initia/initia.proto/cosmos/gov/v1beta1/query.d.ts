import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Deposit, DepositParams, Proposal, ProposalStatus, TallyParams, TallyResult, Vote, VotingParams } from "./gov";
export declare const protobufPackage = "cosmos.gov.v1beta1";
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
    proposal?: Proposal | undefined;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
    /** proposal_status defines the status of the proposals. */
    proposalStatus: ProposalStatus;
    /** voter defines the voter address for the proposals. */
    voter: string;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponse {
    /** proposals defines all the requested governance proposals. */
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** voter defines the voter address for the proposals. */
    voter: string;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
    /** vote defines the queried vote. */
    vote?: Vote | undefined;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponse {
    /** votes defines the queried votes. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
    /**
     * params_type defines which parameters to query for, can be one of "voting",
     * "tallying" or "deposit".
     */
    paramsType: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** voting_params defines the parameters related to voting. */
    votingParams?: VotingParams | undefined;
    /** deposit_params defines the parameters related to deposit. */
    depositParams?: DepositParams | undefined;
    /** tally_params defines the parameters related to tally. */
    tallyParams?: TallyParams | undefined;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
    /** deposit defines the requested deposit. */
    deposit?: Deposit | undefined;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    /** deposits defines the requested deposits. */
    deposits: Deposit[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
    /** tally defines the requested tally. */
    tally?: TallyResult | undefined;
}
export declare const QueryProposalRequest: MessageFns<QueryProposalRequest>;
export declare const QueryProposalResponse: MessageFns<QueryProposalResponse>;
export declare const QueryProposalsRequest: MessageFns<QueryProposalsRequest>;
export declare const QueryProposalsResponse: MessageFns<QueryProposalsResponse>;
export declare const QueryVoteRequest: MessageFns<QueryVoteRequest>;
export declare const QueryVoteResponse: MessageFns<QueryVoteResponse>;
export declare const QueryVotesRequest: MessageFns<QueryVotesRequest>;
export declare const QueryVotesResponse: MessageFns<QueryVotesResponse>;
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
export declare const QueryDepositRequest: MessageFns<QueryDepositRequest>;
export declare const QueryDepositResponse: MessageFns<QueryDepositResponse>;
export declare const QueryDepositsRequest: MessageFns<QueryDepositsRequest>;
export declare const QueryDepositsResponse: MessageFns<QueryDepositsResponse>;
export declare const QueryTallyResultRequest: MessageFns<QueryTallyResultRequest>;
export declare const QueryTallyResultResponse: MessageFns<QueryTallyResultResponse>;
/** Query defines the gRPC querier service for gov module */
export interface Query {
    /** Proposal queries proposal details based on ProposalID. */
    Proposal(request: DeepPartial<QueryProposalRequest>, metadata?: grpc.Metadata): Promise<QueryProposalResponse>;
    /** Proposals queries all proposals based on given status. */
    Proposals(request: DeepPartial<QueryProposalsRequest>, metadata?: grpc.Metadata): Promise<QueryProposalsResponse>;
    /** Vote queries voted information based on proposalID, voterAddr. */
    Vote(request: DeepPartial<QueryVoteRequest>, metadata?: grpc.Metadata): Promise<QueryVoteResponse>;
    /** Votes queries votes of a given proposal. */
    Votes(request: DeepPartial<QueryVotesRequest>, metadata?: grpc.Metadata): Promise<QueryVotesResponse>;
    /** Params queries all parameters of the gov module. */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    /** Deposit queries single deposit information based on proposalID, depositor address. */
    Deposit(request: DeepPartial<QueryDepositRequest>, metadata?: grpc.Metadata): Promise<QueryDepositResponse>;
    /** Deposits queries all deposits of a single proposal. */
    Deposits(request: DeepPartial<QueryDepositsRequest>, metadata?: grpc.Metadata): Promise<QueryDepositsResponse>;
    /** TallyResult queries the tally of a proposal vote. */
    TallyResult(request: DeepPartial<QueryTallyResultRequest>, metadata?: grpc.Metadata): Promise<QueryTallyResultResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Proposal(request: DeepPartial<QueryProposalRequest>, metadata?: grpc.Metadata): Promise<QueryProposalResponse>;
    Proposals(request: DeepPartial<QueryProposalsRequest>, metadata?: grpc.Metadata): Promise<QueryProposalsResponse>;
    Vote(request: DeepPartial<QueryVoteRequest>, metadata?: grpc.Metadata): Promise<QueryVoteResponse>;
    Votes(request: DeepPartial<QueryVotesRequest>, metadata?: grpc.Metadata): Promise<QueryVotesResponse>;
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    Deposit(request: DeepPartial<QueryDepositRequest>, metadata?: grpc.Metadata): Promise<QueryDepositResponse>;
    Deposits(request: DeepPartial<QueryDepositsRequest>, metadata?: grpc.Metadata): Promise<QueryDepositsResponse>;
    TallyResult(request: DeepPartial<QueryTallyResultRequest>, metadata?: grpc.Metadata): Promise<QueryTallyResultResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryProposalDesc: UnaryMethodDefinitionish;
export declare const QueryProposalsDesc: UnaryMethodDefinitionish;
export declare const QueryVoteDesc: UnaryMethodDefinitionish;
export declare const QueryVotesDesc: UnaryMethodDefinitionish;
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QueryDepositDesc: UnaryMethodDefinitionish;
export declare const QueryDepositsDesc: UnaryMethodDefinitionish;
export declare const QueryTallyResultDesc: UnaryMethodDefinitionish;
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
