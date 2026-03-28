import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "sdk.auction.v1";
/** GenesisState defines the genesis state of the x/auction module. */
export interface GenesisState {
    params?: Params | undefined;
}
/** Params defines the parameters of the x/auction module. */
export interface Params {
    /**
     * max_bundle_size is the maximum number of transactions that can be bundled
     * in a single bundle.
     */
    maxBundleSize: number;
    /**
     * escrow_account_address is the address of the account that will receive a
     * portion of the bid proceeds.
     */
    escrowAccountAddress: Uint8Array;
    /** reserve_fee specifies the bid floor for the auction. */
    reserveFee?: Coin | undefined;
    /**
     * min_bid_increment specifies the minimum amount that the next bid must be
     * greater than the previous bid.
     */
    minBidIncrement?: Coin | undefined;
    /**
     * front_running_protection specifies whether front running and sandwich
     * attack protection is enabled.
     */
    frontRunningProtection: boolean;
    /**
     * proposer_fee defines the portion of the winning bid that goes to the block
     * proposer that proposed the block.
     */
    proposerFee: string;
}
export declare const GenesisState: MessageFns<GenesisState>;
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
