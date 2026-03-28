import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Height } from "../../client/v1/client";
import { Channel, Packet, Params, State } from "./channel";
import { ErrorReceipt, Upgrade, UpgradeFields } from "./upgrade";
export declare const protobufPackage = "ibc.core.channel.v1";
/** ResponseResultType defines the possible outcomes of the execution of a message */
export declare enum ResponseResultType {
    /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
    RESPONSE_RESULT_TYPE_UNSPECIFIED = 0,
    /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
    RESPONSE_RESULT_TYPE_NOOP = 1,
    /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
    RESPONSE_RESULT_TYPE_SUCCESS = 2,
    /** RESPONSE_RESULT_TYPE_FAILURE - The message was executed unsuccessfully */
    RESPONSE_RESULT_TYPE_FAILURE = 3,
    UNRECOGNIZED = -1
}
export declare function responseResultTypeFromJSON(object: any): ResponseResultType;
export declare function responseResultTypeToJSON(object: ResponseResultType): string;
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
    portId: string;
    channel?: Channel | undefined;
    signer: string;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {
    channelId: string;
    version: string;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 */
export interface MsgChannelOpenTry {
    portId: string;
    /**
     * Deprecated: this field is unused. Crossing hello's are no longer supported in core IBC.
     *
     * @deprecated
     */
    previousChannelId: string;
    /** NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC. */
    channel?: Channel | undefined;
    counterpartyVersion: string;
    proofInit: Uint8Array;
    proofHeight?: Height | undefined;
    signer: string;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {
    version: string;
    channelId: string;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 * WARNING: a channel upgrade MUST NOT initialize an upgrade for this channel
 * in the same block as executing this message otherwise the counterparty will
 * be incapable of opening.
 */
export interface MsgChannelOpenAck {
    portId: string;
    channelId: string;
    counterpartyChannelId: string;
    counterpartyVersion: string;
    proofTry: Uint8Array;
    proofHeight?: Height | undefined;
    signer: string;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
    portId: string;
    channelId: string;
    proofAck: Uint8Array;
    proofHeight?: Height | undefined;
    signer: string;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
    portId: string;
    channelId: string;
    signer: string;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
    portId: string;
    channelId: string;
    proofInit: Uint8Array;
    proofHeight?: Height | undefined;
    signer: string;
    counterpartyUpgradeSequence: bigint;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
    packet?: Packet | undefined;
    proofCommitment: Uint8Array;
    proofHeight?: Height | undefined;
    signer: string;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {
    result: ResponseResultType;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
    packet?: Packet | undefined;
    proofUnreceived: Uint8Array;
    proofHeight?: Height | undefined;
    nextSequenceRecv: bigint;
    signer: string;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {
    result: ResponseResultType;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
    packet?: Packet | undefined;
    proofUnreceived: Uint8Array;
    proofClose: Uint8Array;
    proofHeight?: Height | undefined;
    nextSequenceRecv: bigint;
    signer: string;
    counterpartyUpgradeSequence: bigint;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {
    result: ResponseResultType;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
    packet?: Packet | undefined;
    acknowledgement: Uint8Array;
    proofAcked: Uint8Array;
    proofHeight?: Height | undefined;
    signer: string;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {
    result: ResponseResultType;
}
/**
 * MsgChannelUpgradeInit defines the request type for the ChannelUpgradeInit rpc
 * WARNING: Initializing a channel upgrade in the same block as opening the channel
 * may result in the counterparty being incapable of opening.
 */
export interface MsgChannelUpgradeInit {
    portId: string;
    channelId: string;
    fields?: UpgradeFields | undefined;
    signer: string;
}
/** MsgChannelUpgradeInitResponse defines the MsgChannelUpgradeInit response type */
export interface MsgChannelUpgradeInitResponse {
    upgrade?: Upgrade | undefined;
    upgradeSequence: bigint;
}
/** MsgChannelUpgradeTry defines the request type for the ChannelUpgradeTry rpc */
export interface MsgChannelUpgradeTry {
    portId: string;
    channelId: string;
    proposedUpgradeConnectionHops: string[];
    counterpartyUpgradeFields?: UpgradeFields | undefined;
    counterpartyUpgradeSequence: bigint;
    proofChannel: Uint8Array;
    proofUpgrade: Uint8Array;
    proofHeight?: Height | undefined;
    signer: string;
}
/** MsgChannelUpgradeTryResponse defines the MsgChannelUpgradeTry response type */
export interface MsgChannelUpgradeTryResponse {
    upgrade?: Upgrade | undefined;
    upgradeSequence: bigint;
    result: ResponseResultType;
}
/** MsgChannelUpgradeAck defines the request type for the ChannelUpgradeAck rpc */
export interface MsgChannelUpgradeAck {
    portId: string;
    channelId: string;
    counterpartyUpgrade?: Upgrade | undefined;
    proofChannel: Uint8Array;
    proofUpgrade: Uint8Array;
    proofHeight?: Height | undefined;
    signer: string;
}
/** MsgChannelUpgradeAckResponse defines MsgChannelUpgradeAck response type */
export interface MsgChannelUpgradeAckResponse {
    result: ResponseResultType;
}
/** MsgChannelUpgradeConfirm defines the request type for the ChannelUpgradeConfirm rpc */
export interface MsgChannelUpgradeConfirm {
    portId: string;
    channelId: string;
    counterpartyChannelState: State;
    counterpartyUpgrade?: Upgrade | undefined;
    proofChannel: Uint8Array;
    proofUpgrade: Uint8Array;
    proofHeight?: Height | undefined;
    signer: string;
}
/** MsgChannelUpgradeConfirmResponse defines MsgChannelUpgradeConfirm response type */
export interface MsgChannelUpgradeConfirmResponse {
    result: ResponseResultType;
}
/** MsgChannelUpgradeOpen defines the request type for the ChannelUpgradeOpen rpc */
export interface MsgChannelUpgradeOpen {
    portId: string;
    channelId: string;
    counterpartyChannelState: State;
    counterpartyUpgradeSequence: bigint;
    proofChannel: Uint8Array;
    proofHeight?: Height | undefined;
    signer: string;
}
/** MsgChannelUpgradeOpenResponse defines the MsgChannelUpgradeOpen response type */
export interface MsgChannelUpgradeOpenResponse {
}
/** MsgChannelUpgradeTimeout defines the request type for the ChannelUpgradeTimeout rpc */
export interface MsgChannelUpgradeTimeout {
    portId: string;
    channelId: string;
    counterpartyChannel?: Channel | undefined;
    proofChannel: Uint8Array;
    proofHeight?: Height | undefined;
    signer: string;
}
/** MsgChannelUpgradeTimeoutRepsonse defines the MsgChannelUpgradeTimeout response type */
export interface MsgChannelUpgradeTimeoutResponse {
}
/** MsgChannelUpgradeCancel defines the request type for the ChannelUpgradeCancel rpc */
export interface MsgChannelUpgradeCancel {
    portId: string;
    channelId: string;
    errorReceipt?: ErrorReceipt | undefined;
    proofErrorReceipt: Uint8Array;
    proofHeight?: Height | undefined;
    signer: string;
}
/** MsgChannelUpgradeCancelResponse defines the MsgChannelUpgradeCancel response type */
export interface MsgChannelUpgradeCancelResponse {
}
/** MsgUpdateParams is the MsgUpdateParams request type. */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the channel parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params | undefined;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
/** MsgPruneAcknowledgements defines the request type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgements {
    portId: string;
    channelId: string;
    limit: bigint;
    signer: string;
}
/** MsgPruneAcknowledgementsResponse defines the response type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgementsResponse {
    /** Number of sequences pruned (includes both packet acknowledgements and packet receipts where appropriate). */
    totalPrunedSequences: bigint;
    /** Number of sequences left after pruning. */
    totalRemainingSequences: bigint;
}
export declare const MsgChannelOpenInit: MessageFns<MsgChannelOpenInit>;
export declare const MsgChannelOpenInitResponse: MessageFns<MsgChannelOpenInitResponse>;
export declare const MsgChannelOpenTry: MessageFns<MsgChannelOpenTry>;
export declare const MsgChannelOpenTryResponse: MessageFns<MsgChannelOpenTryResponse>;
export declare const MsgChannelOpenAck: MessageFns<MsgChannelOpenAck>;
export declare const MsgChannelOpenAckResponse: MessageFns<MsgChannelOpenAckResponse>;
export declare const MsgChannelOpenConfirm: MessageFns<MsgChannelOpenConfirm>;
export declare const MsgChannelOpenConfirmResponse: MessageFns<MsgChannelOpenConfirmResponse>;
export declare const MsgChannelCloseInit: MessageFns<MsgChannelCloseInit>;
export declare const MsgChannelCloseInitResponse: MessageFns<MsgChannelCloseInitResponse>;
export declare const MsgChannelCloseConfirm: MessageFns<MsgChannelCloseConfirm>;
export declare const MsgChannelCloseConfirmResponse: MessageFns<MsgChannelCloseConfirmResponse>;
export declare const MsgRecvPacket: MessageFns<MsgRecvPacket>;
export declare const MsgRecvPacketResponse: MessageFns<MsgRecvPacketResponse>;
export declare const MsgTimeout: MessageFns<MsgTimeout>;
export declare const MsgTimeoutResponse: MessageFns<MsgTimeoutResponse>;
export declare const MsgTimeoutOnClose: MessageFns<MsgTimeoutOnClose>;
export declare const MsgTimeoutOnCloseResponse: MessageFns<MsgTimeoutOnCloseResponse>;
export declare const MsgAcknowledgement: MessageFns<MsgAcknowledgement>;
export declare const MsgAcknowledgementResponse: MessageFns<MsgAcknowledgementResponse>;
export declare const MsgChannelUpgradeInit: MessageFns<MsgChannelUpgradeInit>;
export declare const MsgChannelUpgradeInitResponse: MessageFns<MsgChannelUpgradeInitResponse>;
export declare const MsgChannelUpgradeTry: MessageFns<MsgChannelUpgradeTry>;
export declare const MsgChannelUpgradeTryResponse: MessageFns<MsgChannelUpgradeTryResponse>;
export declare const MsgChannelUpgradeAck: MessageFns<MsgChannelUpgradeAck>;
export declare const MsgChannelUpgradeAckResponse: MessageFns<MsgChannelUpgradeAckResponse>;
export declare const MsgChannelUpgradeConfirm: MessageFns<MsgChannelUpgradeConfirm>;
export declare const MsgChannelUpgradeConfirmResponse: MessageFns<MsgChannelUpgradeConfirmResponse>;
export declare const MsgChannelUpgradeOpen: MessageFns<MsgChannelUpgradeOpen>;
export declare const MsgChannelUpgradeOpenResponse: MessageFns<MsgChannelUpgradeOpenResponse>;
export declare const MsgChannelUpgradeTimeout: MessageFns<MsgChannelUpgradeTimeout>;
export declare const MsgChannelUpgradeTimeoutResponse: MessageFns<MsgChannelUpgradeTimeoutResponse>;
export declare const MsgChannelUpgradeCancel: MessageFns<MsgChannelUpgradeCancel>;
export declare const MsgChannelUpgradeCancelResponse: MessageFns<MsgChannelUpgradeCancelResponse>;
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse>;
export declare const MsgPruneAcknowledgements: MessageFns<MsgPruneAcknowledgements>;
export declare const MsgPruneAcknowledgementsResponse: MessageFns<MsgPruneAcknowledgementsResponse>;
/** Msg defines the ibc/channel Msg service. */
export interface Msg {
    /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
    ChannelOpenInit(request: DeepPartial<MsgChannelOpenInit>, metadata?: grpc.Metadata): Promise<MsgChannelOpenInitResponse>;
    /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
    ChannelOpenTry(request: DeepPartial<MsgChannelOpenTry>, metadata?: grpc.Metadata): Promise<MsgChannelOpenTryResponse>;
    /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
    ChannelOpenAck(request: DeepPartial<MsgChannelOpenAck>, metadata?: grpc.Metadata): Promise<MsgChannelOpenAckResponse>;
    /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
    ChannelOpenConfirm(request: DeepPartial<MsgChannelOpenConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelOpenConfirmResponse>;
    /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
    ChannelCloseInit(request: DeepPartial<MsgChannelCloseInit>, metadata?: grpc.Metadata): Promise<MsgChannelCloseInitResponse>;
    /**
     * ChannelCloseConfirm defines a rpc handler method for
     * MsgChannelCloseConfirm.
     */
    ChannelCloseConfirm(request: DeepPartial<MsgChannelCloseConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelCloseConfirmResponse>;
    /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
    RecvPacket(request: DeepPartial<MsgRecvPacket>, metadata?: grpc.Metadata): Promise<MsgRecvPacketResponse>;
    /** Timeout defines a rpc handler method for MsgTimeout. */
    Timeout(request: DeepPartial<MsgTimeout>, metadata?: grpc.Metadata): Promise<MsgTimeoutResponse>;
    /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
    TimeoutOnClose(request: DeepPartial<MsgTimeoutOnClose>, metadata?: grpc.Metadata): Promise<MsgTimeoutOnCloseResponse>;
    /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
    Acknowledgement(request: DeepPartial<MsgAcknowledgement>, metadata?: grpc.Metadata): Promise<MsgAcknowledgementResponse>;
    /** ChannelUpgradeInit defines a rpc handler method for MsgChannelUpgradeInit. */
    ChannelUpgradeInit(request: DeepPartial<MsgChannelUpgradeInit>, metadata?: grpc.Metadata): Promise<MsgChannelUpgradeInitResponse>;
    /** ChannelUpgradeTry defines a rpc handler method for MsgChannelUpgradeTry. */
    ChannelUpgradeTry(request: DeepPartial<MsgChannelUpgradeTry>, metadata?: grpc.Metadata): Promise<MsgChannelUpgradeTryResponse>;
    /** ChannelUpgradeAck defines a rpc handler method for MsgChannelUpgradeAck. */
    ChannelUpgradeAck(request: DeepPartial<MsgChannelUpgradeAck>, metadata?: grpc.Metadata): Promise<MsgChannelUpgradeAckResponse>;
    /** ChannelUpgradeConfirm defines a rpc handler method for MsgChannelUpgradeConfirm. */
    ChannelUpgradeConfirm(request: DeepPartial<MsgChannelUpgradeConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelUpgradeConfirmResponse>;
    /** ChannelUpgradeOpen defines a rpc handler method for MsgChannelUpgradeOpen. */
    ChannelUpgradeOpen(request: DeepPartial<MsgChannelUpgradeOpen>, metadata?: grpc.Metadata): Promise<MsgChannelUpgradeOpenResponse>;
    /** ChannelUpgradeTimeout defines a rpc handler method for MsgChannelUpgradeTimeout. */
    ChannelUpgradeTimeout(request: DeepPartial<MsgChannelUpgradeTimeout>, metadata?: grpc.Metadata): Promise<MsgChannelUpgradeTimeoutResponse>;
    /** ChannelUpgradeCancel defines a rpc handler method for MsgChannelUpgradeCancel. */
    ChannelUpgradeCancel(request: DeepPartial<MsgChannelUpgradeCancel>, metadata?: grpc.Metadata): Promise<MsgChannelUpgradeCancelResponse>;
    /** UpdateChannelParams defines a rpc handler method for MsgUpdateParams. */
    UpdateChannelParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    /** PruneAcknowledgements defines a rpc handler method for MsgPruneAcknowledgements. */
    PruneAcknowledgements(request: DeepPartial<MsgPruneAcknowledgements>, metadata?: grpc.Metadata): Promise<MsgPruneAcknowledgementsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ChannelOpenInit(request: DeepPartial<MsgChannelOpenInit>, metadata?: grpc.Metadata): Promise<MsgChannelOpenInitResponse>;
    ChannelOpenTry(request: DeepPartial<MsgChannelOpenTry>, metadata?: grpc.Metadata): Promise<MsgChannelOpenTryResponse>;
    ChannelOpenAck(request: DeepPartial<MsgChannelOpenAck>, metadata?: grpc.Metadata): Promise<MsgChannelOpenAckResponse>;
    ChannelOpenConfirm(request: DeepPartial<MsgChannelOpenConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelOpenConfirmResponse>;
    ChannelCloseInit(request: DeepPartial<MsgChannelCloseInit>, metadata?: grpc.Metadata): Promise<MsgChannelCloseInitResponse>;
    ChannelCloseConfirm(request: DeepPartial<MsgChannelCloseConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelCloseConfirmResponse>;
    RecvPacket(request: DeepPartial<MsgRecvPacket>, metadata?: grpc.Metadata): Promise<MsgRecvPacketResponse>;
    Timeout(request: DeepPartial<MsgTimeout>, metadata?: grpc.Metadata): Promise<MsgTimeoutResponse>;
    TimeoutOnClose(request: DeepPartial<MsgTimeoutOnClose>, metadata?: grpc.Metadata): Promise<MsgTimeoutOnCloseResponse>;
    Acknowledgement(request: DeepPartial<MsgAcknowledgement>, metadata?: grpc.Metadata): Promise<MsgAcknowledgementResponse>;
    ChannelUpgradeInit(request: DeepPartial<MsgChannelUpgradeInit>, metadata?: grpc.Metadata): Promise<MsgChannelUpgradeInitResponse>;
    ChannelUpgradeTry(request: DeepPartial<MsgChannelUpgradeTry>, metadata?: grpc.Metadata): Promise<MsgChannelUpgradeTryResponse>;
    ChannelUpgradeAck(request: DeepPartial<MsgChannelUpgradeAck>, metadata?: grpc.Metadata): Promise<MsgChannelUpgradeAckResponse>;
    ChannelUpgradeConfirm(request: DeepPartial<MsgChannelUpgradeConfirm>, metadata?: grpc.Metadata): Promise<MsgChannelUpgradeConfirmResponse>;
    ChannelUpgradeOpen(request: DeepPartial<MsgChannelUpgradeOpen>, metadata?: grpc.Metadata): Promise<MsgChannelUpgradeOpenResponse>;
    ChannelUpgradeTimeout(request: DeepPartial<MsgChannelUpgradeTimeout>, metadata?: grpc.Metadata): Promise<MsgChannelUpgradeTimeoutResponse>;
    ChannelUpgradeCancel(request: DeepPartial<MsgChannelUpgradeCancel>, metadata?: grpc.Metadata): Promise<MsgChannelUpgradeCancelResponse>;
    UpdateChannelParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    PruneAcknowledgements(request: DeepPartial<MsgPruneAcknowledgements>, metadata?: grpc.Metadata): Promise<MsgPruneAcknowledgementsResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgChannelOpenInitDesc: UnaryMethodDefinitionish;
export declare const MsgChannelOpenTryDesc: UnaryMethodDefinitionish;
export declare const MsgChannelOpenAckDesc: UnaryMethodDefinitionish;
export declare const MsgChannelOpenConfirmDesc: UnaryMethodDefinitionish;
export declare const MsgChannelCloseInitDesc: UnaryMethodDefinitionish;
export declare const MsgChannelCloseConfirmDesc: UnaryMethodDefinitionish;
export declare const MsgRecvPacketDesc: UnaryMethodDefinitionish;
export declare const MsgTimeoutDesc: UnaryMethodDefinitionish;
export declare const MsgTimeoutOnCloseDesc: UnaryMethodDefinitionish;
export declare const MsgAcknowledgementDesc: UnaryMethodDefinitionish;
export declare const MsgChannelUpgradeInitDesc: UnaryMethodDefinitionish;
export declare const MsgChannelUpgradeTryDesc: UnaryMethodDefinitionish;
export declare const MsgChannelUpgradeAckDesc: UnaryMethodDefinitionish;
export declare const MsgChannelUpgradeConfirmDesc: UnaryMethodDefinitionish;
export declare const MsgChannelUpgradeOpenDesc: UnaryMethodDefinitionish;
export declare const MsgChannelUpgradeTimeoutDesc: UnaryMethodDefinitionish;
export declare const MsgChannelUpgradeCancelDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateChannelParamsDesc: UnaryMethodDefinitionish;
export declare const MsgPruneAcknowledgementsDesc: UnaryMethodDefinitionish;
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
