import { JSONSerializable } from '../../util/json';
import { AccAddress } from '../bech32';
import { AccessTuple as AccessTuple_pb } from '@initia/initia.proto/minievm/evm/v1/types';
export declare class AccessTuple extends JSONSerializable<AccessTuple.Amino, AccessTuple.Data, AccessTuple.Proto> {
    address: AccAddress;
    storage_keys: string[];
    constructor(address: AccAddress, storage_keys: string[]);
    static fromAmino(data: AccessTuple.Amino): AccessTuple;
    toAmino(): AccessTuple.Amino;
    static fromData(data: AccessTuple.Data): AccessTuple;
    toData(): AccessTuple.Data;
    static fromProto(data: AccessTuple.Proto): AccessTuple;
    toProto(): AccessTuple.Proto;
}
export declare namespace AccessTuple {
    interface Amino {
        address: AccAddress;
        storage_keys: string[];
    }
    interface Data {
        address: AccAddress;
        storage_keys: string[];
    }
    type Proto = AccessTuple_pb;
}
