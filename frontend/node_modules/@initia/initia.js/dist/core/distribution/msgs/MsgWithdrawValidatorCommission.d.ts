import { JSONSerializable } from '../../../util/json';
import { ValAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgWithdrawValidatorCommission as MsgWithdrawValidatorCommission_pb } from '@initia/initia.proto/cosmos/distribution/v1beta1/tx';
export declare class MsgWithdrawValidatorCommission extends JSONSerializable<MsgWithdrawValidatorCommission.Amino, MsgWithdrawValidatorCommission.Data, MsgWithdrawValidatorCommission.Proto> {
    validator_address: ValAddress;
    constructor(validator_address: ValAddress);
    static fromAmino(data: MsgWithdrawValidatorCommission.Amino): MsgWithdrawValidatorCommission;
    toAmino(): MsgWithdrawValidatorCommission.Amino;
    static fromData(proto: MsgWithdrawValidatorCommission.Data): MsgWithdrawValidatorCommission;
    toData(): MsgWithdrawValidatorCommission.Data;
    static fromProto(proto: MsgWithdrawValidatorCommission.Proto): MsgWithdrawValidatorCommission;
    toProto(): MsgWithdrawValidatorCommission.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgWithdrawValidatorCommission;
}
export declare namespace MsgWithdrawValidatorCommission {
    interface Amino {
        type: 'cosmos-sdk/MsgWithdrawValidatorCommission';
        value: {
            validator_address: ValAddress;
        };
    }
    interface Data {
        '@type': '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission';
        validator_address: ValAddress;
    }
    type Proto = MsgWithdrawValidatorCommission_pb;
}
