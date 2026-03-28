import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgConnectionOpenTry as MsgConnectionOpenTry_pb } from '@initia/initia.proto/ibc/core/connection/v1/tx';
import { ConnectionCounterparty } from '../ConnectionCounterparty';
import { IbcVersion } from '../IbcVersion';
import { Height } from '../../client';
export declare class MsgConnectionOpenTry extends JSONSerializable<any, MsgConnectionOpenTry.Data, MsgConnectionOpenTry.Proto> {
    client_id: string;
    client_state: Any | undefined;
    counterparty: ConnectionCounterparty | undefined;
    delay_period: number;
    counterparty_versions: IbcVersion[];
    proof_height: Height | undefined;
    proof_init: string;
    proof_client: string;
    proof_consensus: string;
    consensus_height: Height | undefined;
    signer: AccAddress;
    constructor(client_id: string, client_state: Any | undefined, counterparty: ConnectionCounterparty | undefined, delay_period: number, counterparty_versions: IbcVersion[], proof_height: Height | undefined, proof_init: string, proof_client: string, proof_consensus: string, consensus_height: Height | undefined, signer: AccAddress);
    static fromAmino(_: any): MsgConnectionOpenTry;
    toAmino(): any;
    static fromData(data: MsgConnectionOpenTry.Data): MsgConnectionOpenTry;
    toData(): MsgConnectionOpenTry.Data;
    static fromProto(proto: MsgConnectionOpenTry.Proto): MsgConnectionOpenTry;
    toProto(): MsgConnectionOpenTry.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgConnectionOpenTry;
}
export declare namespace MsgConnectionOpenTry {
    interface Data {
        '@type': '/ibc.core.connection.v1.MsgConnectionOpenTry';
        client_id: string;
        client_state?: Any;
        counterparty?: ConnectionCounterparty.Data;
        delay_period: string;
        counterparty_versions: IbcVersion.Data[];
        proof_height?: Height.Data;
        proof_init: string;
        proof_client: string;
        proof_consensus: string;
        consensus_height?: Height.Data;
        signer: AccAddress;
    }
    type Proto = MsgConnectionOpenTry_pb;
}
