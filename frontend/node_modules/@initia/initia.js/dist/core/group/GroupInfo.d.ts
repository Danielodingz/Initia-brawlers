import { JSONSerializable } from '../../util/json';
import { AccAddress } from '../bech32';
import { GroupInfo as GroupInfo_pb } from '@initia/initia.proto/cosmos/group/v1/types';
export declare class GroupInfo extends JSONSerializable<GroupInfo.Amino, GroupInfo.Data, GroupInfo.Proto> {
    id: number;
    admin: AccAddress;
    metadata: string;
    version: number;
    total_weight: string;
    created_at: Date;
    constructor(id: number, admin: AccAddress, metadata: string, version: number, total_weight: string, created_at: Date);
    static fromAmino(data: GroupInfo.Amino): GroupInfo;
    toAmino(): GroupInfo.Amino;
    static fromData(data: GroupInfo.Data): GroupInfo;
    toData(): GroupInfo.Data;
    static fromProto(data: GroupInfo.Proto): GroupInfo;
    toProto(): GroupInfo.Proto;
}
export declare namespace GroupInfo {
    interface Amino {
        id: string;
        admin: AccAddress;
        metadata: string;
        version: string;
        total_weight: string;
        created_at: string;
    }
    interface Data {
        id: string;
        admin: AccAddress;
        metadata: string;
        version: string;
        total_weight: string;
        created_at: string;
    }
    type Proto = GroupInfo_pb;
}
