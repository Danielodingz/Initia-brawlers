import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Duration } from "../../../google/protobuf/duration";
export declare const protobufPackage = "initia.reward.v1";
/** Params defines the set of mint parameters. */
export interface Params {
    rewardDenom: string;
    dilutionPeriod?: Duration | undefined;
    releaseRate: string;
    /**
     * The dilution rate of release rate.
     * if `(block.timestamp - last_dilute_timestamp) < dilution_period`:
     *    `release_rate -= (release_rate * dilution_rate)`
     *    `last_dilution_timestamp = block.timestamp`
     */
    dilutionRate: string;
    releaseEnabled: boolean;
}
export declare const Params: MessageFns<Params>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
