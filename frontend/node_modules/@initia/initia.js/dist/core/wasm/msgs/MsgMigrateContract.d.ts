import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgMigrateContract as MsgMigrateContract_pb } from '@initia/initia.proto/cosmwasm/wasm/v1/tx';
export declare class MsgMigrateContract extends JSONSerializable<MsgMigrateContract.Amino, MsgMigrateContract.Data, MsgMigrateContract.Proto> {
    sender: AccAddress;
    contract: AccAddress;
    code_id: number;
    msg: string;
    constructor(sender: AccAddress, contract: AccAddress, code_id: number, msg: string);
    static fromAmino(data: MsgMigrateContract.Amino): MsgMigrateContract;
    toAmino(): MsgMigrateContract.Amino;
    static fromData(data: MsgMigrateContract.Data): MsgMigrateContract;
    toData(): MsgMigrateContract.Data;
    static fromProto(data: MsgMigrateContract.Proto): MsgMigrateContract;
    toProto(): MsgMigrateContract.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgMigrateContract;
}
export declare namespace MsgMigrateContract {
    interface Amino {
        type: 'wasm/MsgMigrateContract';
        value: {
            sender: AccAddress;
            contract: AccAddress;
            code_id: string;
            msg: JSON;
        };
    }
    interface Data {
        '@type': '/cosmwasm.wasm.v1.MsgMigrateContract';
        sender: AccAddress;
        contract: AccAddress;
        code_id: string;
        msg: JSON;
    }
    type Proto = MsgMigrateContract_pb;
}
