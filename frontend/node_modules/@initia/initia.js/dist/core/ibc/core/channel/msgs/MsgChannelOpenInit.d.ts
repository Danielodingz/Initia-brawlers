import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgChannelOpenInit as MsgChannelOpenInit_pb } from '@initia/initia.proto/ibc/core/channel/v1/tx';
import { Channel } from '../Channel';
export declare class MsgChannelOpenInit extends JSONSerializable<any, MsgChannelOpenInit.Data, MsgChannelOpenInit.Proto> {
    port_id: string;
    channel: Channel | undefined;
    signer: AccAddress;
    constructor(port_id: string, channel: Channel | undefined, signer: AccAddress);
    static fromAmino(_: any): MsgChannelOpenInit;
    toAmino(): any;
    static fromData(data: MsgChannelOpenInit.Data): MsgChannelOpenInit;
    toData(): MsgChannelOpenInit.Data;
    static fromProto(proto: MsgChannelOpenInit.Proto): MsgChannelOpenInit;
    toProto(): MsgChannelOpenInit.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgChannelOpenInit;
}
export declare namespace MsgChannelOpenInit {
    interface Data {
        '@type': '/ibc.core.channel.v1.MsgChannelOpenInit';
        port_id: string;
        channel?: Channel.Data;
        signer: AccAddress;
    }
    type Proto = MsgChannelOpenInit_pb;
}
