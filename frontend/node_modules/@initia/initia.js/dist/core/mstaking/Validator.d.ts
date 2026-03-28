import { JSONSerializable } from '../../util/json';
import { Coins } from '../Coins';
import { ValAddress } from '../bech32';
import { ValConsPublicKey } from '../PublicKey';
import { Validator as Validator_pb, Description as Description_pb, Commission as Commission_pb, CommissionRates as CommissionRates_pb, BondStatus } from '@initia/initia.proto/initia/mstaking/v1/staking';
export declare class Validator extends JSONSerializable<Validator.Amino, Validator.Data, Validator.Proto> {
    operator_address: ValAddress;
    consensus_pubkey: ValConsPublicKey;
    jailed: boolean;
    status: BondStatus;
    description: Validator.Description;
    unbonding_height: number;
    unbonding_time: Date;
    commission: Validator.Commission;
    voting_power: string;
    tokens: Coins;
    delegator_shares: Coins;
    voting_powers: Coins;
    constructor(operator_address: ValAddress, consensus_pubkey: ValConsPublicKey, jailed: boolean, status: BondStatus, tokens: Coins.Input, delegator_shares: Coins.Input, description: Validator.Description, unbonding_height: number, unbonding_time: Date, commission: Validator.Commission, voting_powers: Coins.Input, voting_power: string);
    static fromAmino(data: Validator.Amino): Validator;
    toAmino(): Validator.Amino;
    static fromData(data: Validator.Data): Validator;
    toData(): Validator.Data;
    static fromProto(data: Validator.Proto): Validator;
    toProto(): Validator.Proto;
}
export declare namespace Validator {
    const Status: typeof BondStatus;
    type Status = BondStatus;
    interface Amino {
        operator_address: ValAddress;
        consensus_pubkey: ValConsPublicKey.Amino;
        jailed: boolean;
        status: BondStatus;
        tokens: Coins.Amino;
        delegator_shares: Coins.Amino;
        description: Description.Amino;
        unbonding_height: string;
        unbonding_time: string;
        commission: Commission.Amino;
        voting_powers: Coins.Amino;
        voting_power: string;
    }
    interface Data {
        operator_address: ValAddress;
        consensus_pubkey: ValConsPublicKey.Data;
        jailed: boolean;
        status: BondStatus;
        tokens: Coins.Data;
        delegator_shares: Coins.Data;
        description: Description.Data;
        unbonding_height: string;
        unbonding_time: string;
        commission: Commission.Data;
        voting_powers: Coins.Data;
        voting_power: string;
    }
    type Proto = Validator_pb;
    class Description extends JSONSerializable<Description.Amino, Description.Data, Description.Proto> {
        moniker: string;
        identity: string;
        website: string;
        details: string;
        security_contact: string;
        constructor(moniker: string, identity: string, website: string, details: string, security_contact: string);
        static fromAmino(data: Description.Amino): Description;
        toAmino(): Description.Amino;
        static fromData(data: Description.Data): Description;
        toData(): Description.Data;
        static fromProto(proto: Description.Proto): Description;
        toProto(): Description.Proto;
    }
    namespace Description {
        interface Amino {
            moniker: string;
            identity: string;
            website: string;
            details: string;
            security_contact: string;
        }
        interface Data {
            moniker: string;
            identity: string;
            website: string;
            details: string;
            security_contact: string;
        }
        type Proto = Description_pb;
    }
    class CommissionRates extends JSONSerializable<CommissionRates.Amino, CommissionRates.Data, CommissionRates.Proto> {
        rate: string;
        max_rate: string;
        max_change_rate: string;
        constructor(rate: string, max_rate: string, max_change_rate: string);
        static fromAmino(data: CommissionRates.Amino): CommissionRates;
        toAmino(): Validator.CommissionRates.Amino;
        static fromData(data: CommissionRates.Data): CommissionRates;
        toData(): Validator.CommissionRates.Data;
        static fromProto(proto: CommissionRates.Proto): CommissionRates;
        toProto(): Validator.CommissionRates.Proto;
    }
    namespace CommissionRates {
        interface Amino {
            rate: string;
            max_rate: string;
            max_change_rate: string;
        }
        interface Data {
            rate: string;
            max_rate: string;
            max_change_rate: string;
        }
        type Proto = CommissionRates_pb;
    }
    class Commission extends JSONSerializable<Commission.Amino, Commission.Data, Commission.Proto> {
        commission_rates: CommissionRates;
        update_time: Date;
        constructor(commission_rates: CommissionRates, update_time: Date);
        static fromAmino(data: Commission.Amino): Commission;
        toAmino(): Commission.Amino;
        static fromData(data: Commission.Data): Commission;
        toData(): Commission.Data;
        static fromProto(proto: Commission.Proto): Commission;
        toProto(): Commission.Proto;
    }
    namespace Commission {
        interface Amino {
            commission_rates: CommissionRates.Amino;
            update_time: string;
        }
        interface Data {
            commission_rates: CommissionRates.Data;
            update_time: string;
        }
        type Proto = Commission_pb;
    }
}
