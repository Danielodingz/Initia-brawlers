import { JSONSerializable } from '../../../../util/json';
import { Upgrade as Upgrade_pb } from '@initia/initia.proto/ibc/core/channel/v1/upgrade';
import { UpgradeFields } from './UpgradeFields';
import { Timeout } from './Timeout';
export declare class Upgrade extends JSONSerializable<any, Upgrade.Data, Upgrade.Proto> {
    fields: UpgradeFields | undefined;
    timeout: Timeout | undefined;
    next_sequence_send: number;
    constructor(fields: UpgradeFields | undefined, timeout: Timeout | undefined, next_sequence_send: number);
    static fromAmino(_: any): Upgrade;
    toAmino(): any;
    static fromData(data: Upgrade.Data): Upgrade;
    toData(): Upgrade.Data;
    static fromProto(proto: Upgrade.Proto): Upgrade;
    toProto(): Upgrade.Proto;
}
export declare namespace Upgrade {
    interface Data {
        fields?: UpgradeFields.Data;
        timeout?: Timeout.Data;
        next_sequence_send: string;
    }
    type Proto = Upgrade_pb;
}
