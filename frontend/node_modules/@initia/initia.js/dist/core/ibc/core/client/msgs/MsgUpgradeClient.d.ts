import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgUpgradeClient as MsgUpgradeClient_pb } from '@initia/initia.proto/ibc/core/client/v1/tx';
export declare class MsgUpgradeClient extends JSONSerializable<any, MsgUpgradeClient.Data, MsgUpgradeClient.Proto> {
    client_id: string;
    client_state: any;
    consensus_state: any;
    proof_upgrade_client: string;
    proof_upgrade_consensus_state: string;
    signer: AccAddress;
    constructor(client_id: string, client_state: any, consensus_state: any, proof_upgrade_client: string, proof_upgrade_consensus_state: string, signer: AccAddress);
    static fromAmino(_: any): MsgUpgradeClient;
    toAmino(): any;
    static fromData(data: MsgUpgradeClient.Data): MsgUpgradeClient;
    toData(): MsgUpgradeClient.Data;
    static fromProto(proto: MsgUpgradeClient.Proto): MsgUpgradeClient;
    toProto(): MsgUpgradeClient.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUpgradeClient;
}
export declare namespace MsgUpgradeClient {
    interface Data {
        '@type': '/ibc.core.client.v1.MsgUpgradeClient';
        client_id: string;
        client_state: any;
        consensus_state: any;
        proof_upgrade_client: string;
        proof_upgrade_consensus_state: string;
        signer: AccAddress;
    }
    type Proto = MsgUpgradeClient_pb;
}
