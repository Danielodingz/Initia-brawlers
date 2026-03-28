import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";
export declare const protobufPackage = "ibc.core.types.v1";
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisState {
    /** ICS002 - Clients genesis state */
    clientGenesis?: GenesisState1 | undefined;
    /** ICS003 - Connections genesis state */
    connectionGenesis?: GenesisState2 | undefined;
    /** ICS004 - Channel genesis state */
    channelGenesis?: GenesisState3 | undefined;
}
export declare const GenesisState: MessageFns<GenesisState>;
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
