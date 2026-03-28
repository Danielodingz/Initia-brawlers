import { JSONSerializable } from '../../util/json';
import { Denom } from '../Denom';
import { DenomUnit as DenomUnit_pb } from '@initia/initia.proto/cosmos/bank/v1beta1/bank';
export declare class DenomUnit extends JSONSerializable<DenomUnit.Amino, DenomUnit.Data, DenomUnit.Proto> {
    denom: Denom;
    exponent: number;
    aliases: string[];
    constructor(denom: Denom, exponent: number, aliases: string[]);
    static fromAmino(data: DenomUnit.Amino): DenomUnit;
    toAmino(): DenomUnit.Amino;
    static fromData(data: DenomUnit.Data): DenomUnit;
    toData(): DenomUnit.Data;
    static fromProto(data: DenomUnit.Proto): DenomUnit;
    toProto(): DenomUnit.Proto;
}
export declare namespace DenomUnit {
    interface Amino {
        denom: Denom;
        exponent: string;
        aliases: string[];
    }
    interface Data {
        denom: Denom;
        exponent: string;
        aliases: string[];
    }
    type Proto = DenomUnit_pb;
}
