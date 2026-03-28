import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgRemoveMarkets as MsgRemoveMarkets_pb } from '@initia/initia.proto/connect/marketmap/v2/tx';
export declare class MsgRemoveMarkets extends JSONSerializable<MsgRemoveMarkets.Amino, MsgRemoveMarkets.Data, MsgRemoveMarkets.Proto> {
    authority: AccAddress;
    markets: string[];
    constructor(authority: AccAddress, markets: string[]);
    static fromAmino(data: MsgRemoveMarkets.Amino): MsgRemoveMarkets;
    toAmino(): MsgRemoveMarkets.Amino;
    static fromData(data: MsgRemoveMarkets.Data): MsgRemoveMarkets;
    toData(): MsgRemoveMarkets.Data;
    static fromProto(data: MsgRemoveMarkets.Proto): MsgRemoveMarkets;
    toProto(): MsgRemoveMarkets.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgRemoveMarkets;
}
export declare namespace MsgRemoveMarkets {
    interface Amino {
        type: 'connect/x/marketmap/MsgRemoveMarkets';
        value: {
            authority: AccAddress;
            markets: string[];
        };
    }
    interface Data {
        '@type': '/connect.marketmap.v2.MsgRemoveMarkets';
        authority: AccAddress;
        markets: string[];
    }
    type Proto = MsgRemoveMarkets_pb;
}
