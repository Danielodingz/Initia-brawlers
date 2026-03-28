import { JSONSerializable } from '../../../../../util/json';
import { Coins } from '../../../../Coins';
import { Allocation as Allocation_pb } from '@initia/initia.proto/ibc/applications/transfer/v1/authz';
export declare class Allocation extends JSONSerializable<Allocation.Amino, Allocation.Data, Allocation.Proto> {
    source_port: string;
    source_channel: string;
    allow_list: string[];
    allowed_packet_data: string[];
    spend_limit: Coins;
    constructor(source_port: string, source_channel: string, spend_limit: Coins.Input, allow_list: string[], allowed_packet_data: string[]);
    static fromAmino(data: Allocation.Amino): Allocation;
    toAmino(): Allocation.Amino;
    static fromData(data: Allocation.Data): Allocation;
    toData(): Allocation.Data;
    static fromProto(data: Allocation.Proto): Allocation;
    toProto(): Allocation.Proto;
}
export declare namespace Allocation {
    interface Amino {
        source_port: string;
        source_channel: string;
        spend_limit: Coins.Amino;
        allow_list: string[];
        allowed_packet_data: string[];
    }
    interface Data {
        source_port: string;
        source_channel: string;
        spend_limit: Coins.Data;
        allow_list: string[];
        allowed_packet_data: string[];
    }
    type Proto = Allocation_pb;
}
