import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Msg } from '../../Msg';
import { Coins } from '../../Coins';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgSubmitProposal as MsgSubmitProposal_pb } from '@initia/initia.proto/cosmos/gov/v1/tx';
export declare class MsgSubmitProposal extends JSONSerializable<MsgSubmitProposal.Amino, MsgSubmitProposal.Data, MsgSubmitProposal.Proto> {
    messages: Msg[];
    proposer: AccAddress;
    metadata: string;
    title: string;
    summary: string;
    expedited: boolean;
    initial_deposit: Coins;
    constructor(messages: Msg[], initial_deposit: Coins.Input, proposer: AccAddress, metadata: string, title: string, summary: string, expedited: boolean);
    static fromAmino(data: MsgSubmitProposal.Amino): MsgSubmitProposal;
    toAmino(): MsgSubmitProposal.Amino;
    static fromData(data: MsgSubmitProposal.Data): MsgSubmitProposal;
    toData(): MsgSubmitProposal.Data;
    static fromProto(data: MsgSubmitProposal.Proto): MsgSubmitProposal;
    toProto(): MsgSubmitProposal.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgSubmitProposal;
}
export declare namespace MsgSubmitProposal {
    interface Amino {
        type: 'cosmos-sdk/v1/MsgSubmitProposal';
        value: {
            messages: Msg.Amino[];
            initial_deposit: Coins.Amino;
            proposer: AccAddress;
            metadata?: string;
            title: string;
            summary: string;
            expedited: boolean;
        };
    }
    interface Data {
        '@type': '/cosmos.gov.v1.MsgSubmitProposal';
        messages: Msg.Data[];
        initial_deposit: Coins.Data;
        proposer: AccAddress;
        metadata: string;
        title: string;
        summary: string;
        expedited: boolean;
    }
    type Proto = MsgSubmitProposal_pb;
}
