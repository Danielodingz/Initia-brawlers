import { IdentifiedConnection as IdentifiedConnection_pb } from '@initia/initia.proto/ibc/core/connection/v1/connection';
import { JSONSerializable } from '../../../../util/json';
import { IbcVersion } from './IbcVersion';
import { ConnectionCounterparty } from './ConnectionCounterparty';
import { ConnectionState } from './ConnectionState';
export declare class IdentifiedConnection extends JSONSerializable<IdentifiedConnection.Amino, IdentifiedConnection.Data, IdentifiedConnection.Proto> {
    id: string;
    client_id: string;
    versions: IbcVersion[];
    state: ConnectionState;
    counterparty: ConnectionCounterparty | undefined;
    delay_period: number;
    constructor(id: string, client_id: string, versions: IbcVersion[], state: ConnectionState, counterparty: ConnectionCounterparty | undefined, delay_period: number);
    static fromAmino(data: IdentifiedConnection.Amino): IdentifiedConnection;
    toAmino(): IdentifiedConnection.Amino;
    static fromData(data: IdentifiedConnection.Data): IdentifiedConnection;
    toData(): IdentifiedConnection.Data;
    static fromProto(proto: IdentifiedConnection.Proto): IdentifiedConnection;
    toProto(): IdentifiedConnection.Proto;
}
export declare namespace IdentifiedConnection {
    interface Amino {
        id: string;
        client_id: string;
        versions: IbcVersion.Amino[];
        state: string;
        counterparty?: ConnectionCounterparty.Amino;
        delay_period: string;
    }
    interface Data {
        id: string;
        client_id: string;
        versions: IbcVersion.Data[];
        state: string;
        counterparty?: ConnectionCounterparty.Data;
        delay_period: string;
    }
    type Proto = IdentifiedConnection_pb;
}
