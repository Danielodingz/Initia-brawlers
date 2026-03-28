import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Coin } from '../../Coin';
import { MsgMigrateToken as MsgMigrateToken_pb } from '@initia/opinit.proto/opinit/opchild/v1/tx';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class MsgMigrateToken extends JSONSerializable<MsgMigrateToken.Amino, MsgMigrateToken.Data, MsgMigrateToken.Proto> {
    sender: AccAddress;
    amount: Coin;
    constructor(sender: AccAddress, amount: Coin);
    static fromAmino(data: MsgMigrateToken.Amino): MsgMigrateToken;
    toAmino(): MsgMigrateToken.Amino;
    static fromData(data: MsgMigrateToken.Data): MsgMigrateToken;
    toData(): MsgMigrateToken.Data;
    static fromProto(data: MsgMigrateToken.Proto): MsgMigrateToken;
    toProto(): MsgMigrateToken.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgMigrateToken;
}
export declare namespace MsgMigrateToken {
    interface Amino {
        type: 'opchild/MsgMigrateToken';
        value: {
            sender: AccAddress;
            amount: Coin.Amino;
        };
    }
    interface Data {
        '@type': '/opinit.opchild.v1.MsgMigrateToken';
        sender: AccAddress;
        amount: Coin.Data;
    }
    type Proto = MsgMigrateToken_pb;
}
