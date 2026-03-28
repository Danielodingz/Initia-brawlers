import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgChannelUpgradeTimeout as MsgChannelUpgradeTimeout_pb } from '@initia/initia.proto/ibc/core/channel/v1/tx';
import { Channel } from '../Channel';
import { Height } from '../../client/Height';
export declare class MsgChannelUpgradeTimeout extends JSONSerializable<any, MsgChannelUpgradeTimeout.Data, MsgChannelUpgradeTimeout.Proto> {
    port_id: string;
    channel_id: string;
    counterparty_channel: Channel | undefined;
    proof_channel: string;
    proof_height: Height | undefined;
    signer: AccAddress;
    constructor(port_id: string, channel_id: string, counterparty_channel: Channel | undefined, proof_channel: string, proof_height: Height | undefined, signer: AccAddress);
    static fromAmino(_: any): MsgChannelUpgradeTimeout;
    toAmino(): any;
    static fromData(data: MsgChannelUpgradeTimeout.Data): MsgChannelUpgradeTimeout;
    toData(): MsgChannelUpgradeTimeout.Data;
    static fromProto(proto: MsgChannelUpgradeTimeout.Proto): MsgChannelUpgradeTimeout;
    toProto(): MsgChannelUpgradeTimeout.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgChannelUpgradeTimeout;
}
export declare namespace MsgChannelUpgradeTimeout {
    interface Data {
        '@type': '/ibc.core.channel.v1.MsgChannelUpgradeTimeout';
        port_id: string;
        channel_id: string;
        counterparty_channel?: Channel.Data;
        proof_channel: string;
        proof_height?: Height.Data;
        signer: AccAddress;
    }
    type Proto = MsgChannelUpgradeTimeout_pb;
}
