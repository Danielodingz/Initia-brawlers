import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Params } from "../../controller/v1/controller";
import { Params as Params1 } from "../../host/v1/host";
export declare const protobufPackage = "ibc.applications.interchain_accounts.genesis.v1";
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisState {
    controllerGenesisState?: ControllerGenesisState | undefined;
    hostGenesisState?: HostGenesisState | undefined;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisState {
    activeChannels: ActiveChannel[];
    interchainAccounts: RegisteredInterchainAccount[];
    ports: string[];
    params?: Params | undefined;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisState {
    activeChannels: ActiveChannel[];
    interchainAccounts: RegisteredInterchainAccount[];
    port: string;
    params?: Params1 | undefined;
}
/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
 * indicate if the channel is middleware enabled
 */
export interface ActiveChannel {
    connectionId: string;
    portId: string;
    channelId: string;
    isMiddlewareEnabled: boolean;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccount {
    connectionId: string;
    portId: string;
    accountAddress: string;
}
export declare const GenesisState: MessageFns<GenesisState>;
export declare const ControllerGenesisState: MessageFns<ControllerGenesisState>;
export declare const HostGenesisState: MessageFns<HostGenesisState>;
export declare const ActiveChannel: MessageFns<ActiveChannel>;
export declare const RegisteredInterchainAccount: MessageFns<RegisteredInterchainAccount>;
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
