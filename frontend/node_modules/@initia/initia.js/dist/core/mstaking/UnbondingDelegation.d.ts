import { JSONSerializable } from '../../util/json';
import { Coins } from '../Coins';
import { AccAddress, ValAddress } from '../bech32';
import { UnbondingDelegation as UnbondingDelegation_pb, UnbondingDelegationEntry as UnbondingDelegationEntry_pb } from '@initia/initia.proto/initia/mstaking/v1/staking';
export declare class UnbondingDelegation extends JSONSerializable<UnbondingDelegation.Amino, UnbondingDelegation.Data, UnbondingDelegation.Proto> {
    delegator_address: AccAddress;
    validator_address: ValAddress;
    entries: UnbondingDelegation.Entry[];
    constructor(delegator_address: AccAddress, validator_address: ValAddress, entries: UnbondingDelegation.Entry[]);
    static fromAmino(data: UnbondingDelegation.Amino): UnbondingDelegation;
    toAmino(): UnbondingDelegation.Amino;
    static fromData(data: UnbondingDelegation.Data): UnbondingDelegation;
    toData(): UnbondingDelegation.Data;
    toProto(): UnbondingDelegation.Proto;
    static fromProto(proto: UnbondingDelegation.Proto): UnbondingDelegation;
}
export declare namespace UnbondingDelegation {
    interface Amino {
        delegator_address: AccAddress;
        validator_address: ValAddress;
        entries: UnbondingDelegation.Entry.Amino[];
    }
    interface Data {
        delegator_address: AccAddress;
        validator_address: ValAddress;
        entries: UnbondingDelegation.Entry.Data[];
    }
    type Proto = UnbondingDelegation_pb;
    class Entry extends JSONSerializable<Entry.Amino, Entry.Data, Entry.Proto> {
        creation_height: number;
        completion_time: Date;
        initial_balance: Coins;
        balance: Coins;
        constructor(initial_balance: Coins.Input, balance: Coins.Input, creation_height: number, completion_time: Date);
        static fromAmino(data: Entry.Amino): Entry;
        toAmino(): Entry.Amino;
        static fromData(data: Entry.Data): Entry;
        toData(): Entry.Data;
        static fromProto(proto: Entry.Proto): Entry;
        toProto(): Entry.Proto;
    }
    namespace Entry {
        interface Amino {
            initial_balance: Coins.Amino;
            balance: Coins.Amino;
            creation_height: string;
            completion_time: string;
        }
        interface Data {
            initial_balance: Coins.Data;
            balance: Coins.Data;
            creation_height: string;
            completion_time: string;
        }
        type Proto = UnbondingDelegationEntry_pb;
    }
}
