import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgStoreAndMigrateContract as MsgStoreAndMigrateContract_pb } from '@initia/initia.proto/cosmwasm/wasm/v1/tx';
import { AccessConfig } from '../AccessConfig';
export declare class MsgStoreAndMigrateContract extends JSONSerializable<MsgStoreAndMigrateContract.Amino, MsgStoreAndMigrateContract.Data, MsgStoreAndMigrateContract.Proto> {
    authority: AccAddress;
    wasm_byte_code: string;
    instantiate_permission: AccessConfig | undefined;
    contract: AccAddress;
    msg: string;
    constructor(authority: AccAddress, wasm_byte_code: string, instantiate_permission: AccessConfig | undefined, contract: AccAddress, msg: string);
    static fromAmino(data: MsgStoreAndMigrateContract.Amino): MsgStoreAndMigrateContract;
    toAmino(): MsgStoreAndMigrateContract.Amino;
    static fromData(data: MsgStoreAndMigrateContract.Data): MsgStoreAndMigrateContract;
    toData(): MsgStoreAndMigrateContract.Data;
    static fromProto(data: MsgStoreAndMigrateContract.Proto): MsgStoreAndMigrateContract;
    toProto(): MsgStoreAndMigrateContract.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgStoreAndMigrateContract;
}
export declare namespace MsgStoreAndMigrateContract {
    interface Amino {
        type: 'wasm/MsgStoreAndMigrateContract';
        value: {
            authority: AccAddress;
            wasm_byte_code: string;
            instantiate_permission?: AccessConfig.Amino;
            contract: AccAddress;
            msg: JSON;
        };
    }
    interface Data {
        '@type': '/cosmwasm.wasm.v1.MsgStoreAndMigrateContract';
        authority: AccAddress;
        wasm_byte_code: string;
        instantiate_permission?: AccessConfig.Data;
        contract: AccAddress;
        msg: JSON;
    }
    type Proto = MsgStoreAndMigrateContract_pb;
}
