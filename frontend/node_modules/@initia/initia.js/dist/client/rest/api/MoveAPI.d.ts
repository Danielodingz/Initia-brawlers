import { BaseAPI } from './BaseAPI';
import { AccAddress, Denom, Module, MoveParams } from '../../../core';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
export interface Resource {
    address: AccAddress;
    struct_tag: string;
    move_resource: string;
    raw_bytes: string;
}
export interface ABI {
    abi: string;
}
export interface TableEntry {
    address: AccAddress;
    key: string;
    value: string;
}
export interface TableInfo {
    address: AccAddress;
    key_type: string;
    value_type: string;
}
export interface ViewRequest {
    address: AccAddress;
    module_name: string;
    function_name: string;
    type_args: string[];
    args: string[];
}
export interface ViewResponse {
    data: string;
    events: VMEvent[];
    gas_used: string;
}
export interface VMEvent {
    type_tag: string;
    data: string;
}
export declare class MoveAPI extends BaseAPI {
    modules(address: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[Module[], Pagination]>;
    module(address: AccAddress, module_name: string, params?: APIParams, headers?: Record<string, string>): Promise<Module>;
    resources(address: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[{
        type: string;
        data: any;
    }[], Pagination]>;
    resource<T>(address: AccAddress, struct_tag: string, params?: APIParams, headers?: Record<string, string>): Promise<{
        type: string;
        data: T;
    }>;
    tableInfo(address: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<TableInfo>;
    tableEntries(address: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[TableEntry[], Pagination]>;
    tableEntry(address: AccAddress, key_bytes: string, params?: APIParams, headers?: Record<string, string>): Promise<TableEntry>;
    viewFunction<T>(address: AccAddress, module_name: string, function_name: string, type_args?: string[], args?: string[], headers?: Record<string, string>): Promise<T>;
    view(address: AccAddress, module_name: string, function_name: string, type_args?: string[], args?: string[], headers?: Record<string, string>): Promise<ViewResponse>;
    viewBatch(requests: ViewRequest[], headers?: Record<string, string>): Promise<ViewResponse[]>;
    viewJSON(address: AccAddress, module_name: string, function_name: string, type_args?: string[], args?: string[], headers?: Record<string, string>): Promise<ViewResponse>;
    viewBatchJSON(requests: ViewRequest[], headers?: Record<string, string>): Promise<ViewResponse[]>;
    scriptABI(code_bytes: string, headers?: Record<string, string>): Promise<ABI>;
    denom(metadata: string, params?: APIParams, headers?: Record<string, string>): Promise<Denom>;
    metadata(denom: Denom, params?: APIParams, headers?: Record<string, string>): Promise<string>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<MoveParams>;
}
