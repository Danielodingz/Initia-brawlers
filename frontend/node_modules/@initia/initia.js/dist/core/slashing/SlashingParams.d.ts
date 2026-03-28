import { JSONSerializable } from '../../util/json';
import { Duration } from '../Duration';
import { Params as Params_pb } from '@initia/initia.proto/cosmos/slashing/v1beta1/slashing';
export declare class SlashingParams extends JSONSerializable<SlashingParams.Amino, SlashingParams.Data, SlashingParams.Proto> {
    signed_blocks_window: number;
    min_signed_per_window: string;
    downtime_jail_duration: Duration;
    slash_fraction_double_sign: string;
    slash_fraction_downtime: string;
    constructor(signed_blocks_window: number, min_signed_per_window: string, downtime_jail_duration: Duration, slash_fraction_double_sign: string, slash_fraction_downtime: string);
    static fromAmino(data: SlashingParams.Amino): SlashingParams;
    toAmino(): SlashingParams.Amino;
    static fromData(data: SlashingParams.Data): SlashingParams;
    toData(): SlashingParams.Data;
    static fromProto(data: SlashingParams.Proto): SlashingParams;
    toProto(): SlashingParams.Proto;
}
export declare namespace SlashingParams {
    interface Amino {
        type: 'cosmos-sdk/x/slashing/Params';
        value: {
            signed_blocks_window: string;
            min_signed_per_window: string;
            downtime_jail_duration: Duration.Amino;
            slash_fraction_double_sign: string;
            slash_fraction_downtime: string;
        };
    }
    interface Data {
        '@type': '/cosmos.slashing.v1beta1.Params';
        signed_blocks_window: string;
        min_signed_per_window: string;
        downtime_jail_duration: Duration.Data;
        slash_fraction_double_sign: string;
        slash_fraction_downtime: string;
    }
    type Proto = Params_pb;
}
