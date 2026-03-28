import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Channel, IdentifiedChannel, PacketState, Params } from "./channel";
import { ErrorReceipt, Upgrade } from "./upgrade";
export declare const protobufPackage = "ibc.core.channel.v1";
/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponse {
    /** channel associated with the request identifiers */
    channel?: Channel | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height | undefined;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequest {
    /** pagination request */
    pagination?: PageRequest | undefined;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponse {
    /** list of stored channels of the chain. */
    channels: IdentifiedChannel[];
    /** pagination response */
    pagination?: PageResponse | undefined;
    /** query block height */
    height?: Height | undefined;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequest {
    /** connection unique identifier */
    connection: string;
    /** pagination request */
    pagination?: PageRequest | undefined;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponse {
    /** list of channels associated with a connection. */
    channels: IdentifiedChannel[];
    /** pagination response */
    pagination?: PageResponse | undefined;
    /** query block height */
    height?: Height | undefined;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponse {
    /** client state associated with the channel */
    identifiedClientState?: IdentifiedClientState | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height | undefined;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** revision number of the consensus state */
    revisionNumber: bigint;
    /** revision height of the consensus state */
    revisionHeight: bigint;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponse {
    /** consensus state associated with the channel */
    consensusState?: Any | undefined;
    /** client ID associated with the consensus state */
    clientId: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height | undefined;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: bigint;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponse {
    /** packet associated with the request fields */
    commitment: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height | undefined;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** pagination request */
    pagination?: PageRequest | undefined;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponse {
    commitments: PacketState[];
    /** pagination response */
    pagination?: PageResponse | undefined;
    /** query block height */
    height?: Height | undefined;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: bigint;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponse {
    /** success flag for if receipt exists */
    received: boolean;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height | undefined;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: bigint;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponse {
    /** packet associated with the request fields */
    acknowledgement: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height | undefined;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** pagination request */
    pagination?: PageRequest | undefined;
    /** list of packet sequences */
    packetCommitmentSequences: bigint[];
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponse {
    acknowledgements: PacketState[];
    /** pagination response */
    pagination?: PageResponse | undefined;
    /** query block height */
    height?: Height | undefined;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** list of packet sequences */
    packetCommitmentSequences: bigint[];
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponse {
    /** list of unreceived packet sequences */
    sequences: bigint[];
    /** query block height */
    height?: Height | undefined;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** list of acknowledgement sequences */
    packetAckSequences: bigint[];
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponse {
    /** list of unreceived acknowledgement sequences */
    sequences: bigint[];
    /** query block height */
    height?: Height | undefined;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
/**
 * QuerySequenceResponse is the response type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponse {
    /** next sequence receive number */
    nextSequenceReceive: bigint;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height | undefined;
}
/**
 * QueryNextSequenceSendRequest is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
/**
 * QueryNextSequenceSendResponse is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendResponse {
    /** next sequence send number */
    nextSequenceSend: bigint;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height | undefined;
}
/** QueryUpgradeErrorRequest is the request type for the Query/QueryUpgradeError RPC method */
export interface QueryUpgradeErrorRequest {
    portId: string;
    channelId: string;
}
/** QueryUpgradeErrorResponse is the response type for the Query/QueryUpgradeError RPC method */
export interface QueryUpgradeErrorResponse {
    errorReceipt?: ErrorReceipt | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height | undefined;
}
/** QueryUpgradeRequest is the request type for the QueryUpgradeRequest RPC method */
export interface QueryUpgradeRequest {
    portId: string;
    channelId: string;
}
/** QueryUpgradeResponse is the response type for the QueryUpgradeResponse RPC method */
export interface QueryUpgradeResponse {
    upgrade?: Upgrade | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height | undefined;
}
/** QueryChannelParamsRequest is the request type for the Query/ChannelParams RPC method. */
export interface QueryChannelParamsRequest {
}
/** QueryChannelParamsResponse is the response type for the Query/ChannelParams RPC method. */
export interface QueryChannelParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params | undefined;
}
export declare const QueryChannelRequest: MessageFns<QueryChannelRequest>;
export declare const QueryChannelResponse: MessageFns<QueryChannelResponse>;
export declare const QueryChannelsRequest: MessageFns<QueryChannelsRequest>;
export declare const QueryChannelsResponse: MessageFns<QueryChannelsResponse>;
export declare const QueryConnectionChannelsRequest: MessageFns<QueryConnectionChannelsRequest>;
export declare const QueryConnectionChannelsResponse: MessageFns<QueryConnectionChannelsResponse>;
export declare const QueryChannelClientStateRequest: MessageFns<QueryChannelClientStateRequest>;
export declare const QueryChannelClientStateResponse: MessageFns<QueryChannelClientStateResponse>;
export declare const QueryChannelConsensusStateRequest: MessageFns<QueryChannelConsensusStateRequest>;
export declare const QueryChannelConsensusStateResponse: MessageFns<QueryChannelConsensusStateResponse>;
export declare const QueryPacketCommitmentRequest: MessageFns<QueryPacketCommitmentRequest>;
export declare const QueryPacketCommitmentResponse: MessageFns<QueryPacketCommitmentResponse>;
export declare const QueryPacketCommitmentsRequest: MessageFns<QueryPacketCommitmentsRequest>;
export declare const QueryPacketCommitmentsResponse: MessageFns<QueryPacketCommitmentsResponse>;
export declare const QueryPacketReceiptRequest: MessageFns<QueryPacketReceiptRequest>;
export declare const QueryPacketReceiptResponse: MessageFns<QueryPacketReceiptResponse>;
export declare const QueryPacketAcknowledgementRequest: MessageFns<QueryPacketAcknowledgementRequest>;
export declare const QueryPacketAcknowledgementResponse: MessageFns<QueryPacketAcknowledgementResponse>;
export declare const QueryPacketAcknowledgementsRequest: MessageFns<QueryPacketAcknowledgementsRequest>;
export declare const QueryPacketAcknowledgementsResponse: MessageFns<QueryPacketAcknowledgementsResponse>;
export declare const QueryUnreceivedPacketsRequest: MessageFns<QueryUnreceivedPacketsRequest>;
export declare const QueryUnreceivedPacketsResponse: MessageFns<QueryUnreceivedPacketsResponse>;
export declare const QueryUnreceivedAcksRequest: MessageFns<QueryUnreceivedAcksRequest>;
export declare const QueryUnreceivedAcksResponse: MessageFns<QueryUnreceivedAcksResponse>;
export declare const QueryNextSequenceReceiveRequest: MessageFns<QueryNextSequenceReceiveRequest>;
export declare const QueryNextSequenceReceiveResponse: MessageFns<QueryNextSequenceReceiveResponse>;
export declare const QueryNextSequenceSendRequest: MessageFns<QueryNextSequenceSendRequest>;
export declare const QueryNextSequenceSendResponse: MessageFns<QueryNextSequenceSendResponse>;
export declare const QueryUpgradeErrorRequest: MessageFns<QueryUpgradeErrorRequest>;
export declare const QueryUpgradeErrorResponse: MessageFns<QueryUpgradeErrorResponse>;
export declare const QueryUpgradeRequest: MessageFns<QueryUpgradeRequest>;
export declare const QueryUpgradeResponse: MessageFns<QueryUpgradeResponse>;
export declare const QueryChannelParamsRequest: MessageFns<QueryChannelParamsRequest>;
export declare const QueryChannelParamsResponse: MessageFns<QueryChannelParamsResponse>;
/** Query provides defines the gRPC querier service */
export interface Query {
    /** Channel queries an IBC Channel. */
    Channel(request: DeepPartial<QueryChannelRequest>, metadata?: grpc.Metadata): Promise<QueryChannelResponse>;
    /** Channels queries all the IBC channels of a chain. */
    Channels(request: DeepPartial<QueryChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryChannelsResponse>;
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    ConnectionChannels(request: DeepPartial<QueryConnectionChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionChannelsResponse>;
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    ChannelClientState(request: DeepPartial<QueryChannelClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryChannelClientStateResponse>;
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    ChannelConsensusState(request: DeepPartial<QueryChannelConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryChannelConsensusStateResponse>;
    /** PacketCommitment queries a stored packet commitment hash. */
    PacketCommitment(request: DeepPartial<QueryPacketCommitmentRequest>, metadata?: grpc.Metadata): Promise<QueryPacketCommitmentResponse>;
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    PacketCommitments(request: DeepPartial<QueryPacketCommitmentsRequest>, metadata?: grpc.Metadata): Promise<QueryPacketCommitmentsResponse>;
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    PacketReceipt(request: DeepPartial<QueryPacketReceiptRequest>, metadata?: grpc.Metadata): Promise<QueryPacketReceiptResponse>;
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
    PacketAcknowledgement(request: DeepPartial<QueryPacketAcknowledgementRequest>, metadata?: grpc.Metadata): Promise<QueryPacketAcknowledgementResponse>;
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    PacketAcknowledgements(request: DeepPartial<QueryPacketAcknowledgementsRequest>, metadata?: grpc.Metadata): Promise<QueryPacketAcknowledgementsResponse>;
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    UnreceivedPackets(request: DeepPartial<QueryUnreceivedPacketsRequest>, metadata?: grpc.Metadata): Promise<QueryUnreceivedPacketsResponse>;
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    UnreceivedAcks(request: DeepPartial<QueryUnreceivedAcksRequest>, metadata?: grpc.Metadata): Promise<QueryUnreceivedAcksResponse>;
    /** NextSequenceReceive returns the next receive sequence for a given channel. */
    NextSequenceReceive(request: DeepPartial<QueryNextSequenceReceiveRequest>, metadata?: grpc.Metadata): Promise<QueryNextSequenceReceiveResponse>;
    /** NextSequenceSend returns the next send sequence for a given channel. */
    NextSequenceSend(request: DeepPartial<QueryNextSequenceSendRequest>, metadata?: grpc.Metadata): Promise<QueryNextSequenceSendResponse>;
    /** UpgradeError returns the error receipt if the upgrade handshake failed. */
    UpgradeError(request: DeepPartial<QueryUpgradeErrorRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradeErrorResponse>;
    /** Upgrade returns the upgrade for a given port and channel id. */
    Upgrade(request: DeepPartial<QueryUpgradeRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradeResponse>;
    /** ChannelParams queries all parameters of the ibc channel submodule. */
    ChannelParams(request: DeepPartial<QueryChannelParamsRequest>, metadata?: grpc.Metadata): Promise<QueryChannelParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Channel(request: DeepPartial<QueryChannelRequest>, metadata?: grpc.Metadata): Promise<QueryChannelResponse>;
    Channels(request: DeepPartial<QueryChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryChannelsResponse>;
    ConnectionChannels(request: DeepPartial<QueryConnectionChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionChannelsResponse>;
    ChannelClientState(request: DeepPartial<QueryChannelClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryChannelClientStateResponse>;
    ChannelConsensusState(request: DeepPartial<QueryChannelConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryChannelConsensusStateResponse>;
    PacketCommitment(request: DeepPartial<QueryPacketCommitmentRequest>, metadata?: grpc.Metadata): Promise<QueryPacketCommitmentResponse>;
    PacketCommitments(request: DeepPartial<QueryPacketCommitmentsRequest>, metadata?: grpc.Metadata): Promise<QueryPacketCommitmentsResponse>;
    PacketReceipt(request: DeepPartial<QueryPacketReceiptRequest>, metadata?: grpc.Metadata): Promise<QueryPacketReceiptResponse>;
    PacketAcknowledgement(request: DeepPartial<QueryPacketAcknowledgementRequest>, metadata?: grpc.Metadata): Promise<QueryPacketAcknowledgementResponse>;
    PacketAcknowledgements(request: DeepPartial<QueryPacketAcknowledgementsRequest>, metadata?: grpc.Metadata): Promise<QueryPacketAcknowledgementsResponse>;
    UnreceivedPackets(request: DeepPartial<QueryUnreceivedPacketsRequest>, metadata?: grpc.Metadata): Promise<QueryUnreceivedPacketsResponse>;
    UnreceivedAcks(request: DeepPartial<QueryUnreceivedAcksRequest>, metadata?: grpc.Metadata): Promise<QueryUnreceivedAcksResponse>;
    NextSequenceReceive(request: DeepPartial<QueryNextSequenceReceiveRequest>, metadata?: grpc.Metadata): Promise<QueryNextSequenceReceiveResponse>;
    NextSequenceSend(request: DeepPartial<QueryNextSequenceSendRequest>, metadata?: grpc.Metadata): Promise<QueryNextSequenceSendResponse>;
    UpgradeError(request: DeepPartial<QueryUpgradeErrorRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradeErrorResponse>;
    Upgrade(request: DeepPartial<QueryUpgradeRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradeResponse>;
    ChannelParams(request: DeepPartial<QueryChannelParamsRequest>, metadata?: grpc.Metadata): Promise<QueryChannelParamsResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryChannelDesc: UnaryMethodDefinitionish;
export declare const QueryChannelsDesc: UnaryMethodDefinitionish;
export declare const QueryConnectionChannelsDesc: UnaryMethodDefinitionish;
export declare const QueryChannelClientStateDesc: UnaryMethodDefinitionish;
export declare const QueryChannelConsensusStateDesc: UnaryMethodDefinitionish;
export declare const QueryPacketCommitmentDesc: UnaryMethodDefinitionish;
export declare const QueryPacketCommitmentsDesc: UnaryMethodDefinitionish;
export declare const QueryPacketReceiptDesc: UnaryMethodDefinitionish;
export declare const QueryPacketAcknowledgementDesc: UnaryMethodDefinitionish;
export declare const QueryPacketAcknowledgementsDesc: UnaryMethodDefinitionish;
export declare const QueryUnreceivedPacketsDesc: UnaryMethodDefinitionish;
export declare const QueryUnreceivedAcksDesc: UnaryMethodDefinitionish;
export declare const QueryNextSequenceReceiveDesc: UnaryMethodDefinitionish;
export declare const QueryNextSequenceSendDesc: UnaryMethodDefinitionish;
export declare const QueryUpgradeErrorDesc: UnaryMethodDefinitionish;
export declare const QueryUpgradeDesc: UnaryMethodDefinitionish;
export declare const QueryChannelParamsDesc: UnaryMethodDefinitionish;
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
