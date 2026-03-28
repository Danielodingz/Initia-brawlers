import { DenomTrace as DenomTrace_pb } from '@initia/initia.proto/ibc/applications/transfer/v1/transfer';
import { JSONSerializable } from '../../../../util/json';
export declare class DenomTrace extends JSONSerializable<DenomTrace.Amino, DenomTrace.Data, DenomTrace.Proto> {
    path: string;
    base_denom: string;
    constructor(path: string, base_denom: string);
    static fromAmino(data: DenomTrace.Amino): DenomTrace;
    toAmino(): DenomTrace.Amino;
    static fromData(data: DenomTrace.Data): DenomTrace;
    toData(): DenomTrace.Data;
    static fromProto(proto: DenomTrace.Proto): DenomTrace;
    toProto(): DenomTrace.Proto;
}
export declare namespace DenomTrace {
    interface Amino {
        path: string;
        base_denom: string;
    }
    interface Data {
        path: string;
        base_denom: string;
    }
    type Proto = DenomTrace_pb;
}
