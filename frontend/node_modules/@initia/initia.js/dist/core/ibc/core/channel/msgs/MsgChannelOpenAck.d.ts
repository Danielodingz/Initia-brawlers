import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgChannelOpenAck as MsgChannelOpenAck_pb } from '@initia/initia.proto/ibc/core/channel/v1/tx';
import { Height } from '../../client';
export declare class MsgChannelOpenAck extends JSONSerializable<any, MsgChannelOpenAck.Data, MsgChannelOpenAck.Proto> {
    port_id: string;
    channel_id: string;
    counterparty_channel_id: string;
    counterparty_version: string;
    proof_try: string;
    proof_height: Height | undefined;
    signer: AccAddress;
    constructor(port_id: string, channel_id: string, counterparty_channel_id: string, counterparty_version: string, proof_try: string, proof_height: Height | undefined, signer: AccAddress);
    static fromAmino(_: any): MsgChannelOpenAck;
    toAmino(): any;
    static fromData(data: MsgChannelOpenAck.Data): MsgChannelOpenAck;
    toData(): MsgChannelOpenAck.Data;
    static fromProto(proto: MsgChannelOpenAck.Proto): MsgChannelOpenAck;
    toProto(): MsgChannelOpenAck.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgChannelOpenAck;
}
export declare namespace MsgChannelOpenAck {
    interface Data {
        '@type': '/ibc.core.channel.v1.MsgChannelOpenAck';
        port_id: string;
        channel_id: string;
        counterparty_channel_id: string;
        counterparty_version: string;
        proof_try: string;
        proof_height?: Height.Data;
        signer: AccAddress;
    }
    type Proto = MsgChannelOpenAck_pb;
}
