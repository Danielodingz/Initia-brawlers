import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgChannelUpgradeOpen as MsgChannelUpgradeOpen_pb } from '@initia/initia.proto/ibc/core/channel/v1/tx';
import { ChannelState } from '../ChannelState';
import { Height } from '../../client/Height';
export declare class MsgChannelUpgradeOpen extends JSONSerializable<any, MsgChannelUpgradeOpen.Data, MsgChannelUpgradeOpen.Proto> {
    port_id: string;
    channel_id: string;
    counterparty_channel_state: ChannelState;
    counterparty_upgrade_sequence: number;
    proof_channel: string;
    proof_height: Height | undefined;
    signer: AccAddress;
    constructor(port_id: string, channel_id: string, counterparty_channel_state: ChannelState, counterparty_upgrade_sequence: number, proof_channel: string, proof_height: Height | undefined, signer: AccAddress);
    static fromAmino(_: any): MsgChannelUpgradeOpen;
    toAmino(): any;
    static fromData(data: MsgChannelUpgradeOpen.Data): MsgChannelUpgradeOpen;
    toData(): MsgChannelUpgradeOpen.Data;
    static fromProto(proto: MsgChannelUpgradeOpen.Proto): MsgChannelUpgradeOpen;
    toProto(): MsgChannelUpgradeOpen.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgChannelUpgradeOpen;
}
export declare namespace MsgChannelUpgradeOpen {
    interface Data {
        '@type': '/ibc.core.channel.v1.MsgChannelUpgradeOpen';
        port_id: string;
        channel_id: string;
        counterparty_channel_state: string;
        counterparty_upgrade_sequence: string;
        proof_channel: string;
        proof_height?: Height.Data;
        signer: AccAddress;
    }
    type Proto = MsgChannelUpgradeOpen_pb;
}
