import { AccAddress, AccessTuple, EvmParams, SetCodeAuthorization } from '../../../core';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
import { BaseAPI } from './BaseAPI';
export interface TraceOptions {
    with_memory: boolean;
    with_stack: boolean;
    with_storage: boolean;
    with_return_data: boolean;
}
export interface ERC721ClassInfo {
    class_id: string;
    class_name: string;
    class_uri: string;
    class_descs: string;
}
export interface ERC721TokenInfo {
    token_origin_id: string;
    token_uri: string;
}
export interface CallResponse {
    response: string;
    used_gas: string;
    logs: {
        address: AccAddress;
        topics: string[];
        data: string;
    }[];
    trace_output: string;
    error: string;
}
export declare class EvmAPI extends BaseAPI {
    code(contract_addr: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<string>;
    state(contract_addr: AccAddress, key: string, params?: APIParams, headers?: Record<string, string>): Promise<string>;
    erc20Factory(params?: APIParams, headers?: Record<string, string>): Promise<string>;
    erc20Wrapper(params?: APIParams, headers?: Record<string, string>): Promise<string>;
    connectOracle(params?: APIParams, headers?: Record<string, string>): Promise<string>;
    contractAddrByDenom(denom: string, params?: APIParams, headers?: Record<string, string>): Promise<AccAddress>;
    erc721ClassId(contract_addr: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<string>;
    erc721ClassInfos(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[ERC721ClassInfo[], Pagination]>;
    erc721ClassInfo(class_id: string, params?: APIParams, headers?: Record<string, string>): Promise<ERC721ClassInfo>;
    erc721TokenInfo(class_id: string, token_id: string, params?: APIParams, headers?: Record<string, string>): Promise<ERC721TokenInfo>;
    denom(contract_addr: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<string>;
    call(sender: AccAddress, contract_addr: AccAddress, input: string, value: string, access_list: AccessTuple[] | undefined, trace_options: TraceOptions | undefined, auth_list: SetCodeAuthorization[], headers?: Record<string, string>): Promise<CallResponse>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<EvmParams>;
}
