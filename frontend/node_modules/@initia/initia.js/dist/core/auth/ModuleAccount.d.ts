import { JSONSerializable } from '../../util/json';
import { PublicKey } from '../PublicKey';
import { BaseAccount } from './BaseAccount';
import { ModuleAccount as ModuleAccount_pb } from '@initia/initia.proto/cosmos/auth/v1beta1/auth';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class ModuleAccount extends JSONSerializable<ModuleAccount.Amino, ModuleAccount.Data, ModuleAccount.Proto> {
    base_account: BaseAccount;
    name: string;
    permissions: string[];
    constructor(base_account: BaseAccount, name: string, permissions: string[]);
    getAccountNumber(): number;
    getSequenceNumber(): number;
    getPublicKey(): PublicKey | undefined;
    static fromAmino(data: ModuleAccount.Amino): ModuleAccount;
    toAmino(): ModuleAccount.Amino;
    static fromData(data: ModuleAccount.Data): ModuleAccount;
    toData(): ModuleAccount.Data;
    static fromProto(proto: ModuleAccount.Proto): ModuleAccount;
    toProto(): ModuleAccount.Proto;
    packAny(): Any;
    static unpackAny(pubkeyAny: Any): ModuleAccount;
}
export declare namespace ModuleAccount {
    interface Amino {
        type: 'cosmos-sdk/ModuleAccount';
        value: {
            base_account: BaseAccount.AminoValue;
            name: string;
            permissions: string[];
        };
    }
    interface Data {
        '@type': '/cosmos.auth.v1beta1.ModuleAccount';
        base_account: BaseAccount.DataValue;
        name: string;
        permissions: string[];
    }
    type Proto = ModuleAccount_pb;
}
