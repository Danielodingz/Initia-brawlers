import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgStoreCodeAdmin as MsgStoreCodeAdmin_pb } from '@initia/initia.proto/miniwasm/wasmextension/v1/tx';
import { AccessConfigExt } from '../AccessConfigExt';
export declare class MsgStoreCodeAdmin extends JSONSerializable<MsgStoreCodeAdmin.Amino, MsgStoreCodeAdmin.Data, MsgStoreCodeAdmin.Proto> {
    authority: AccAddress;
    creator: AccAddress;
    wasm_byte_code: string;
    instantiate_permission?: AccessConfigExt | undefined;
    constructor(authority: AccAddress, creator: AccAddress, wasm_byte_code: string, instantiate_permission?: AccessConfigExt | undefined);
    static fromAmino(data: MsgStoreCodeAdmin.Amino): MsgStoreCodeAdmin;
    toAmino(): MsgStoreCodeAdmin.Amino;
    static fromData(data: MsgStoreCodeAdmin.Data): MsgStoreCodeAdmin;
    toData(): MsgStoreCodeAdmin.Data;
    static fromProto(data: MsgStoreCodeAdmin.Proto): MsgStoreCodeAdmin;
    toProto(): MsgStoreCodeAdmin.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgStoreCodeAdmin;
}
export declare namespace MsgStoreCodeAdmin {
    interface Amino {
        type: 'wasmextension/MsgStoreCodeAdmin';
        value: {
            authority: AccAddress;
            creator: AccAddress;
            wasm_byte_code: string;
            instantiate_permission?: AccessConfigExt.Amino;
        };
    }
    interface Data {
        '@type': '/miniwasm.wasmextension.v1.MsgStoreCodeAdmin';
        authority: AccAddress;
        creator: AccAddress;
        wasm_byte_code: string;
        instantiate_permission?: AccessConfigExt.Data;
    }
    type Proto = MsgStoreCodeAdmin_pb;
}
