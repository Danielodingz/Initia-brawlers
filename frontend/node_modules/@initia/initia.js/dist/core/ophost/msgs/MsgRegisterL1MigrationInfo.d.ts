import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { L1MigrationInfo } from '../L1MigrationInfo';
import { MsgRegisterMigrationInfo as MsgRegisterMigrationInfo_pb } from '@initia/opinit.proto/opinit/ophost/v1/tx';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class MsgRegisterL1MigrationInfo extends JSONSerializable<MsgRegisterL1MigrationInfo.Amino, MsgRegisterL1MigrationInfo.Data, MsgRegisterL1MigrationInfo.Proto> {
    authority: AccAddress;
    migration_info: L1MigrationInfo;
    constructor(authority: AccAddress, migration_info: L1MigrationInfo);
    static fromAmino(data: MsgRegisterL1MigrationInfo.Amino): MsgRegisterL1MigrationInfo;
    toAmino(): MsgRegisterL1MigrationInfo.Amino;
    static fromData(data: MsgRegisterL1MigrationInfo.Data): MsgRegisterL1MigrationInfo;
    toData(): MsgRegisterL1MigrationInfo.Data;
    static fromProto(data: MsgRegisterL1MigrationInfo.Proto): MsgRegisterL1MigrationInfo;
    toProto(): MsgRegisterL1MigrationInfo.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgRegisterL1MigrationInfo;
}
export declare namespace MsgRegisterL1MigrationInfo {
    interface Amino {
        type: 'ophost/MsgRegisterMigrationInfo';
        value: {
            authority: AccAddress;
            migration_info: L1MigrationInfo.Amino;
        };
    }
    interface Data {
        '@type': '/opinit.ophost.v1.MsgRegisterMigrationInfo';
        authority: AccAddress;
        migration_info: L1MigrationInfo.Data;
    }
    type Proto = MsgRegisterMigrationInfo_pb;
}
