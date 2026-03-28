import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { FileDescriptorProto } from "../../../google/protobuf/descriptor";
export declare const protobufPackage = "cosmos.reflection.v1";
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequest {
}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponse {
    /** files is the file descriptors. */
    files: FileDescriptorProto[];
}
export declare const FileDescriptorsRequest: MessageFns<FileDescriptorsRequest>;
export declare const FileDescriptorsResponse: MessageFns<FileDescriptorsResponse>;
/**
 * Package cosmos.reflection.v1 provides support for inspecting protobuf
 * file descriptors.
 */
export interface ReflectionService {
    /**
     * FileDescriptors queries all the file descriptors in the app in order
     * to enable easier generation of dynamic clients.
     */
    FileDescriptors(request: DeepPartial<FileDescriptorsRequest>, metadata?: grpc.Metadata): Promise<FileDescriptorsResponse>;
}
export declare class ReflectionServiceClientImpl implements ReflectionService {
    private readonly rpc;
    constructor(rpc: Rpc);
    FileDescriptors(request: DeepPartial<FileDescriptorsRequest>, metadata?: grpc.Metadata): Promise<FileDescriptorsResponse>;
}
export declare const ReflectionServiceDesc: {
    serviceName: string;
};
export declare const ReflectionServiceFileDescriptorsDesc: UnaryMethodDefinitionish;
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
