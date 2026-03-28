import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { ValidatorUpdate } from "../../../tendermint/abci/types";
import { BridgeConfig } from "../../ophost/v1/types";
export declare const protobufPackage = "opinit.opchild.v1";
/** ResponseResultType defines the possible outcomes of the execution of a message */
export declare enum ResponseResultType {
    /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
    RESPONSE_RESULT_TYPE_UNSPECIFIED = 0,
    /** RESPONSE_RESULT_TYPE_NOOP - The message did not execute msg operation (because, for example, deposit had already been finalized) */
    RESPONSE_RESULT_TYPE_NOOP = 1,
    /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
    RESPONSE_RESULT_TYPE_SUCCESS = 2,
    UNRECOGNIZED = -1
}
export declare function responseResultTypeFromJSON(object: any): ResponseResultType;
export declare function responseResultTypeToJSON(object: ResponseResultType): string;
/** Params defines the set of opchild parameters. */
export interface Params {
    /** max_validators is the maximum number of validators. */
    maxValidators: number;
    /** historical_entries is the number of historical entries to persist. */
    historicalEntries: number;
    minGasPrices: DecCoin[];
    /**
     * the account address of bridge executor who can execute permissioned bridge
     * messages.
     */
    bridgeExecutors: string[];
    /** the account address of admin who can execute permissioned cosmos messages. */
    admin: string;
    /** the list of addresses that are allowed to pay zero fee. */
    feeWhitelist: string[];
    /** Max gas for hook execution of `MsgFinalizeTokenDeposit` */
    hookMaxGas: bigint;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
    moniker: string;
    /**
     * operator_address defines the address of the validator's operator;
     * bech encoded in JSON.
     */
    operatorAddress: string;
    /**
     * consensus_pubkey is the consensus public key of the validator,
     * as a Protobuf Any.
     */
    consensusPubkey?: Any | undefined;
    consPower: bigint;
}
/**
 * ValidatorUpdates defines an array of abci.ValidatorUpdate objects.
 * TODO: explore moving this to proto/cosmos/base to separate modules
 * from tendermint dependence
 */
export interface ValidatorUpdates {
    updates: ValidatorUpdate[];
}
/** BridgeInfo defines the information of the bridge. */
export interface BridgeInfo {
    /** bridge id is the unique identifier of the bridge which is assigned from l1. */
    bridgeId: bigint;
    /** bridge_addr is the address of the bridge on l1. */
    bridgeAddr: string;
    /** l1_chain_id is the chain id of the l1 chain. */
    l1ChainId: string;
    /**
     * l1_client_id is the IBC client ID, which is allocated for l1 chain, in l2 chain state.
     * This is used to verify the validator set in oracle update messages.
     */
    l1ClientId: string;
    /** bridge_config is the configuration of the bridge. */
    bridgeConfig?: BridgeConfig | undefined;
}
/** CoinsWrapper defines the set of coins. */
export interface CoinsWrapper {
    coins: Coin[];
}
export interface DenomPair {
    denom: string;
    baseDenom: string;
}
/** MigrationInfo defines the information of the migration. */
export interface MigrationInfo {
    /** denom is the denom of the token on l2 chain. */
    denom: string;
    /** ibc_channel_id is the IBC channel ID, which is allocated for l1 chain, in l2 chain state. */
    ibcChannelId: string;
    /** ibc_port_id is the IBC port ID, which is allocated for l1 chain, in l2 chain state. */
    ibcPortId: string;
}
/** ShutdownInfo defines the information of the shutdown. */
export interface ShutdownInfo {
    /** last_addr is the last address that was processed. */
    lastAddr: Uint8Array;
    /** last_block indicates if this block is the last block of the chain. */
    lastBlock: boolean;
}
export declare const Params: MessageFns<Params>;
export declare const Validator: MessageFns<Validator>;
export declare const ValidatorUpdates: MessageFns<ValidatorUpdates>;
export declare const BridgeInfo: MessageFns<BridgeInfo>;
export declare const CoinsWrapper: MessageFns<CoinsWrapper>;
export declare const DenomPair: MessageFns<DenomPair>;
export declare const MigrationInfo: MessageFns<MigrationInfo>;
export declare const ShutdownInfo: MessageFns<ShutdownInfo>;
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
