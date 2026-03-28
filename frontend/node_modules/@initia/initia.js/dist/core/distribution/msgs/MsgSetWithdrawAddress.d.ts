import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgSetWithdrawAddress as MsgSetWithdrawAddress_pb } from '@initia/initia.proto/cosmos/distribution/v1beta1/tx';
export declare class MsgSetWithdrawAddress extends JSONSerializable<MsgSetWithdrawAddress.Amino, MsgSetWithdrawAddress.Data, MsgSetWithdrawAddress.Proto> {
    delegator_address: AccAddress;
    withdraw_address: AccAddress;
    constructor(delegator_address: AccAddress, withdraw_address: AccAddress);
    static fromAmino(data: MsgSetWithdrawAddress.Amino): MsgSetWithdrawAddress;
    toAmino(): MsgSetWithdrawAddress.Amino;
    static fromData(data: MsgSetWithdrawAddress.Data): MsgSetWithdrawAddress;
    toData(): MsgSetWithdrawAddress.Data;
    static fromProto(proto: MsgSetWithdrawAddress.Proto): MsgSetWithdrawAddress;
    toProto(): MsgSetWithdrawAddress.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgSetWithdrawAddress;
}
export declare namespace MsgSetWithdrawAddress {
    interface Amino {
        type: 'cosmos-sdk/MsgModifyWithdrawAddress';
        value: {
            delegator_address: AccAddress;
            withdraw_address: AccAddress;
        };
    }
    interface Data {
        '@type': '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress';
        delegator_address: AccAddress;
        withdraw_address: AccAddress;
    }
    type Proto = MsgSetWithdrawAddress_pb;
}
