import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
export declare const protobufPackage = "ibc.applications.perm.v1";
/**
 * MsgUpdateAdmin defines msg to set permissioned relyer for
 * the specific ibc channel.
 */
export interface MsgUpdateAdmin {
    /**
     * authority is the address that controls the module
     * (defaults to x/gov unless overwritten).
     */
    authority: string;
    channelId: string;
    portId: string;
    admin: string;
}
/** MsgUpdateAdminResponse defines the Msg/UpdateAdmin response type. */
export interface MsgUpdateAdminResponse {
}
/**
 * MsgUpdatePermissionedRelayers defines msg to set permissioned relyer for
 * the specific ibc channel.
 */
export interface MsgUpdatePermissionedRelayers {
    /**
     * authority is the address that controls the module
     * (defaults to x/gov unless overwritten).
     */
    authority: string;
    channelId: string;
    portId: string;
    relayers: string[];
}
/** MsgUpdatePermissionedRelayersResponse defines the Msg/UpdatePermissionedRelayers response type. */
export interface MsgUpdatePermissionedRelayersResponse {
}
export declare const MsgUpdateAdmin: MessageFns<MsgUpdateAdmin>;
export declare const MsgUpdateAdminResponse: MessageFns<MsgUpdateAdminResponse>;
export declare const MsgUpdatePermissionedRelayers: MessageFns<MsgUpdatePermissionedRelayers>;
export declare const MsgUpdatePermissionedRelayersResponse: MessageFns<MsgUpdatePermissionedRelayersResponse>;
/** Msg defines the ibc/perm Msg service */
export interface Msg {
    /** UpdateAdmin defines a rpc handler method for MsgUpdateAdmin. */
    UpdateAdmin(request: DeepPartial<MsgUpdateAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateAdminResponse>;
    /** UpdatePermissionedRelayers defines a rpc handler method for MsgUpdatePermissionedRelayers. */
    UpdatePermissionedRelayers(request: DeepPartial<MsgUpdatePermissionedRelayers>, metadata?: grpc.Metadata): Promise<MsgUpdatePermissionedRelayersResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdateAdmin(request: DeepPartial<MsgUpdateAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateAdminResponse>;
    UpdatePermissionedRelayers(request: DeepPartial<MsgUpdatePermissionedRelayers>, metadata?: grpc.Metadata): Promise<MsgUpdatePermissionedRelayersResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgUpdateAdminDesc: UnaryMethodDefinitionish;
export declare const MsgUpdatePermissionedRelayersDesc: UnaryMethodDefinitionish;
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
