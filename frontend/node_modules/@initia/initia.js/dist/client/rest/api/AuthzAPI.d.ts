import { AccAddress, AuthorizationGrant } from '../../../core';
import { BaseAPI } from './BaseAPI';
import { APIParams, Pagination } from '../APIRequester';
export declare class AuthzAPI extends BaseAPI {
    grants(granter: AccAddress, grantee: AccAddress, msg_type_url?: string, params?: APIParams, headers?: Record<string, string>): Promise<[AuthorizationGrant[], Pagination]>;
    granter(granter: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<[AuthorizationGrant[], Pagination]>;
    grantee(grantee: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<[AuthorizationGrant[], Pagination]>;
}
