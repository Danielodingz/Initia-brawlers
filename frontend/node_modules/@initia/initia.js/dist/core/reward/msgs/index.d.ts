import { MsgUpdateRewardParams } from './MsgUpdateRewardParams';
import { MsgFundCommunityPoolReward } from './MsgFundCommunityPoolReward';
export * from './MsgUpdateRewardParams';
export * from './MsgFundCommunityPoolReward';
export type RewardMsg = MsgUpdateRewardParams | MsgFundCommunityPoolReward;
export declare namespace RewardMsg {
    type Amino = MsgUpdateRewardParams.Amino | MsgFundCommunityPoolReward.Amino;
    type Data = MsgUpdateRewardParams.Data | MsgFundCommunityPoolReward.Data;
    type Proto = MsgUpdateRewardParams.Proto | MsgFundCommunityPoolReward.Proto;
}
