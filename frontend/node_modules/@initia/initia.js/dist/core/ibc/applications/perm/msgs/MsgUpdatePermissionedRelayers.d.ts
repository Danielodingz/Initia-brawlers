import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgUpdatePermissionedRelayers as MsgUpdatePermissionedRelayers_pb } from '@initia/initia.proto/ibc/applications/perm/v1/tx';
export declare class MsgUpdatePermissionedRelayers extends JSONSerializable<MsgUpdatePermissionedRelayers.Amino, MsgUpdatePermissionedRelayers.Data, MsgUpdatePermissionedRelayers.Proto> {
    authority: AccAddress;
    channel_id: string;
    port_id: string;
    relayers: string[];
    constructor(authority: AccAddress, channel_id: string, port_id: string, relayers: string[]);
    static fromAmino(data: MsgUpdatePermissionedRelayers.Amino): MsgUpdatePermissionedRelayers;
    toAmino(): MsgUpdatePermissionedRelayers.Amino;
    static fromData(data: MsgUpdatePermissionedRelayers.Data): MsgUpdatePermissionedRelayers;
    toData(): MsgUpdatePermissionedRelayers.Data;
    static fromProto(data: MsgUpdatePermissionedRelayers.Proto): MsgUpdatePermissionedRelayers;
    toProto(): MsgUpdatePermissionedRelayers.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUpdatePermissionedRelayers;
}
export declare namespace MsgUpdatePermissionedRelayers {
    interface Amino {
        type: 'ibc-perm/MsgUpdatePermissionedRelayers';
        value: {
            authority: AccAddress;
            channel_id: string;
            port_id: string;
            relayers: string[];
        };
    }
    interface Data {
        '@type': '/ibc.applications.perm.v1.MsgUpdatePermissionedRelayers';
        authority: AccAddress;
        channel_id: string;
        port_id: string;
        relayers: string[];
    }
    type Proto = MsgUpdatePermissionedRelayers_pb;
}
