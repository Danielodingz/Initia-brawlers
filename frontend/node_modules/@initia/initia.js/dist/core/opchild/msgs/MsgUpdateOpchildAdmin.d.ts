import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgUpdateAdmin as MsgUpdateAdmin_pb } from '@initia/opinit.proto/opinit/opchild/v1/tx';
export declare class MsgUpdateOpchildAdmin extends JSONSerializable<MsgUpdateOpchildAdmin.Amino, MsgUpdateOpchildAdmin.Data, MsgUpdateOpchildAdmin.Proto> {
    authority: AccAddress;
    new_admin: AccAddress;
    constructor(authority: AccAddress, new_admin: AccAddress);
    static fromAmino(data: MsgUpdateOpchildAdmin.Amino): MsgUpdateOpchildAdmin;
    toAmino(): MsgUpdateOpchildAdmin.Amino;
    static fromData(data: MsgUpdateOpchildAdmin.Data): MsgUpdateOpchildAdmin;
    toData(): MsgUpdateOpchildAdmin.Data;
    static fromProto(data: MsgUpdateOpchildAdmin.Proto): MsgUpdateOpchildAdmin;
    toProto(): MsgUpdateOpchildAdmin.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUpdateOpchildAdmin;
}
export declare namespace MsgUpdateOpchildAdmin {
    interface Amino {
        type: 'opchild/MsgUpdateAdmin';
        value: {
            authority: AccAddress;
            new_admin: AccAddress;
        };
    }
    interface Data {
        '@type': '/opinit.opchild.v1.MsgUpdateAdmin';
        authority: AccAddress;
        new_admin: AccAddress;
    }
    type Proto = MsgUpdateAdmin_pb;
}
