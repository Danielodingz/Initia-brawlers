import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
export declare const protobufPackage = "cosmos.base.node.v1beta1";
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
    minimumGasPrice: string;
    pruningKeepRecent: string;
    pruningInterval: string;
    haltHeight: bigint;
}
/** StateRequest defines the request structure for the status of a node. */
export interface StatusRequest {
}
/** StateResponse defines the response structure for the status of a node. */
export interface StatusResponse {
    /** earliest block height available in the store */
    earliestStoreHeight: bigint;
    /** current block height */
    height: bigint;
    /** block height timestamp */
    timestamp?: Date | undefined;
    /** app hash of the current block */
    appHash: Uint8Array;
    /** validator hash provided by the consensus header */
    validatorHash: Uint8Array;
}
export declare const ConfigRequest: MessageFns<ConfigRequest>;
export declare const ConfigResponse: MessageFns<ConfigResponse>;
export declare const StatusRequest: MessageFns<StatusRequest>;
export declare const StatusResponse: MessageFns<StatusResponse>;
/** Service defines the gRPC querier service for node related queries. */
export interface Service {
    /** Config queries for the operator configuration. */
    Config(request: DeepPartial<ConfigRequest>, metadata?: grpc.Metadata): Promise<ConfigResponse>;
    /** Status queries for the node status. */
    Status(request: DeepPartial<StatusRequest>, metadata?: grpc.Metadata): Promise<StatusResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    Config(request: DeepPartial<ConfigRequest>, metadata?: grpc.Metadata): Promise<ConfigResponse>;
    Status(request: DeepPartial<StatusRequest>, metadata?: grpc.Metadata): Promise<StatusResponse>;
}
export declare const ServiceDesc: {
    serviceName: string;
};
export declare const ServiceConfigDesc: UnaryMethodDefinitionish;
export declare const ServiceStatusDesc: UnaryMethodDefinitionish;
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
