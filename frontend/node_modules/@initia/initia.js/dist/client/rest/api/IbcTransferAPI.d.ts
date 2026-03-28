import { BaseAPI } from './BaseAPI';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
import { DenomTrace, IbcTransferParams } from '../../../core';
export declare class IbcTransferAPI extends BaseAPI {
    denomTrace(hash: string, params?: APIParams, headers?: Record<string, string>): Promise<DenomTrace>;
    denomTraces(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[DenomTrace[], Pagination]>;
    denomHash(trace: string, params?: APIParams, headers?: Record<string, string>): Promise<string>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<IbcTransferParams>;
    escrowAddress(channel_id: string, port_id: string, params?: APIParams, headers?: Record<string, string>): Promise<string>;
}
