import { JSONSerializable } from '../../../util/json';
import { ValAddress } from '../../bech32';
import { Validator } from '../Validator';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgEditValidator as MsgEditValidator_pb } from '@initia/initia.proto/initia/mstaking/v1/tx';
export declare class MsgEditValidator extends JSONSerializable<MsgEditValidator.Amino, MsgEditValidator.Data, MsgEditValidator.Proto> {
    description: Validator.Description;
    validator_address: ValAddress;
    commission_rate?: string | undefined;
    constructor(description: Validator.Description, validator_address: ValAddress, commission_rate?: string | undefined);
    static fromAmino(data: MsgEditValidator.Amino): MsgEditValidator;
    toAmino(): MsgEditValidator.Amino;
    static fromData(data: MsgEditValidator.Data): MsgEditValidator;
    toData(): MsgEditValidator.Data;
    static fromProto(data: MsgEditValidator.Proto): MsgEditValidator;
    toProto(): MsgEditValidator.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgEditValidator;
}
export declare namespace MsgEditValidator {
    const DESC_DO_NOT_MODIFY: Validator.Description.Amino;
    interface Amino {
        type: 'mstaking/MsgEditValidator';
        value: {
            description: Validator.Description.Amino;
            validator_address: ValAddress;
            commission_rate?: string;
        };
    }
    interface Data {
        '@type': '/initia.mstaking.v1.MsgEditValidator';
        description: Validator.Description.Data;
        validator_address: ValAddress;
        commission_rate?: string;
    }
    type Proto = MsgEditValidator_pb;
}
