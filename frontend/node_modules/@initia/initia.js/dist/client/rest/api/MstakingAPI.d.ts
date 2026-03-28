import { AccAddress, ValAddress, UnbondingDelegation, Coins, Delegation, Validator, Redelegation, MstakingParams } from '../../../core';
import { BaseAPI } from './BaseAPI';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
export interface MstakingPool {
    bonded_tokens: Coins;
    not_bonded_tokens: Coins;
    voting_power_weights: Coins;
}
export declare namespace MstakingPool {
    interface Data {
        bonded_tokens: Coins.Data;
        not_bonded_tokens: Coins.Data;
        voting_power_weights: Coins.Data;
    }
}
export declare class MstakingAPI extends BaseAPI {
    delegations(delegator?: AccAddress, validator?: ValAddress, status?: Validator.Status, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[Delegation[], Pagination]>;
    delegation(delegator: AccAddress, validator: ValAddress, headers?: Record<string, string>): Promise<Delegation>;
    unbondingDelegations(delegator?: AccAddress, validator?: ValAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[UnbondingDelegation[], Pagination]>;
    unbondingDelegation(delegator?: AccAddress, validator?: ValAddress, headers?: Record<string, string>): Promise<UnbondingDelegation>;
    redelegations(delegator: AccAddress, src_validator_addr?: ValAddress, dst_validator_addr?: ValAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[Redelegation[], Pagination]>;
    bondedValidators(delegator: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[Validator[], Pagination]>;
    totalDelegationBalance(delegator: AccAddress, status?: Validator.Status, params?: APIParams, headers?: Record<string, string>): Promise<Coins>;
    validators(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[Validator[], Pagination]>;
    validator(validator: ValAddress, params?: APIParams, headers?: Record<string, string>): Promise<Validator>;
    pool(params?: APIParams, headers?: Record<string, string>): Promise<MstakingPool>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<MstakingParams>;
}
