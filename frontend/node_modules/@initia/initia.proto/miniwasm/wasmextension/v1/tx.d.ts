import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { AccessConfig } from "./types";
export declare const protobufPackage = "miniwasm.wasmextension.v1";
/** MsgStoreCodeAdmin submit Wasm code to the system with admin permission */
export interface MsgStoreCodeAdmin {
    /** Authority is the actor that signed the messages */
    authority: string;
    /** Creator is the actor that created the code */
    creator: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /**
     * InstantiatePermission access control to apply on contract creation,
     * optional
     */
    instantiatePermission?: AccessConfig | undefined;
}
/** MsgStoreCodeAdminResponse returns store result data. */
export interface MsgStoreCodeAdminResponse {
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
}
export declare const MsgStoreCodeAdmin: MessageFns<MsgStoreCodeAdmin>;
export declare const MsgStoreCodeAdminResponse: MessageFns<MsgStoreCodeAdminResponse>;
/** Msg defines the wasm Msg service. */
export interface Msg {
    /** StoreCodeAdmin to submit Wasm code to the system with admin permission */
    StoreCodeAdmin(request: DeepPartial<MsgStoreCodeAdmin>, metadata?: grpc.Metadata): Promise<MsgStoreCodeAdminResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    StoreCodeAdmin(request: DeepPartial<MsgStoreCodeAdmin>, metadata?: grpc.Metadata): Promise<MsgStoreCodeAdminResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgStoreCodeAdminDesc: UnaryMethodDefinitionish;
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
