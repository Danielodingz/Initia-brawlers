import { JSONSerializable } from '../../../util/json';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgVerifyInvariant as MsgVerifyInvariant_pb } from '@initia/initia.proto/cosmos/crisis/v1beta1/tx';
import { AccAddress } from '../../bech32';
export declare class MsgVerifyInvariant extends JSONSerializable<MsgVerifyInvariant.Amino, MsgVerifyInvariant.Data, MsgVerifyInvariant.Proto> {
    sender: AccAddress;
    invariant_module_name: string;
    invariant_route: string;
    constructor(sender: AccAddress, invariant_module_name: string, invariant_route: string);
    static fromAmino(data: MsgVerifyInvariant.Amino): MsgVerifyInvariant;
    toAmino(): MsgVerifyInvariant.Amino;
    static fromData(data: MsgVerifyInvariant.Data): MsgVerifyInvariant;
    toData(): MsgVerifyInvariant.Data;
    static fromProto(proto: MsgVerifyInvariant.Proto): MsgVerifyInvariant;
    toProto(): MsgVerifyInvariant.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgVerifyInvariant;
}
export declare namespace MsgVerifyInvariant {
    interface Amino {
        type: 'cosmos-sdk/MsgVerifyInvariant';
        value: {
            sender: AccAddress;
            invariant_module_name: string;
            invariant_route: string;
        };
    }
    interface Data {
        '@type': '/cosmos.crisis.v1beta1.MsgVerifyInvariant';
        sender: AccAddress;
        invariant_module_name: string;
        invariant_route: string;
    }
    type Proto = MsgVerifyInvariant_pb;
}
