import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgUpdateMarkets as MsgUpdateMarkets_pb } from '@initia/initia.proto/connect/marketmap/v2/tx';
import { Market } from '../Market';
export declare class MsgUpdateMarkets extends JSONSerializable<MsgUpdateMarkets.Amino, MsgUpdateMarkets.Data, MsgUpdateMarkets.Proto> {
    authority: AccAddress;
    update_markets: Market[];
    constructor(authority: AccAddress, update_markets: Market[]);
    static fromAmino(data: MsgUpdateMarkets.Amino): MsgUpdateMarkets;
    toAmino(): MsgUpdateMarkets.Amino;
    static fromData(data: MsgUpdateMarkets.Data): MsgUpdateMarkets;
    toData(): MsgUpdateMarkets.Data;
    static fromProto(data: MsgUpdateMarkets.Proto): MsgUpdateMarkets;
    toProto(): MsgUpdateMarkets.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUpdateMarkets;
}
export declare namespace MsgUpdateMarkets {
    interface Amino {
        type: 'connect/x/marketmap/MsgUpdateMarkets';
        value: {
            authority: AccAddress;
            update_markets: Market.Amino[];
        };
    }
    interface Data {
        '@type': '/connect.marketmap.v2.MsgUpdateMarkets';
        authority: AccAddress;
        update_markets: Market.Data[];
    }
    type Proto = MsgUpdateMarkets_pb;
}
