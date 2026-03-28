import { BaseAPI } from './BaseAPI';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
import { NftClassTrace, IbcNftParams } from '../../../core';
export declare class IbcNftAPI extends BaseAPI {
    classTrace(hash: string, params?: APIParams, headers?: Record<string, string>): Promise<NftClassTrace>;
    classTraces(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[NftClassTrace[], Pagination]>;
    classHash(trace: string, params?: APIParams, headers?: Record<string, string>): Promise<string>;
    classData(hash: string, params?: APIParams, headers?: Record<string, string>): Promise<string>;
    escrowAddress(channel_id: string, port_id: string, params?: APIParams, headers?: Record<string, string>): Promise<string>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<IbcNftParams>;
}
