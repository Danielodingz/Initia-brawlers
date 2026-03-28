import { PacketId as PacketId_pb } from '@initia/initia.proto/ibc/core/channel/v1/channel';
import { JSONSerializable } from '../../../../util/json';
export declare class PacketId extends JSONSerializable<PacketId.Amino, PacketId.Data, PacketId.Proto> {
    port_id: string;
    channel_id: string;
    sequence: number;
    constructor(port_id: string, channel_id: string, sequence: number);
    static fromAmino(data: PacketId.Amino): PacketId;
    toAmino(): PacketId.Amino;
    static fromData(data: PacketId.Data): PacketId;
    toData(): PacketId.Data;
    static fromProto(proto: PacketId.Proto): PacketId;
    toProto(): PacketId.Proto;
}
export declare namespace PacketId {
    interface Amino {
        port_id: string;
        channel_id: string;
        sequence: string;
    }
    interface Data {
        port_id: string;
        channel_id: string;
        sequence: string;
    }
    type Proto = PacketId_pb;
}
