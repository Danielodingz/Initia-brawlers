import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
export declare const protobufPackage = "sdk.mempool.v1";
/**
 * GetTxDistributionRequest is the request type for the Service.GetTxDistribution
 * RPC method.
 */
export interface GetTxDistributionRequest {
}
/**
 * GetTxDistributionResponse is the response type for the Service.GetTxDistribution
 * RPC method.
 */
export interface GetTxDistributionResponse {
    /** Distribution is a map of lane to the number of transactions in the mempool for that lane. */
    distribution: Map<string, bigint>;
}
export interface GetTxDistributionResponse_DistributionEntry {
    key: string;
    value: bigint;
}
export declare const GetTxDistributionRequest: MessageFns<GetTxDistributionRequest>;
export declare const GetTxDistributionResponse: MessageFns<GetTxDistributionResponse>;
export declare const GetTxDistributionResponse_DistributionEntry: MessageFns<GetTxDistributionResponse_DistributionEntry>;
/** Service defines the gRPC querier service for the Block SDK mempool. */
export interface Service {
    /** GetTxDistribution returns the distribution of transactions in the mempool. */
    GetTxDistribution(request: DeepPartial<GetTxDistributionRequest>, metadata?: grpc.Metadata): Promise<GetTxDistributionResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetTxDistribution(request: DeepPartial<GetTxDistributionRequest>, metadata?: grpc.Metadata): Promise<GetTxDistributionResponse>;
}
export declare const ServiceDesc: {
    serviceName: string;
};
export declare const ServiceGetTxDistributionDesc: UnaryMethodDefinitionish;
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
