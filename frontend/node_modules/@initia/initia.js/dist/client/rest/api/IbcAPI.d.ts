import { BaseAPI } from './BaseAPI';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
import { IdentifiedClientState, Channel, IdentifiedConnection, Height, IbcClientParams, IdentifiedChannel, ConsensusStateWithHeight } from '../../../core';
export interface ClientState {
    client_state: any;
    proof: string | null;
    proof_height: Height;
}
export declare namespace ClientState {
    interface Data {
        client_state: any;
        proof: string | null;
        proof_height: Height.Data;
    }
}
export interface Port {
    channel: Channel;
    proof: string;
    proof_height: Height;
}
export declare namespace Port {
    interface Data {
        channel: Channel.Data;
        proof: string;
        proof_height: Height.Data;
    }
}
export declare class IbcAPI extends BaseAPI {
    channels(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[IdentifiedChannel[], Height, Pagination]>;
    port(channel_id: string, port_id: string, params?: APIParams, headers?: Record<string, string>): Promise<Port>;
    connections(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[IdentifiedConnection[], Pagination]>;
    connection(connection_id: string, params?: APIParams, headers?: Record<string, string>): Promise<IdentifiedConnection>;
    connectionChannels(connection_id: string, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[IdentifiedChannel[], Height, Pagination]>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<IbcClientParams>;
    clientStates(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[IdentifiedClientState[], Pagination]>;
    clientState(client_id: string, params?: APIParams, headers?: Record<string, string>): Promise<ClientState>;
    clientStatus(client_id: string, params?: APIParams, headers?: Record<string, string>): Promise<string>;
    consensusStates(client_id: string, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[ConsensusStateWithHeight[], Pagination]>;
    consensusStateHeights(client_id: string, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[Height[], Pagination]>;
    unreceivedPackets(port_id: string, channel_id: string, sequences: number[], params?: APIParams, headers?: Record<string, string>): Promise<{
        sequences: string[];
        height: Height;
    }>;
    unreceivedAcks(port_id: string, channel_id: string, sequences: number[], params?: APIParams, headers?: Record<string, string>): Promise<{
        sequences: string[];
        height: Height;
    }>;
}
