import { BaseAPI } from './BaseAPI';
import { Coins, AccAddress, ValAddress, DistributionParams } from '../../../core';
import { APIParams } from '../APIRequester';
export interface Pool {
    denom: string;
    coins: Coins;
}
export declare namespace Pool {
    interface Data {
        denom: string;
        dec_coins: Coins.Data;
    }
}
export interface Rewards {
    rewards: Record<string, Pool[]>;
    total: Pool[];
}
export declare namespace Rewards {
    interface Data {
        rewards: {
            validator_address: ValAddress;
            reward: Pool.Data[];
        }[];
        total: Pool.Data[];
    }
}
export declare class DistributionAPI extends BaseAPI {
    rewards(delegator: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<Rewards>;
    rewardsByValidator(delegator: AccAddress, validator: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<Pool[]>;
    validatorRewards(validator: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<Pool[]>;
    validatorCommission(validator: ValAddress, params?: APIParams, headers?: Record<string, string>): Promise<Pool[]>;
    withdrawAddress(delegator: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<AccAddress>;
    communityPool(params?: APIParams, headers?: Record<string, string>): Promise<Coins>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<DistributionParams>;
}
