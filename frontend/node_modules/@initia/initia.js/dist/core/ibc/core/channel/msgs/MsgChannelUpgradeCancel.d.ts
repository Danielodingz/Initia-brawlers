import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgChannelUpgradeCancel as MsgChannelUpgradeCancel_pb } from '@initia/initia.proto/ibc/core/channel/v1/tx';
import { ErrorReceipt } from '../ErrorReceipt';
import { Height } from '../../client/Height';
export declare class MsgChannelUpgradeCancel extends JSONSerializable<any, MsgChannelUpgradeCancel.Data, MsgChannelUpgradeCancel.Proto> {
    port_id: string;
    channel_id: string;
    error_receipt: ErrorReceipt | undefined;
    proof_error_receipt: string;
    proof_height: Height | undefined;
    signer: AccAddress;
    constructor(port_id: string, channel_id: string, error_receipt: ErrorReceipt | undefined, proof_error_receipt: string, proof_height: Height | undefined, signer: AccAddress);
    static fromAmino(_: any): MsgChannelUpgradeCancel;
    toAmino(): any;
    static fromData(data: MsgChannelUpgradeCancel.Data): MsgChannelUpgradeCancel;
    toData(): MsgChannelUpgradeCancel.Data;
    static fromProto(proto: MsgChannelUpgradeCancel.Proto): MsgChannelUpgradeCancel;
    toProto(): MsgChannelUpgradeCancel.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgChannelUpgradeCancel;
}
export declare namespace MsgChannelUpgradeCancel {
    interface Data {
        '@type': '/ibc.core.channel.v1.MsgChannelUpgradeCancel';
        port_id: string;
        channel_id: string;
        error_receipt?: ErrorReceipt.Data;
        proof_error_receipt: string;
        proof_height?: Height.Data;
        signer: AccAddress;
    }
    type Proto = MsgChannelUpgradeCancel_pb;
}
