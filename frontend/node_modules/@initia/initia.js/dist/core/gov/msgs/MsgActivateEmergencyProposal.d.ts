import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgActivateEmergencyProposal as MsgActivateEmergencyProposal_pb } from '@initia/initia.proto/initia/gov/v1/tx';
export declare class MsgActivateEmergencyProposal extends JSONSerializable<MsgActivateEmergencyProposal.Amino, MsgActivateEmergencyProposal.Data, MsgActivateEmergencyProposal.Proto> {
    sender: AccAddress;
    proposal_id: number;
    constructor(sender: AccAddress, proposal_id: number);
    static fromAmino(data: MsgActivateEmergencyProposal.Amino): MsgActivateEmergencyProposal;
    toAmino(): MsgActivateEmergencyProposal.Amino;
    static fromData(data: MsgActivateEmergencyProposal.Data): MsgActivateEmergencyProposal;
    toData(): MsgActivateEmergencyProposal.Data;
    static fromProto(data: MsgActivateEmergencyProposal.Proto): MsgActivateEmergencyProposal;
    toProto(): MsgActivateEmergencyProposal.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgActivateEmergencyProposal;
}
export declare namespace MsgActivateEmergencyProposal {
    interface Amino {
        type: 'gov/MsgActivateEmergencyProposal';
        value: {
            sender: AccAddress;
            proposal_id: string;
        };
    }
    interface Data {
        '@type': '/initia.gov.v1.MsgActivateEmergencyProposal';
        sender: AccAddress;
        proposal_id: string;
    }
    type Proto = MsgActivateEmergencyProposal_pb;
}
