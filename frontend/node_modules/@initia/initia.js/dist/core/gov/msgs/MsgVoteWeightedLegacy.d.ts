import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { WeightedVoteOption } from '../Vote';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgVoteWeighted as MsgVoteWeighted_pb } from '@initia/initia.proto/cosmos/gov/v1beta1/tx';
export declare class MsgVoteWeightedLegacy extends JSONSerializable<MsgVoteWeightedLegacy.Amino, MsgVoteWeightedLegacy.Data, MsgVoteWeightedLegacy.Proto> {
    proposal_id: number;
    voter: AccAddress;
    options: WeightedVoteOption[];
    constructor(proposal_id: number, voter: AccAddress, options: WeightedVoteOption[]);
    static fromAmino(data: MsgVoteWeightedLegacy.Amino): MsgVoteWeightedLegacy;
    toAmino(): MsgVoteWeightedLegacy.Amino;
    static fromData(data: MsgVoteWeightedLegacy.Data): MsgVoteWeightedLegacy;
    toData(): MsgVoteWeightedLegacy.Data;
    static fromProto(proto: MsgVoteWeightedLegacy.Proto): MsgVoteWeightedLegacy;
    toProto(): MsgVoteWeightedLegacy.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgVoteWeightedLegacy;
}
export declare namespace MsgVoteWeightedLegacy {
    interface Amino {
        type: 'cosmos-sdk/MsgVoteWeighted';
        value: {
            proposal_id: string;
            voter: AccAddress;
            options: WeightedVoteOption.Amino[] | null;
        };
    }
    interface Data {
        '@type': '/cosmos.gov.v1beta1.MsgVoteWeighted';
        proposal_id: string;
        voter: AccAddress;
        options: WeightedVoteOption.Data[];
    }
    type Proto = MsgVoteWeighted_pb;
}
