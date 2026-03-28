import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgUpdateClient as MsgUpdateClient_pb } from '@initia/initia.proto/ibc/core/client/v1/tx';
export declare class MsgUpdateClient extends JSONSerializable<any, MsgUpdateClient.Data, MsgUpdateClient.Proto> {
    client_id: string;
    client_message: any;
    signer: string;
    constructor(client_id: string, client_message: any, signer: string);
    static fromAmino(_: any): MsgUpdateClient;
    toAmino(): any;
    static fromData(data: MsgUpdateClient.Data): MsgUpdateClient;
    toData(): MsgUpdateClient.Data;
    static fromProto(proto: MsgUpdateClient.Proto): MsgUpdateClient;
    toProto(): MsgUpdateClient.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUpdateClient;
}
export declare namespace MsgUpdateClient {
    interface Data {
        '@type': '/ibc.core.client.v1.MsgUpdateClient';
        client_id: string;
        client_message?: any;
        signer: AccAddress;
    }
    type Proto = MsgUpdateClient_pb;
}
