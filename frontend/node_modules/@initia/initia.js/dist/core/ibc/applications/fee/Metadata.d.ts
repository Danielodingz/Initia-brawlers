import { Metadata as Metadata_pb } from '@initia/initia.proto/ibc/applications/fee/v1/metadata';
import { JSONSerializable } from '../../../../util/json';
export declare class Metadata extends JSONSerializable<Metadata.Amino, Metadata.Data, Metadata.Proto> {
    fee_version: string;
    app_version: string;
    constructor(fee_version: string, app_version: string);
    static fromAmino(data: Metadata.Amino): Metadata;
    toAmino(): Metadata.Amino;
    static fromData(data: Metadata.Data): Metadata;
    toData(): Metadata.Data;
    static fromProto(proto: Metadata.Proto): Metadata;
    toProto(): Metadata.Proto;
}
export declare namespace Metadata {
    interface Amino {
        fee_version: string;
        app_version: string;
    }
    interface Data {
        fee_version: string;
        app_version: string;
    }
    type Proto = Metadata_pb;
}
