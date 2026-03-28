import { JSONSerializable } from '../../../../util/json';
import { Counterparty as Counterparty_pb } from '@initia/initia.proto/ibc/core/connection/v1/connection';
import { MerklePrefix } from '../commitment/MerklePrefix';
export declare class ConnectionCounterparty extends JSONSerializable<ConnectionCounterparty.Amino, ConnectionCounterparty.Data, ConnectionCounterparty.Proto> {
    client_id: string;
    connection_id: string;
    prefix?: MerklePrefix | undefined;
    constructor(client_id: string, connection_id: string, prefix?: MerklePrefix | undefined);
    static fromAmino(data: ConnectionCounterparty.Amino): ConnectionCounterparty;
    toAmino(): ConnectionCounterparty.Amino;
    static fromData(data: ConnectionCounterparty.Data): ConnectionCounterparty;
    toData(): ConnectionCounterparty.Data;
    static fromProto(proto: ConnectionCounterparty.Proto): ConnectionCounterparty;
    toProto(): ConnectionCounterparty.Proto;
}
export declare namespace ConnectionCounterparty {
    interface Amino {
        client_id: string;
        connection_id: string;
        prefix?: MerklePrefix.Amino;
    }
    interface Data {
        client_id: string;
        connection_id: string;
        prefix?: MerklePrefix.Data;
    }
    type Proto = Counterparty_pb;
}
