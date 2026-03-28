import { BaseAPI } from './BaseAPI';
import { ValConsAddress, SlashingParams, ValidatorSigningInfo } from '../../../core';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
export declare class SlashingAPI extends BaseAPI {
    signingInfos(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[ValidatorSigningInfo[], Pagination]>;
    signingInfo(val_cons_address: ValConsAddress, params?: APIParams, headers?: Record<string, string>): Promise<ValidatorSigningInfo>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<SlashingParams>;
}
