import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "noble.forwarding.v1";
export interface GenesisState {
    allowedDenoms: string[];
    numOfAccounts: Map<string, bigint>;
    numOfForwards: Map<string, bigint>;
    totalForwarded: Map<string, string>;
}
export interface GenesisState_NumOfAccountsEntry {
    key: string;
    value: bigint;
}
export interface GenesisState_NumOfForwardsEntry {
    key: string;
    value: bigint;
}
export interface GenesisState_TotalForwardedEntry {
    key: string;
    value: string;
}
export declare const GenesisState: MessageFns<GenesisState>;
export declare const GenesisState_NumOfAccountsEntry: MessageFns<GenesisState_NumOfAccountsEntry>;
export declare const GenesisState_NumOfForwardsEntry: MessageFns<GenesisState_NumOfForwardsEntry>;
export declare const GenesisState_TotalForwardedEntry: MessageFns<GenesisState_TotalForwardedEntry>;
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
