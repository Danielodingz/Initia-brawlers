import { JSONSerializable } from '../../../util/json';
import { Coin } from '../../Coin';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgBurn as MsgBurn_pb } from '@initia/initia.proto/miniwasm/tokenfactory/v1/tx';
export declare class MsgBurn extends JSONSerializable<MsgBurn.Amino, MsgBurn.Data, MsgBurn.Proto> {
    sender: AccAddress;
    amount: Coin;
    constructor(sender: AccAddress, amount: Coin);
    static fromAmino(data: MsgBurn.Amino): MsgBurn;
    toAmino(): MsgBurn.Amino;
    static fromData(data: MsgBurn.Data): MsgBurn;
    toData(): MsgBurn.Data;
    static fromProto(data: MsgBurn.Proto): MsgBurn;
    toProto(): MsgBurn.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgBurn;
}
export declare namespace MsgBurn {
    interface Amino {
        type: 'tokenfactory/MsgBurn';
        value: {
            sender: AccAddress;
            amount: Coin.Amino;
        };
    }
    interface Data {
        '@type': '/miniwasm.tokenfactory.v1.MsgBurn';
        sender: AccAddress;
        amount: Coin.Data;
    }
    type Proto = MsgBurn_pb;
}
