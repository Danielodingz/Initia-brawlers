import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { DecCoin } from "../../base/v1beta1/coin";
import { DelegationDelegatorReward, Params, ValidatorAccumulatedCommission, ValidatorOutstandingRewards, ValidatorSlashEvent } from "./distribution";
export declare const protobufPackage = "cosmos.distribution.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params | undefined;
}
/** QueryValidatorDistributionInfoRequest is the request type for the Query/ValidatorDistributionInfo RPC method. */
export interface QueryValidatorDistributionInfoRequest {
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
}
/** QueryValidatorDistributionInfoResponse is the response type for the Query/ValidatorDistributionInfo RPC method. */
export interface QueryValidatorDistributionInfoResponse {
    /** operator_address defines the validator operator address. */
    operatorAddress: string;
    /** self_bond_rewards defines the self delegations rewards. */
    selfBondRewards: DecCoin[];
    /** commission defines the commission the validator received. */
    commission: DecCoin[];
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequest {
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponse {
    rewards?: ValidatorOutstandingRewards | undefined;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequest {
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponse {
    /** commission defines the commission the validator received. */
    commission?: ValidatorAccumulatedCommission | undefined;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequest {
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
    /** starting_height defines the optional starting height to query the slashes. */
    startingHeight: bigint;
    /** starting_height defines the optional ending height to query the slashes. */
    endingHeight: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponse {
    /** slashes defines the slashes the validator received. */
    slashes: ValidatorSlashEvent[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
    /** rewards defines the rewards accrued by a delegation. */
    rewards: DecCoin[];
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponse {
    /** rewards defines all the rewards accrued by a delegator. */
    rewards: DelegationDelegatorReward[];
    /** total defines the sum of all the rewards. */
    total: DecCoin[];
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
    /** validators defines the validators a delegator is delegating for. */
    validators: string[];
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
    /** withdraw_address defines the delegator address to query for. */
    withdrawAddress: string;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
    /** pool defines community pool's coins. */
    pool: DecCoin[];
}
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
export declare const QueryValidatorDistributionInfoRequest: MessageFns<QueryValidatorDistributionInfoRequest>;
export declare const QueryValidatorDistributionInfoResponse: MessageFns<QueryValidatorDistributionInfoResponse>;
export declare const QueryValidatorOutstandingRewardsRequest: MessageFns<QueryValidatorOutstandingRewardsRequest>;
export declare const QueryValidatorOutstandingRewardsResponse: MessageFns<QueryValidatorOutstandingRewardsResponse>;
export declare const QueryValidatorCommissionRequest: MessageFns<QueryValidatorCommissionRequest>;
export declare const QueryValidatorCommissionResponse: MessageFns<QueryValidatorCommissionResponse>;
export declare const QueryValidatorSlashesRequest: MessageFns<QueryValidatorSlashesRequest>;
export declare const QueryValidatorSlashesResponse: MessageFns<QueryValidatorSlashesResponse>;
export declare const QueryDelegationRewardsRequest: MessageFns<QueryDelegationRewardsRequest>;
export declare const QueryDelegationRewardsResponse: MessageFns<QueryDelegationRewardsResponse>;
export declare const QueryDelegationTotalRewardsRequest: MessageFns<QueryDelegationTotalRewardsRequest>;
export declare const QueryDelegationTotalRewardsResponse: MessageFns<QueryDelegationTotalRewardsResponse>;
export declare const QueryDelegatorValidatorsRequest: MessageFns<QueryDelegatorValidatorsRequest>;
export declare const QueryDelegatorValidatorsResponse: MessageFns<QueryDelegatorValidatorsResponse>;
export declare const QueryDelegatorWithdrawAddressRequest: MessageFns<QueryDelegatorWithdrawAddressRequest>;
export declare const QueryDelegatorWithdrawAddressResponse: MessageFns<QueryDelegatorWithdrawAddressResponse>;
export declare const QueryCommunityPoolRequest: MessageFns<QueryCommunityPoolRequest>;
export declare const QueryCommunityPoolResponse: MessageFns<QueryCommunityPoolResponse>;
/** Query defines the gRPC querier service for distribution module. */
export interface Query {
    /** Params queries params of the distribution module. */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    /** ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
    ValidatorDistributionInfo(request: DeepPartial<QueryValidatorDistributionInfoRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorDistributionInfoResponse>;
    /** ValidatorOutstandingRewards queries rewards of a validator address. */
    ValidatorOutstandingRewards(request: DeepPartial<QueryValidatorOutstandingRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorOutstandingRewardsResponse>;
    /** ValidatorCommission queries accumulated commission for a validator. */
    ValidatorCommission(request: DeepPartial<QueryValidatorCommissionRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorCommissionResponse>;
    /** ValidatorSlashes queries slash events of a validator. */
    ValidatorSlashes(request: DeepPartial<QueryValidatorSlashesRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorSlashesResponse>;
    /** DelegationRewards queries the total rewards accrued by a delegation. */
    DelegationRewards(request: DeepPartial<QueryDelegationRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationRewardsResponse>;
    /**
     * DelegationTotalRewards queries the total rewards accrued by each
     * validator.
     */
    DelegationTotalRewards(request: DeepPartial<QueryDelegationTotalRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationTotalRewardsResponse>;
    /** DelegatorValidators queries the validators of a delegator. */
    DelegatorValidators(request: DeepPartial<QueryDelegatorValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorsResponse>;
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
    DelegatorWithdrawAddress(request: DeepPartial<QueryDelegatorWithdrawAddressRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorWithdrawAddressResponse>;
    /** CommunityPool queries the community pool coins. */
    CommunityPool(request: DeepPartial<QueryCommunityPoolRequest>, metadata?: grpc.Metadata): Promise<QueryCommunityPoolResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    ValidatorDistributionInfo(request: DeepPartial<QueryValidatorDistributionInfoRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorDistributionInfoResponse>;
    ValidatorOutstandingRewards(request: DeepPartial<QueryValidatorOutstandingRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorOutstandingRewardsResponse>;
    ValidatorCommission(request: DeepPartial<QueryValidatorCommissionRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorCommissionResponse>;
    ValidatorSlashes(request: DeepPartial<QueryValidatorSlashesRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorSlashesResponse>;
    DelegationRewards(request: DeepPartial<QueryDelegationRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationRewardsResponse>;
    DelegationTotalRewards(request: DeepPartial<QueryDelegationTotalRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationTotalRewardsResponse>;
    DelegatorValidators(request: DeepPartial<QueryDelegatorValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorsResponse>;
    DelegatorWithdrawAddress(request: DeepPartial<QueryDelegatorWithdrawAddressRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorWithdrawAddressResponse>;
    CommunityPool(request: DeepPartial<QueryCommunityPoolRequest>, metadata?: grpc.Metadata): Promise<QueryCommunityPoolResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QueryValidatorDistributionInfoDesc: UnaryMethodDefinitionish;
export declare const QueryValidatorOutstandingRewardsDesc: UnaryMethodDefinitionish;
export declare const QueryValidatorCommissionDesc: UnaryMethodDefinitionish;
export declare const QueryValidatorSlashesDesc: UnaryMethodDefinitionish;
export declare const QueryDelegationRewardsDesc: UnaryMethodDefinitionish;
export declare const QueryDelegationTotalRewardsDesc: UnaryMethodDefinitionish;
export declare const QueryDelegatorValidatorsDesc: UnaryMethodDefinitionish;
export declare const QueryDelegatorWithdrawAddressDesc: UnaryMethodDefinitionish;
export declare const QueryCommunityPoolDesc: UnaryMethodDefinitionish;
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
