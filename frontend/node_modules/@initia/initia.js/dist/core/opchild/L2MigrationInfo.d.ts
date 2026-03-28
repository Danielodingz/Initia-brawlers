import { JSONSerializable } from '../../util/json';
import { MigrationInfo as MigrationInfo_pb } from '@initia/opinit.proto/opinit/opchild/v1/types';
export declare class L2MigrationInfo extends JSONSerializable<L2MigrationInfo.Amino, L2MigrationInfo.Data, L2MigrationInfo.Proto> {
    denom: string;
    ibc_channel_id: string;
    ibc_port_id: string;
    constructor(denom: string, ibc_channel_id: string, ibc_port_id: string);
    static fromAmino(data: L2MigrationInfo.Amino): L2MigrationInfo;
    toAmino(): L2MigrationInfo.Amino;
    static fromData(data: L2MigrationInfo.Data): L2MigrationInfo;
    toData(): L2MigrationInfo.Data;
    static fromProto(data: L2MigrationInfo.Proto): L2MigrationInfo;
    toProto(): L2MigrationInfo.Proto;
}
export declare namespace L2MigrationInfo {
    interface Amino {
        denom: string;
        ibc_channel_id: string;
        ibc_port_id: string;
    }
    interface Data {
        denom: string;
        ibc_channel_id: string;
        ibc_port_id: string;
    }
    type Proto = MigrationInfo_pb;
}
