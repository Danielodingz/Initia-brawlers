import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { TxResponse } from "../../../cosmos/base/abci/v1beta1/abci";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Tx } from "../../../cosmos/tx/v1beta1/tx";
export declare const protobufPackage = "initia.tx.v1";
/** QueryGasPricesRequest is the request type for the Query/GasPrices RPC method. */
export interface QueryGasPricesRequest {
}
/** QueryGasPricesResponse is the response type for the Query/GasPrices RPC method. */
export interface QueryGasPricesResponse {
    gasPrices: DecCoin[];
}
/** QueryGasPriceRequest is the request type for the Query/GasPrice RPC method. */
export interface QueryGasPriceRequest {
    /** denom defines the denomination of the gas price to query. */
    denom: string;
}
/** QueryGasPriceResponse is the response type for the Query/GasPrice RPC method. */
export interface QueryGasPriceResponse {
    gasPrice?: DecCoin | undefined;
}
/**
 * TxsByEventsRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface TxsByEventsRequest {
    /**
     * page is the page number to query, starts at 1. If not provided, will
     * default to first page.
     */
    page: bigint;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     */
    limit: bigint;
    /**
     * query defines the transaction event query that is proxied to CometBFT's
     * TxsByEvents RPC method. The query must be valid.
     */
    query: string;
}
/**
 * TxsByEventsResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface TxsByEventsResponse {
    /** txs is the list of queried transactions. */
    txs: Tx[];
    /** tx_responses is the list of queried TxResponses. */
    txResponses: TxResponse[];
    /** total is total number of results available */
    total: bigint;
}
export declare const QueryGasPricesRequest: MessageFns<QueryGasPricesRequest>;
export declare const QueryGasPricesResponse: MessageFns<QueryGasPricesResponse>;
export declare const QueryGasPriceRequest: MessageFns<QueryGasPriceRequest>;
export declare const QueryGasPriceResponse: MessageFns<QueryGasPriceResponse>;
export declare const TxsByEventsRequest: MessageFns<TxsByEventsRequest>;
export declare const TxsByEventsResponse: MessageFns<TxsByEventsResponse>;
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** GasPrices returns the gas prices for the network. */
    GasPrices(request: DeepPartial<QueryGasPricesRequest>, metadata?: grpc.Metadata): Promise<QueryGasPricesResponse>;
    /** GasPrice returns the gas price for the network. */
    GasPrice(request: DeepPartial<QueryGasPriceRequest>, metadata?: grpc.Metadata): Promise<QueryGasPriceResponse>;
    /**
     * TxsByEvents fetches transactions by event criteria. This method proxies to CometBFT's TxSearchV2 RPC endpoint
     * to efficiently search and retrieve transactions matching specified event conditions.
     */
    TxsByEvents(request: DeepPartial<TxsByEventsRequest>, metadata?: grpc.Metadata): Promise<TxsByEventsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    GasPrices(request: DeepPartial<QueryGasPricesRequest>, metadata?: grpc.Metadata): Promise<QueryGasPricesResponse>;
    GasPrice(request: DeepPartial<QueryGasPriceRequest>, metadata?: grpc.Metadata): Promise<QueryGasPriceResponse>;
    TxsByEvents(request: DeepPartial<TxsByEventsRequest>, metadata?: grpc.Metadata): Promise<TxsByEventsResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryGasPricesDesc: UnaryMethodDefinitionish;
export declare const QueryGasPriceDesc: UnaryMethodDefinitionish;
export declare const QueryTxsByEventsDesc: UnaryMethodDefinitionish;
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
