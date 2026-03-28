import { BaseAPI } from './BaseAPI';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
export interface ChannelStateResponse {
    port_id: string;
    channel_id: string;
    admin: string;
    relayers: string[];
}
export declare class IbcPermAPI extends BaseAPI {
    channelStates(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[ChannelStateResponse[], Pagination]>;
    channelState(channel_id: string, port_id: string, params?: APIParams, headers?: Record<string, string>): Promise<ChannelStateResponse>;
}
