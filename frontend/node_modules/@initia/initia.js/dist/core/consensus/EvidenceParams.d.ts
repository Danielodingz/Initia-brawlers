import { JSONSerializable } from '../../util/json';
import { Duration } from '../Duration';
import { EvidenceParams as EvidenceParams_pb } from '@initia/initia.proto/tendermint/types/params';
export declare class EvidenceParams extends JSONSerializable<EvidenceParams.Amino, EvidenceParams.Data, EvidenceParams.Proto> {
    max_age_num_blocks: number;
    max_age_duration: Duration;
    max_bytes: number;
    constructor(max_age_num_blocks: number, max_age_duration: Duration, max_bytes: number);
    static fromAmino(data: EvidenceParams.Amino): EvidenceParams;
    toAmino(): EvidenceParams.Amino;
    static fromData(data: EvidenceParams.Data): EvidenceParams;
    toData(): EvidenceParams.Data;
    static fromProto(data: EvidenceParams.Proto): EvidenceParams;
    toProto(): EvidenceParams.Proto;
}
export declare namespace EvidenceParams {
    interface Amino {
        max_age_num_blocks: string;
        max_age_duration: Duration.Amino;
        max_bytes: string;
    }
    interface Data {
        max_age_num_blocks: string;
        max_age_duration: Duration.Data;
        max_bytes: string;
    }
    type Proto = EvidenceParams_pb;
}
