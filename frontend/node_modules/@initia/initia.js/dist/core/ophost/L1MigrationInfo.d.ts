import { JSONSerializable } from '../../util/json';
import { MigrationInfo as MigrationInfo_pb } from '@initia/opinit.proto/opinit/ophost/v1/types';
export declare class L1MigrationInfo extends JSONSerializable<L1MigrationInfo.Amino, L1MigrationInfo.Data, L1MigrationInfo.Proto> {
    bridge_id: number;
    ibc_channel_id: string;
    ibc_port_id: string;
    l1_denom: string;
    constructor(bridge_id: number, ibc_channel_id: string, ibc_port_id: string, l1_denom: string);
    static fromAmino(data: L1MigrationInfo.Amino): L1MigrationInfo;
    toAmino(): L1MigrationInfo.Amino;
    static fromData(data: L1MigrationInfo.Data): L1MigrationInfo;
    toData(): L1MigrationInfo.Data;
    static fromProto(data: L1MigrationInfo.Proto): L1MigrationInfo;
    toProto(): L1MigrationInfo.Proto;
}
export declare namespace L1MigrationInfo {
    interface Amino {
        bridge_id: string;
        ibc_channel_id: string;
        ibc_port_id: string;
        l1_denom: string;
    }
    interface Data {
        bridge_id: string;
        ibc_channel_id: string;
        ibc_port_id: string;
        l1_denom: string;
    }
    type Proto = MigrationInfo_pb;
}
