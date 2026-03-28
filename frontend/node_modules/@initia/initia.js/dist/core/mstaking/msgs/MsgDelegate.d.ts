import { Coins } from '../../Coins';
import { JSONSerializable } from '../../../util/json';
import { AccAddress, ValAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgDelegate as MsgDelegate_pb } from '@initia/initia.proto/initia/mstaking/v1/tx';
export declare class MsgDelegate extends JSONSerializable<MsgDelegate.Amino, MsgDelegate.Data, MsgDelegate.Proto> {
    delegator_address: AccAddress;
    validator_address: ValAddress;
    amount: Coins;
    constructor(delegator_address: AccAddress, validator_address: ValAddress, amount: Coins.Input);
    static fromAmino(data: MsgDelegate.Amino): MsgDelegate;
    toAmino(): MsgDelegate.Amino;
    static fromData(data: MsgDelegate.Data): MsgDelegate;
    toData(): MsgDelegate.Data;
    static fromProto(proto: MsgDelegate.Proto): MsgDelegate;
    toProto(): MsgDelegate.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgDelegate;
}
export declare namespace MsgDelegate {
    interface Amino {
        type: 'mstaking/MsgDelegate';
        value: {
            delegator_address: AccAddress;
            validator_address: ValAddress;
            amount: Coins.Amino | null;
        };
    }
    interface Data {
        '@type': '/initia.mstaking.v1.MsgDelegate';
        delegator_address: AccAddress;
        validator_address: ValAddress;
        amount: Coins.Data;
    }
    type Proto = MsgDelegate_pb;
}
