import { JSONSerializable } from '../../../util/json';
import { ParamChange, ParamChanges } from '../ParamChange';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { ParameterChangeProposal as ParameterChangeProposal_pb } from '@initia/initia.proto/cosmos/params/v1beta1/params';
export declare class ParameterChangeProposal extends JSONSerializable<ParameterChangeProposal.Amino, ParameterChangeProposal.Data, ParameterChangeProposal.Proto> {
    title: string;
    description: string;
    changes: ParamChanges;
    constructor(title: string, description: string, changes: ParamChange.Data[] | ParamChanges);
    static fromAmino(data: ParameterChangeProposal.Amino): ParameterChangeProposal;
    toAmino(): ParameterChangeProposal.Amino;
    static fromData(proto: ParameterChangeProposal.Data): ParameterChangeProposal;
    toData(): ParameterChangeProposal.Data;
    static fromProto(proto: ParameterChangeProposal.Proto): ParameterChangeProposal;
    toProto(): ParameterChangeProposal.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): ParameterChangeProposal;
}
export declare namespace ParameterChangeProposal {
    interface Amino {
        type: 'cosmos-sdk/ParameterChangeProposal';
        value: {
            title: string;
            description: string;
            changes: ParamChange.Amino[] | null;
        };
    }
    interface Data {
        '@type': '/cosmos.params.v1beta1.ParameterChangeProposal';
        title: string;
        description: string;
        changes: ParamChange.Data[];
    }
    type Proto = ParameterChangeProposal_pb;
}
