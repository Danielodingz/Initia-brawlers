import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { GasInfo, Result } from "../../../cosmos/base/abci/v1beta1/abci";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { ProposalStatus } from "../../../cosmos/gov/v1/gov";
import { MsgSubmitProposal } from "../../../cosmos/gov/v1/tx";
import { Params, Proposal, TallyResult } from "./gov";
export declare const protobufPackage = "initia.gov.v1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params | undefined;
}
/**
 * QueryEmergencyProposalsRequest is the request type for the
 * Query/EmergencyProposals RPC method
 */
export interface QueryEmergencyProposalsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryEmergencyProposalsResponse is the response type for the
 * Query/EmergencyProposals RPC method.
 */
export interface QueryEmergencyProposalsResponse {
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
    /** proposal is the requested governance proposal. */
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
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
    /** tally defines the requested tally. */
    tallyResult?: TallyResult | undefined;
}
/** QuerySimulateProposalRequest is the request type for the Query/SimulateProposal RPC method. */
export interface QuerySimulateProposalRequest {
    msgSubmitProposal?: MsgSubmitProposal | undefined;
}
/** QuerySimulateProposalResponse is the response type for the Query/SimulateProposal RPC method. */
export interface QuerySimulateProposalResponse {
    /** gas_info is the information about gas used in the simulation. */
    gasInfo?: GasInfo | undefined;
    /** result is the result of the simulation. */
    results: Result[];
}
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
export declare const QueryEmergencyProposalsRequest: MessageFns<QueryEmergencyProposalsRequest>;
export declare const QueryEmergencyProposalsResponse: MessageFns<QueryEmergencyProposalsResponse>;
export declare const QueryProposalRequest: MessageFns<QueryProposalRequest>;
export declare const QueryProposalResponse: MessageFns<QueryProposalResponse>;
export declare const QueryProposalsRequest: MessageFns<QueryProposalsRequest>;
export declare const QueryProposalsResponse: MessageFns<QueryProposalsResponse>;
export declare const QueryTallyResultRequest: MessageFns<QueryTallyResultRequest>;
export declare const QueryTallyResultResponse: MessageFns<QueryTallyResultResponse>;
export declare const QuerySimulateProposalRequest: MessageFns<QuerySimulateProposalRequest>;
export declare const QuerySimulateProposalResponse: MessageFns<QuerySimulateProposalResponse>;
/** Query defines the gRPC querier service for gov module. */
export interface Query {
    /** Params queries params of the gov module. */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    /** EmergencyProposals queries emergency proposals. */
    EmergencyProposals(request: DeepPartial<QueryEmergencyProposalsRequest>, metadata?: grpc.Metadata): Promise<QueryEmergencyProposalsResponse>;
    /** Proposal queries proposal details based on ProposalID. */
    Proposal(request: DeepPartial<QueryProposalRequest>, metadata?: grpc.Metadata): Promise<QueryProposalResponse>;
    /** Proposals queries all proposals based on given status. */
    Proposals(request: DeepPartial<QueryProposalsRequest>, metadata?: grpc.Metadata): Promise<QueryProposalsResponse>;
    /** TallyResult queries the tally of a proposal vote. */
    TallyResult(request: DeepPartial<QueryTallyResultRequest>, metadata?: grpc.Metadata): Promise<QueryTallyResultResponse>;
    /** SimulateProposal queries the simulation of a proposal. */
    SimulateProposal(request: DeepPartial<QuerySimulateProposalRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateProposalResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    EmergencyProposals(request: DeepPartial<QueryEmergencyProposalsRequest>, metadata?: grpc.Metadata): Promise<QueryEmergencyProposalsResponse>;
    Proposal(request: DeepPartial<QueryProposalRequest>, metadata?: grpc.Metadata): Promise<QueryProposalResponse>;
    Proposals(request: DeepPartial<QueryProposalsRequest>, metadata?: grpc.Metadata): Promise<QueryProposalsResponse>;
    TallyResult(request: DeepPartial<QueryTallyResultRequest>, metadata?: grpc.Metadata): Promise<QueryTallyResultResponse>;
    SimulateProposal(request: DeepPartial<QuerySimulateProposalRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateProposalResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QueryEmergencyProposalsDesc: UnaryMethodDefinitionish;
export declare const QueryProposalDesc: UnaryMethodDefinitionish;
export declare const QueryProposalsDesc: UnaryMethodDefinitionish;
export declare const QueryTallyResultDesc: UnaryMethodDefinitionish;
export declare const QuerySimulateProposalDesc: UnaryMethodDefinitionish;
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
