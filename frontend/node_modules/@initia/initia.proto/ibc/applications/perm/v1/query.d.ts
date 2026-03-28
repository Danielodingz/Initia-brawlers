import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ChannelState } from "./types";
export declare const protobufPackage = "ibc.applications.perm.v1";
/** QueryChannelStatesRequest is the request type for the Query/ChannelStates RPC method. */
export interface QueryChannelStatesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** QueryChannelStatesResponse is the response type for the Query/ChannelStates RPC method. */
export interface QueryChannelStatesResponse {
    /** channel_states returns all stored ChannelState objects. */
    channelStates: ChannelState[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryChannelStateRequest is the request type for the Query/ChannelState RPC method. */
export interface QueryChannelStateRequest {
    channelId: string;
    portId: string;
}
/** QueryChannelStateResponse is the response type for the Query/ChannelState RPC method. */
export interface QueryChannelStateResponse {
    /** channel_state returns the stored ChannelState object. */
    channelState?: ChannelState | undefined;
}
export declare const QueryChannelStatesRequest: MessageFns<QueryChannelStatesRequest>;
export declare const QueryChannelStatesResponse: MessageFns<QueryChannelStatesResponse>;
export declare const QueryChannelStateRequest: MessageFns<QueryChannelStateRequest>;
export declare const QueryChannelStateResponse: MessageFns<QueryChannelStateResponse>;
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** ChannelStates queries all channel states. */
    ChannelStates(request: DeepPartial<QueryChannelStatesRequest>, metadata?: grpc.Metadata): Promise<QueryChannelStatesResponse>;
    /** ChannelState queries the channel state for the specific port-id:channel-id pair. */
    ChannelState(request: DeepPartial<QueryChannelStateRequest>, metadata?: grpc.Metadata): Promise<QueryChannelStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ChannelStates(request: DeepPartial<QueryChannelStatesRequest>, metadata?: grpc.Metadata): Promise<QueryChannelStatesResponse>;
    ChannelState(request: DeepPartial<QueryChannelStateRequest>, metadata?: grpc.Metadata): Promise<QueryChannelStateResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryChannelStatesDesc: UnaryMethodDefinitionish;
export declare const QueryChannelStateDesc: UnaryMethodDefinitionish;
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
