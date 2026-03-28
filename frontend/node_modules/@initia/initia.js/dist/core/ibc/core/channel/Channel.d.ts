import { JSONSerializable } from '../../../../util/json';
import { Channel as Channel_pb } from '@initia/initia.proto/ibc/core/channel/v1/channel';
import { ChannelState } from './ChannelState';
import { ChannelOrder } from './ChannelOrder';
import { ChannelCounterparty } from './ChannelCounterparty';
export declare class Channel extends JSONSerializable<Channel.Amino, Channel.Data, Channel.Proto> {
    state: ChannelState;
    ordering: ChannelOrder;
    counterparty: ChannelCounterparty | undefined;
    connection_hops: string[];
    version: string;
    upgrade_sequence: number;
    constructor(state: ChannelState, ordering: ChannelOrder, counterparty: ChannelCounterparty | undefined, connection_hops: string[], version: string, upgrade_sequence: number);
    static fromAmino(data: Channel.Amino): Channel;
    toAmino(): Channel.Amino;
    static fromData(data: Channel.Data): Channel;
    toData(): Channel.Data;
    static fromProto(proto: Channel.Proto): Channel;
    toProto(): Channel.Proto;
}
export declare namespace Channel {
    interface Amino {
        state: string;
        ordering: string;
        counterparty?: ChannelCounterparty.Amino;
        connection_hops: string[];
        version: string;
        upgrade_sequence: string;
    }
    interface Data {
        state: string;
        ordering: string;
        counterparty?: ChannelCounterparty.Data;
        connection_hops: string[];
        version: string;
        upgrade_sequence: string;
    }
    type Proto = Channel_pb;
}
