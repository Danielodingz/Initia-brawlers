import { BaseAPI } from './BaseAPI';
import { BlockInfo, ValConsAddress, ValConsPublicKey } from '../../../core';
import { APIParams, Pagination } from '../APIRequester';
export interface DelegateValidator {
    address: ValConsAddress;
    pub_key: ValConsPublicKey.Data;
    proposer_priority: string;
    voting_power: string;
}
export declare class TendermintAPI extends BaseAPI {
    nodeInfo(params?: APIParams, headers?: Record<string, string>): Promise<object>;
    chainId(params?: APIParams, headers?: Record<string, string>): Promise<string>;
    syncing(params?: APIParams, headers?: Record<string, string>): Promise<boolean>;
    validatorSet(height?: number, params?: APIParams, headers?: Record<string, string>): Promise<[DelegateValidator[], Pagination]>;
    blockInfo(height?: number, params?: APIParams, headers?: Record<string, string>): Promise<BlockInfo>;
}
