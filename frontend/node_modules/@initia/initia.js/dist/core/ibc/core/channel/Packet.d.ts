import { Packet as Packet_pb } from '@initia/initia.proto/ibc/core/channel/v1/channel';
import { JSONSerializable } from '../../../../util/json';
import { Height } from '../client/Height';
export declare class Packet extends JSONSerializable<Packet.Amino, Packet.Data, Packet.Proto> {
    sequence: number;
    source_port: string;
    source_channel: string;
    destination_port: string;
    destination_channel: string;
    data: string;
    timeout_height: Height | undefined;
    timeout_timestamp: string;
    constructor(sequence: number, source_port: string, source_channel: string, destination_port: string, destination_channel: string, data: string, timeout_height: Height | undefined, timeout_timestamp: string);
    static fromAmino(_data: Packet.Amino): Packet;
    toAmino(): Packet.Amino;
    static fromData(_data: Packet.Data): Packet;
    toData(): Packet.Data;
    static fromProto(proto: Packet.Proto): Packet;
    toProto(): Packet.Proto;
}
export declare namespace Packet {
    interface Amino {
        sequence: number;
        source_port: string;
        source_channel: string;
        destination_port: string;
        destination_channel: string;
        data: string;
        timeout_height?: Height.Amino;
        timeout_timestamp: string;
    }
    interface Data {
        sequence: number;
        source_port: string;
        source_channel: string;
        destination_port: string;
        destination_channel: string;
        data: string;
        timeout_height?: Height.Data;
        timeout_timestamp: string;
    }
    type Proto = Packet_pb;
}
