import { JSONSerializable } from '../../../../util/json';
import { UpgradeFields as UpgradeFields_pb } from '@initia/initia.proto/ibc/core/channel/v1/upgrade';
import { ChannelOrder } from './ChannelOrder';
export declare class UpgradeFields extends JSONSerializable<any, UpgradeFields.Data, UpgradeFields.Proto> {
    ordering: ChannelOrder;
    connection_hops: string[];
    version: string;
    constructor(ordering: ChannelOrder, connection_hops: string[], version: string);
    static fromAmino(_: any): UpgradeFields;
    toAmino(): any;
    static fromData(data: UpgradeFields.Data): UpgradeFields;
    toData(): UpgradeFields.Data;
    static fromProto(proto: UpgradeFields.Proto): UpgradeFields;
    toProto(): UpgradeFields.Proto;
}
export declare namespace UpgradeFields {
    interface Data {
        ordering: string;
        connection_hops: string[];
        version: string;
    }
    type Proto = UpgradeFields_pb;
}
