import { JSONSerializable } from '../../../util/json';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { TextProposal as TextProposal_pb } from '@initia/initia.proto/cosmos/gov/v1beta1/gov';
export declare class TextProposal extends JSONSerializable<TextProposal.Amino, TextProposal.Data, TextProposal.Proto> {
    title: string;
    description: string;
    constructor(title: string, description: string);
    static fromAmino(data: TextProposal.Amino): TextProposal;
    toAmino(): TextProposal.Amino;
    static fromData(proto: TextProposal.Data): TextProposal;
    toData(): TextProposal.Data;
    static fromProto(proto: TextProposal.Proto): TextProposal;
    toProto(): TextProposal.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): TextProposal;
}
export declare namespace TextProposal {
    interface Amino {
        type: 'cosmos-sdk/TextProposal';
        value: {
            title: string;
            description: string;
        };
    }
    interface Data {
        '@type': '/cosmos.gov.v1beta1.TextProposal';
        title: string;
        description: string;
    }
    type Proto = TextProposal_pb;
}
