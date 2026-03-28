import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgSetMemo as MsgSetMemo_pb } from '@initia/initia.proto/noble/forwarding/v1/tx';
export declare class MsgSetMemo extends JSONSerializable<MsgSetMemo.Amino, MsgSetMemo.Data, MsgSetMemo.Proto> {
    signer: AccAddress;
    recipient: string;
    channel: string;
    fallback: AccAddress;
    denom: string;
    memo: string;
    constructor(signer: AccAddress, recipient: string, channel: string, fallback: AccAddress, denom: string, memo: string);
    static fromAmino(data: MsgSetMemo.Amino): MsgSetMemo;
    toAmino(): MsgSetMemo.Amino;
    static fromData(data: MsgSetMemo.Data): MsgSetMemo;
    toData(): MsgSetMemo.Data;
    static fromProto(data: MsgSetMemo.Proto): MsgSetMemo;
    toProto(): MsgSetMemo.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgSetMemo;
}
export declare namespace MsgSetMemo {
    interface Amino {
        type: 'noble/forwarding/SetMemo';
        value: {
            signer: AccAddress;
            recipient: string;
            channel: string;
            fallback: AccAddress;
            denom: string;
            memo: string;
        };
    }
    interface Data {
        '@type': '/noble.forwarding.v1.MsgSetMemo';
        signer: AccAddress;
        recipient: string;
        channel: string;
        fallback: AccAddress;
        denom: string;
        memo: string;
    }
    type Proto = MsgSetMemo_pb;
}
