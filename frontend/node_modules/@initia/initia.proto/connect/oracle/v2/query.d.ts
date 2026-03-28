import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { CurrencyPair } from "../../types/v2/currency_pair";
import { QuotePrice } from "./genesis";
export declare const protobufPackage = "connect.oracle.v2";
export interface GetAllCurrencyPairsRequest {
}
/**
 * GetAllCurrencyPairsResponse returns all CurrencyPairs that the module is
 * currently tracking.
 */
export interface GetAllCurrencyPairsResponse {
    currencyPairs: CurrencyPair[];
}
/**
 * GetPriceRequest takes an identifier for the
 * CurrencyPair in the format base/quote.
 */
export interface GetPriceRequest {
    /** CurrencyPair represents the pair that the user wishes to query. */
    currencyPair: string;
}
/**
 * GetPriceResponse is the response from the GetPrice grpc method exposed from
 * the x/oracle query service.
 */
export interface GetPriceResponse {
    /**
     * QuotePrice represents the quote-price for the CurrencyPair given in
     * GetPriceRequest (possibly nil if no update has been made)
     */
    price?: QuotePrice | undefined;
    /** nonce represents the nonce for the CurrencyPair if it exists in state */
    nonce: bigint;
    /**
     * decimals represents the number of decimals that the quote-price is
     * represented in. It is used to scale the QuotePrice to its proper value.
     */
    decimals: bigint;
    /** ID represents the identifier for the CurrencyPair. */
    id: bigint;
}
/**
 * GetPricesRequest takes an identifier for the CurrencyPair
 * in the format base/quote.
 */
export interface GetPricesRequest {
    currencyPairIds: string[];
}
/**
 * GetPricesResponse is the response from the GetPrices grpc method exposed from
 * the x/oracle query service.
 */
export interface GetPricesResponse {
    prices: GetPriceResponse[];
}
/** GetCurrencyPairMappingRequest is the GetCurrencyPairMapping request type. */
export interface GetCurrencyPairMappingRequest {
}
/** GetCurrencyPairMappingResponse is the GetCurrencyPairMapping response type. */
export interface GetCurrencyPairMappingResponse {
    /**
     * currency_pair_mapping is a mapping of the id representing the currency pair
     * to the currency pair itself.
     */
    currencyPairMapping: Map<bigint, CurrencyPair>;
}
export interface GetCurrencyPairMappingResponse_CurrencyPairMappingEntry {
    key: bigint;
    value?: CurrencyPair | undefined;
}
/** GetCurrencyPairMappingRequest is the GetCurrencyPairMapping request type. */
export interface GetCurrencyPairMappingListRequest {
}
export interface CurrencyPairMapping {
    /** ID is the unique identifier for this currency pair string. */
    id: bigint;
    /** CurrencyPair is the human-readable representation of the currency pair. */
    currencyPair?: CurrencyPair | undefined;
}
/** GetCurrencyPairMappingResponse is the GetCurrencyPairMapping response type. */
export interface GetCurrencyPairMappingListResponse {
    /**
     * mappings is a list of the id representing the currency pair
     * to the currency pair itself.
     */
    mappings: CurrencyPairMapping[];
}
export declare const GetAllCurrencyPairsRequest: MessageFns<GetAllCurrencyPairsRequest>;
export declare const GetAllCurrencyPairsResponse: MessageFns<GetAllCurrencyPairsResponse>;
export declare const GetPriceRequest: MessageFns<GetPriceRequest>;
export declare const GetPriceResponse: MessageFns<GetPriceResponse>;
export declare const GetPricesRequest: MessageFns<GetPricesRequest>;
export declare const GetPricesResponse: MessageFns<GetPricesResponse>;
export declare const GetCurrencyPairMappingRequest: MessageFns<GetCurrencyPairMappingRequest>;
export declare const GetCurrencyPairMappingResponse: MessageFns<GetCurrencyPairMappingResponse>;
export declare const GetCurrencyPairMappingResponse_CurrencyPairMappingEntry: MessageFns<GetCurrencyPairMappingResponse_CurrencyPairMappingEntry>;
export declare const GetCurrencyPairMappingListRequest: MessageFns<GetCurrencyPairMappingListRequest>;
export declare const CurrencyPairMapping: MessageFns<CurrencyPairMapping>;
export declare const GetCurrencyPairMappingListResponse: MessageFns<GetCurrencyPairMappingListResponse>;
/** Query is the query service for the x/oracle module. */
export interface Query {
    /** Get all the currency pairs the x/oracle module is tracking price-data for. */
    GetAllCurrencyPairs(request: DeepPartial<GetAllCurrencyPairsRequest>, metadata?: grpc.Metadata): Promise<GetAllCurrencyPairsResponse>;
    /**
     * Given a CurrencyPair (or its identifier) return the latest QuotePrice for
     * that CurrencyPair.
     */
    GetPrice(request: DeepPartial<GetPriceRequest>, metadata?: grpc.Metadata): Promise<GetPriceResponse>;
    GetPrices(request: DeepPartial<GetPricesRequest>, metadata?: grpc.Metadata): Promise<GetPricesResponse>;
    /**
     * Get the mapping of currency pair ID -> currency pair. This is useful for
     * indexers that have access to the ID of a currency pair, but no way to get
     * the underlying currency pair from it.
     */
    GetCurrencyPairMapping(request: DeepPartial<GetCurrencyPairMappingRequest>, metadata?: grpc.Metadata): Promise<GetCurrencyPairMappingResponse>;
    /**
     * Get the mapping of currency pair ID <-> currency pair as a list. This is
     * useful for indexers that have access to the ID of a currency pair, but no
     * way to get the underlying currency pair from it.
     */
    GetCurrencyPairMappingList(request: DeepPartial<GetCurrencyPairMappingListRequest>, metadata?: grpc.Metadata): Promise<GetCurrencyPairMappingListResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetAllCurrencyPairs(request: DeepPartial<GetAllCurrencyPairsRequest>, metadata?: grpc.Metadata): Promise<GetAllCurrencyPairsResponse>;
    GetPrice(request: DeepPartial<GetPriceRequest>, metadata?: grpc.Metadata): Promise<GetPriceResponse>;
    GetPrices(request: DeepPartial<GetPricesRequest>, metadata?: grpc.Metadata): Promise<GetPricesResponse>;
    GetCurrencyPairMapping(request: DeepPartial<GetCurrencyPairMappingRequest>, metadata?: grpc.Metadata): Promise<GetCurrencyPairMappingResponse>;
    GetCurrencyPairMappingList(request: DeepPartial<GetCurrencyPairMappingListRequest>, metadata?: grpc.Metadata): Promise<GetCurrencyPairMappingListResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryGetAllCurrencyPairsDesc: UnaryMethodDefinitionish;
export declare const QueryGetPriceDesc: UnaryMethodDefinitionish;
export declare const QueryGetPricesDesc: UnaryMethodDefinitionish;
export declare const QueryGetCurrencyPairMappingDesc: UnaryMethodDefinitionish;
export declare const QueryGetCurrencyPairMappingListDesc: UnaryMethodDefinitionish;
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
