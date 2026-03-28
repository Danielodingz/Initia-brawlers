import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgChannelUpgradeConfirm as MsgChannelUpgradeConfirm_pb } from '@initia/initia.proto/ibc/core/channel/v1/tx';
import { ChannelState } from '../ChannelState';
import { Upgrade } from '../Upgrade';
import { Height } from '../../client/Height';
export declare class MsgChannelUpgradeConfirm extends JSONSerializable<any, MsgChannelUpgradeConfirm.Data, MsgChannelUpgradeConfirm.Proto> {
    port_id: string;
    channel_id: string;
    counterparty_channel_state: ChannelState;
    counterparty_upgrade: Upgrade | undefined;
    proof_channel: string;
    proof_upgrade: string;
    proof_height: Height | undefined;
    signer: AccAddress;
    constructor(port_id: string, channel_id: string, counterparty_channel_state: ChannelState, counterparty_upgrade: Upgrade | undefined, proof_channel: string, proof_upgrade: string, proof_height: Height | undefined, signer: AccAddress);
    static fromAmino(_: any): MsgChannelUpgradeConfirm;
    toAmino(): any;
    static fromData(data: MsgChannelUpgradeConfirm.Data): MsgChannelUpgradeConfirm;
    toData(): MsgChannelUpgradeConfirm.Data;
    static fromProto(proto: MsgChannelUpgradeConfirm.Proto): MsgChannelUpgradeConfirm;
    toProto(): MsgChannelUpgradeConfirm.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgChannelUpgradeConfirm;
}
export declare namespace MsgChannelUpgradeConfirm {
    interface Data {
        '@type': '/ibc.core.channel.v1.MsgChannelUpgradeConfirm';
        port_id: string;
        channel_id: string;
        counterparty_channel_state: string;
        counterparty_upgrade?: Upgrade.Data;
        proof_channel: string;
        proof_upgrade: string;
        proof_height?: Height.Data;
        signer: AccAddress;
    }
    type Proto = MsgChannelUpgradeConfirm_pb;
}
