import { JSONSerializable } from '../../../util/json';
import { AccAddress, ValAddress } from '../../bech32';
import { MsgRemoveAttestor as MsgRemoveAttestor_pb } from '@initia/opinit.proto/opinit/opchild/v1/tx';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class MsgRemoveAttestor extends JSONSerializable<MsgRemoveAttestor.Amino, MsgRemoveAttestor.Data, MsgRemoveAttestor.Proto> {
    authority: AccAddress;
    attestor_address: ValAddress;
    constructor(authority: AccAddress, attestor_address: ValAddress);
    static fromAmino(data: MsgRemoveAttestor.Amino): MsgRemoveAttestor;
    toAmino(): MsgRemoveAttestor.Amino;
    static fromData(data: MsgRemoveAttestor.Data): MsgRemoveAttestor;
    toData(): MsgRemoveAttestor.Data;
    static fromProto(data: MsgRemoveAttestor.Proto): MsgRemoveAttestor;
    toProto(): MsgRemoveAttestor.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgRemoveAttestor;
}
export declare namespace MsgRemoveAttestor {
    interface Amino {
        type: 'opchild/MsgRemoveAttestor';
        value: {
            authority: AccAddress;
            attestor_address: ValAddress;
        };
    }
    interface Data {
        '@type': '/opinit.opchild.v1.MsgRemoveAttestor';
        authority: AccAddress;
        attestor_address: ValAddress;
    }
    type Proto = MsgRemoveAttestor_pb;
}
