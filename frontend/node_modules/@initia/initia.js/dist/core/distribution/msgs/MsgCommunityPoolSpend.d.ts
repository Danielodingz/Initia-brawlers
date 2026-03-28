import { JSONSerializable } from '../../../util/json';
import { Coins } from '../../Coins';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgCommunityPoolSpend as MsgCommunityPoolSpend_pb } from '@initia/initia.proto/cosmos/distribution/v1beta1/tx';
export declare class MsgCommunityPoolSpend extends JSONSerializable<MsgCommunityPoolSpend.Amino, MsgCommunityPoolSpend.Data, MsgCommunityPoolSpend.Proto> {
    authority: AccAddress;
    recipient: AccAddress;
    amount: Coins;
    constructor(authority: AccAddress, recipient: AccAddress, amount: Coins.Input);
    static fromAmino(data: MsgCommunityPoolSpend.Amino): MsgCommunityPoolSpend;
    toAmino(): MsgCommunityPoolSpend.Amino;
    static fromData(data: MsgCommunityPoolSpend.Data): MsgCommunityPoolSpend;
    toData(): MsgCommunityPoolSpend.Data;
    static fromProto(proto: MsgCommunityPoolSpend.Proto): MsgCommunityPoolSpend;
    toProto(): MsgCommunityPoolSpend.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgCommunityPoolSpend;
}
export declare namespace MsgCommunityPoolSpend {
    interface Amino {
        type: 'cosmos-sdk/distr/MsgCommunityPoolSpend';
        value: {
            authority: AccAddress;
            recipient: AccAddress;
            amount: Coins.Amino;
        };
    }
    interface Data {
        '@type': '/cosmos.distribution.v1beta1.MsgCommunityPoolSpend';
        authority: AccAddress;
        recipient: AccAddress;
        amount: Coins.Data;
    }
    type Proto = MsgCommunityPoolSpend_pb;
}
