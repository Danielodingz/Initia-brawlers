import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgGovScript as MsgGovScript_pb } from '@initia/initia.proto/initia/move/v1/tx';
export declare class MsgGovScript extends JSONSerializable<MsgGovScript.Amino, MsgGovScript.Data, MsgGovScript.Proto> {
    authority: AccAddress;
    sender: AccAddress;
    code_bytes: string;
    type_args: string[];
    args: string[];
    constructor(authority: AccAddress, sender: AccAddress, code_bytes: string, type_args?: string[], args?: string[]);
    static fromAmino(data: MsgGovScript.Amino): MsgGovScript;
    toAmino(): MsgGovScript.Amino;
    static fromData(data: MsgGovScript.Data): MsgGovScript;
    toData(): MsgGovScript.Data;
    static fromProto(data: MsgGovScript.Proto): MsgGovScript;
    toProto(): MsgGovScript.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgGovScript;
}
export declare namespace MsgGovScript {
    interface Amino {
        type: 'move/MsgGovScript';
        value: {
            authority: AccAddress;
            sender: AccAddress;
            code_bytes: string;
            type_args?: string[];
            args?: string[];
        };
    }
    interface Data {
        '@type': '/initia.move.v1.MsgGovScript';
        authority: AccAddress;
        sender: AccAddress;
        code_bytes: string;
        type_args: string[];
        args: string[];
    }
    type Proto = MsgGovScript_pb;
}
