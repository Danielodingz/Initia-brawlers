import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgSudoContract as MsgSudoContract_pb } from '@initia/initia.proto/cosmwasm/wasm/v1/tx';
export declare class MsgSudoContract extends JSONSerializable<MsgSudoContract.Amino, MsgSudoContract.Data, MsgSudoContract.Proto> {
    authority: AccAddress;
    contract: AccAddress;
    msg: string;
    constructor(authority: AccAddress, contract: AccAddress, msg: string);
    static fromAmino(data: MsgSudoContract.Amino): MsgSudoContract;
    toAmino(): MsgSudoContract.Amino;
    static fromData(data: MsgSudoContract.Data): MsgSudoContract;
    toData(): MsgSudoContract.Data;
    static fromProto(data: MsgSudoContract.Proto): MsgSudoContract;
    toProto(): MsgSudoContract.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgSudoContract;
}
export declare namespace MsgSudoContract {
    interface Amino {
        type: 'wasm/MsgSudoContract';
        value: {
            authority: AccAddress;
            contract: AccAddress;
            msg: JSON;
        };
    }
    interface Data {
        '@type': '/cosmwasm.wasm.v1.MsgSudoContract';
        authority: AccAddress;
        contract: AccAddress;
        msg: JSON;
    }
    type Proto = MsgSudoContract_pb;
}
