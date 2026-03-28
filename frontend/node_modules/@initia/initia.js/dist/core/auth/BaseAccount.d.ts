import { PublicKey } from '../PublicKey';
import { JSONSerializable } from '../../util/json';
import { AccAddress } from '../bech32';
import { BaseAccount as BaseAccount_pb } from '@initia/initia.proto/cosmos/auth/v1beta1/auth';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class BaseAccount extends JSONSerializable<BaseAccount.Amino, BaseAccount.Data, BaseAccount.Proto> {
    address: AccAddress;
    public_key: PublicKey | undefined;
    account_number: number;
    sequence: number;
    constructor(address: AccAddress, public_key: PublicKey | undefined, account_number: number, sequence: number);
    getAccountNumber(): number;
    getSequenceNumber(): number;
    getPublicKey(): PublicKey | undefined;
    static fromAmino(data: BaseAccount.Amino): BaseAccount;
    toAmino(): BaseAccount.Amino;
    static fromData(data: BaseAccount.Data): BaseAccount;
    toData(): BaseAccount.Data;
    static fromProto(baseAccountProto: BaseAccount.Proto): BaseAccount;
    toProto(): BaseAccount.Proto;
    packAny(): Any;
    static unpackAny(pubkeyAny: Any): BaseAccount;
}
export declare namespace BaseAccount {
    interface AminoValue {
        address: AccAddress;
        public_key?: PublicKey.Amino;
        account_number: string;
        sequence: string;
    }
    interface Amino {
        type: 'cosmos-sdk/BaseAccount';
        value: AminoValue;
    }
    interface DataValue {
        address: AccAddress;
        pub_key?: PublicKey.Data;
        account_number: string;
        sequence: string;
    }
    interface Data extends DataValue {
        '@type': '/cosmos.auth.v1beta1.BaseAccount';
    }
    type Proto = BaseAccount_pb;
}
