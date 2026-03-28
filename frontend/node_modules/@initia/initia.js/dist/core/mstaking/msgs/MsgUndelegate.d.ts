import { Coins } from '../../Coins';
import { JSONSerializable } from '../../../util/json';
import { AccAddress, ValAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgUndelegate as MsgUndelegate_pb } from '@initia/initia.proto/initia/mstaking/v1/tx';
export declare class MsgUndelegate extends JSONSerializable<MsgUndelegate.Amino, MsgUndelegate.Data, MsgUndelegate.Proto> {
    delegator_address: AccAddress;
    validator_address: ValAddress;
    amount: Coins;
    constructor(delegator_address: AccAddress, validator_address: ValAddress, amount: Coins.Input);
    static fromAmino(data: MsgUndelegate.Amino): MsgUndelegate;
    toAmino(): MsgUndelegate.Amino;
    static fromData(data: MsgUndelegate.Data): MsgUndelegate;
    toData(): MsgUndelegate.Data;
    static fromProto(proto: MsgUndelegate.Proto): MsgUndelegate;
    toProto(): MsgUndelegate.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUndelegate;
}
export declare namespace MsgUndelegate {
    interface Amino {
        type: 'mstaking/MsgUndelegate';
        value: {
            delegator_address: AccAddress;
            validator_address: ValAddress;
            amount: Coins.Amino | null;
        };
    }
    interface Data {
        '@type': '/initia.mstaking.v1.MsgUndelegate';
        delegator_address: AccAddress;
        validator_address: ValAddress;
        amount: Coins.Data;
    }
    type Proto = MsgUndelegate_pb;
}
