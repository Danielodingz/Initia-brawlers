import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgChannelCloseConfirm as MsgChannelCloseConfirm_pb } from '@initia/initia.proto/ibc/core/channel/v1/tx';
import { Height } from '../../client';
export declare class MsgChannelCloseConfirm extends JSONSerializable<any, MsgChannelCloseConfirm.Data, MsgChannelCloseConfirm.Proto> {
    port_id: string;
    channel_id: string;
    proof_init: string;
    proof_height: Height | undefined;
    signer: AccAddress;
    constructor(port_id: string, channel_id: string, proof_init: string, proof_height: Height | undefined, signer: AccAddress);
    static fromAmino(_: any): MsgChannelCloseConfirm;
    toAmino(): any;
    static fromData(data: MsgChannelCloseConfirm.Data): MsgChannelCloseConfirm;
    toData(): MsgChannelCloseConfirm.Data;
    static fromProto(proto: MsgChannelCloseConfirm.Proto): MsgChannelCloseConfirm;
    toProto(): MsgChannelCloseConfirm.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgChannelCloseConfirm;
}
export declare namespace MsgChannelCloseConfirm {
    interface Data {
        '@type': '/ibc.core.channel.v1.MsgChannelCloseConfirm';
        port_id: string;
        channel_id: string;
        proof_init: string;
        proof_height?: Height.Data;
        signer: AccAddress;
    }
    type Proto = MsgChannelCloseConfirm_pb;
}
