import { BaseAPI } from './BaseAPI';
import { AccAddress, GroupInfo, GroupMember, GroupPolicyInfo, GroupProposal, GroupVote } from '../../../core';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
export declare class GroupAPI extends BaseAPI {
    groupInfo(group_id: number, params?: APIParams, headers?: Record<string, string>): Promise<GroupInfo>;
    groupPolicyInfo(address: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<GroupPolicyInfo>;
    groupMembers(group_id: number, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[GroupMember[], Pagination]>;
    groupsByAdmin(admin: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[GroupInfo[], Pagination]>;
    groupPoliciesByGroup(group_id: number, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[GroupPolicyInfo[], Pagination]>;
    groupPoliciesByAdmin(admin: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[GroupPolicyInfo[], Pagination]>;
    proposal(proposal_id: number, params?: APIParams, headers?: Record<string, string>): Promise<GroupProposal>;
    proposalsByGroupPolicy(address: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[GroupProposal[], Pagination]>;
    voteByProposalVoter(proposal_id: number, voter: AccAddress, params?: APIParams, headers?: Record<string, string>): Promise<GroupVote>;
    votesByProposal(proposal_id: number, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[GroupVote[], Pagination]>;
    votesByVoter(voter: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[GroupVote[], Pagination]>;
    groupsByMember(address: AccAddress, params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[GroupInfo[], Pagination]>;
    tally(proposal_id: number, params?: APIParams, headers?: Record<string, string>): Promise<GroupProposal.FinalTallyResult>;
    groups(params?: Partial<PaginationOptions & APIParams>, headers?: Record<string, string>): Promise<[GroupInfo[], Pagination]>;
}
