import { Coins } from '../../Coins';
import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgFundCommunityPool as MsgFundCommunityPool_pb } from '@initia/initia.proto/initia/reward/v1/tx';
export declare class MsgFundCommunityPoolReward extends JSONSerializable<MsgFundCommunityPoolReward.Amino, MsgFundCommunityPoolReward.Data, MsgFundCommunityPoolReward.Proto> {
    authority: AccAddress;
    amount: Coins;
    constructor(authority: AccAddress, amount: Coins.Input);
    static fromAmino(data: MsgFundCommunityPoolReward.Amino): MsgFundCommunityPoolReward;
    toAmino(): MsgFundCommunityPoolReward.Amino;
    static fromData(data: MsgFundCommunityPoolReward.Data): MsgFundCommunityPoolReward;
    toData(): MsgFundCommunityPoolReward.Data;
    static fromProto(data: MsgFundCommunityPoolReward.Proto): MsgFundCommunityPoolReward;
    toProto(): MsgFundCommunityPoolReward.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgFundCommunityPoolReward;
}
export declare namespace MsgFundCommunityPoolReward {
    interface Amino {
        type: 'reward/MsgFundCommunityPool';
        value: {
            authority: AccAddress;
            amount: Coins.Amino | null;
        };
    }
    interface Data {
        '@type': '/initia.reward.v1.MsgFundCommunityPool';
        authority: AccAddress;
        amount: Coins.Data;
    }
    type Proto = MsgFundCommunityPool_pb;
}
