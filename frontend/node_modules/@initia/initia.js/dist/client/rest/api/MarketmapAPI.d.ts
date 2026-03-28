import { BaseAPI } from './BaseAPI';
import { APIParams } from '../APIRequester';
import { CurrencyPair, Market, MarketmapParams } from '../../../core';
export interface MarketMap {
    markets: Record<string, Market>;
}
export declare namespace MarketMap {
    interface Data {
        markets: Record<string, Market.Data>;
    }
}
export declare class MarketmapAPI extends BaseAPI {
    marketMap(params?: APIParams, headers?: Record<string, string>): Promise<MarketMap>;
    markets(params?: APIParams, headers?: Record<string, string>): Promise<Market[]>;
    market(pair: CurrencyPair, params?: APIParams, headers?: Record<string, string>): Promise<Market>;
    lastUpdated(params?: APIParams, headers?: Record<string, string>): Promise<number>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<MarketmapParams>;
}
