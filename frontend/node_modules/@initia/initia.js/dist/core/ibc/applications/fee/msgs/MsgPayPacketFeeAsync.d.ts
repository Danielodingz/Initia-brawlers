import { JSONSerializable } from '../../../../../util/json';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgPayPacketFeeAsync as MsgPayPacketFeeAsync_pb } from '@initia/initia.proto/ibc/applications/fee/v1/tx';
import { PacketId } from '../../../core/channel/PacketId';
import { PacketFee } from '../PacketFee';
export declare class MsgPayPacketFeeAsync extends JSONSerializable<any, MsgPayPacketFeeAsync.Data, MsgPayPacketFeeAsync.Proto> {
    packet_id?: PacketId | undefined;
    packet_fee?: PacketFee | undefined;
    constructor(packet_id?: PacketId | undefined, packet_fee?: PacketFee | undefined);
    static fromAmino(_: any): any;
    toAmino(): any;
    static fromData(data: MsgPayPacketFeeAsync.Data): MsgPayPacketFeeAsync;
    toData(): MsgPayPacketFeeAsync.Data;
    static fromProto(proto: MsgPayPacketFeeAsync.Proto): MsgPayPacketFeeAsync;
    toProto(): MsgPayPacketFeeAsync.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgPayPacketFeeAsync;
}
export declare namespace MsgPayPacketFeeAsync {
    interface Data {
        '@type': '/ibc.applications.fee.v1.MsgPayPacketFeeAsync';
        packet_id?: PacketId.Data;
        packet_fee?: PacketFee.Data;
    }
    type Proto = MsgPayPacketFeeAsync_pb;
}
