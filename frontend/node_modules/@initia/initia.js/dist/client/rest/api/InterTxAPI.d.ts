import { AccAddress } from '../../../core';
import { BaseAPI } from './BaseAPI';
import { APIParams } from '../APIRequester';
export declare class InterTxAPI extends BaseAPI {
    interchainAccount(owner: AccAddress, connection_id: string, params?: APIParams, headers?: Record<string, string>): Promise<string>;
}
