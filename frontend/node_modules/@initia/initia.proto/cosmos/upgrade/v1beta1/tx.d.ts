import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Plan } from "./upgrade";
export declare const protobufPackage = "cosmos.upgrade.v1beta1";
/** Since: cosmos-sdk 0.46 */
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgrade {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /** plan is the upgrade plan. */
    plan?: Plan | undefined;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponse {
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgrade {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponse {
}
export declare const MsgSoftwareUpgrade: MessageFns<MsgSoftwareUpgrade>;
export declare const MsgSoftwareUpgradeResponse: MessageFns<MsgSoftwareUpgradeResponse>;
export declare const MsgCancelUpgrade: MessageFns<MsgCancelUpgrade>;
export declare const MsgCancelUpgradeResponse: MessageFns<MsgCancelUpgradeResponse>;
/** Msg defines the upgrade Msg service. */
export interface Msg {
    /**
     * SoftwareUpgrade is a governance operation for initiating a software upgrade.
     *
     * Since: cosmos-sdk 0.46
     */
    SoftwareUpgrade(request: DeepPartial<MsgSoftwareUpgrade>, metadata?: grpc.Metadata): Promise<MsgSoftwareUpgradeResponse>;
    /**
     * CancelUpgrade is a governance operation for cancelling a previously
     * approved software upgrade.
     *
     * Since: cosmos-sdk 0.46
     */
    CancelUpgrade(request: DeepPartial<MsgCancelUpgrade>, metadata?: grpc.Metadata): Promise<MsgCancelUpgradeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SoftwareUpgrade(request: DeepPartial<MsgSoftwareUpgrade>, metadata?: grpc.Metadata): Promise<MsgSoftwareUpgradeResponse>;
    CancelUpgrade(request: DeepPartial<MsgCancelUpgrade>, metadata?: grpc.Metadata): Promise<MsgCancelUpgradeResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgSoftwareUpgradeDesc: UnaryMethodDefinitionish;
export declare const MsgCancelUpgradeDesc: UnaryMethodDefinitionish;
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
