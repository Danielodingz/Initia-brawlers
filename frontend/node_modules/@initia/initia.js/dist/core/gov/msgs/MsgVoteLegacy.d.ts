import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgVote as MsgVote_pb } from '@initia/initia.proto/cosmos/gov/v1beta1/tx';
import { VoteOption } from '@initia/initia.proto/cosmos/gov/v1beta1/gov';
export declare class MsgVoteLegacy extends JSONSerializable<MsgVoteLegacy.Amino, MsgVoteLegacy.Data, MsgVoteLegacy.Proto> {
    proposal_id: number;
    voter: AccAddress;
    option: VoteOption;
    constructor(proposal_id: number, voter: AccAddress, option: VoteOption);
    static fromAmino(data: MsgVoteLegacy.Amino): MsgVoteLegacy;
    toAmino(): MsgVoteLegacy.Amino;
    static fromData(data: MsgVoteLegacy.Data): MsgVoteLegacy;
    toData(): MsgVoteLegacy.Data;
    static fromProto(proto: MsgVoteLegacy.Proto): MsgVoteLegacy;
    toProto(): MsgVoteLegacy.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgVoteLegacy;
}
export declare namespace MsgVoteLegacy {
    const Option: typeof VoteOption;
    type Option = VoteOption;
    interface Amino {
        type: 'cosmos-sdk/MsgVote';
        value: {
            proposal_id: string;
            voter: AccAddress;
            option: VoteOption;
        };
    }
    interface Data {
        '@type': '/cosmos.gov.v1beta1.MsgVote';
        proposal_id: string;
        voter: AccAddress;
        option: Option;
    }
    type Proto = MsgVote_pb;
}
