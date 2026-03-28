import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { AccessTuple } from '../AccessTuple';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgCreate as MsgCreate_pb } from '@initia/initia.proto/minievm/evm/v1/tx';
export declare class MsgCreate extends JSONSerializable<MsgCreate.Amino, MsgCreate.Data, MsgCreate.Proto> {
    sender: AccAddress;
    code: string;
    value: string;
    access_list: AccessTuple[];
    constructor(sender: AccAddress, code: string, value: string, access_list: AccessTuple[]);
    static fromAmino(data: MsgCreate.Amino): MsgCreate;
    toAmino(): MsgCreate.Amino;
    static fromData(data: MsgCreate.Data): MsgCreate;
    toData(): MsgCreate.Data;
    static fromProto(data: MsgCreate.Proto): MsgCreate;
    toProto(): MsgCreate.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgCreate;
}
export declare namespace MsgCreate {
    interface Amino {
        type: 'evm/MsgCreate';
        value: {
            sender: AccAddress;
            code: string;
            value: string;
            access_list: AccessTuple.Amino[] | null;
        };
    }
    interface Data {
        '@type': '/minievm.evm.v1.MsgCreate';
        sender: AccAddress;
        code: string;
        value: string;
        access_list: AccessTuple.Data[];
    }
    type Proto = MsgCreate_pb;
}
