import { AccAddress, Account, ModuleAccount, AuthParams } from '../../../core';
import { BaseAPI } from './BaseAPI';
import { APIParams } from '../APIRequester';
export declare class AuthAPI extends BaseAPI {
    accountInfo(address: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<Account>;
    moduleAccount(name: string, params?: APIParams, headers?: Record<string, string>): Promise<ModuleAccount>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<AuthParams>;
}
