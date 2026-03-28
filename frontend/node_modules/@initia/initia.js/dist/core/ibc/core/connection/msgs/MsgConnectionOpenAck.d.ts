import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgConnectionOpenAck as MsgConnectionOpenAck_pb } from '@initia/initia.proto/ibc/core/connection/v1/tx';
import { IbcVersion, Height } from '../../../core';
export declare class MsgConnectionOpenAck extends JSONSerializable<any, MsgConnectionOpenAck.Data, MsgConnectionOpenAck.Proto> {
    connection_id: string;
    counterparty_connection_id: string;
    version: IbcVersion | undefined;
    client_state: any;
    proof_height: Height | undefined;
    proof_try: string;
    proof_client: string;
    proof_consensus: string;
    consensus_height: Height | undefined;
    signer: AccAddress;
    constructor(connection_id: string, counterparty_connection_id: string, version: IbcVersion | undefined, client_state: any, proof_height: Height | undefined, proof_try: string, proof_client: string, proof_consensus: string, consensus_height: Height | undefined, signer: AccAddress);
    static fromAmino(_: any): MsgConnectionOpenAck;
    toAmino(): any;
    static fromData(data: MsgConnectionOpenAck.Data): MsgConnectionOpenAck;
    toData(): MsgConnectionOpenAck.Data;
    static fromProto(proto: MsgConnectionOpenAck.Proto): MsgConnectionOpenAck;
    toProto(): MsgConnectionOpenAck.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgConnectionOpenAck;
}
export declare namespace MsgConnectionOpenAck {
    interface Data {
        '@type': '/ibc.core.connection.v1.MsgConnectionOpenAck';
        connection_id: string;
        counterparty_connection_id: string;
        version?: IbcVersion.Data;
        client_state: Any;
        proof_height?: Height.Data;
        proof_try: string;
        proof_client: string;
        proof_consensus: string;
        consensus_height?: Height.Data;
        signer: AccAddress;
    }
    type Proto = MsgConnectionOpenAck_pb;
}
