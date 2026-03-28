import { TokenfactoryParams } from '../../../core';
import { APIParams } from '../APIRequester';
import { BaseAPI } from './BaseAPI';
export interface AuthorityMetadata {
    admin: string;
}
export declare class TokenfactoryAPI extends BaseAPI {
    authorityMetadata(denom: string, params?: APIParams, headers?: Record<string, string>): Promise<AuthorityMetadata>;
    beforeSendHookAddr(denom: string, params?: APIParams, headers?: Record<string, string>): Promise<string>;
    denomsFromCreator(creator: string, params?: APIParams, headers?: Record<string, string>): Promise<string[]>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<TokenfactoryParams>;
}
