import { JSONSerializable } from '../../util/json';
import { ValConsAddress } from '../bech32';
import { ValidatorSigningInfo as ValidatorSigningInfo_pb } from '@initia/initia.proto/cosmos/slashing/v1beta1/slashing';
export declare class ValidatorSigningInfo extends JSONSerializable<ValidatorSigningInfo.Amino, ValidatorSigningInfo.Data, ValidatorSigningInfo.Proto> {
    address: ValConsAddress;
    start_height: number;
    index_offset: number;
    jailed_until: Date;
    tombstoned: boolean;
    missed_blocks_counter: number;
    constructor(address: ValConsAddress, start_height: number, index_offset: number, jailed_until: Date, tombstoned: boolean, missed_blocks_counter: number);
    static fromAmino(data: ValidatorSigningInfo.Amino): ValidatorSigningInfo;
    toAmino(): ValidatorSigningInfo.Amino;
    static fromData(data: ValidatorSigningInfo.Data): ValidatorSigningInfo;
    toData(): ValidatorSigningInfo.Data;
    static fromProto(data: ValidatorSigningInfo.Proto): ValidatorSigningInfo;
    toProto(): ValidatorSigningInfo.Proto;
}
export declare namespace ValidatorSigningInfo {
    interface Amino {
        address: ValConsAddress;
        start_height: string;
        index_offset: string;
        jailed_until: string;
        tombstoned: boolean;
        missed_blocks_counter: string;
    }
    interface Data {
        address: ValConsAddress;
        start_height: string;
        index_offset: string;
        jailed_until: string;
        tombstoned: boolean;
        missed_blocks_counter: string;
    }
    type Proto = ValidatorSigningInfo_pb;
}
