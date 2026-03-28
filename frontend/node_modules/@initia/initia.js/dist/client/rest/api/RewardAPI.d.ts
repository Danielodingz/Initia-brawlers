import { RewardParams } from '../../../core';
import { APIParams } from '../APIRequester';
import { BaseAPI } from './BaseAPI';
export declare class RewardAPI extends BaseAPI {
    last_dilution_timestamp(params?: APIParams, headers?: Record<string, string>): Promise<string>;
    annualProvisions(params?: APIParams, headers?: Record<string, string>): Promise<string>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<RewardParams>;
}
