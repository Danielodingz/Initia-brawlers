import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgUpdateMaxWasmSize as MsgUpdateMaxWasmSize_pb } from '@initia/initia.proto/cosmwasm/wasm/v1/tx';
export declare class MsgUpdateMaxWasmSize extends JSONSerializable<MsgUpdateMaxWasmSize.Amino, MsgUpdateMaxWasmSize.Data, MsgUpdateMaxWasmSize.Proto> {
    authority: AccAddress;
    max_wasm_size: number;
    constructor(authority: AccAddress, max_wasm_size: number);
    static fromAmino(data: MsgUpdateMaxWasmSize.Amino): MsgUpdateMaxWasmSize;
    toAmino(): MsgUpdateMaxWasmSize.Amino;
    static fromData(data: MsgUpdateMaxWasmSize.Data): MsgUpdateMaxWasmSize;
    toData(): MsgUpdateMaxWasmSize.Data;
    static fromProto(data: MsgUpdateMaxWasmSize.Proto): MsgUpdateMaxWasmSize;
    toProto(): MsgUpdateMaxWasmSize.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUpdateMaxWasmSize;
}
export declare namespace MsgUpdateMaxWasmSize {
    interface Amino {
        type: 'wasm/MsgUpdateMaxWasmSize';
        value: {
            authority: AccAddress;
            max_wasm_size: string;
        };
    }
    interface Data {
        '@type': '/cosmwasm.wasm.v1.MsgUpdateMaxWasmSize';
        authority: AccAddress;
        max_wasm_size: string;
    }
    type Proto = MsgUpdateMaxWasmSize_pb;
}
