import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Coins } from '../../Coins';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgUpdateMinGasPrices as MsgUpdateMinGasPrices_pb } from '@initia/opinit.proto/opinit/opchild/v1/tx';
export declare class MsgUpdateMinGasPrices extends JSONSerializable<MsgUpdateMinGasPrices.Amino, MsgUpdateMinGasPrices.Data, MsgUpdateMinGasPrices.Proto> {
    authority: AccAddress;
    min_gas_prices: Coins;
    constructor(authority: AccAddress, min_gas_prices: Coins.Input);
    static fromAmino(data: MsgUpdateMinGasPrices.Amino): MsgUpdateMinGasPrices;
    toAmino(): MsgUpdateMinGasPrices.Amino;
    static fromData(data: MsgUpdateMinGasPrices.Data): MsgUpdateMinGasPrices;
    toData(): MsgUpdateMinGasPrices.Data;
    static fromProto(data: MsgUpdateMinGasPrices.Proto): MsgUpdateMinGasPrices;
    toProto(): MsgUpdateMinGasPrices.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUpdateMinGasPrices;
}
export declare namespace MsgUpdateMinGasPrices {
    interface Amino {
        type: 'opchild/MsgUpdateMinGasPrices';
        value: {
            authority: AccAddress;
            min_gas_prices: Coins.Amino;
        };
    }
    interface Data {
        '@type': '/opinit.opchild.v1.MsgUpdateMinGasPrices';
        authority: AccAddress;
        min_gas_prices: Coins.Data;
    }
    type Proto = MsgUpdateMinGasPrices_pb;
}
