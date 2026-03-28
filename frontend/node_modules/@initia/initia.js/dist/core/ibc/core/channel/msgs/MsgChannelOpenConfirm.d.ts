import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgChannelOpenConfirm as MsgChannelOpenConfirm_pb } from '@initia/initia.proto/ibc/core/channel/v1/tx';
import { Height } from '../../client';
export declare class MsgChannelOpenConfirm extends JSONSerializable<any, MsgChannelOpenConfirm.Data, MsgChannelOpenConfirm.Proto> {
    port_id: string;
    channel_id: string;
    proof_ack: string;
    proof_height: Height | undefined;
    signer: AccAddress;
    constructor(port_id: string, channel_id: string, proof_ack: string, proof_height: Height | undefined, signer: AccAddress);
    static fromAmino(_: any): MsgChannelOpenConfirm;
    toAmino(): any;
    static fromData(data: MsgChannelOpenConfirm.Data): MsgChannelOpenConfirm;
    toData(): MsgChannelOpenConfirm.Data;
    static fromProto(proto: MsgChannelOpenConfirm.Proto): MsgChannelOpenConfirm;
    toProto(): MsgChannelOpenConfirm.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgChannelOpenConfirm;
}
export declare namespace MsgChannelOpenConfirm {
    interface Data {
        '@type': '/ibc.core.channel.v1.MsgChannelOpenConfirm';
        port_id: string;
        channel_id: string;
        proof_ack: string;
        proof_height?: Height.Data;
        signer: AccAddress;
    }
    type Proto = MsgChannelOpenConfirm_pb;
}
