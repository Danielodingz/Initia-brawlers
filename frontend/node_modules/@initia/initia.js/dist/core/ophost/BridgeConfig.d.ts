import { JSONSerializable } from '../../util/json';
import { AccAddress } from '../bech32';
import { Duration } from '../Duration';
import { BridgeConfig as BridgeConfig_pb } from '@initia/opinit.proto/opinit/ophost/v1/types';
import { BatchInfo } from './BatchInfo';
export declare class BridgeConfig extends JSONSerializable<BridgeConfig.Amino, BridgeConfig.Data, BridgeConfig.Proto> {
    challenger: AccAddress;
    proposer: AccAddress;
    batch_info: BatchInfo;
    submission_interval: Duration;
    finalization_period: Duration;
    submission_start_height: number;
    oracle_enabled: boolean;
    metadata: string | undefined;
    bridge_disabled: boolean;
    bridge_disabled_at: Date;
    constructor(challenger: AccAddress, proposer: AccAddress, batch_info: BatchInfo, submission_interval: Duration, finalization_period: Duration, submission_start_height: number, oracle_enabled: boolean, metadata: string | undefined, bridge_disabled: boolean, bridge_disabled_at: Date);
    static fromAmino(data: BridgeConfig.Amino): BridgeConfig;
    toAmino(): BridgeConfig.Amino;
    static fromData(data: BridgeConfig.Data): BridgeConfig;
    toData(): BridgeConfig.Data;
    static fromProto(data: BridgeConfig.Proto): BridgeConfig;
    toProto(): BridgeConfig.Proto;
}
export declare namespace BridgeConfig {
    interface Amino {
        challenger: AccAddress;
        proposer: AccAddress;
        batch_info: BatchInfo.Amino;
        submission_interval: Duration.Amino;
        finalization_period: Duration.Amino;
        submission_start_height: string;
        oracle_enabled: boolean;
        metadata?: string;
        bridge_disabled: boolean;
        bridge_disabled_at: string;
    }
    interface Data {
        challenger: AccAddress;
        proposer: AccAddress;
        batch_info: BatchInfo.Data;
        submission_interval: Duration.Data;
        finalization_period: Duration.Data;
        submission_start_height: string;
        oracle_enabled: boolean;
        metadata?: string;
        bridge_disabled: boolean;
        bridge_disabled_at: string;
    }
    type Proto = BridgeConfig_pb;
}
