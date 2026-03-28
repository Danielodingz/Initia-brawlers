import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgRemoveEmergencySubmitters as MsgRemoveEmergencySubmitters_pb } from '@initia/initia.proto/initia/gov/v1/tx';
export declare class MsgRemoveEmergencySubmitters extends JSONSerializable<MsgRemoveEmergencySubmitters.Amino, MsgRemoveEmergencySubmitters.Data, MsgRemoveEmergencySubmitters.Proto> {
    authority: AccAddress;
    emergency_submitters: string[];
    constructor(authority: AccAddress, emergency_submitters: string[]);
    static fromAmino(data: MsgRemoveEmergencySubmitters.Amino): MsgRemoveEmergencySubmitters;
    toAmino(): MsgRemoveEmergencySubmitters.Amino;
    static fromData(data: MsgRemoveEmergencySubmitters.Data): MsgRemoveEmergencySubmitters;
    toData(): MsgRemoveEmergencySubmitters.Data;
    static fromProto(data: MsgRemoveEmergencySubmitters.Proto): MsgRemoveEmergencySubmitters;
    toProto(): MsgRemoveEmergencySubmitters.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgRemoveEmergencySubmitters;
}
export declare namespace MsgRemoveEmergencySubmitters {
    interface Amino {
        type: 'gov/MsgRemoveEmergencySubmitters';
        value: {
            authority: AccAddress;
            emergency_submitters: string[];
        };
    }
    interface Data {
        '@type': '/initia.gov.v1.MsgRemoveEmergencySubmitters';
        authority: AccAddress;
        emergency_submitters: string[];
    }
    type Proto = MsgRemoveEmergencySubmitters_pb;
}
