import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgChannelCloseInit as MsgChannelCloseInit_pb } from '@initia/initia.proto/ibc/core/channel/v1/tx';
export declare class MsgChannelCloseInit extends JSONSerializable<any, MsgChannelCloseInit.Data, MsgChannelCloseInit.Proto> {
    port_id: string;
    channel_id: string;
    signer: AccAddress;
    constructor(port_id: string, channel_id: string, signer: AccAddress);
    static fromAmino(_: any): MsgChannelCloseInit;
    toAmino(): any;
    static fromData(data: MsgChannelCloseInit.Data): MsgChannelCloseInit;
    toData(): MsgChannelCloseInit.Data;
    static fromProto(proto: MsgChannelCloseInit.Proto): MsgChannelCloseInit;
    toProto(): MsgChannelCloseInit.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgChannelCloseInit;
}
export declare namespace MsgChannelCloseInit {
    interface Data {
        '@type': '/ibc.core.channel.v1.MsgChannelCloseInit';
        port_id: string;
        channel_id: string;
        signer: AccAddress;
    }
    type Proto = MsgChannelCloseInit_pb;
}
