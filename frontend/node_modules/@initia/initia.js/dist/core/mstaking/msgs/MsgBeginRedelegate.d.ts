import { JSONSerializable } from '../../../util/json';
import { Coins } from '../../Coins';
import { AccAddress, ValAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgBeginRedelegate as MsgBeginRedelegate_pb } from '@initia/initia.proto/initia/mstaking/v1/tx';
export declare class MsgBeginRedelegate extends JSONSerializable<MsgBeginRedelegate.Amino, MsgBeginRedelegate.Data, MsgBeginRedelegate.Proto> {
    delegator_address: AccAddress;
    validator_src_address: ValAddress;
    validator_dst_address: ValAddress;
    amount: Coins;
    constructor(delegator_address: AccAddress, validator_src_address: ValAddress, validator_dst_address: ValAddress, amount: Coins.Input);
    static fromAmino(data: MsgBeginRedelegate.Amino): MsgBeginRedelegate;
    toAmino(): MsgBeginRedelegate.Amino;
    static fromData(data: MsgBeginRedelegate.Data): MsgBeginRedelegate;
    toData(): MsgBeginRedelegate.Data;
    static fromProto(proto: MsgBeginRedelegate.Proto): MsgBeginRedelegate;
    toProto(): MsgBeginRedelegate.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgBeginRedelegate;
}
export declare namespace MsgBeginRedelegate {
    interface Amino {
        type: 'mstaking/MsgBeginRedelegate';
        value: {
            delegator_address: AccAddress;
            validator_src_address: ValAddress;
            validator_dst_address: ValAddress;
            amount: Coins.Amino | null;
        };
    }
    interface Data {
        '@type': '/initia.mstaking.v1.MsgBeginRedelegate';
        delegator_address: AccAddress;
        validator_src_address: ValAddress;
        validator_dst_address: ValAddress;
        amount: Coins.Data;
    }
    type Proto = MsgBeginRedelegate_pb;
}
