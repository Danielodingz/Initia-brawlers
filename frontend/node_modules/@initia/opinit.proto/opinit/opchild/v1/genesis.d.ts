import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { BridgeInfo, DenomPair, MigrationInfo, Params, Validator } from "./types";
export declare const protobufPackage = "opinit.opchild.v1";
/** GenesisState defines the rollup module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to deposit. */
    params?: Params | undefined;
    /**
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     */
    lastValidatorPowers: LastValidatorPower[];
    /** delegations defines the validator set at genesis. */
    validators: Validator[];
    nextL2Sequence: bigint;
    nextL1Sequence: bigint;
    bridgeInfo?: BridgeInfo | undefined;
    exported: boolean;
    denomPairs: DenomPair[];
    /** migration_infos defines the registered migration infos. */
    migrationInfos: MigrationInfo[];
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPower {
    /** address is the address of the validator. */
    address: string;
    /** power defines the power of the validator. */
    power: bigint;
}
export declare const GenesisState: MessageFns<GenesisState>;
export declare const LastValidatorPower: MessageFns<LastValidatorPower>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
