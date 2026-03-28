import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgCreateMarkets as MsgCreateMarkets_pb } from '@initia/initia.proto/connect/marketmap/v2/tx';
import { Market } from '../Market';
export declare class MsgCreateMarkets extends JSONSerializable<MsgCreateMarkets.Amino, MsgCreateMarkets.Data, MsgCreateMarkets.Proto> {
    authority: AccAddress;
    create_markets: Market[];
    constructor(authority: AccAddress, create_markets: Market[]);
    static fromAmino(data: MsgCreateMarkets.Amino): MsgCreateMarkets;
    toAmino(): MsgCreateMarkets.Amino;
    static fromData(data: MsgCreateMarkets.Data): MsgCreateMarkets;
    toData(): MsgCreateMarkets.Data;
    static fromProto(data: MsgCreateMarkets.Proto): MsgCreateMarkets;
    toProto(): MsgCreateMarkets.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgCreateMarkets;
}
export declare namespace MsgCreateMarkets {
    interface Amino {
        type: 'connect/x/marketmap/MsgCreateMarkets';
        value: {
            authority: AccAddress;
            create_markets: Market.Amino[];
        };
    }
    interface Data {
        '@type': '/connect.marketmap.v2.MsgCreateMarkets';
        authority: AccAddress;
        create_markets: Market.Data[];
    }
    type Proto = MsgCreateMarkets_pb;
}
