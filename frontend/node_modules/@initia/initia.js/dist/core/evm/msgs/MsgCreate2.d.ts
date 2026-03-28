import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { AccessTuple } from '../AccessTuple';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgCreate2 as MsgCreate2_pb } from '@initia/initia.proto/minievm/evm/v1/tx';
export declare class MsgCreate2 extends JSONSerializable<MsgCreate2.Amino, MsgCreate2.Data, MsgCreate2.Proto> {
    sender: AccAddress;
    code: string;
    salt: string;
    value: string;
    access_list: AccessTuple[];
    constructor(sender: AccAddress, code: string, salt: string, value: string, access_list: AccessTuple[]);
    static fromAmino(data: MsgCreate2.Amino): MsgCreate2;
    toAmino(): MsgCreate2.Amino;
    static fromData(data: MsgCreate2.Data): MsgCreate2;
    toData(): MsgCreate2.Data;
    static fromProto(data: MsgCreate2.Proto): MsgCreate2;
    toProto(): MsgCreate2.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgCreate2;
}
export declare namespace MsgCreate2 {
    interface Amino {
        type: 'evm/MsgCreate2';
        value: {
            sender: AccAddress;
            code: string;
            salt: string;
            value: string;
            access_list: AccessTuple.Amino[] | null;
        };
    }
    interface Data {
        '@type': '/minievm.evm.v1.MsgCreate2';
        sender: AccAddress;
        code: string;
        salt: string;
        value: string;
        access_list: AccessTuple.Data[];
    }
    type Proto = MsgCreate2_pb;
}
