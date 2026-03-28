import { JSONSerializable } from '../../util/json';
import { ValConsAddress } from '../bech32';
import { Equivocation as Equivocation_pb } from '@initia/initia.proto/cosmos/evidence/v1beta1/evidence';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class Equivocation extends JSONSerializable<Equivocation.Amino, Equivocation.Data, Equivocation.Proto> {
    height: number;
    time: Date;
    power: number;
    consensus_address: ValConsAddress;
    constructor(height: number, time: Date, power: number, consensus_address: ValConsAddress);
    static fromAmino(data: Equivocation.Amino): Equivocation;
    toAmino(): Equivocation.Amino;
    static fromData(data: Equivocation.Data): Equivocation;
    toData(): Equivocation.Data;
    static fromProto(data: Equivocation.Proto): Equivocation;
    toProto(): Equivocation.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): Equivocation;
}
export declare namespace Equivocation {
    interface Amino {
        type: 'cosmos-sdk/Equivocation';
        value: {
            height: string;
            time: string;
            power: string;
            consensus_address: ValConsAddress;
        };
    }
    interface Data {
        '@type': '/cosmos.evidence.v1beta1.Equivocation';
        height: string;
        time: string;
        power: string;
        consensus_address: ValConsAddress;
    }
    type Proto = Equivocation_pb;
}
