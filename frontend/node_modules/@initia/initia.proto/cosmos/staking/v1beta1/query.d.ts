import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { DelegationResponse, HistoricalInfo, Params, Pool, RedelegationResponse, UnbondingDelegation, Validator } from "./staking";
export declare const protobufPackage = "cosmos.staking.v1beta1";
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
    /** status enables to query for validators matching a given status. */
    status: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
    /** validators contains all the queried validators. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
    /** validator defines the validator info. */
    validator?: Validator | undefined;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
    delegationResponses: DelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
    unbondingResponses: UnbondingDelegation[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
    /** delegation_responses defines the delegation info of a delegation. */
    delegationResponse?: DelegationResponse | undefined;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
    /** unbond defines the unbonding information of a delegation. */
    unbond?: UnbondingDelegation | undefined;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
    /** delegation_responses defines all the delegations' info of a delegator. */
    delegationResponses: DelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
    unbondingResponses: UnbondingDelegation[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** src_validator_addr defines the validator address to redelegate from. */
    srcValidatorAddr: string;
    /** dst_validator_addr defines the validator address to redelegate to. */
    dstValidatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
    redelegationResponses: RedelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
    /** validators defines the validators' info of a delegator. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
    /** validator defines the validator info. */
    validator?: Validator | undefined;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
    /** height defines at which height to query the historical info. */
    height: bigint;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
    /** hist defines the historical info at the given height. */
    hist?: HistoricalInfo | undefined;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
    /** pool defines the pool info. */
    pool?: Pool | undefined;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params | undefined;
}
export declare const QueryValidatorsRequest: MessageFns<QueryValidatorsRequest>;
export declare const QueryValidatorsResponse: MessageFns<QueryValidatorsResponse>;
export declare const QueryValidatorRequest: MessageFns<QueryValidatorRequest>;
export declare const QueryValidatorResponse: MessageFns<QueryValidatorResponse>;
export declare const QueryValidatorDelegationsRequest: MessageFns<QueryValidatorDelegationsRequest>;
export declare const QueryValidatorDelegationsResponse: MessageFns<QueryValidatorDelegationsResponse>;
export declare const QueryValidatorUnbondingDelegationsRequest: MessageFns<QueryValidatorUnbondingDelegationsRequest>;
export declare const QueryValidatorUnbondingDelegationsResponse: MessageFns<QueryValidatorUnbondingDelegationsResponse>;
export declare const QueryDelegationRequest: MessageFns<QueryDelegationRequest>;
export declare const QueryDelegationResponse: MessageFns<QueryDelegationResponse>;
export declare const QueryUnbondingDelegationRequest: MessageFns<QueryUnbondingDelegationRequest>;
export declare const QueryUnbondingDelegationResponse: MessageFns<QueryUnbondingDelegationResponse>;
export declare const QueryDelegatorDelegationsRequest: MessageFns<QueryDelegatorDelegationsRequest>;
export declare const QueryDelegatorDelegationsResponse: MessageFns<QueryDelegatorDelegationsResponse>;
export declare const QueryDelegatorUnbondingDelegationsRequest: MessageFns<QueryDelegatorUnbondingDelegationsRequest>;
export declare const QueryDelegatorUnbondingDelegationsResponse: MessageFns<QueryDelegatorUnbondingDelegationsResponse>;
export declare const QueryRedelegationsRequest: MessageFns<QueryRedelegationsRequest>;
export declare const QueryRedelegationsResponse: MessageFns<QueryRedelegationsResponse>;
export declare const QueryDelegatorValidatorsRequest: MessageFns<QueryDelegatorValidatorsRequest>;
export declare const QueryDelegatorValidatorsResponse: MessageFns<QueryDelegatorValidatorsResponse>;
export declare const QueryDelegatorValidatorRequest: MessageFns<QueryDelegatorValidatorRequest>;
export declare const QueryDelegatorValidatorResponse: MessageFns<QueryDelegatorValidatorResponse>;
export declare const QueryHistoricalInfoRequest: MessageFns<QueryHistoricalInfoRequest>;
export declare const QueryHistoricalInfoResponse: MessageFns<QueryHistoricalInfoResponse>;
export declare const QueryPoolRequest: MessageFns<QueryPoolRequest>;
export declare const QueryPoolResponse: MessageFns<QueryPoolResponse>;
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Validators queries all validators that match the given status.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    Validators(request: DeepPartial<QueryValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorsResponse>;
    /** Validator queries validator info for given validator address. */
    Validator(request: DeepPartial<QueryValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorResponse>;
    /**
     * ValidatorDelegations queries delegate info for given validator.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    ValidatorDelegations(request: DeepPartial<QueryValidatorDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorDelegationsResponse>;
    /**
     * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    ValidatorUnbondingDelegations(request: DeepPartial<QueryValidatorUnbondingDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorUnbondingDelegationsResponse>;
    /** Delegation queries delegate info for given validator delegator pair. */
    Delegation(request: DeepPartial<QueryDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationResponse>;
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    UnbondingDelegation(request: DeepPartial<QueryUnbondingDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryUnbondingDelegationResponse>;
    /**
     * DelegatorDelegations queries all delegations of a given delegator address.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    DelegatorDelegations(request: DeepPartial<QueryDelegatorDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorDelegationsResponse>;
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    DelegatorUnbondingDelegations(request: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorUnbondingDelegationsResponse>;
    /**
     * Redelegations queries redelegations of given address.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    Redelegations(request: DeepPartial<QueryRedelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryRedelegationsResponse>;
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    DelegatorValidators(request: DeepPartial<QueryDelegatorValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorsResponse>;
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    DelegatorValidator(request: DeepPartial<QueryDelegatorValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorResponse>;
    /** HistoricalInfo queries the historical info for given height. */
    HistoricalInfo(request: DeepPartial<QueryHistoricalInfoRequest>, metadata?: grpc.Metadata): Promise<QueryHistoricalInfoResponse>;
    /** Pool queries the pool info. */
    Pool(request: DeepPartial<QueryPoolRequest>, metadata?: grpc.Metadata): Promise<QueryPoolResponse>;
    /** Parameters queries the staking parameters. */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Validators(request: DeepPartial<QueryValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorsResponse>;
    Validator(request: DeepPartial<QueryValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorResponse>;
    ValidatorDelegations(request: DeepPartial<QueryValidatorDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorDelegationsResponse>;
    ValidatorUnbondingDelegations(request: DeepPartial<QueryValidatorUnbondingDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorUnbondingDelegationsResponse>;
    Delegation(request: DeepPartial<QueryDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationResponse>;
    UnbondingDelegation(request: DeepPartial<QueryUnbondingDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryUnbondingDelegationResponse>;
    DelegatorDelegations(request: DeepPartial<QueryDelegatorDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorDelegationsResponse>;
    DelegatorUnbondingDelegations(request: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorUnbondingDelegationsResponse>;
    Redelegations(request: DeepPartial<QueryRedelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryRedelegationsResponse>;
    DelegatorValidators(request: DeepPartial<QueryDelegatorValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorsResponse>;
    DelegatorValidator(request: DeepPartial<QueryDelegatorValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorResponse>;
    HistoricalInfo(request: DeepPartial<QueryHistoricalInfoRequest>, metadata?: grpc.Metadata): Promise<QueryHistoricalInfoResponse>;
    Pool(request: DeepPartial<QueryPoolRequest>, metadata?: grpc.Metadata): Promise<QueryPoolResponse>;
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryValidatorsDesc: UnaryMethodDefinitionish;
export declare const QueryValidatorDesc: UnaryMethodDefinitionish;
export declare const QueryValidatorDelegationsDesc: UnaryMethodDefinitionish;
export declare const QueryValidatorUnbondingDelegationsDesc: UnaryMethodDefinitionish;
export declare const QueryDelegationDesc: UnaryMethodDefinitionish;
export declare const QueryUnbondingDelegationDesc: UnaryMethodDefinitionish;
export declare const QueryDelegatorDelegationsDesc: UnaryMethodDefinitionish;
export declare const QueryDelegatorUnbondingDelegationsDesc: UnaryMethodDefinitionish;
export declare const QueryRedelegationsDesc: UnaryMethodDefinitionish;
export declare const QueryDelegatorValidatorsDesc: UnaryMethodDefinitionish;
export declare const QueryDelegatorValidatorDesc: UnaryMethodDefinitionish;
export declare const QueryHistoricalInfoDesc: UnaryMethodDefinitionish;
export declare const QueryPoolDesc: UnaryMethodDefinitionish;
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
