import { Coins } from '../../Coins';
import { JSONSerializable } from '../../../util/json';
import { AccAddress, ValAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgCancelUnbondingDelegation as MsgCancelUnbondingDelegation_pb } from '@initia/initia.proto/initia/mstaking/v1/tx';
export declare class MsgCancelUnbondingDelegation extends JSONSerializable<MsgCancelUnbondingDelegation.Amino, MsgCancelUnbondingDelegation.Data, MsgCancelUnbondingDelegation.Proto> {
    delegator_address: AccAddress;
    validator_address: ValAddress;
    creation_height: number;
    amount: Coins;
    constructor(delegator_address: AccAddress, validator_address: ValAddress, amount: Coins.Input, creation_height: number);
    static fromAmino(data: MsgCancelUnbondingDelegation.Amino): MsgCancelUnbondingDelegation;
    toAmino(): MsgCancelUnbondingDelegation.Amino;
    static fromData(data: MsgCancelUnbondingDelegation.Data): MsgCancelUnbondingDelegation;
    toData(): MsgCancelUnbondingDelegation.Data;
    static fromProto(proto: MsgCancelUnbondingDelegation.Proto): MsgCancelUnbondingDelegation;
    toProto(): MsgCancelUnbondingDelegation.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgCancelUnbondingDelegation;
}
export declare namespace MsgCancelUnbondingDelegation {
    interface Amino {
        type: 'mstaking/MsgCancelUnbondingDelegation';
        value: {
            delegator_address: AccAddress;
            validator_address: ValAddress;
            amount: Coins.Amino | null;
            creation_height: string;
        };
    }
    interface Data {
        '@type': '/initia.mstaking.v1.MsgCancelUnbondingDelegation';
        delegator_address: AccAddress;
        validator_address: ValAddress;
        amount: Coins.Data;
        creation_height: string;
    }
    type Proto = MsgCancelUnbondingDelegation_pb;
}
