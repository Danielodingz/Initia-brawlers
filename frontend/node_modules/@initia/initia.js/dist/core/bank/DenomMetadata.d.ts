import { JSONSerializable } from '../../util/json';
import { DenomUnit } from './DenomUnit';
import { Metadata as Metadata_pb } from '@initia/initia.proto/cosmos/bank/v1beta1/bank';
export declare class DenomMetadata extends JSONSerializable<DenomMetadata.Amino, DenomMetadata.Data, DenomMetadata.Proto> {
    description: string;
    denom_units: DenomUnit[];
    base: string;
    display: string;
    name: string;
    symbol: string;
    uri: string;
    uri_hash: string;
    constructor(description: string, denom_units: DenomUnit[], base: string, display: string, name: string, symbol: string, uri: string, uri_hash: string);
    static fromAmino(data: DenomMetadata.Amino): DenomMetadata;
    toAmino(): DenomMetadata.Amino;
    static fromData(data: DenomMetadata.Data): DenomMetadata;
    toData(): DenomMetadata.Data;
    static fromProto(data: DenomMetadata.Proto): DenomMetadata;
    toProto(): DenomMetadata.Proto;
}
export declare namespace DenomMetadata {
    interface Amino {
        description: string;
        denom_units: DenomUnit.Amino[];
        base: string;
        display: string;
        name: string;
        symbol: string;
        uri: string;
        uri_hash: string;
    }
    interface Data {
        description: string;
        denom_units: DenomUnit.Data[];
        base: string;
        display: string;
        name: string;
        symbol: string;
        uri: string;
        uri_hash: string;
    }
    type Proto = Metadata_pb;
}
