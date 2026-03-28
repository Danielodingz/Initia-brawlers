import { Height as Height_pb } from '@initia/initia.proto/ibc/core/client/v1/client';
import { JSONSerializable } from '../../../../util/json';
export declare class Height extends JSONSerializable<Height.Amino, Height.Data, Height.Proto> {
    revision_number: number;
    revision_height: number;
    constructor(revision_number: number, revision_height: number);
    static fromAmino(data: Height.Amino): Height;
    toAmino(): Height.Amino;
    static fromData(data: Height.Data): Height;
    toData(): Height.Data;
    static fromProto(proto: Height.Proto): Height;
    toProto(): Height.Proto;
}
export declare namespace Height {
    interface Amino {
        revision_number?: string;
        revision_height?: string;
    }
    interface Data {
        revision_number: string;
        revision_height: string;
    }
    type Proto = Height_pb;
}
