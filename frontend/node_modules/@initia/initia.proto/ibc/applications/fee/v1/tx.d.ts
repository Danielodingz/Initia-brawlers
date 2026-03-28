import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PacketId } from "../../../core/channel/v1/channel";
import { Fee, PacketFee } from "./fee";
export declare const protobufPackage = "ibc.applications.fee.v1";
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayee {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
    /** the relayer address */
    relayer: string;
    /** the payee address */
    payee: string;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponse {
}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayee {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
    /** the relayer address */
    relayer: string;
    /** the counterparty payee address */
    counterpartyPayee: string;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponse {
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFee {
    /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
    fee?: Fee | undefined;
    /** the source port unique identifier */
    sourcePortId: string;
    /** the source channel unique identifer */
    sourceChannelId: string;
    /** account address to refund fee if necessary */
    signer: string;
    /** optional list of relayers permitted to the receive packet fees */
    relayers: string[];
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponse {
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsync {
    /** unique packet identifier comprised of the channel ID, port ID and sequence */
    packetId?: PacketId | undefined;
    /** the packet fee associated with a particular IBC packet */
    packetFee?: PacketFee | undefined;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponse {
}
export declare const MsgRegisterPayee: MessageFns<MsgRegisterPayee>;
export declare const MsgRegisterPayeeResponse: MessageFns<MsgRegisterPayeeResponse>;
export declare const MsgRegisterCounterpartyPayee: MessageFns<MsgRegisterCounterpartyPayee>;
export declare const MsgRegisterCounterpartyPayeeResponse: MessageFns<MsgRegisterCounterpartyPayeeResponse>;
export declare const MsgPayPacketFee: MessageFns<MsgPayPacketFee>;
export declare const MsgPayPacketFeeResponse: MessageFns<MsgPayPacketFeeResponse>;
export declare const MsgPayPacketFeeAsync: MessageFns<MsgPayPacketFeeAsync>;
export declare const MsgPayPacketFeeAsyncResponse: MessageFns<MsgPayPacketFeeAsyncResponse>;
/** Msg defines the ICS29 Msg service. */
export interface Msg {
    /**
     * RegisterPayee defines a rpc handler method for MsgRegisterPayee
     * RegisterPayee is called by the relayer on each channelEnd and allows them to set an optional
     * payee to which reverse and timeout relayer packet fees will be paid out. The payee should be registered on
     * the source chain from which packets originate as this is where fee distribution takes place. This function may be
     * called more than once by a relayer, in which case, the latest payee is always used.
     */
    RegisterPayee(request: DeepPartial<MsgRegisterPayee>, metadata?: grpc.Metadata): Promise<MsgRegisterPayeeResponse>;
    /**
     * RegisterCounterpartyPayee defines a rpc handler method for MsgRegisterCounterpartyPayee
     * RegisterCounterpartyPayee is called by the relayer on each channelEnd and allows them to specify the counterparty
     * payee address before relaying. This ensures they will be properly compensated for forward relaying since
     * the destination chain must include the registered counterparty payee address in the acknowledgement. This function
     * may be called more than once by a relayer, in which case, the latest counterparty payee address is always used.
     */
    RegisterCounterpartyPayee(request: DeepPartial<MsgRegisterCounterpartyPayee>, metadata?: grpc.Metadata): Promise<MsgRegisterCounterpartyPayeeResponse>;
    /**
     * PayPacketFee defines a rpc handler method for MsgPayPacketFee
     * PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to
     * incentivize the relaying of the packet at the next sequence
     * NOTE: This method is intended to be used within a multi msg transaction, where the subsequent msg that follows
     * initiates the lifecycle of the incentivized packet
     */
    PayPacketFee(request: DeepPartial<MsgPayPacketFee>, metadata?: grpc.Metadata): Promise<MsgPayPacketFeeResponse>;
    /**
     * PayPacketFeeAsync defines a rpc handler method for MsgPayPacketFeeAsync
     * PayPacketFeeAsync is an open callback that may be called by any module/user that wishes to escrow funds in order to
     * incentivize the relaying of a known packet (i.e. at a particular sequence)
     */
    PayPacketFeeAsync(request: DeepPartial<MsgPayPacketFeeAsync>, metadata?: grpc.Metadata): Promise<MsgPayPacketFeeAsyncResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterPayee(request: DeepPartial<MsgRegisterPayee>, metadata?: grpc.Metadata): Promise<MsgRegisterPayeeResponse>;
    RegisterCounterpartyPayee(request: DeepPartial<MsgRegisterCounterpartyPayee>, metadata?: grpc.Metadata): Promise<MsgRegisterCounterpartyPayeeResponse>;
    PayPacketFee(request: DeepPartial<MsgPayPacketFee>, metadata?: grpc.Metadata): Promise<MsgPayPacketFeeResponse>;
    PayPacketFeeAsync(request: DeepPartial<MsgPayPacketFeeAsync>, metadata?: grpc.Metadata): Promise<MsgPayPacketFeeAsyncResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgRegisterPayeeDesc: UnaryMethodDefinitionish;
export declare const MsgRegisterCounterpartyPayeeDesc: UnaryMethodDefinitionish;
export declare const MsgPayPacketFeeDesc: UnaryMethodDefinitionish;
export declare const MsgPayPacketFeeAsyncDesc: UnaryMethodDefinitionish;
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
