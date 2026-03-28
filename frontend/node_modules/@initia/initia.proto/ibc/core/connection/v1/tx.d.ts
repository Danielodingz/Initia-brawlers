import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Any } from "../../../../google/protobuf/any";
import { Height } from "../../client/v1/client";
import { Counterparty, Params, Version } from "./connection";
export declare const protobufPackage = "ibc.core.connection.v1";
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInit {
    clientId: string;
    counterparty?: Counterparty | undefined;
    version?: Version | undefined;
    delayPeriod: bigint;
    signer: string;
}
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */
export interface MsgConnectionOpenInitResponse {
}
/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */
export interface MsgConnectionOpenTry {
    clientId: string;
    /**
     * Deprecated: this field is unused. Crossing hellos are no longer supported in core IBC.
     *
     * @deprecated
     */
    previousConnectionId: string;
    /** @deprecated */
    clientState?: Any | undefined;
    counterparty?: Counterparty | undefined;
    delayPeriod: bigint;
    counterpartyVersions: Version[];
    proofHeight?: Height | undefined;
    /**
     * proof of the initialization the connection on Chain A: `UNITIALIZED ->
     * INIT`
     */
    proofInit: Uint8Array;
    /**
     * proof of client state included in message
     *
     * @deprecated
     */
    proofClient: Uint8Array;
    /**
     * proof of client consensus state
     *
     * @deprecated
     */
    proofConsensus: Uint8Array;
    /** @deprecated */
    consensusHeight?: Height | undefined;
    signer: string;
    /**
     * optional proof data for host state machines that are unable to introspect their own consensus state
     *
     * @deprecated
     */
    hostConsensusStateProof: Uint8Array;
}
/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponse {
}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAck {
    connectionId: string;
    counterpartyConnectionId: string;
    version?: Version | undefined;
    /** @deprecated */
    clientState?: Any | undefined;
    proofHeight?: Height | undefined;
    /**
     * proof of the initialization the connection on Chain B: `UNITIALIZED ->
     * TRYOPEN`
     */
    proofTry: Uint8Array;
    /**
     * proof of client state included in message
     *
     * @deprecated
     */
    proofClient: Uint8Array;
    /**
     * proof of client consensus state
     *
     * @deprecated
     */
    proofConsensus: Uint8Array;
    /** @deprecated */
    consensusHeight?: Height | undefined;
    signer: string;
    /**
     * optional proof data for host state machines that are unable to introspect their own consensus state
     *
     * @deprecated
     */
    hostConsensusStateProof: Uint8Array;
}
/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponse {
}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirm {
    connectionId: string;
    /** proof for the change of the connection state on Chain A: `INIT -> OPEN` */
    proofAck: Uint8Array;
    proofHeight?: Height | undefined;
    signer: string;
}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponse {
}
/** MsgUpdateParams defines the sdk.Msg type to update the connection parameters. */
export interface MsgUpdateParams {
    /** signer address */
    signer: string;
    /**
     * params defines the connection parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params | undefined;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
export declare const MsgConnectionOpenInit: MessageFns<MsgConnectionOpenInit>;
export declare const MsgConnectionOpenInitResponse: MessageFns<MsgConnectionOpenInitResponse>;
export declare const MsgConnectionOpenTry: MessageFns<MsgConnectionOpenTry>;
export declare const MsgConnectionOpenTryResponse: MessageFns<MsgConnectionOpenTryResponse>;
export declare const MsgConnectionOpenAck: MessageFns<MsgConnectionOpenAck>;
export declare const MsgConnectionOpenAckResponse: MessageFns<MsgConnectionOpenAckResponse>;
export declare const MsgConnectionOpenConfirm: MessageFns<MsgConnectionOpenConfirm>;
export declare const MsgConnectionOpenConfirmResponse: MessageFns<MsgConnectionOpenConfirmResponse>;
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse>;
/** Msg defines the ibc/connection Msg service. */
export interface Msg {
    /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
    ConnectionOpenInit(request: DeepPartial<MsgConnectionOpenInit>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenInitResponse>;
    /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
    ConnectionOpenTry(request: DeepPartial<MsgConnectionOpenTry>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenTryResponse>;
    /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
    ConnectionOpenAck(request: DeepPartial<MsgConnectionOpenAck>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenAckResponse>;
    /**
     * ConnectionOpenConfirm defines a rpc handler method for
     * MsgConnectionOpenConfirm.
     */
    ConnectionOpenConfirm(request: DeepPartial<MsgConnectionOpenConfirm>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenConfirmResponse>;
    /**
     * UpdateConnectionParams defines a rpc handler method for
     * MsgUpdateParams.
     */
    UpdateConnectionParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ConnectionOpenInit(request: DeepPartial<MsgConnectionOpenInit>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenInitResponse>;
    ConnectionOpenTry(request: DeepPartial<MsgConnectionOpenTry>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenTryResponse>;
    ConnectionOpenAck(request: DeepPartial<MsgConnectionOpenAck>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenAckResponse>;
    ConnectionOpenConfirm(request: DeepPartial<MsgConnectionOpenConfirm>, metadata?: grpc.Metadata): Promise<MsgConnectionOpenConfirmResponse>;
    UpdateConnectionParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgConnectionOpenInitDesc: UnaryMethodDefinitionish;
export declare const MsgConnectionOpenTryDesc: UnaryMethodDefinitionish;
export declare const MsgConnectionOpenAckDesc: UnaryMethodDefinitionish;
export declare const MsgConnectionOpenConfirmDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateConnectionParamsDesc: UnaryMethodDefinitionish;
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
