import { Duration as Duration_pb } from '@initia/initia.proto/google/protobuf/duration';
export declare class Duration {
    seconds: number;
    nanos: number;
    constructor(seconds: number, nanos?: number);
    static fromString(str: string): Duration;
    toString(): string;
    static fromAmino(amino: Duration.Amino): Duration;
    toAmino(): Duration.Amino;
    static fromData(data: Duration.Data): Duration;
    toData(): Duration.Data;
    static fromProto(proto: Duration.Proto): Duration;
    toProto(): Duration.Proto;
}
export declare namespace Duration {
    type Amino = string;
    type Data = string;
    type Proto = Duration_pb;
}
