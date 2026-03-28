import { JSONSerializable } from '../../util/json';
import { AccAddress } from '../bech32';
import { BatchInfo as BatchInfo_pb, BatchInfo_ChainType as ChainType } from '@initia/opinit.proto/opinit/ophost/v1/types';
export declare class BatchInfo extends JSONSerializable<BatchInfo.Amino, BatchInfo.Data, BatchInfo.Proto> {
    submitter: AccAddress;
    chain_type: ChainType;
    constructor(submitter: AccAddress, chain_type: ChainType);
    static fromAmino(data: BatchInfo.Amino): BatchInfo;
    toAmino(): BatchInfo.Amino;
    static fromData(data: BatchInfo.Data): BatchInfo;
    toData(): BatchInfo.Data;
    static fromProto(data: BatchInfo.Proto): BatchInfo;
    toProto(): BatchInfo.Proto;
}
export declare namespace BatchInfo {
    interface Amino {
        submitter: AccAddress;
        chain_type: string;
    }
    interface Data {
        submitter: AccAddress;
        chain_type: string;
    }
    type Proto = BatchInfo_pb;
}
