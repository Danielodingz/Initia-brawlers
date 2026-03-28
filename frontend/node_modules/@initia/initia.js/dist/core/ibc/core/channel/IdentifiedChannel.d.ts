import { JSONSerializable } from '../../../../util/json';
import { IdentifiedChannel as IdentifiedChannel_pb } from '@initia/initia.proto/ibc/core/channel/v1/channel';
import { ChannelState } from './ChannelState';
import { ChannelOrder } from './ChannelOrder';
import { ChannelCounterparty } from './ChannelCounterparty';
export declare class IdentifiedChannel extends JSONSerializable<IdentifiedChannel.Amino, IdentifiedChannel.Data, IdentifiedChannel.Proto> {
    state: ChannelState;
    ordering: ChannelOrder;
    counterparty: ChannelCounterparty | undefined;
    connection_hops: string[];
    version: string;
    port_id: string;
    channel_id: string;
    upgrade_sequence: number;
    constructor(state: ChannelState, ordering: ChannelOrder, counterparty: ChannelCounterparty | undefined, connection_hops: string[], version: string, port_id: string, channel_id: string, upgrade_sequence: number);
    static fromAmino(data: IdentifiedChannel.Amino): IdentifiedChannel;
    toAmino(): IdentifiedChannel.Amino;
    static fromData(data: IdentifiedChannel.Data): IdentifiedChannel;
    toData(): IdentifiedChannel.Data;
    static fromProto(proto: IdentifiedChannel.Proto): IdentifiedChannel;
    toProto(): IdentifiedChannel.Proto;
}
export declare namespace IdentifiedChannel {
    interface Amino {
        state: string;
        ordering: string;
        counterparty?: ChannelCounterparty.Amino;
        connection_hops: string[];
        version: string;
        port_id: string;
        channel_id: string;
        upgrade_sequence: string;
    }
    interface Data {
        state: string;
        ordering: string;
        counterparty?: ChannelCounterparty.Data;
        connection_hops: string[];
        version: string;
        port_id: string;
        channel_id: string;
        upgrade_sequence: string;
    }
    type Proto = IdentifiedChannel_pb;
}
