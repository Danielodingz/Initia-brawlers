import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgChannelUpgradeInit as MsgChannelUpgradeInit_pb } from '@initia/initia.proto/ibc/core/channel/v1/tx';
import { UpgradeFields } from '../UpgradeFields';
export declare class MsgChannelUpgradeInit extends JSONSerializable<any, MsgChannelUpgradeInit.Data, MsgChannelUpgradeInit.Proto> {
    port_id: string;
    channel_id: string;
    fields: UpgradeFields | undefined;
    signer: AccAddress;
    constructor(port_id: string, channel_id: string, fields: UpgradeFields | undefined, signer: AccAddress);
    static fromAmino(_: any): MsgChannelUpgradeInit;
    toAmino(): any;
    static fromData(data: MsgChannelUpgradeInit.Data): MsgChannelUpgradeInit;
    toData(): MsgChannelUpgradeInit.Data;
    static fromProto(proto: MsgChannelUpgradeInit.Proto): MsgChannelUpgradeInit;
    toProto(): MsgChannelUpgradeInit.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgChannelUpgradeInit;
}
export declare namespace MsgChannelUpgradeInit {
    interface Data {
        '@type': '/ibc.core.channel.v1.MsgChannelUpgradeInit';
        port_id: string;
        channel_id: string;
        fields?: UpgradeFields.Data;
        signer: AccAddress;
    }
    type Proto = MsgChannelUpgradeInit_pb;
}
