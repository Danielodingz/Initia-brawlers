import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Order } from "../../../../core/channel/v1/channel";
import { InterchainAccountPacketData } from "../../v1/packet";
import { Params } from "./controller";
export declare const protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
/** MsgRegisterInterchainAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccount {
    owner: string;
    connectionId: string;
    version: string;
    ordering: Order;
}
/** MsgRegisterInterchainAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccountResponse {
    channelId: string;
    portId: string;
}
/** MsgSendTx defines the payload for Msg/SendTx */
export interface MsgSendTx {
    owner: string;
    connectionId: string;
    packetData?: InterchainAccountPacketData | undefined;
    /**
     * Relative timeout timestamp provided will be added to the current block time during transaction execution.
     * The timeout timestamp must be non-zero.
     */
    relativeTimeout: bigint;
}
/** MsgSendTxResponse defines the response for MsgSendTx */
export interface MsgSendTxResponse {
    sequence: bigint;
}
/** MsgUpdateParams defines the payload for Msg/UpdateParams */
export interface MsgUpdateParams {
    /** signer address */
    signer: string;
    /**
     * params defines the 27-interchain-accounts/controller parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params | undefined;
}
/** MsgUpdateParamsResponse defines the response for Msg/UpdateParams */
export interface MsgUpdateParamsResponse {
}
export declare const MsgRegisterInterchainAccount: MessageFns<MsgRegisterInterchainAccount>;
export declare const MsgRegisterInterchainAccountResponse: MessageFns<MsgRegisterInterchainAccountResponse>;
export declare const MsgSendTx: MessageFns<MsgSendTx>;
export declare const MsgSendTxResponse: MessageFns<MsgSendTxResponse>;
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse>;
/** Msg defines the 27-interchain-accounts/controller Msg service. */
export interface Msg {
    /** RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount. */
    RegisterInterchainAccount(request: DeepPartial<MsgRegisterInterchainAccount>, metadata?: grpc.Metadata): Promise<MsgRegisterInterchainAccountResponse>;
    /** SendTx defines a rpc handler for MsgSendTx. */
    SendTx(request: DeepPartial<MsgSendTx>, metadata?: grpc.Metadata): Promise<MsgSendTxResponse>;
    /** UpdateParams defines a rpc handler for MsgUpdateParams. */
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterInterchainAccount(request: DeepPartial<MsgRegisterInterchainAccount>, metadata?: grpc.Metadata): Promise<MsgRegisterInterchainAccountResponse>;
    SendTx(request: DeepPartial<MsgSendTx>, metadata?: grpc.Metadata): Promise<MsgSendTxResponse>;
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgRegisterInterchainAccountDesc: UnaryMethodDefinitionish;
export declare const MsgSendTxDesc: UnaryMethodDefinitionish;
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
