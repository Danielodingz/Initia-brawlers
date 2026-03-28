import { JSONSerializable } from '../../../util/json';
import { AccAddress, ValAddress } from '../../bech32';
import { ValConsPublicKey } from '../../PublicKey';
import { MsgUpdateSequencer as MsgUpdateSequencer_pb } from '@initia/opinit.proto/opinit/opchild/v1/tx';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class MsgUpdateSequencer extends JSONSerializable<MsgUpdateSequencer.Amino, MsgUpdateSequencer.Data, MsgUpdateSequencer.Proto> {
    authority: AccAddress;
    moniker: string;
    sequencer_address: ValAddress;
    pubkey: ValConsPublicKey;
    constructor(authority: AccAddress, moniker: string, sequencer_address: ValAddress, pubkey: ValConsPublicKey);
    static fromAmino(data: MsgUpdateSequencer.Amino): MsgUpdateSequencer;
    toAmino(): MsgUpdateSequencer.Amino;
    static fromData(data: MsgUpdateSequencer.Data): MsgUpdateSequencer;
    toData(): MsgUpdateSequencer.Data;
    static fromProto(data: MsgUpdateSequencer.Proto): MsgUpdateSequencer;
    toProto(): MsgUpdateSequencer.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUpdateSequencer;
}
export declare namespace MsgUpdateSequencer {
    interface Amino {
        type: 'opchild/MsgUpdateSequencer';
        value: {
            authority: AccAddress;
            moniker: string;
            sequencer_address: ValAddress;
            pubkey: ValConsPublicKey.Amino;
        };
    }
    interface Data {
        '@type': '/opinit.opchild.v1.MsgUpdateSequencer';
        authority: AccAddress;
        moniker: string;
        sequencer_address: ValAddress;
        pubkey: ValConsPublicKey.Data;
    }
    type Proto = MsgUpdateSequencer_pb;
}
