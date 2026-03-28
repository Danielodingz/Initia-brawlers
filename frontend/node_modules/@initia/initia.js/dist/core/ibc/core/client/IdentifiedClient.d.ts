import { IdentifiedClientState as IdentifiedClientState_pb } from '@initia/initia.proto/ibc/core/client/v1/client';
import { JSONSerializable } from '../../../../util/json';
export declare class IdentifiedClientState extends JSONSerializable<IdentifiedClientState.Amino, IdentifiedClientState.Data, IdentifiedClientState.Proto> {
    client_id: string;
    client_state: any;
    constructor(client_id: string, client_state: any);
    static fromAmino(data: IdentifiedClientState.Amino): IdentifiedClientState;
    toAmino(): IdentifiedClientState.Amino;
    static fromData(data: IdentifiedClientState.Data): IdentifiedClientState;
    toData(): IdentifiedClientState.Data;
    static fromProto(proto: IdentifiedClientState.Proto): IdentifiedClientState;
    toProto(): IdentifiedClientState.Proto;
}
export declare namespace IdentifiedClientState {
    interface Amino {
        client_id: string;
        client_state: any;
    }
    interface Data {
        client_id: string;
        client_state: any;
    }
    type Proto = IdentifiedClientState_pb;
}
