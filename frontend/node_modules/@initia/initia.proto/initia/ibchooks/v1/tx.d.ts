import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Params } from "./types";
export declare const protobufPackage = "initia.ibchooks.v1";
/** MsgUpdateACL is the message to update ACL of an address. */
export interface MsgUpdateACL {
    /**
     * authority is the address that controls the module
     * (defaults to x/gov unless overwritten).
     */
    authority: string;
    /** Address is a contract address (wasm, evm) or a contract deployer address (move). */
    address: string;
    /** Allowed is the flag whether this address is allowed to use hook or not. */
    allowed: boolean;
}
/** MsgUpdateACLResponse returns execution result data. */
export interface MsgUpdateACLResponse {
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /**
     * authority is the address that controls the module
     * (defaults to x/gov unless overwritten).
     */
    authority: string;
    /**
     * params defines the x/hook parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params | undefined;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export declare const MsgUpdateACL: MessageFns<MsgUpdateACL>;
export declare const MsgUpdateACLResponse: MessageFns<MsgUpdateACLResponse>;
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse>;
/** Msg defines the hook Msg service. */
export interface Msg {
    /** UpdateACL update ACL of an address. */
    UpdateACL(request: DeepPartial<MsgUpdateACL>, metadata?: grpc.Metadata): Promise<MsgUpdateACLResponse>;
    /**
     * UpdateParams defines an operation for updating the x/hook module
     * parameters.
     */
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdateACL(request: DeepPartial<MsgUpdateACL>, metadata?: grpc.Metadata): Promise<MsgUpdateACLResponse>;
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgUpdateACLDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateParamsDesc: UnaryMethodDefinitionish;
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
