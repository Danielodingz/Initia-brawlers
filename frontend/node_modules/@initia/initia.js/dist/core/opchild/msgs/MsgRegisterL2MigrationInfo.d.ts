import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { L2MigrationInfo } from '../L2MigrationInfo';
import { MsgRegisterMigrationInfo as MsgRegisterMigrationInfo_pb } from '@initia/opinit.proto/opinit/opchild/v1/tx';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class MsgRegisterL2MigrationInfo extends JSONSerializable<MsgRegisterL2MigrationInfo.Amino, MsgRegisterL2MigrationInfo.Data, MsgRegisterL2MigrationInfo.Proto> {
    authority: AccAddress;
    migration_info: L2MigrationInfo;
    constructor(authority: AccAddress, migration_info: L2MigrationInfo);
    static fromAmino(data: MsgRegisterL2MigrationInfo.Amino): MsgRegisterL2MigrationInfo;
    toAmino(): MsgRegisterL2MigrationInfo.Amino;
    static fromData(data: MsgRegisterL2MigrationInfo.Data): MsgRegisterL2MigrationInfo;
    toData(): MsgRegisterL2MigrationInfo.Data;
    static fromProto(data: MsgRegisterL2MigrationInfo.Proto): MsgRegisterL2MigrationInfo;
    toProto(): MsgRegisterL2MigrationInfo.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgRegisterL2MigrationInfo;
}
export declare namespace MsgRegisterL2MigrationInfo {
    interface Amino {
        type: 'opchild/MsgRegisterMigrationInfo';
        value: {
            authority: AccAddress;
            migration_info: L2MigrationInfo.Amino;
        };
    }
    interface Data {
        '@type': '/opinit.opchild.v1.MsgRegisterMigrationInfo';
        authority: AccAddress;
        migration_info: L2MigrationInfo.Data;
    }
    type Proto = MsgRegisterMigrationInfo_pb;
}
