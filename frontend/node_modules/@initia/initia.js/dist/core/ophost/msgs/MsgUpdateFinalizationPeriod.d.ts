import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Duration } from '../../Duration';
import { MsgUpdateFinalizationPeriod as MsgUpdateFinalizationPeriod_pb } from '@initia/opinit.proto/opinit/ophost/v1/tx';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class MsgUpdateFinalizationPeriod extends JSONSerializable<MsgUpdateFinalizationPeriod.Amino, MsgUpdateFinalizationPeriod.Data, MsgUpdateFinalizationPeriod.Proto> {
    authority: AccAddress;
    bridge_id: number;
    finalization_period: Duration;
    constructor(authority: AccAddress, bridge_id: number, finalization_period: Duration);
    static fromAmino(data: MsgUpdateFinalizationPeriod.Amino): MsgUpdateFinalizationPeriod;
    toAmino(): MsgUpdateFinalizationPeriod.Amino;
    static fromData(data: MsgUpdateFinalizationPeriod.Data): MsgUpdateFinalizationPeriod;
    toData(): MsgUpdateFinalizationPeriod.Data;
    static fromProto(data: MsgUpdateFinalizationPeriod.Proto): MsgUpdateFinalizationPeriod;
    toProto(): MsgUpdateFinalizationPeriod.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUpdateFinalizationPeriod;
}
export declare namespace MsgUpdateFinalizationPeriod {
    interface Amino {
        type: 'ophost/MsgUpdateFinalizationPeriod';
        value: {
            authority: AccAddress;
            bridge_id: string;
            finalization_period: Duration.Amino;
        };
    }
    interface Data {
        '@type': '/opinit.ophost.v1.MsgUpdateFinalizationPeriod';
        authority: AccAddress;
        bridge_id: string;
        finalization_period: Duration.Data;
    }
    type Proto = MsgUpdateFinalizationPeriod_pb;
}
