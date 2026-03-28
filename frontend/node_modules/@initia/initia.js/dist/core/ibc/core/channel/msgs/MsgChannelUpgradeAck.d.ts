import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgChannelUpgradeAck as MsgChannelUpgradeAck_pb } from '@initia/initia.proto/ibc/core/channel/v1/tx';
import { Upgrade } from '../Upgrade';
import { Height } from '../../client/Height';
export declare class MsgChannelUpgradeAck extends JSONSerializable<any, MsgChannelUpgradeAck.Data, MsgChannelUpgradeAck.Proto> {
    port_id: string;
    channel_id: string;
    counterparty_upgrade: Upgrade | undefined;
    proof_channel: string;
    proof_upgrade: string;
    proof_height: Height | undefined;
    signer: AccAddress;
    constructor(port_id: string, channel_id: string, counterparty_upgrade: Upgrade | undefined, proof_channel: string, proof_upgrade: string, proof_height: Height | undefined, signer: AccAddress);
    static fromAmino(_: any): MsgChannelUpgradeAck;
    toAmino(): any;
    static fromData(data: MsgChannelUpgradeAck.Data): MsgChannelUpgradeAck;
    toData(): MsgChannelUpgradeAck.Data;
    static fromProto(proto: MsgChannelUpgradeAck.Proto): MsgChannelUpgradeAck;
    toProto(): MsgChannelUpgradeAck.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgChannelUpgradeAck;
}
export declare namespace MsgChannelUpgradeAck {
    interface Data {
        '@type': '/ibc.core.channel.v1.MsgChannelUpgradeAck';
        port_id: string;
        channel_id: string;
        counterparty_upgrade?: Upgrade.Data;
        proof_channel: string;
        proof_upgrade: string;
        proof_height?: Height.Data;
        signer: AccAddress;
    }
    type Proto = MsgChannelUpgradeAck_pb;
}
