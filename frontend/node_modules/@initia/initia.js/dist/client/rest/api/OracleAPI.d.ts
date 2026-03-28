import { BaseAPI } from './BaseAPI';
import { APIParams } from '../APIRequester';
import { CurrencyPair, QuotePrice } from '../../../core';
export interface GetPriceResponse {
    price: QuotePrice;
    nonce: number;
    decimals: number;
    id: number;
}
export declare namespace GetPriceResponse {
    interface Data {
        price: QuotePrice.Data;
        nonce: string;
        decimals: string;
        id: string;
    }
}
export declare class OracleAPI extends BaseAPI {
    currencyPairs(params?: APIParams, headers?: Record<string, string>): Promise<CurrencyPair[]>;
    prices(pairs: CurrencyPair[], headers?: Record<string, string>): Promise<GetPriceResponse[]>;
    price(pair: CurrencyPair, params?: APIParams, headers?: Record<string, string>): Promise<GetPriceResponse>;
}
