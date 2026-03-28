import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { CurrencyPair } from "../../types/v2/currency_pair";
import { Market, MarketMap } from "./market";
import { Params } from "./params";
export declare const protobufPackage = "connect.marketmap.v2";
/**
 * MarketMapRequest is the query request for the MarketMap query.
 * It takes no arguments.
 */
export interface MarketMapRequest {
}
/** MarketMapResponse is the query response for the MarketMap query. */
export interface MarketMapResponse {
    /**
     * MarketMap defines the global set of market configurations for all providers
     * and markets.
     */
    marketMap?: MarketMap | undefined;
    /**
     * LastUpdated is the last block height that the market map was updated.
     * This field can be used as an optimization for clients checking if there
     * is a new update to the map.
     */
    lastUpdated: bigint;
    /** ChainId is the chain identifier for the market map. */
    chainId: string;
}
/** MarketsRequest is the query request for the Market query. */
export interface MarketsRequest {
}
/** MarketsResponse is the query response for the Markets query. */
export interface MarketsResponse {
    /** Markets is a sorted list of all markets in the module. */
    markets: Market[];
}
/**
 * MarketRequest is the query request for the Market query.
 * It takes the currency pair of the market as an argument.
 */
export interface MarketRequest {
    /**
     * CurrencyPair is the currency pair associated with the market being
     * requested.
     */
    currencyPair?: CurrencyPair | undefined;
}
/** MarketResponse is the query response for the Market query. */
export interface MarketResponse {
    /** Market is the configuration of a single market to be price-fetched for. */
    market?: Market | undefined;
}
/** ParamsRequest is the request type for the Query/Params RPC method. */
export interface ParamsRequest {
}
/** ParamsResponse is the response type for the Query/Params RPC method. */
export interface ParamsResponse {
    params?: Params | undefined;
}
/**
 * LastUpdatedRequest is the request type for the Query/LastUpdated RPC
 * method.
 */
export interface LastUpdatedRequest {
}
/**
 * LastUpdatedResponse is the response type for the Query/LastUpdated RPC
 * method.
 */
export interface LastUpdatedResponse {
    lastUpdated: bigint;
}
export declare const MarketMapRequest: MessageFns<MarketMapRequest>;
export declare const MarketMapResponse: MessageFns<MarketMapResponse>;
export declare const MarketsRequest: MessageFns<MarketsRequest>;
export declare const MarketsResponse: MessageFns<MarketsResponse>;
export declare const MarketRequest: MessageFns<MarketRequest>;
export declare const MarketResponse: MessageFns<MarketResponse>;
export declare const ParamsRequest: MessageFns<ParamsRequest>;
export declare const ParamsResponse: MessageFns<ParamsResponse>;
export declare const LastUpdatedRequest: MessageFns<LastUpdatedRequest>;
export declare const LastUpdatedResponse: MessageFns<LastUpdatedResponse>;
/** Query is the query service for the x/marketmap module. */
export interface Query {
    /**
     * MarketMap returns the full market map stored in the x/marketmap
     * module.  NOTE: the value returned by this query is not safe for on-chain
     * code.
     */
    MarketMap(request: DeepPartial<MarketMapRequest>, metadata?: grpc.Metadata): Promise<MarketMapResponse>;
    /**
     * Market returns all stored in the x/marketmap
     * module as a sorted list.
     */
    Markets(request: DeepPartial<MarketsRequest>, metadata?: grpc.Metadata): Promise<MarketsResponse>;
    /**
     * Market returns a market stored in the x/marketmap
     * module.
     */
    Market(request: DeepPartial<MarketRequest>, metadata?: grpc.Metadata): Promise<MarketResponse>;
    /** LastUpdated returns the last height the market map was updated at. */
    LastUpdated(request: DeepPartial<LastUpdatedRequest>, metadata?: grpc.Metadata): Promise<LastUpdatedResponse>;
    /** Params returns the current x/marketmap module parameters. */
    Params(request: DeepPartial<ParamsRequest>, metadata?: grpc.Metadata): Promise<ParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    MarketMap(request: DeepPartial<MarketMapRequest>, metadata?: grpc.Metadata): Promise<MarketMapResponse>;
    Markets(request: DeepPartial<MarketsRequest>, metadata?: grpc.Metadata): Promise<MarketsResponse>;
    Market(request: DeepPartial<MarketRequest>, metadata?: grpc.Metadata): Promise<MarketResponse>;
    LastUpdated(request: DeepPartial<LastUpdatedRequest>, metadata?: grpc.Metadata): Promise<LastUpdatedResponse>;
    Params(request: DeepPartial<ParamsRequest>, metadata?: grpc.Metadata): Promise<ParamsResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryMarketMapDesc: UnaryMethodDefinitionish;
export declare const QueryMarketsDesc: UnaryMethodDefinitionish;
export declare const QueryMarketDesc: UnaryMethodDefinitionish;
export declare const QueryLastUpdatedDesc: UnaryMethodDefinitionish;
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
    requestStream: any;
    responseStream: any;
}
type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;
interface Rpc {
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export declare class GrpcWebImpl {
    private host;
    private options;
    constructor(host: string, options: {
        transport?: grpc.TransportFactory;
        debug?: boolean;
        metadata?: grpc.Metadata;
        upStreamRetryCodes?: number[];
    });
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
declare const gt: any;
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export declare class GrpcWebError extends gt.Error {
    code: grpc.Code;
    metadata: grpc.Metadata;
    constructor(message: string, code: grpc.Code, metadata: grpc.Metadata);
}
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
