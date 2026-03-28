import { BaseAPI } from './BaseAPI';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
import { OphostParams, Output, BridgeInfo, BatchInfoWithOutput, L1MigrationInfo } from '../../../core';
export interface TokenPair {
    l1_denom: string;
    l2_denom: string;
}
export interface OutputInfo {
    bridge_id?: number;
    output_index: number;
    output_proposal: Output;
}
export declare namespace OutputInfo {
    interface Data {
        bridge_id?: string;
        output_index: string;
        output_proposal: Output.Data;
    }
}
export declare class OphostAPI extends BaseAPI {
    bridgeInfos(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[BridgeInfo[], Pagination]>;
    bridgeInfo(bridge_id: number, params?: APIParams, headers?: Record<string, string>): Promise<BridgeInfo>;
    tokenPairs(bridge_id: number, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[TokenPair[], Pagination]>;
    tokenPairByL1Denom(bridge_id: number, l1_denom: string, params?: APIParams, headers?: Record<string, string>): Promise<TokenPair>;
    tokenPairByL2Denom(bridge_id: number, l2_denom: string, params?: APIParams, headers?: Record<string, string>): Promise<TokenPair>;
    lastFinalizedOutput(bridge_id: number, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<OutputInfo>;
    outputInfos(bridge_id: number, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[OutputInfo[], Pagination]>;
    outputInfo(bridge_id: number, output_index: number, params?: APIParams, headers?: Record<string, string>): Promise<OutputInfo>;
    withdrawalClaimed(bridge_id: number, withdrawal_hash: string, params?: APIParams, headers?: Record<string, string>): Promise<boolean>;
    nextL1Sequence(bridge_id: number, params?: APIParams, headers?: Record<string, string>): Promise<number>;
    batchInfos(bridge_id: number, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[BatchInfoWithOutput[], Pagination]>;
    migrationInfo(bridge_id: number, l1_denom: string, params?: APIParams, headers?: Record<string, string>): Promise<L1MigrationInfo>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<OphostParams>;
}
