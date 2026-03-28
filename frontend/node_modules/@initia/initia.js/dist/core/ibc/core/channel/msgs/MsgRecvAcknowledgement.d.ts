import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgAcknowledgement as MsgAcknowledgement_pb } from '@initia/initia.proto/ibc/core/channel/v1/tx';
import { Packet, Height } from '../../../core';
export declare class MsgAcknowledgement extends JSONSerializable<any, MsgAcknowledgement.Data, MsgAcknowledgement.Proto> {
    packet: Packet | undefined;
    acknowledgement: string;
    proof_acked: string;
    proof_height: Height | undefined;
    signer: AccAddress;
    constructor(packet: Packet | undefined, acknowledgement: string, proof_acked: string, proof_height: Height | undefined, signer: AccAddress);
    static fromAmino(_: any): MsgAcknowledgement;
    toAmino(): any;
    static fromData(data: MsgAcknowledgement.Data): MsgAcknowledgement;
    toData(): MsgAcknowledgement.Data;
    static fromProto(proto: MsgAcknowledgement.Proto): MsgAcknowledgement;
    toProto(): MsgAcknowledgement.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgAcknowledgement;
}
export declare namespace MsgAcknowledgement {
    interface Data {
        '@type': '/ibc.core.channel.v1.MsgAcknowledgement';
        packet?: Packet.Data;
        acknowledgement: string;
        proof_acked: string;
        proof_height?: Height.Data;
        signer: AccAddress;
    }
    type Proto = MsgAcknowledgement_pb;
}
