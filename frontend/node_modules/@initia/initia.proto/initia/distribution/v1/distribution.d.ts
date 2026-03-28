import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "initia.distribution.v1";
/** Params defines the set of params for the distribution module. */
export interface Params {
    communityTax: string;
    withdrawAddrEnabled: boolean;
    rewardWeights: RewardWeight[];
}
/**
 * RewardWeight represents reward allocation ratio between
 * pools.
 */
export interface RewardWeight {
    denom: string;
    weight: string;
}
/** Pool is a Coins wrapper with denom. */
export interface Pool {
    denom: string;
    coins: Coin[];
}
/** DecPool is a DecCoins wrapper with denom. */
export interface DecPool {
    denom: string;
    decCoins: DecCoin[];
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewards {
    cumulativeRewardRatios: DecPool[];
    referenceCount: number;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewards {
    rewards: DecPool[];
    period: bigint;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommission {
    commissions: DecPool[];
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewards {
    rewards: DecPool[];
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEvent {
    validatorPeriod: bigint;
    fractions: DecCoin[];
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEvents {
    validatorSlashEvents: ValidatorSlashEvent[];
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfo {
    previousPeriod: bigint;
    stakes: DecCoin[];
    height: bigint;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorReward {
    validatorAddress: string;
    reward: DecPool[];
}
export declare const Params: MessageFns<Params>;
export declare const RewardWeight: MessageFns<RewardWeight>;
export declare const Pool: MessageFns<Pool>;
export declare const DecPool: MessageFns<DecPool>;
export declare const ValidatorHistoricalRewards: MessageFns<ValidatorHistoricalRewards>;
export declare const ValidatorCurrentRewards: MessageFns<ValidatorCurrentRewards>;
export declare const ValidatorAccumulatedCommission: MessageFns<ValidatorAccumulatedCommission>;
export declare const ValidatorOutstandingRewards: MessageFns<ValidatorOutstandingRewards>;
export declare const ValidatorSlashEvent: MessageFns<ValidatorSlashEvent>;
export declare const ValidatorSlashEvents: MessageFns<ValidatorSlashEvents>;
export declare const DelegatorStartingInfo: MessageFns<DelegatorStartingInfo>;
export declare const DelegationDelegatorReward: MessageFns<DelegationDelegatorReward>;
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
