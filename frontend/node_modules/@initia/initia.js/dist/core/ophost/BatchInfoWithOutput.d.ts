import { JSONSerializable } from '../../util/json';
import { BatchInfoWithOutput as BatchInfoWithOutput_pb } from '@initia/opinit.proto/opinit/ophost/v1/types';
import { BatchInfo } from './BatchInfo';
import { Output } from './Output';
export declare class BatchInfoWithOutput extends JSONSerializable<BatchInfoWithOutput.Amino, BatchInfoWithOutput.Data, BatchInfoWithOutput.Proto> {
    batch_info: BatchInfo;
    output: Output;
    constructor(batch_info: BatchInfo, output: Output);
    static fromAmino(data: BatchInfoWithOutput.Amino): BatchInfoWithOutput;
    toAmino(): BatchInfoWithOutput.Amino;
    static fromData(data: BatchInfoWithOutput.Data): BatchInfoWithOutput;
    toData(): BatchInfoWithOutput.Data;
    static fromProto(data: BatchInfoWithOutput.Proto): BatchInfoWithOutput;
    toProto(): BatchInfoWithOutput.Proto;
}
export declare namespace BatchInfoWithOutput {
    interface Amino {
        batch_info: BatchInfo.Amino;
        output: Output.Amino;
    }
    interface Data {
        batch_info: BatchInfo.Data;
        output: Output.Data;
    }
    type Proto = BatchInfoWithOutput_pb;
}
