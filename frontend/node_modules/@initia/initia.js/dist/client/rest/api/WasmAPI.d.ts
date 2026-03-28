import { BaseAPI } from './BaseAPI';
import { AbsoluteTxPosition, AccAddress, AccessConfig, WasmParams } from '../../../core';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
import { ContractCodeHistoryOperationType } from '@initia/initia.proto/cosmwasm/wasm/v1/types';
export interface ContractInfo {
    code_id: number;
    creator: AccAddress;
    admin?: AccAddress;
    label?: string;
    created: AbsoluteTxPosition;
    ibc_port_id: string;
    extension: {
        type_url: string;
        value: string;
    };
}
export declare namespace ContractInfo {
    interface Data {
        code_id: string;
        creator: AccAddress;
        admin?: AccAddress;
        label?: string;
        created: AbsoluteTxPosition.Data;
        ibc_port_id: string;
        extension: {
            type_url: string;
            value: string;
        };
    }
}
export interface ContractCodeHistoryEntry {
    operation: ContractCodeHistoryOperationType;
    code_id: number;
    updated: AbsoluteTxPosition;
    msg: string;
}
export declare namespace ContractCodeHistoryEntry {
    interface Data {
        operation: string;
        code_id: string;
        updated: AbsoluteTxPosition.Data;
        msg: string;
    }
}
export interface Model {
    key: string;
    value: string;
}
export interface CodeInfo {
    code_id: number;
    creator: AccAddress;
    data_hash: string;
    instantiate_permission: AccessConfig;
}
export declare namespace CodeInfo {
    interface Data {
        code_id: string;
        creator: AccAddress;
        data_hash: string;
        instantiate_permission: AccessConfig.Data;
    }
}
export declare class WasmAPI extends BaseAPI {
    contractInfo(address: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<ContractInfo>;
    contractHistory(address: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[ContractCodeHistoryEntry[], Pagination]>;
    contractsByCode(code_id: number, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[string[], Pagination]>;
    allContractState(address: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[Model[], Pagination]>;
    rawContractState(address: AccAddress, query_data: string, params?: APIParams, headers?: Record<string, string>): Promise<string>;
    smartContractState<T>(address: AccAddress, query_data: string, params?: APIParams, headers?: Record<string, string>): Promise<T>;
    codeInfos(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[CodeInfo[], Pagination]>;
    codeInfo(code_id: number, params?: APIParams, headers?: Record<string, string>): Promise<{
        code_info: CodeInfo;
        data: string;
    }>;
    pinnedCodes(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[number[], Pagination]>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<WasmParams>;
    contractsByCreator(creator: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[string[], Pagination]>;
}
