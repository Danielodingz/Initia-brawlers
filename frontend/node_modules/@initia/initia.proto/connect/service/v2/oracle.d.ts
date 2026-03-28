import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { MarketMap } from "../../marketmap/v2/market";
export declare const protobufPackage = "connect.service.v2";
/** QueryPricesRequest defines the request type for the the Prices method. */
export interface QueryPricesRequest {
}
/** QueryPricesResponse defines the response type for the Prices method. */
export interface QueryPricesResponse {
    /** Prices defines the list of prices. */
    prices: Map<string, string>;
    /** Timestamp defines the timestamp of the prices. */
    timestamp?: Date | undefined;
    /** Version defines the version of the oracle service that provided the prices. */
    version: string;
}
export interface QueryPricesResponse_PricesEntry {
    key: string;
    value: string;
}
/** QueryMarketMapRequest defines the request type for the MarketMap method. */
export interface QueryMarketMapRequest {
}
/** QueryMarketMapResponse defines the response type for the MarketMap method. */
export interface QueryMarketMapResponse {
    /** MarketMap defines the current market map configuration. */
    marketMap?: MarketMap | undefined;
}
/** QueryVersionRequest defines the request type for the Version method. */
export interface QueryVersionRequest {
}
/** QueryVersionResponse defines the response type for the Version method. */
export interface QueryVersionResponse {
    /** Version defines the current version of the oracle service. */
    version: string;
}
export declare const QueryPricesRequest: MessageFns<QueryPricesRequest>;
export declare const QueryPricesResponse: MessageFns<QueryPricesResponse>;
export declare const QueryPricesResponse_PricesEntry: MessageFns<QueryPricesResponse_PricesEntry>;
export declare const QueryMarketMapRequest: MessageFns<QueryMarketMapRequest>;
export declare const QueryMarketMapResponse: MessageFns<QueryMarketMapResponse>;
export declare const QueryVersionRequest: MessageFns<QueryVersionRequest>;
export declare const QueryVersionResponse: MessageFns<QueryVersionResponse>;
/** Oracle defines the gRPC oracle service. */
export interface Oracle {
    /** Prices defines a method for fetching the latest prices. */
    Prices(request: DeepPartial<QueryPricesRequest>, metadata?: grpc.Metadata): Promise<QueryPricesResponse>;
    /**
     * MarketMap defines a method for fetching the latest market map
     * configuration.
     */
    MarketMap(request: DeepPartial<QueryMarketMapRequest>, metadata?: grpc.Metadata): Promise<QueryMarketMapResponse>;
    /**
     * Version defines a method for fetching the current version of the oracle
     * service.
     */
    Version(request: DeepPartial<QueryVersionRequest>, metadata?: grpc.Metadata): Promise<QueryVersionResponse>;
}
export declare class OracleClientImpl implements Oracle {
    private readonly rpc;
    constructor(rpc: Rpc);
    Prices(request: DeepPartial<QueryPricesRequest>, metadata?: grpc.Metadata): Promise<QueryPricesResponse>;
    MarketMap(request: DeepPartial<QueryMarketMapRequest>, metadata?: grpc.Metadata): Promise<QueryMarketMapResponse>;
    Version(request: DeepPartial<QueryVersionRequest>, metadata?: grpc.Metadata): Promise<QueryVersionResponse>;
}
export declare const OracleDesc: {
    serviceName: string;
};
export declare const OraclePricesDesc: UnaryMethodDefinitionish;
export declare const OracleMarketMapDesc: UnaryMethodDefinitionish;
export declare const OracleVersionDesc: UnaryMethodDefinitionish;
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
