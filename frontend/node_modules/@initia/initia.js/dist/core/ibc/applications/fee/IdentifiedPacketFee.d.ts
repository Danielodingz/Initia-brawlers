import { IdentifiedPacketFees as IdentifiedPacketFees_pb } from '@initia/initia.proto/ibc/applications/fee/v1/fee';
import { JSONSerializable } from '../../../../util/json';
import { PacketFee } from './PacketFee';
import { PacketId } from '../../core/channel/PacketId';
export declare class IdentifiedPacketFees extends JSONSerializable<IdentifiedPacketFees.Amino, IdentifiedPacketFees.Data, IdentifiedPacketFees.Proto> {
    packet_id?: PacketId | undefined;
    packet_fees: PacketFee[];
    constructor(packet_id?: PacketId | undefined, packet_fees?: PacketFee[]);
    static fromAmino(data: IdentifiedPacketFees.Amino): IdentifiedPacketFees;
    toAmino(): IdentifiedPacketFees.Amino;
    static fromData(data: IdentifiedPacketFees.Data): IdentifiedPacketFees;
    toData(): IdentifiedPacketFees.Data;
    static fromProto(proto: IdentifiedPacketFees.Proto): IdentifiedPacketFees;
    toProto(): IdentifiedPacketFees.Proto;
}
export declare namespace IdentifiedPacketFees {
    interface Amino {
        packet_id?: PacketId.Amino;
        packet_fees: PacketFee.Amino[];
    }
    interface Data {
        packet_id?: PacketId.Data;
        packet_fees: PacketFee.Data[];
    }
    type Proto = IdentifiedPacketFees_pb;
}
