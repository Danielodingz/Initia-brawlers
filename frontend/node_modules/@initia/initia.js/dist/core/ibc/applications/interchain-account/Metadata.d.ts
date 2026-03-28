import { Metadata as Metadata_pb } from '@initia/initia.proto/ibc/applications/interchain_accounts/v1/metadata';
import { JSONSerializable } from '../../../../util/json';
export declare class Metadata extends JSONSerializable<Metadata.Amino, Metadata.Data, Metadata.Proto> {
    version: string;
    controller_connection_id: string;
    host_connection_id: string;
    address: string;
    encoding: string;
    tx_type: string;
    constructor(version: string, controller_connection_id: string, host_connection_id: string, address: string, encoding: string, tx_type: string);
    static fromAmino(data: Metadata.Amino): Metadata;
    toAmino(): Metadata.Amino;
    static fromData(data: Metadata.Data): Metadata;
    toData(): Metadata.Data;
    static fromProto(proto: Metadata.Proto): Metadata;
    toProto(): Metadata.Proto;
}
export declare namespace Metadata {
    interface Amino {
        version: string;
        controller_connection_id: string;
        host_connection_id: string;
        address: string;
        encoding: string;
        tx_type: string;
    }
    interface Data {
        version: string;
        controller_connection_id: string;
        host_connection_id: string;
        address: string;
        encoding: string;
        tx_type: string;
    }
    type Proto = Metadata_pb;
}
