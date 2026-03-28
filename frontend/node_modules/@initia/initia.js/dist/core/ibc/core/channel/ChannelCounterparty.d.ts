import { JSONSerializable } from '../../../../util/json';
import { Counterparty as Counterparty_pb } from '@initia/initia.proto/ibc/core/channel/v1/channel';
export declare class ChannelCounterparty extends JSONSerializable<ChannelCounterparty.Amino, ChannelCounterparty.Data, ChannelCounterparty.Proto> {
    port_id: string;
    channel_id: string;
    constructor(port_id: string, channel_id: string);
    static fromAmino(data: ChannelCounterparty.Amino): ChannelCounterparty;
    toAmino(): ChannelCounterparty.Amino;
    static fromData(data: ChannelCounterparty.Data): ChannelCounterparty;
    toData(): ChannelCounterparty.Data;
    static fromProto(proto: ChannelCounterparty.Proto): ChannelCounterparty;
    toProto(): ChannelCounterparty.Proto;
}
export declare namespace ChannelCounterparty {
    interface Amino {
        port_id: string;
        channel_id: string;
    }
    interface Data {
        port_id: string;
        channel_id: string;
    }
    type Proto = Counterparty_pb;
}
