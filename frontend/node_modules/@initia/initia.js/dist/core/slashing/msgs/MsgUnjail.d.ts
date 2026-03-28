import { JSONSerializable } from '../../../util/json';
import { ValAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgUnjail as MsgUnjail_pb } from '@initia/initia.proto/cosmos/slashing/v1beta1/tx';
export declare class MsgUnjail extends JSONSerializable<MsgUnjail.Amino, MsgUnjail.Data, MsgUnjail.Proto> {
    address: ValAddress;
    constructor(address: ValAddress);
    static fromAmino(data: MsgUnjail.Amino): MsgUnjail;
    toAmino(): MsgUnjail.Amino;
    static fromData(proto: MsgUnjail.Data): MsgUnjail;
    toData(): MsgUnjail.Data;
    static fromProto(proto: MsgUnjail.Proto): MsgUnjail;
    toProto(): MsgUnjail.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUnjail;
}
export declare namespace MsgUnjail {
    interface Amino {
        type: 'cosmos-sdk/MsgUnjail';
        value: {
            address: ValAddress;
        };
    }
    interface Data {
        '@type': '/cosmos.slashing.v1beta1.MsgUnjail';
        address: ValAddress;
    }
    type Proto = MsgUnjail_pb;
}
