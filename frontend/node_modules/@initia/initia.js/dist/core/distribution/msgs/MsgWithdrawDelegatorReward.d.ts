import { JSONSerializable } from '../../../util/json';
import { AccAddress, ValAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgWithdrawDelegatorReward as MsgWithdrawDelegatorReward_pb } from '@initia/initia.proto/cosmos/distribution/v1beta1/tx';
export declare class MsgWithdrawDelegatorReward extends JSONSerializable<MsgWithdrawDelegatorReward.Amino, MsgWithdrawDelegatorReward.Data, MsgWithdrawDelegatorReward.Proto> {
    delegator_address: AccAddress;
    validator_address: ValAddress;
    constructor(delegator_address: AccAddress, validator_address: ValAddress);
    static fromAmino(data: MsgWithdrawDelegatorReward.Amino): MsgWithdrawDelegatorReward;
    toAmino(): MsgWithdrawDelegatorReward.Amino;
    static fromData(proto: MsgWithdrawDelegatorReward.Data): MsgWithdrawDelegatorReward;
    toData(): MsgWithdrawDelegatorReward.Data;
    static fromProto(proto: MsgWithdrawDelegatorReward.Proto): MsgWithdrawDelegatorReward;
    toProto(): MsgWithdrawDelegatorReward.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgWithdrawDelegatorReward;
}
export declare namespace MsgWithdrawDelegatorReward {
    interface Amino {
        type: 'cosmos-sdk/MsgWithdrawDelegationReward';
        value: {
            delegator_address: AccAddress;
            validator_address: ValAddress;
        };
    }
    interface Data {
        '@type': '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward';
        delegator_address: AccAddress;
        validator_address: ValAddress;
    }
    type Proto = MsgWithdrawDelegatorReward_pb;
}
