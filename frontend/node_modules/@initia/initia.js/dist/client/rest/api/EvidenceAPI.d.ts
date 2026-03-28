import { BaseAPI } from './BaseAPI';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
import { Evidence } from '../../../core';
export declare class EvidenceAPI extends BaseAPI {
    evidences(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[Evidence[], Pagination]>;
    evidence(hash: string, params?: APIParams, headers?: Record<string, string>): Promise<Evidence>;
}
