import { BaseAPI } from './BaseAPI';
import { Plan } from '../../../core';
import { APIParams, PaginationOptions } from '../APIRequester';
export interface ModuleVersion {
    name: string;
    version: number;
}
export declare namespace ModuleVersion {
    interface Data {
        name: string;
        version: string;
    }
}
export declare class UpgradeAPI extends BaseAPI {
    appliedPlan(name: string, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<number>;
    currentPlan(params?: APIParams, headers?: Record<string, string>): Promise<Plan | undefined>;
    moduleVersions(params?: APIParams, headers?: Record<string, string>): Promise<ModuleVersion[]>;
}
