import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees } from "./fee";
import { FeeEnabledChannel } from "./genesis";
export declare const protobufPackage = "ibc.applications.fee.v1";
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
    /** block height at which to query */
    queryHeight: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponse {
    /** list of identified fees for incentivized packets */
    incentivizedPackets: IdentifiedPacketFees[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequest {
    /** unique packet identifier comprised of channel ID, port ID and sequence */
    packetId?: PacketId | undefined;
    /** block height at which to query */
    queryHeight: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
    /** the identified fees for the incentivized packet */
    incentivizedPacket?: IdentifiedPacketFees | undefined;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
    portId: string;
    channelId: string;
    /** Height to query at */
    queryHeight: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponse {
    /** Map of all incentivized_packets */
    incentivizedPackets: IdentifiedPacketFees[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequest {
    /** the packet identifier for the associated fees */
    packetId?: PacketId | undefined;
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponse {
    /** the total packet receive fees */
    recvFees: Coin[];
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequest {
    /** the packet identifier for the associated fees */
    packetId?: PacketId | undefined;
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponse {
    /** the total packet acknowledgement fees */
    ackFees: Coin[];
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequest {
    /** the packet identifier for the associated fees */
    packetId?: PacketId | undefined;
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponse {
    /** the total packet timeout fees */
    timeoutFees: Coin[];
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequest {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address to which the distribution address is registered */
    relayer: string;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponse {
    /** the payee address to which packet fees are paid out */
    payeeAddress: string;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequest {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address to which the counterparty is registered */
    relayer: string;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponse {
    /** the counterparty payee address used to compensate forward relaying */
    counterpartyPayee: string;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
    /** block height at which to query */
    queryHeight: bigint;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponse {
    /** list of fee enabled channels */
    feeEnabledChannels: FeeEnabledChannel[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequest {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponse {
    /** boolean flag representing the fee enabled channel status */
    feeEnabled: boolean;
}
export declare const QueryIncentivizedPacketsRequest: MessageFns<QueryIncentivizedPacketsRequest>;
export declare const QueryIncentivizedPacketsResponse: MessageFns<QueryIncentivizedPacketsResponse>;
export declare const QueryIncentivizedPacketRequest: MessageFns<QueryIncentivizedPacketRequest>;
export declare const QueryIncentivizedPacketResponse: MessageFns<QueryIncentivizedPacketResponse>;
export declare const QueryIncentivizedPacketsForChannelRequest: MessageFns<QueryIncentivizedPacketsForChannelRequest>;
export declare const QueryIncentivizedPacketsForChannelResponse: MessageFns<QueryIncentivizedPacketsForChannelResponse>;
export declare const QueryTotalRecvFeesRequest: MessageFns<QueryTotalRecvFeesRequest>;
export declare const QueryTotalRecvFeesResponse: MessageFns<QueryTotalRecvFeesResponse>;
export declare const QueryTotalAckFeesRequest: MessageFns<QueryTotalAckFeesRequest>;
export declare const QueryTotalAckFeesResponse: MessageFns<QueryTotalAckFeesResponse>;
export declare const QueryTotalTimeoutFeesRequest: MessageFns<QueryTotalTimeoutFeesRequest>;
export declare const QueryTotalTimeoutFeesResponse: MessageFns<QueryTotalTimeoutFeesResponse>;
export declare const QueryPayeeRequest: MessageFns<QueryPayeeRequest>;
export declare const QueryPayeeResponse: MessageFns<QueryPayeeResponse>;
export declare const QueryCounterpartyPayeeRequest: MessageFns<QueryCounterpartyPayeeRequest>;
export declare const QueryCounterpartyPayeeResponse: MessageFns<QueryCounterpartyPayeeResponse>;
export declare const QueryFeeEnabledChannelsRequest: MessageFns<QueryFeeEnabledChannelsRequest>;
export declare const QueryFeeEnabledChannelsResponse: MessageFns<QueryFeeEnabledChannelsResponse>;
export declare const QueryFeeEnabledChannelRequest: MessageFns<QueryFeeEnabledChannelRequest>;
export declare const QueryFeeEnabledChannelResponse: MessageFns<QueryFeeEnabledChannelResponse>;
/** Query defines the ICS29 gRPC querier service. */
export interface Query {
    /** IncentivizedPackets returns all incentivized packets and their associated fees */
    IncentivizedPackets(request: DeepPartial<QueryIncentivizedPacketsRequest>, metadata?: grpc.Metadata): Promise<QueryIncentivizedPacketsResponse>;
    /** IncentivizedPacket returns all packet fees for a packet given its identifier */
    IncentivizedPacket(request: DeepPartial<QueryIncentivizedPacketRequest>, metadata?: grpc.Metadata): Promise<QueryIncentivizedPacketResponse>;
    /** Gets all incentivized packets for a specific channel */
    IncentivizedPacketsForChannel(request: DeepPartial<QueryIncentivizedPacketsForChannelRequest>, metadata?: grpc.Metadata): Promise<QueryIncentivizedPacketsForChannelResponse>;
    /** TotalRecvFees returns the total receive fees for a packet given its identifier */
    TotalRecvFees(request: DeepPartial<QueryTotalRecvFeesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalRecvFeesResponse>;
    /** TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
    TotalAckFees(request: DeepPartial<QueryTotalAckFeesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalAckFeesResponse>;
    /** TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
    TotalTimeoutFees(request: DeepPartial<QueryTotalTimeoutFeesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalTimeoutFeesResponse>;
    /** Payee returns the registered payee address for a specific channel given the relayer address */
    Payee(request: DeepPartial<QueryPayeeRequest>, metadata?: grpc.Metadata): Promise<QueryPayeeResponse>;
    /** CounterpartyPayee returns the registered counterparty payee for forward relaying */
    CounterpartyPayee(request: DeepPartial<QueryCounterpartyPayeeRequest>, metadata?: grpc.Metadata): Promise<QueryCounterpartyPayeeResponse>;
    /** FeeEnabledChannels returns a list of all fee enabled channels */
    FeeEnabledChannels(request: DeepPartial<QueryFeeEnabledChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryFeeEnabledChannelsResponse>;
    /** FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
    FeeEnabledChannel(request: DeepPartial<QueryFeeEnabledChannelRequest>, metadata?: grpc.Metadata): Promise<QueryFeeEnabledChannelResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    IncentivizedPackets(request: DeepPartial<QueryIncentivizedPacketsRequest>, metadata?: grpc.Metadata): Promise<QueryIncentivizedPacketsResponse>;
    IncentivizedPacket(request: DeepPartial<QueryIncentivizedPacketRequest>, metadata?: grpc.Metadata): Promise<QueryIncentivizedPacketResponse>;
    IncentivizedPacketsForChannel(request: DeepPartial<QueryIncentivizedPacketsForChannelRequest>, metadata?: grpc.Metadata): Promise<QueryIncentivizedPacketsForChannelResponse>;
    TotalRecvFees(request: DeepPartial<QueryTotalRecvFeesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalRecvFeesResponse>;
    TotalAckFees(request: DeepPartial<QueryTotalAckFeesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalAckFeesResponse>;
    TotalTimeoutFees(request: DeepPartial<QueryTotalTimeoutFeesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalTimeoutFeesResponse>;
    Payee(request: DeepPartial<QueryPayeeRequest>, metadata?: grpc.Metadata): Promise<QueryPayeeResponse>;
    CounterpartyPayee(request: DeepPartial<QueryCounterpartyPayeeRequest>, metadata?: grpc.Metadata): Promise<QueryCounterpartyPayeeResponse>;
    FeeEnabledChannels(request: DeepPartial<QueryFeeEnabledChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryFeeEnabledChannelsResponse>;
    FeeEnabledChannel(request: DeepPartial<QueryFeeEnabledChannelRequest>, metadata?: grpc.Metadata): Promise<QueryFeeEnabledChannelResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryIncentivizedPacketsDesc: UnaryMethodDefinitionish;
export declare const QueryIncentivizedPacketDesc: UnaryMethodDefinitionish;
export declare const QueryIncentivizedPacketsForChannelDesc: UnaryMethodDefinitionish;
export declare const QueryTotalRecvFeesDesc: UnaryMethodDefinitionish;
export declare const QueryTotalAckFeesDesc: UnaryMethodDefinitionish;
export declare const QueryTotalTimeoutFeesDesc: UnaryMethodDefinitionish;
export declare const QueryPayeeDesc: UnaryMethodDefinitionish;
export declare const QueryCounterpartyPayeeDesc: UnaryMethodDefinitionish;
export declare const QueryFeeEnabledChannelsDesc: UnaryMethodDefinitionish;
export declare const QueryFeeEnabledChannelDesc: UnaryMethodDefinitionish;
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
