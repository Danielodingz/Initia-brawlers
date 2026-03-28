import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgUpdateAdmin as MsgUpdateAdmin_pb } from '@initia/initia.proto/ibc/applications/perm/v1/tx';
export declare class MsgUpdateIbcPermAdmin extends JSONSerializable<MsgUpdateIbcPermAdmin.Amino, MsgUpdateIbcPermAdmin.Data, MsgUpdateIbcPermAdmin.Proto> {
    authority: AccAddress;
    channel_id: string;
    port_id: string;
    admin: string;
    constructor(authority: AccAddress, channel_id: string, port_id: string, admin: string);
    static fromAmino(data: MsgUpdateIbcPermAdmin.Amino): MsgUpdateIbcPermAdmin;
    toAmino(): MsgUpdateIbcPermAdmin.Amino;
    static fromData(data: MsgUpdateIbcPermAdmin.Data): MsgUpdateIbcPermAdmin;
    toData(): MsgUpdateIbcPermAdmin.Data;
    static fromProto(data: MsgUpdateIbcPermAdmin.Proto): MsgUpdateIbcPermAdmin;
    toProto(): MsgUpdateIbcPermAdmin.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUpdateIbcPermAdmin;
}
export declare namespace MsgUpdateIbcPermAdmin {
    interface Amino {
        type: 'ibc-perm/MsgUpdateAdmin';
        value: {
            authority: AccAddress;
            channel_id: string;
            port_id: string;
            admin: string;
        };
    }
    interface Data {
        '@type': '/ibc.applications.perm.v1.MsgUpdateAdmin';
        authority: AccAddress;
        channel_id: string;
        port_id: string;
        admin: string;
    }
    type Proto = MsgUpdateAdmin_pb;
}
