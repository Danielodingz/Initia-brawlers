import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgTransfer as MsgTransfer_pb } from '@initia/initia.proto/ibc/applications/nft_transfer/v1/tx';
import { Height } from '../../../core/client/Height';
export declare class MsgNftTransfer extends JSONSerializable<MsgNftTransfer.Amino, MsgNftTransfer.Data, MsgNftTransfer.Proto> {
    source_port: string;
    source_channel: string;
    class_id: string;
    token_ids: string[];
    sender: AccAddress;
    receiver: string;
    timeout_height?: Height;
    timeout_timestamp?: string;
    memo?: string;
    constructor(source_port: string, source_channel: string, class_id: string, token_ids: string[], sender: AccAddress, receiver: string, timeout_height?: Height, timeout_timestamp?: string, memo?: string);
    static fromAmino(data: MsgNftTransfer.Amino): MsgNftTransfer;
    toAmino(): MsgNftTransfer.Amino;
    static fromData(data: MsgNftTransfer.Data): MsgNftTransfer;
    toData(): MsgNftTransfer.Data;
    static fromProto(proto: MsgNftTransfer.Proto): MsgNftTransfer;
    toProto(): MsgNftTransfer.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgNftTransfer;
}
export declare namespace MsgNftTransfer {
    interface Amino {
        type: 'nft-transfer/MsgTransfer';
        value: {
            source_port: string;
            source_channel: string;
            class_id: string;
            token_ids: string[];
            sender: AccAddress;
            receiver: string;
            timeout_height: Height.Amino;
            timeout_timestamp?: string;
            memo?: string;
        };
    }
    interface Data {
        '@type': '/ibc.applications.nft_transfer.v1.MsgTransfer';
        source_port: string;
        source_channel: string;
        class_id: string;
        token_ids: string[];
        sender: AccAddress;
        receiver: string;
        timeout_height: Height.Data;
        timeout_timestamp: string;
        memo?: string;
    }
    type Proto = MsgTransfer_pb;
}
