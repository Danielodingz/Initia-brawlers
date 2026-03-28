import { JSONSerializable } from '../../../../../util/json';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgPayPacketFee as MsgPayPacketFee_pb } from '@initia/initia.proto/ibc/applications/fee/v1/tx';
import { IbcFee } from '../IbcFee';
export declare class MsgPayPacketFee extends JSONSerializable<any, MsgPayPacketFee.Data, MsgPayPacketFee.Proto> {
    fee: IbcFee | undefined;
    source_port_id: string;
    source_channel_id: string;
    signer: string;
    relayers: string[];
    constructor(fee: IbcFee | undefined, source_port_id: string, source_channel_id: string, signer: string, relayers: string[]);
    static fromAmino(_: any): MsgPayPacketFee;
    toAmino(): any;
    static fromData(data: MsgPayPacketFee.Data): MsgPayPacketFee;
    toData(): MsgPayPacketFee.Data;
    static fromProto(proto: MsgPayPacketFee.Proto): MsgPayPacketFee;
    toProto(): MsgPayPacketFee.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgPayPacketFee;
}
export declare namespace MsgPayPacketFee {
    interface Data {
        '@type': '/ibc.applications.fee.v1.MsgPayPacketFee';
        fee?: IbcFee.Data;
        source_port_id: string;
        source_channel_id: string;
        signer: string;
        relayers: string[];
    }
    type Proto = MsgPayPacketFee_pb;
}
