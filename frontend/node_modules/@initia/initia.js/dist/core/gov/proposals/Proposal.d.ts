import { JSONSerializable } from '../../../util/json';
import { Coins } from '../../Coins';
import { AccAddress } from '../../bech32';
import { Msg } from '../../Msg';
import { TallyResult } from '../TallyResult';
import { ProposalStatus } from '@initia/initia.proto/cosmos/gov/v1/gov';
import { Proposal as Proposal_pb } from '@initia/initia.proto/initia/gov/v1/gov';
export declare class Proposal extends JSONSerializable<Proposal.Amino, Proposal.Data, Proposal.Proto> {
    id: number;
    messages: Msg[];
    status: ProposalStatus;
    final_tally_result: TallyResult;
    submit_time: Date;
    deposit_end_time: Date;
    voting_start_time: Date;
    voting_end_time: Date;
    emergency_start_time: Date;
    emergency_next_tally_time: Date;
    metadata: string;
    title: string;
    summary: string;
    proposer: AccAddress;
    expedited: boolean;
    emergency: boolean;
    failed_reason: string;
    total_deposit: Coins;
    constructor(id: number, messages: Msg[], status: ProposalStatus, final_tally_result: TallyResult, submit_time: Date, deposit_end_time: Date, total_deposit: Coins.Input, voting_start_time: Date, voting_end_time: Date, emergency_start_time: Date, emergency_next_tally_time: Date, metadata: string, title: string, summary: string, proposer: AccAddress, expedited: boolean, emergency: boolean, failed_reason: string);
    static fromAmino(data: Proposal.Amino): Proposal;
    toAmino(): Proposal.Amino;
    static fromData(data: Proposal.Data): Proposal;
    toData(): Proposal.Data;
    static fromProto(data: Proposal.Proto): Proposal;
    toProto(): Proposal.Proto;
}
export declare namespace Proposal {
    const Status: typeof ProposalStatus;
    type Status = ProposalStatus;
    interface Amino {
        id: string;
        messages: Msg.Amino[];
        status: string;
        final_tally_result: TallyResult.Amino;
        submit_time: string;
        deposit_end_time: string;
        total_deposit: Coins.Amino | null;
        voting_start_time: string;
        voting_end_time: string;
        emergency_start_time: string;
        emergency_next_tally_time: string;
        metadata: string;
        title: string;
        summary: string;
        proposer: AccAddress;
        expedited: boolean;
        emergency: boolean;
        failed_reason: string;
    }
    interface Data {
        id: string;
        messages: Msg.Data[];
        status: string;
        final_tally_result: TallyResult.Data;
        submit_time: string;
        deposit_end_time: string;
        total_deposit: Coins.Data;
        voting_start_time: string;
        voting_end_time: string;
        emergency_start_time: string;
        emergency_next_tally_time: string;
        metadata: string;
        title: string;
        summary: string;
        proposer: AccAddress;
        expedited: boolean;
        emergency: boolean;
        failed_reason: string;
    }
    type Proto = Proposal_pb;
}
