import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgAddCurrencyPairs as MsgAddCurrencyPairs_pb } from '@initia/initia.proto/connect/oracle/v2/tx';
import { CurrencyPair } from '../CurrencyPair';
export declare class MsgAddCurrencyPairs extends JSONSerializable<MsgAddCurrencyPairs.Amino, MsgAddCurrencyPairs.Data, MsgAddCurrencyPairs.Proto> {
    authority: AccAddress;
    currency_pairs: CurrencyPair[];
    constructor(authority: AccAddress, currency_pairs: CurrencyPair[]);
    static fromAmino(data: MsgAddCurrencyPairs.Amino): MsgAddCurrencyPairs;
    toAmino(): MsgAddCurrencyPairs.Amino;
    static fromData(data: MsgAddCurrencyPairs.Data): MsgAddCurrencyPairs;
    toData(): MsgAddCurrencyPairs.Data;
    static fromProto(data: MsgAddCurrencyPairs.Proto): MsgAddCurrencyPairs;
    toProto(): MsgAddCurrencyPairs.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgAddCurrencyPairs;
}
export declare namespace MsgAddCurrencyPairs {
    interface Amino {
        type: 'connect/x/oracle/MsgAddCurrencyPairs';
        value: {
            authority: AccAddress;
            currency_pairs: CurrencyPair.Amino[];
        };
    }
    interface Data {
        '@type': '/connect.oracle.v2.MsgAddCurrencyPairs';
        authority: AccAddress;
        currency_pairs: CurrencyPair.Data[];
    }
    type Proto = MsgAddCurrencyPairs_pb;
}
