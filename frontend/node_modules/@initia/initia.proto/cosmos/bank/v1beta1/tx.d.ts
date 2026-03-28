import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Coin } from "../../base/v1beta1/coin";
import { Input, Output, Params, SendEnabled } from "./bank";
export declare const protobufPackage = "cosmos.bank.v1beta1";
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
    /**
     * Inputs, despite being `repeated`, only allows one sender input. This is
     * checked in MsgMultiSend's ValidateBasic.
     */
    inputs: Input[];
    outputs: Output[];
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/bank parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params | undefined;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
/**
 * MsgSetSendEnabled is the Msg/SetSendEnabled request type.
 *
 * Only entries to add/update/delete need to be included.
 * Existing SendEnabled entries that are not included in this
 * message are left unchanged.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgSetSendEnabled {
    /** authority is the address that controls the module. */
    authority: string;
    /** send_enabled is the list of entries to add or update. */
    sendEnabled: SendEnabled[];
    /**
     * use_default_for is a list of denoms that should use the params.default_send_enabled value.
     * Denoms listed here will have their SendEnabled entries deleted.
     * If a denom is included that doesn't have a SendEnabled entry,
     * it will be ignored.
     */
    useDefaultFor: string[];
}
/**
 * MsgSetSendEnabledResponse defines the Msg/SetSendEnabled response type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgSetSendEnabledResponse {
}
export declare const MsgSend: MessageFns<MsgSend>;
export declare const MsgSendResponse: MessageFns<MsgSendResponse>;
export declare const MsgMultiSend: MessageFns<MsgMultiSend>;
export declare const MsgMultiSendResponse: MessageFns<MsgMultiSendResponse>;
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse>;
export declare const MsgSetSendEnabled: MessageFns<MsgSetSendEnabled>;
export declare const MsgSetSendEnabledResponse: MessageFns<MsgSetSendEnabledResponse>;
/** Msg defines the bank Msg service. */
export interface Msg {
    /** Send defines a method for sending coins from one account to another account. */
    Send(request: DeepPartial<MsgSend>, metadata?: grpc.Metadata): Promise<MsgSendResponse>;
    /** MultiSend defines a method for sending coins from some accounts to other accounts. */
    MultiSend(request: DeepPartial<MsgMultiSend>, metadata?: grpc.Metadata): Promise<MsgMultiSendResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/bank module parameters.
     * The authority is defined in the keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    /**
     * SetSendEnabled is a governance operation for setting the SendEnabled flag
     * on any number of Denoms. Only the entries to add or update should be
     * included. Entries that already exist in the store, but that aren't
     * included in this message, will be left unchanged.
     *
     * Since: cosmos-sdk 0.47
     */
    SetSendEnabled(request: DeepPartial<MsgSetSendEnabled>, metadata?: grpc.Metadata): Promise<MsgSetSendEnabledResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    Send(request: DeepPartial<MsgSend>, metadata?: grpc.Metadata): Promise<MsgSendResponse>;
    MultiSend(request: DeepPartial<MsgMultiSend>, metadata?: grpc.Metadata): Promise<MsgMultiSendResponse>;
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    SetSendEnabled(request: DeepPartial<MsgSetSendEnabled>, metadata?: grpc.Metadata): Promise<MsgSetSendEnabledResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgSendDesc: UnaryMethodDefinitionish;
export declare const MsgMultiSendDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateParamsDesc: UnaryMethodDefinitionish;
export declare const MsgSetSendEnabledDesc: UnaryMethodDefinitionish;
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
