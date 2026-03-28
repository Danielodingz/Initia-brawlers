import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Msg } from '../../Msg';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgSubmitProposal as MsgSubmitProposal_pb, Exec as Exec_pb } from '@initia/initia.proto/cosmos/group/v1/tx';
export declare class MsgSubmitGroupProposal extends JSONSerializable<MsgSubmitGroupProposal.Amino, MsgSubmitGroupProposal.Data, MsgSubmitGroupProposal.Proto> {
    group_policy_address: AccAddress;
    proposers: AccAddress[];
    metadata: string;
    messages: Msg[];
    exec: MsgSubmitGroupProposal.Exec;
    title: string;
    summary: string;
    constructor(group_policy_address: AccAddress, proposers: AccAddress[], metadata: string, messages: Msg[], exec: MsgSubmitGroupProposal.Exec, title: string, summary: string);
    static fromAmino(data: MsgSubmitGroupProposal.Amino): MsgSubmitGroupProposal;
    toAmino(): MsgSubmitGroupProposal.Amino;
    static fromData(data: MsgSubmitGroupProposal.Data): MsgSubmitGroupProposal;
    toData(): MsgSubmitGroupProposal.Data;
    static fromProto(data: MsgSubmitGroupProposal.Proto): MsgSubmitGroupProposal;
    toProto(): MsgSubmitGroupProposal.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgSubmitGroupProposal;
}
export declare namespace MsgSubmitGroupProposal {
    type Exec = Exec_pb;
    const Exec: typeof Exec_pb;
    interface Amino {
        type: 'cosmos-sdk/group/MsgSubmitProposal';
        value: {
            group_policy_address: AccAddress;
            proposers: AccAddress[];
            metadata: string;
            messages: Msg.Amino[];
            exec: string;
            title: string;
            summary: string;
        };
    }
    interface Data {
        '@type': '/cosmos.group.v1.MsgSubmitProposal';
        group_policy_address: AccAddress;
        proposers: AccAddress[];
        metadata: string;
        messages: Msg.Data[];
        exec: string;
        title: string;
        summary: string;
    }
    type Proto = MsgSubmitProposal_pb;
}
