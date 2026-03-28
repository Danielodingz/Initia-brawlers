import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgUpsertMarkets as MsgUpsertMarkets_pb } from '@initia/initia.proto/connect/marketmap/v2/tx';
import { Market } from '../Market';
export declare class MsgUpsertMarkets extends JSONSerializable<MsgUpsertMarkets.Amino, MsgUpsertMarkets.Data, MsgUpsertMarkets.Proto> {
    authority: AccAddress;
    markets: Market[];
    constructor(authority: AccAddress, markets: Market[]);
    static fromAmino(data: MsgUpsertMarkets.Amino): MsgUpsertMarkets;
    toAmino(): MsgUpsertMarkets.Amino;
    static fromData(data: MsgUpsertMarkets.Data): MsgUpsertMarkets;
    toData(): MsgUpsertMarkets.Data;
    static fromProto(data: MsgUpsertMarkets.Proto): MsgUpsertMarkets;
    toProto(): MsgUpsertMarkets.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUpsertMarkets;
}
export declare namespace MsgUpsertMarkets {
    interface Amino {
        type: 'connect/x/marketmap/MsgUpsertMarkets';
        value: {
            authority: AccAddress;
            markets: Market.Amino[];
        };
    }
    interface Data {
        '@type': '/connect.marketmap.v2.MsgUpsertMarkets';
        authority: AccAddress;
        markets: Market.Data[];
    }
    type Proto = MsgUpsertMarkets_pb;
}
