import { BaseAPI } from './BaseAPI';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
import { AccAddress, ACL, IbcHooksParams } from '../../../core';
export declare class IbcHooksAPI extends BaseAPI {
    acls(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[ACL[], Pagination]>;
    acl(address: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<ACL>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<IbcHooksParams>;
}
