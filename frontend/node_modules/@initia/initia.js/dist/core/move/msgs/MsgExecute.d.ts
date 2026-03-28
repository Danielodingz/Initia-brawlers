import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgExecute as MsgExecute_pb } from '@initia/initia.proto/initia/move/v1/tx';
export declare class MsgExecute extends JSONSerializable<MsgExecute.Amino, MsgExecute.Data, MsgExecute.Proto> {
    sender: AccAddress;
    module_address: AccAddress;
    module_name: string;
    function_name: string;
    type_args: string[];
    args: string[];
    constructor(sender: AccAddress, module_address: AccAddress, module_name: string, function_name: string, type_args?: string[], args?: string[]);
    static fromAmino(data: MsgExecute.Amino): MsgExecute;
    toAmino(): MsgExecute.Amino;
    static fromData(data: MsgExecute.Data): MsgExecute;
    toData(): MsgExecute.Data;
    static fromProto(data: MsgExecute.Proto): MsgExecute;
    toProto(): MsgExecute.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgExecute;
}
export declare namespace MsgExecute {
    interface Amino {
        type: 'move/MsgExecute';
        value: {
            sender: AccAddress;
            module_address: AccAddress;
            module_name: string;
            function_name: string;
            type_args?: string[];
            args?: string[];
        };
    }
    interface Data {
        '@type': '/initia.move.v1.MsgExecute';
        sender: AccAddress;
        module_address: AccAddress;
        module_name: string;
        function_name: string;
        type_args: string[];
        args: string[];
    }
    type Proto = MsgExecute_pb;
}
