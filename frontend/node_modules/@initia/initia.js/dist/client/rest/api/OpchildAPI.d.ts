import { BaseAPI } from './BaseAPI';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
import { OpValidator, ValAddress, OpchildParams, BridgeInfo, L2MigrationInfo } from '../../../core';
export interface MigrationInfoResponse {
    migration_info: L2MigrationInfo;
    ibc_denom: string;
}
export declare namespace MigrationInfoResponse {
    interface Data {
        migration_info: L2MigrationInfo.Data;
        ibc_denom: string;
    }
}
export declare class OpchildAPI extends BaseAPI {
    validators(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[OpValidator[], Pagination]>;
    validator(validator_addr: ValAddress, params?: APIParams, headers?: Record<string, string>): Promise<OpValidator>;
    bridgeInfo(params?: APIParams, headers?: Record<string, string>): Promise<BridgeInfo>;
    nextL1Sequence(params?: APIParams, headers?: Record<string, string>): Promise<number>;
    nextL2Sequence(params?: APIParams, headers?: Record<string, string>): Promise<number>;
    baseDenom(denom: string, params?: APIParams, headers?: Record<string, string>): Promise<string>;
    migrationInfo(denom: string, params?: APIParams, headers?: Record<string, string>): Promise<MigrationInfoResponse>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<OpchildParams>;
}
