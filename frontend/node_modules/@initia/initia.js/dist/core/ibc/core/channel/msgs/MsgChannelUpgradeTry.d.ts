import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgChannelUpgradeTry as MsgChannelUpgradeTry_pb } from '@initia/initia.proto/ibc/core/channel/v1/tx';
import { UpgradeFields } from '../UpgradeFields';
import { Height } from '../../client/Height';
export declare class MsgChannelUpgradeTry extends JSONSerializable<any, MsgChannelUpgradeTry.Data, MsgChannelUpgradeTry.Proto> {
    port_id: string;
    channel_id: string;
    proposed_upgrade_connection_hops: string[];
    counterparty_upgrade_fields: UpgradeFields | undefined;
    counterparty_upgrade_sequence: number;
    proof_channel: string;
    proof_upgrade: string;
    proof_height: Height | undefined;
    signer: AccAddress;
    constructor(port_id: string, channel_id: string, proposed_upgrade_connection_hops: string[], counterparty_upgrade_fields: UpgradeFields | undefined, counterparty_upgrade_sequence: number, proof_channel: string, proof_upgrade: string, proof_height: Height | undefined, signer: AccAddress);
    static fromAmino(_: any): MsgChannelUpgradeTry;
    toAmino(): any;
    static fromData(data: MsgChannelUpgradeTry.Data): MsgChannelUpgradeTry;
    toData(): MsgChannelUpgradeTry.Data;
    static fromProto(proto: MsgChannelUpgradeTry.Proto): MsgChannelUpgradeTry;
    toProto(): MsgChannelUpgradeTry.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgChannelUpgradeTry;
}
export declare namespace MsgChannelUpgradeTry {
    interface Data {
        '@type': '/ibc.core.channel.v1.MsgChannelUpgradeTry';
        port_id: string;
        channel_id: string;
        proposed_upgrade_connection_hops: string[];
        counterparty_upgrade_fields?: UpgradeFields.Data;
        counterparty_upgrade_sequence: string;
        proof_channel: string;
        proof_upgrade: string;
        proof_height?: Height.Data;
        signer: AccAddress;
    }
    type Proto = MsgChannelUpgradeTry_pb;
}
