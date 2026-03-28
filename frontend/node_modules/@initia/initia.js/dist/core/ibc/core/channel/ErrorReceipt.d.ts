import { JSONSerializable } from '../../../../util/json';
import { ErrorReceipt as ErrorReceipt_pb } from '@initia/initia.proto/ibc/core/channel/v1/upgrade';
export declare class ErrorReceipt extends JSONSerializable<any, ErrorReceipt.Data, ErrorReceipt.Proto> {
    sequence: number;
    message: string;
    constructor(sequence: number, message: string);
    static fromAmino(_: any): ErrorReceipt;
    toAmino(): any;
    static fromData(data: ErrorReceipt.Data): ErrorReceipt;
    toData(): ErrorReceipt.Data;
    static fromProto(proto: ErrorReceipt.Proto): ErrorReceipt;
    toProto(): ErrorReceipt.Proto;
}
export declare namespace ErrorReceipt {
    interface Data {
        sequence: string;
        message: string;
    }
    type Proto = ErrorReceipt_pb;
}
