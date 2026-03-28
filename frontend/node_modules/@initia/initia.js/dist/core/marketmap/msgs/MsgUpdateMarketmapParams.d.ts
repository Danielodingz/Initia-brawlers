import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { MarketmapParams } from '../MarketmapParams';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgParams as MsgParams_pb } from '@initia/initia.proto/connect/marketmap/v2/tx';
export declare class MsgUpdateMarketmapParams extends JSONSerializable<MsgUpdateMarketmapParams.Amino, MsgUpdateMarketmapParams.Data, MsgUpdateMarketmapParams.Proto> {
    authority: AccAddress;
    params: MarketmapParams;
    constructor(authority: AccAddress, params: MarketmapParams);
    static fromAmino(data: MsgUpdateMarketmapParams.Amino): MsgUpdateMarketmapParams;
    toAmino(): MsgUpdateMarketmapParams.Amino;
    static fromData(data: MsgUpdateMarketmapParams.Data): MsgUpdateMarketmapParams;
    toData(): MsgUpdateMarketmapParams.Data;
    static fromProto(data: MsgUpdateMarketmapParams.Proto): MsgUpdateMarketmapParams;
    toProto(): MsgUpdateMarketmapParams.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUpdateMarketmapParams;
}
export declare namespace MsgUpdateMarketmapParams {
    interface Amino {
        type: 'connect/x/marketmap/MsgParams';
        value: {
            authority: AccAddress;
            params: MarketmapParams.Amino;
        };
    }
    interface Data {
        '@type': '/connect.marketmap.v2.MsgParams';
        authority: AccAddress;
        params: MarketmapParams.Data;
    }
    type Proto = MsgParams_pb;
}
