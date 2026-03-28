import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { MemoEntry } from "./memo";
export declare const protobufPackage = "noble.forwarding.v1";
export interface QueryDenoms {
}
export interface QueryDenomsResponse {
    allowedDenoms: string[];
}
export interface QueryAddress {
    channel: string;
    recipient: string;
    fallback: string;
}
export interface QueryAddressResponse {
    address: string;
    exists: boolean;
}
export interface QueryStats {
}
export interface QueryStatsResponse {
    stats: Map<string, Stats>;
}
export interface QueryStatsResponse_StatsEntry {
    key: string;
    value?: Stats | undefined;
}
export interface QueryStatsByChannel {
    channel: string;
}
export interface QueryStatsByChannelResponse {
    numOfAccounts: bigint;
    numOfForwards: bigint;
    totalForwarded: Coin[];
}
export interface Stats {
    chainId: string;
    numOfAccounts: bigint;
    numOfForwards: bigint;
    totalForwarded: Coin[];
}
export interface QueryMemo {
    address: string;
    denom: string;
}
export interface QueryMemoResponse {
    memo: string;
}
export interface QueryMemos {
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryMemosResponse {
    memos: MemoEntry[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export declare const QueryDenoms: MessageFns<QueryDenoms>;
export declare const QueryDenomsResponse: MessageFns<QueryDenomsResponse>;
export declare const QueryAddress: MessageFns<QueryAddress>;
export declare const QueryAddressResponse: MessageFns<QueryAddressResponse>;
export declare const QueryStats: MessageFns<QueryStats>;
export declare const QueryStatsResponse: MessageFns<QueryStatsResponse>;
export declare const QueryStatsResponse_StatsEntry: MessageFns<QueryStatsResponse_StatsEntry>;
export declare const QueryStatsByChannel: MessageFns<QueryStatsByChannel>;
export declare const QueryStatsByChannelResponse: MessageFns<QueryStatsByChannelResponse>;
export declare const Stats: MessageFns<Stats>;
export declare const QueryMemo: MessageFns<QueryMemo>;
export declare const QueryMemoResponse: MessageFns<QueryMemoResponse>;
export declare const QueryMemos: MessageFns<QueryMemos>;
export declare const QueryMemosResponse: MessageFns<QueryMemosResponse>;
export interface Query {
    Denoms(request: DeepPartial<QueryDenoms>, metadata?: grpc.Metadata): Promise<QueryDenomsResponse>;
    Address(request: DeepPartial<QueryAddress>, metadata?: grpc.Metadata): Promise<QueryAddressResponse>;
    Stats(request: DeepPartial<QueryStats>, metadata?: grpc.Metadata): Promise<QueryStatsResponse>;
    StatsByChannel(request: DeepPartial<QueryStatsByChannel>, metadata?: grpc.Metadata): Promise<QueryStatsByChannelResponse>;
    GetMemo(request: DeepPartial<QueryMemo>, metadata?: grpc.Metadata): Promise<QueryMemoResponse>;
    GetMemos(request: DeepPartial<QueryMemos>, metadata?: grpc.Metadata): Promise<QueryMemosResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Denoms(request: DeepPartial<QueryDenoms>, metadata?: grpc.Metadata): Promise<QueryDenomsResponse>;
    Address(request: DeepPartial<QueryAddress>, metadata?: grpc.Metadata): Promise<QueryAddressResponse>;
    Stats(request: DeepPartial<QueryStats>, metadata?: grpc.Metadata): Promise<QueryStatsResponse>;
    StatsByChannel(request: DeepPartial<QueryStatsByChannel>, metadata?: grpc.Metadata): Promise<QueryStatsByChannelResponse>;
    GetMemo(request: DeepPartial<QueryMemo>, metadata?: grpc.Metadata): Promise<QueryMemoResponse>;
    GetMemos(request: DeepPartial<QueryMemos>, metadata?: grpc.Metadata): Promise<QueryMemosResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryDenomsDesc: UnaryMethodDefinitionish;
export declare const QueryAddressDesc: UnaryMethodDefinitionish;
export declare const QueryStatsDesc: UnaryMethodDefinitionish;
export declare const QueryStatsByChannelDesc: UnaryMethodDefinitionish;
export declare const QueryGetMemoDesc: UnaryMethodDefinitionish;
export declare const QueryGetMemosDesc: UnaryMethodDefinitionish;
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
