import { BaseAPI } from './BaseAPI';
import { Proposal, Deposit, Vote, GovParams, TallyResult } from '../../../core';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
export declare class GovAPI extends BaseAPI {
    proposals(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[Proposal[], Pagination]>;
    proposal(proposal_id: number, params?: APIParams, headers?: Record<string, string>): Promise<Proposal>;
    deposits(proposal_id: number, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[Deposit[], Pagination]>;
    votes(proposal_id: number, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[Vote[], Pagination]>;
    tally(proposal_id: number, params?: APIParams, headers?: Record<string, string>): Promise<TallyResult>;
    parameters(params?: APIParams, headers?: Record<string, string>): Promise<GovParams>;
    emergencyProposals(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[Proposal[], Pagination]>;
}
