import { AccAddress, Allowance } from '../../../core';
import { BaseAPI } from './BaseAPI';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
export declare class FeeGrantAPI extends BaseAPI {
    allowances(grantee: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<{
        allowances: {
            granter: AccAddress;
            grantee: AccAddress;
            allowance: Allowance;
        }[];
        pagination: Pagination;
    }>;
    allowance(granter: AccAddress, grantee: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<Allowance>;
    allowancesByGranter(granter: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<{
        allowances: {
            granter: AccAddress;
            grantee: AccAddress;
            allowance: Allowance;
        }[];
        pagination: Pagination;
    }>;
}
