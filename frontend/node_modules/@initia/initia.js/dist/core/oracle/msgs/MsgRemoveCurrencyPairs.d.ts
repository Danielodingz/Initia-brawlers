import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgRemoveCurrencyPairs as MsgRemoveCurrencyPairs_pb } from '@initia/initia.proto/connect/oracle/v2/tx';
export declare class MsgRemoveCurrencyPairs extends JSONSerializable<MsgRemoveCurrencyPairs.Amino, MsgRemoveCurrencyPairs.Data, MsgRemoveCurrencyPairs.Proto> {
    authority: AccAddress;
    currency_pair_ids: string[];
    constructor(authority: AccAddress, currency_pair_ids: string[]);
    static fromAmino(data: MsgRemoveCurrencyPairs.Amino): MsgRemoveCurrencyPairs;
    toAmino(): MsgRemoveCurrencyPairs.Amino;
    static fromData(data: MsgRemoveCurrencyPairs.Data): MsgRemoveCurrencyPairs;
    toData(): MsgRemoveCurrencyPairs.Data;
    static fromProto(data: MsgRemoveCurrencyPairs.Proto): MsgRemoveCurrencyPairs;
    toProto(): MsgRemoveCurrencyPairs.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgRemoveCurrencyPairs;
}
export declare namespace MsgRemoveCurrencyPairs {
    interface Amino {
        type: 'connect/x/oracle/MsgRemoveCurrencyPairs';
        value: {
            authority: AccAddress;
            currency_pair_ids: string[];
        };
    }
    interface Data {
        '@type': '/connect.oracle.v2.MsgRemoveCurrencyPairs';
        authority: AccAddress;
        currency_pair_ids: string[];
    }
    type Proto = MsgRemoveCurrencyPairs_pb;
}
