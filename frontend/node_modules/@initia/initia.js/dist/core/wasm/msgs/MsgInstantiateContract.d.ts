import { JSONSerializable } from '../../../util/json';
import { Coins } from '../../Coins';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgInstantiateContract as MsgInstantiateContract_pb } from '@initia/initia.proto/cosmwasm/wasm/v1/tx';
export declare class MsgInstantiateContract extends JSONSerializable<MsgInstantiateContract.Amino, MsgInstantiateContract.Data, MsgInstantiateContract.Proto> {
    sender: AccAddress;
    admin: AccAddress | undefined;
    code_id: number;
    label: string | undefined;
    msg: string;
    funds: Coins;
    constructor(sender: AccAddress, admin: AccAddress | undefined, code_id: number, label: string | undefined, msg: string, funds: Coins.Input);
    static fromAmino(data: MsgInstantiateContract.Amino): MsgInstantiateContract;
    toAmino(): MsgInstantiateContract.Amino;
    static fromData(data: MsgInstantiateContract.Data): MsgInstantiateContract;
    toData(): MsgInstantiateContract.Data;
    static fromProto(data: MsgInstantiateContract.Proto): MsgInstantiateContract;
    toProto(): MsgInstantiateContract.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgInstantiateContract;
}
export declare namespace MsgInstantiateContract {
    interface Amino {
        type: 'wasm/MsgInstantiateContract';
        value: {
            sender: AccAddress;
            admin?: AccAddress;
            code_id: string;
            label?: string;
            msg: JSON;
            funds: Coins.Amino;
        };
    }
    interface Data {
        '@type': '/cosmwasm.wasm.v1.MsgInstantiateContract';
        sender: AccAddress;
        admin?: AccAddress;
        code_id: string;
        label?: string;
        msg: JSON;
        funds: Coins.Data;
    }
    type Proto = MsgInstantiateContract_pb;
}
