import { JSONSerializable } from '../../../util/json';
import { AccAddress, ValAddress } from '../../bech32';
import { ValConsPublicKey } from '../../PublicKey';
import { MsgAddAttestor as MsgAddAttestor_pb } from '@initia/opinit.proto/opinit/opchild/v1/tx';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class MsgAddAttestor extends JSONSerializable<MsgAddAttestor.Amino, MsgAddAttestor.Data, MsgAddAttestor.Proto> {
    authority: AccAddress;
    moniker: string;
    attestor_address: ValAddress;
    pubkey: ValConsPublicKey;
    constructor(authority: AccAddress, moniker: string, attestor_address: ValAddress, pubkey: ValConsPublicKey);
    static fromAmino(data: MsgAddAttestor.Amino): MsgAddAttestor;
    toAmino(): MsgAddAttestor.Amino;
    static fromData(data: MsgAddAttestor.Data): MsgAddAttestor;
    toData(): MsgAddAttestor.Data;
    static fromProto(data: MsgAddAttestor.Proto): MsgAddAttestor;
    toProto(): MsgAddAttestor.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgAddAttestor;
}
export declare namespace MsgAddAttestor {
    interface Amino {
        type: 'opchild/MsgAddAttestor';
        value: {
            authority: AccAddress;
            moniker: string;
            attestor_address: ValAddress;
            pubkey: ValConsPublicKey.Amino;
        };
    }
    interface Data {
        '@type': '/opinit.opchild.v1.MsgAddAttestor';
        authority: AccAddress;
        moniker: string;
        attestor_address: ValAddress;
        pubkey: ValConsPublicKey.Data;
    }
    type Proto = MsgAddAttestor_pb;
}
