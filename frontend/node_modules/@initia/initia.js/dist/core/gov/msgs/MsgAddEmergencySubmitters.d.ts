import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgAddEmergencySubmitters as MsgAddEmergencySubmitters_pb } from '@initia/initia.proto/initia/gov/v1/tx';
export declare class MsgAddEmergencySubmitters extends JSONSerializable<MsgAddEmergencySubmitters.Amino, MsgAddEmergencySubmitters.Data, MsgAddEmergencySubmitters.Proto> {
    authority: AccAddress;
    emergency_submitters: string[];
    constructor(authority: AccAddress, emergency_submitters: string[]);
    static fromAmino(data: MsgAddEmergencySubmitters.Amino): MsgAddEmergencySubmitters;
    toAmino(): MsgAddEmergencySubmitters.Amino;
    static fromData(data: MsgAddEmergencySubmitters.Data): MsgAddEmergencySubmitters;
    toData(): MsgAddEmergencySubmitters.Data;
    static fromProto(data: MsgAddEmergencySubmitters.Proto): MsgAddEmergencySubmitters;
    toProto(): MsgAddEmergencySubmitters.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgAddEmergencySubmitters;
}
export declare namespace MsgAddEmergencySubmitters {
    interface Amino {
        type: 'gov/MsgAddEmergencySubmitters';
        value: {
            authority: AccAddress;
            emergency_submitters: string[];
        };
    }
    interface Data {
        '@type': '/initia.gov.v1.MsgAddEmergencySubmitters';
        authority: AccAddress;
        emergency_submitters: string[];
    }
    type Proto = MsgAddEmergencySubmitters_pb;
}
