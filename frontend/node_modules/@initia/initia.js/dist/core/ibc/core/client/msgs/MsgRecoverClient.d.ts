import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgRecoverClient as MsgRecoverClient_pb } from '@initia/initia.proto/ibc/core/client/v1/tx';
export declare class MsgRecoverClient extends JSONSerializable<any, MsgRecoverClient.Data, MsgRecoverClient.Proto> {
    subject_client_id: string;
    substitute_client_id: string;
    signer: string;
    constructor(subject_client_id: string, substitute_client_id: string, signer: string);
    static fromAmino(_: any): MsgRecoverClient;
    toAmino(): any;
    static fromData(data: MsgRecoverClient.Data): MsgRecoverClient;
    toData(): MsgRecoverClient.Data;
    static fromProto(proto: MsgRecoverClient.Proto): MsgRecoverClient;
    toProto(): MsgRecoverClient.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgRecoverClient;
}
export declare namespace MsgRecoverClient {
    interface Data {
        '@type': '/ibc.core.client.v1.MsgRecoverClient';
        subject_client_id: string;
        substitute_client_id: string;
        signer: AccAddress;
    }
    type Proto = MsgRecoverClient_pb;
}
