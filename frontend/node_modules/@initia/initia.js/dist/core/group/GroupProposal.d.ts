import { JSONSerializable } from '../../util/json';
import { AccAddress } from '../bech32';
import { Msg } from '../Msg';
import { Proposal as Proposal_pb, ProposalStatus, ProposalExecutorResult } from '@initia/initia.proto/cosmos/group/v1/types';
export declare class GroupProposal extends JSONSerializable<GroupProposal.Amino, GroupProposal.Data, GroupProposal.Proto> {
    id: number;
    group_policy_address: AccAddress;
    metadata: string;
    proposers: AccAddress[];
    submit_time: Date;
    group_version: number;
    group_policy_version: number;
    status: ProposalStatus;
    final_tally_result: GroupProposal.FinalTallyResult;
    voting_period_end: Date;
    executor_result: ProposalExecutorResult;
    messages: Msg[];
    title: string;
    summary: string;
    constructor(id: number, group_policy_address: AccAddress, metadata: string, proposers: AccAddress[], submit_time: Date, group_version: number, group_policy_version: number, status: ProposalStatus, final_tally_result: GroupProposal.FinalTallyResult, voting_period_end: Date, executor_result: ProposalExecutorResult, messages: Msg[], title: string, summary: string);
    static fromAmino(data: GroupProposal.Amino): GroupProposal;
    toAmino(): GroupProposal.Amino;
    static fromData(data: GroupProposal.Data): GroupProposal;
    toData(): GroupProposal.Data;
    static fromProto(data: GroupProposal.Proto): GroupProposal;
    toProto(): GroupProposal.Proto;
}
export declare namespace GroupProposal {
    const Status: typeof ProposalStatus;
    type Status = ProposalStatus;
    const ExecutorResult: typeof ProposalExecutorResult;
    type ExecutorResult = ProposalExecutorResult;
    interface FinalTallyResult {
        yes_count: string;
        abstain_count: string;
        no_count: string;
        no_with_veto_count: string;
    }
    interface Amino {
        id: string;
        group_policy_address: AccAddress;
        metadata: string;
        proposers: AccAddress[];
        submit_time: string;
        group_version: string;
        group_policy_version: string;
        status: string;
        final_tally_result: {
            yes_count: string;
            abstain_count: string;
            no_count: string;
            no_with_veto_count: string;
        };
        voting_period_end: string;
        executor_result: string;
        messages: Msg.Amino[];
        title: string;
        summary: string;
    }
    interface Data {
        id: string;
        group_policy_address: AccAddress;
        metadata: string;
        proposers: AccAddress[];
        submit_time: string;
        group_version: string;
        group_policy_version: string;
        status: string;
        final_tally_result: {
            yes_count: string;
            abstain_count: string;
            no_count: string;
            no_with_veto_count: string;
        };
        voting_period_end: string;
        executor_result: string;
        messages: Msg.Data[];
        title: string;
        summary: string;
    }
    type Proto = Proposal_pb;
}
