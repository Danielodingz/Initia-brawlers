import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgSetAllowedDenoms as MsgSetAllowedDenoms_pb } from '@initia/initia.proto/noble/forwarding/v1/tx';
export declare class MsgSetAllowedDenoms extends JSONSerializable<MsgSetAllowedDenoms.Amino, MsgSetAllowedDenoms.Data, MsgSetAllowedDenoms.Proto> {
    signer: AccAddress;
    denoms: string[];
    constructor(signer: AccAddress, denoms: string[]);
    static fromAmino(data: MsgSetAllowedDenoms.Amino): MsgSetAllowedDenoms;
    toAmino(): MsgSetAllowedDenoms.Amino;
    static fromData(data: MsgSetAllowedDenoms.Data): MsgSetAllowedDenoms;
    toData(): MsgSetAllowedDenoms.Data;
    static fromProto(data: MsgSetAllowedDenoms.Proto): MsgSetAllowedDenoms;
    toProto(): MsgSetAllowedDenoms.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgSetAllowedDenoms;
}
export declare namespace MsgSetAllowedDenoms {
    interface Amino {
        type: 'noble/forwarding/SetAllowedDenoms';
        value: {
            signer: AccAddress;
            denoms: string[];
        };
    }
    interface Data {
        '@type': '/noble.forwarding.v1.MsgSetAllowedDenoms';
        signer: AccAddress;
        denoms: string[];
    }
    type Proto = MsgSetAllowedDenoms_pb;
}
