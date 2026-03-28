import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgPayForBlobs as MsgPayForBlobs_pb } from '@initia/initia.proto/celestia/blob/v1/tx';
export declare class MsgPayForBlobs extends JSONSerializable<any, MsgPayForBlobs.Data, MsgPayForBlobs.Proto> {
    signer: AccAddress;
    namespaces: string[];
    blob_sizes: number[];
    share_commitments: string[];
    share_versions: number[];
    constructor(signer: AccAddress, namespaces: string[], blob_sizes: number[], share_commitments: string[], share_versions: number[]);
    static fromAmino(_: any): MsgPayForBlobs;
    toAmino(): any;
    static fromData(data: MsgPayForBlobs.Data): MsgPayForBlobs;
    toData(): MsgPayForBlobs.Data;
    static fromProto(data: MsgPayForBlobs.Proto): MsgPayForBlobs;
    toProto(): MsgPayForBlobs.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgPayForBlobs;
}
export declare namespace MsgPayForBlobs {
    interface Data {
        '@type': '/celestia.blob.v1.MsgPayForBlobs';
        signer: AccAddress;
        namespaces: string[];
        blob_sizes: string[];
        share_commitments: string[];
        share_versions: string[];
    }
    type Proto = MsgPayForBlobs_pb;
}
