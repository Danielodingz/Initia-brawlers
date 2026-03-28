import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
export declare const protobufPackage = "ibc.lightclients.wasm.v1";
/** MsgStoreCode defines the request type for the StoreCode rpc. */
export interface MsgStoreCode {
    /** signer address */
    signer: string;
    /** wasm byte code of light client contract. It can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
}
/** MsgStoreCodeResponse defines the response type for the StoreCode rpc */
export interface MsgStoreCodeResponse {
    /** checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
}
/** MsgRemoveChecksum defines the request type for the MsgRemoveChecksum rpc. */
export interface MsgRemoveChecksum {
    /** signer address */
    signer: string;
    /** checksum is the sha256 hash to be removed from the store */
    checksum: Uint8Array;
}
/** MsgStoreChecksumResponse defines the response type for the StoreCode rpc */
export interface MsgRemoveChecksumResponse {
}
/** MsgMigrateContract defines the request type for the MigrateContract rpc. */
export interface MsgMigrateContract {
    /** signer address */
    signer: string;
    /** the client id of the contract */
    clientId: string;
    /** checksum is the sha256 hash of the new wasm byte code for the contract */
    checksum: Uint8Array;
    /** the json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
/** MsgMigrateContractResponse defines the response type for the MigrateContract rpc */
export interface MsgMigrateContractResponse {
}
export declare const MsgStoreCode: MessageFns<MsgStoreCode>;
export declare const MsgStoreCodeResponse: MessageFns<MsgStoreCodeResponse>;
export declare const MsgRemoveChecksum: MessageFns<MsgRemoveChecksum>;
export declare const MsgRemoveChecksumResponse: MessageFns<MsgRemoveChecksumResponse>;
export declare const MsgMigrateContract: MessageFns<MsgMigrateContract>;
export declare const MsgMigrateContractResponse: MessageFns<MsgMigrateContractResponse>;
/** Msg defines the ibc/08-wasm Msg service. */
export interface Msg {
    /** StoreCode defines a rpc handler method for MsgStoreCode. */
    StoreCode(request: DeepPartial<MsgStoreCode>, metadata?: grpc.Metadata): Promise<MsgStoreCodeResponse>;
    /** RemoveChecksum defines a rpc handler method for MsgRemoveChecksum. */
    RemoveChecksum(request: DeepPartial<MsgRemoveChecksum>, metadata?: grpc.Metadata): Promise<MsgRemoveChecksumResponse>;
    /** MigrateContract defines a rpc handler method for MsgMigrateContract. */
    MigrateContract(request: DeepPartial<MsgMigrateContract>, metadata?: grpc.Metadata): Promise<MsgMigrateContractResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    StoreCode(request: DeepPartial<MsgStoreCode>, metadata?: grpc.Metadata): Promise<MsgStoreCodeResponse>;
    RemoveChecksum(request: DeepPartial<MsgRemoveChecksum>, metadata?: grpc.Metadata): Promise<MsgRemoveChecksumResponse>;
    MigrateContract(request: DeepPartial<MsgMigrateContract>, metadata?: grpc.Metadata): Promise<MsgMigrateContractResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgStoreCodeDesc: UnaryMethodDefinitionish;
export declare const MsgRemoveChecksumDesc: UnaryMethodDefinitionish;
export declare const MsgMigrateContractDesc: UnaryMethodDefinitionish;
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
