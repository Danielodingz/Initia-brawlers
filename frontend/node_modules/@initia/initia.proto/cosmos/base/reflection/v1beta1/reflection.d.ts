import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
export declare const protobufPackage = "cosmos.base.reflection.v1beta1";
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequest {
}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponse {
    /** interface_names is an array of all the registered interfaces. */
    interfaceNames: string[];
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequest {
    /** interface_name defines the interface to query the implementations for. */
    interfaceName: string;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponse {
    implementationMessageNames: string[];
}
export declare const ListAllInterfacesRequest: MessageFns<ListAllInterfacesRequest>;
export declare const ListAllInterfacesResponse: MessageFns<ListAllInterfacesResponse>;
export declare const ListImplementationsRequest: MessageFns<ListImplementationsRequest>;
export declare const ListImplementationsResponse: MessageFns<ListImplementationsResponse>;
/** ReflectionService defines a service for interface reflection. */
export interface ReflectionService {
    /**
     * ListAllInterfaces lists all the interfaces registered in the interface
     * registry.
     */
    ListAllInterfaces(request: DeepPartial<ListAllInterfacesRequest>, metadata?: grpc.Metadata): Promise<ListAllInterfacesResponse>;
    /**
     * ListImplementations list all the concrete types that implement a given
     * interface.
     */
    ListImplementations(request: DeepPartial<ListImplementationsRequest>, metadata?: grpc.Metadata): Promise<ListImplementationsResponse>;
}
export declare class ReflectionServiceClientImpl implements ReflectionService {
    private readonly rpc;
    constructor(rpc: Rpc);
    ListAllInterfaces(request: DeepPartial<ListAllInterfacesRequest>, metadata?: grpc.Metadata): Promise<ListAllInterfacesResponse>;
    ListImplementations(request: DeepPartial<ListImplementationsRequest>, metadata?: grpc.Metadata): Promise<ListImplementationsResponse>;
}
export declare const ReflectionServiceDesc: {
    serviceName: string;
};
export declare const ReflectionServiceListAllInterfacesDesc: UnaryMethodDefinitionish;
export declare const ReflectionServiceListImplementationsDesc: UnaryMethodDefinitionish;
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
