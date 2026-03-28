import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
export declare const protobufPackage = "initia.intertx.v1";
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountRequest {
    owner: string;
    connectionId: string;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountResponse {
    interchainAccountAddress: string;
}
export declare const QueryInterchainAccountRequest: MessageFns<QueryInterchainAccountRequest>;
export declare const QueryInterchainAccountResponse: MessageFns<QueryInterchainAccountResponse>;
/** Query defines the gRPC querier service. */
export interface Query {
    /** QueryInterchainAccount returns the interchain account for given owner address on a given connection pair */
    InterchainAccount(request: DeepPartial<QueryInterchainAccountRequest>, metadata?: grpc.Metadata): Promise<QueryInterchainAccountResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    InterchainAccount(request: DeepPartial<QueryInterchainAccountRequest>, metadata?: grpc.Metadata): Promise<QueryInterchainAccountResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryInterchainAccountDesc: UnaryMethodDefinitionish;
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
