import { BaseAPI } from './BaseAPI';
import { Coins, Coin, AccAddress, BankParams, Denom } from '../../../core';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
export declare class BankAPI extends BaseAPI {
    balance(address: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[Coins, Pagination]>;
    balanceByDenom(address: AccAddress, denom: Denom, params?: APIParams, headers?: Record<string, string>): Promise<Coin>;
    total(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[Coins, Pagination]>;
    spendableBalances(address: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[Coins, Pagination]>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<BankParams>;
}
