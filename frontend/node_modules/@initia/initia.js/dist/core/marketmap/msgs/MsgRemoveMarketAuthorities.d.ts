import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgRemoveMarketAuthorities as MsgRemoveMarketAuthorities_pb } from '@initia/initia.proto/connect/marketmap/v2/tx';
export declare class MsgRemoveMarketAuthorities extends JSONSerializable<MsgRemoveMarketAuthorities.Amino, MsgRemoveMarketAuthorities.Data, MsgRemoveMarketAuthorities.Proto> {
    remove_addresses: AccAddress[];
    admin: AccAddress;
    constructor(remove_addresses: AccAddress[], admin: AccAddress);
    static fromAmino(data: MsgRemoveMarketAuthorities.Amino): MsgRemoveMarketAuthorities;
    toAmino(): MsgRemoveMarketAuthorities.Amino;
    static fromData(data: MsgRemoveMarketAuthorities.Data): MsgRemoveMarketAuthorities;
    toData(): MsgRemoveMarketAuthorities.Data;
    static fromProto(data: MsgRemoveMarketAuthorities.Proto): MsgRemoveMarketAuthorities;
    toProto(): MsgRemoveMarketAuthorities.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgRemoveMarketAuthorities;
}
export declare namespace MsgRemoveMarketAuthorities {
    interface Amino {
        type: 'connect/x/marketmap/MsgRemoveMarketAuthorities';
        value: {
            remove_addresses: AccAddress[];
            admin: AccAddress;
        };
    }
    interface Data {
        '@type': '/connect.marketmap.v2.MsgRemoveMarketAuthorities';
        remove_addresses: AccAddress[];
        admin: AccAddress;
    }
    type Proto = MsgRemoveMarketAuthorities_pb;
}
