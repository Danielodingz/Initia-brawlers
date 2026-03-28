import { JSONSerializable } from '../../util/json';
import { BlockParams as BlockParams_pb } from '@initia/initia.proto/tendermint/types/params';
export declare class BlockParams extends JSONSerializable<BlockParams.Amino, BlockParams.Data, BlockParams.Proto> {
    max_bytes: number;
    max_gas: number;
    constructor(max_bytes: number, max_gas: number);
    static fromAmino(data: BlockParams.Amino): BlockParams;
    toAmino(): BlockParams.Amino;
    static fromData(data: BlockParams.Data): BlockParams;
    toData(): BlockParams.Data;
    static fromProto(data: BlockParams.Proto): BlockParams;
    toProto(): BlockParams.Proto;
}
export declare namespace BlockParams {
    interface Amino {
        max_bytes: string;
        max_gas: string;
    }
    interface Data {
        max_bytes: string;
        max_gas: string;
    }
    type Proto = BlockParams_pb;
}
