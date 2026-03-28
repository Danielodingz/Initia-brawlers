import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { ModuleOptions } from "./options";
export declare const protobufPackage = "cosmos.autocli.v1";
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequest {
}
/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */
export interface AppOptionsResponse {
    /** module_options is a map of module name to autocli module options. */
    moduleOptions: Map<string, ModuleOptions>;
}
export interface AppOptionsResponse_ModuleOptionsEntry {
    key: string;
    value?: ModuleOptions | undefined;
}
export declare const AppOptionsRequest: MessageFns<AppOptionsRequest>;
export declare const AppOptionsResponse: MessageFns<AppOptionsResponse>;
export declare const AppOptionsResponse_ModuleOptionsEntry: MessageFns<AppOptionsResponse_ModuleOptionsEntry>;
/**
 * RemoteInfoService provides clients with the information they need
 * to build dynamically CLI clients for remote chains.
 */
export interface Query {
    /** AppOptions returns the autocli options for all of the modules in an app. */
    AppOptions(request: DeepPartial<AppOptionsRequest>, metadata?: grpc.Metadata): Promise<AppOptionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    AppOptions(request: DeepPartial<AppOptionsRequest>, metadata?: grpc.Metadata): Promise<AppOptionsResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryAppOptionsDesc: UnaryMethodDefinitionish;
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
