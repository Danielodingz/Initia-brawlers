import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgScript as MsgScript_pb } from '@initia/initia.proto/initia/move/v1/tx';
export declare class MsgScript extends JSONSerializable<MsgScript.Amino, MsgScript.Data, MsgScript.Proto> {
    sender: AccAddress;
    code_bytes: string;
    type_args: string[];
    args: string[];
    constructor(sender: AccAddress, code_bytes: string, type_args?: string[], args?: string[]);
    static fromAmino(data: MsgScript.Amino): MsgScript;
    toAmino(): MsgScript.Amino;
    static fromData(data: MsgScript.Data): MsgScript;
    toData(): MsgScript.Data;
    static fromProto(data: MsgScript.Proto): MsgScript;
    toProto(): MsgScript.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgScript;
}
export declare namespace MsgScript {
    interface Amino {
        type: 'move/MsgScript';
        value: {
            sender: AccAddress;
            code_bytes: string;
            type_args?: string[];
            args?: string[];
        };
    }
    interface Data {
        '@type': '/initia.move.v1.MsgScript';
        sender: AccAddress;
        code_bytes: string;
        type_args: string[];
        args: string[];
    }
    type Proto = MsgScript_pb;
}
