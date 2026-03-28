import { JSONSerializable } from '../../../util/json';
import { Coins } from '../../Coins';
import { ValAddress } from '../../bech32';
import { Validator } from '../Validator';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgCreateValidator as MsgCreateValidator_pb } from '@initia/initia.proto/initia/mstaking/v1/tx';
import { ValConsPublicKey } from '../../PublicKey';
export declare class MsgCreateValidator extends JSONSerializable<MsgCreateValidator.Amino, MsgCreateValidator.Data, MsgCreateValidator.Proto> {
    description: Validator.Description;
    commission: Validator.CommissionRates;
    validator_address: ValAddress;
    pubkey: ValConsPublicKey;
    amount: Coins;
    constructor(description: Validator.Description, commission: Validator.CommissionRates, validator_address: ValAddress, pubkey: ValConsPublicKey, amount: Coins.Input);
    static fromAmino(data: MsgCreateValidator.Amino): MsgCreateValidator;
    toAmino(): MsgCreateValidator.Amino;
    static fromData(data: MsgCreateValidator.Data): MsgCreateValidator;
    toData(): MsgCreateValidator.Data;
    static fromProto(proto: MsgCreateValidator.Proto): MsgCreateValidator;
    toProto(): MsgCreateValidator.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgCreateValidator;
}
export declare namespace MsgCreateValidator {
    interface Amino {
        type: 'mstaking/MsgCreateValidator';
        value: {
            description: Validator.Description;
            commission: Validator.CommissionRates.Amino;
            validator_address: ValAddress;
            pubkey: ValConsPublicKey.Amino;
            amount: Coins.Amino | null;
        };
    }
    interface Data {
        '@type': '/initia.mstaking.v1.MsgCreateValidator';
        description: Validator.Description;
        commission: Validator.CommissionRates.Data;
        validator_address: ValAddress;
        pubkey: ValConsPublicKey.Data;
        amount: Coins.Data;
    }
    type Proto = MsgCreateValidator_pb;
}
