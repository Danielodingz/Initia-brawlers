import { JSONSerializable } from '../../util/json';
import { AccAddress } from '../bech32';
import { Vote as Vote_pb, VoteOption } from '@initia/initia.proto/cosmos/group/v1/types';
export declare class GroupVote extends JSONSerializable<GroupVote.Amino, GroupVote.Data, GroupVote.Proto> {
    proposal_id: number;
    voter: AccAddress;
    option: VoteOption;
    metadata: string;
    submit_time: Date;
    constructor(proposal_id: number, voter: AccAddress, option: VoteOption, metadata: string, submit_time: Date);
    static fromAmino(data: GroupVote.Amino): GroupVote;
    toAmino(): GroupVote.Amino;
    static fromData(data: GroupVote.Data): GroupVote;
    toData(): GroupVote.Data;
    static fromProto(data: GroupVote.Proto): GroupVote;
    toProto(): GroupVote.Proto;
}
export declare namespace GroupVote {
    type Option = VoteOption;
    const Option: typeof VoteOption;
    interface Amino {
        proposal_id: string;
        voter: AccAddress;
        option: string;
        metadata: string;
        submit_time: string;
    }
    interface Data {
        proposal_id: string;
        voter: AccAddress;
        option: string;
        metadata: string;
        submit_time: string;
    }
    type Proto = Vote_pb;
}
