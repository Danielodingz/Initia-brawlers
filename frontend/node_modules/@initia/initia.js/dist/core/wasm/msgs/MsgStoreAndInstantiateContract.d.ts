import { JSONSerializable } from '../../../util/json';
import { Coins } from '../../Coins';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgStoreAndInstantiateContract as MsgStoreAndInstantiateContract_pb } from '@initia/initia.proto/cosmwasm/wasm/v1/tx';
import { AccessConfig } from '../AccessConfig';
export declare class MsgStoreAndInstantiateContract extends JSONSerializable<MsgStoreAndInstantiateContract.Amino, MsgStoreAndInstantiateContract.Data, MsgStoreAndInstantiateContract.Proto> {
    authority: AccAddress;
    wasm_byte_code: string;
    instantiate_permission: AccessConfig | undefined;
    unpin_code: boolean | undefined;
    admin: AccAddress | undefined;
    label: string | undefined;
    msg: string;
    source: string;
    builder: string;
    code_hash: string;
    funds: Coins;
    constructor(authority: AccAddress, wasm_byte_code: string, instantiate_permission: AccessConfig | undefined, unpin_code: boolean | undefined, admin: AccAddress | undefined, label: string | undefined, msg: string, funds: Coins.Input, source: string, builder: string, code_hash: string);
    static fromAmino(data: MsgStoreAndInstantiateContract.Amino): MsgStoreAndInstantiateContract;
    toAmino(): MsgStoreAndInstantiateContract.Amino;
    static fromData(data: MsgStoreAndInstantiateContract.Data): MsgStoreAndInstantiateContract;
    toData(): MsgStoreAndInstantiateContract.Data;
    static fromProto(data: MsgStoreAndInstantiateContract.Proto): MsgStoreAndInstantiateContract;
    toProto(): MsgStoreAndInstantiateContract.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgStoreAndInstantiateContract;
}
export declare namespace MsgStoreAndInstantiateContract {
    interface Amino {
        type: 'wasm/MsgStoreAndInstantiateContract';
        value: {
            authority: AccAddress;
            wasm_byte_code: string;
            instantiate_permission?: AccessConfig.Amino;
            unpin_code?: boolean;
            admin?: AccAddress;
            label?: string;
            msg: JSON;
            funds: Coins.Amino;
            source: string;
            builder: string;
            code_hash: string;
        };
    }
    interface Data {
        '@type': '/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract';
        authority: AccAddress;
        wasm_byte_code: string;
        instantiate_permission?: AccessConfig.Data;
        unpin_code?: boolean;
        admin?: AccAddress;
        label?: string;
        msg: JSON;
        funds: Coins.Amino;
        source: string;
        builder: string;
        code_hash: string;
    }
    type Proto = MsgStoreAndInstantiateContract_pb;
}
