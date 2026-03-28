import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { FeePool } from "../../../cosmos/distribution/v1beta1/distribution";
import { DelegatorWithdrawInfo } from "../../../cosmos/distribution/v1beta1/genesis";
import { DecPool, DelegatorStartingInfo, Params, ValidatorAccumulatedCommission, ValidatorCurrentRewards, ValidatorHistoricalRewards, ValidatorSlashEvent } from "./distribution";
export declare const protobufPackage = "initia.distribution.v1";
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecord {
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** outstanding_rewards represents the outstanding rewards of a validator. */
    outstandingRewards: DecPool[];
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecord {
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** accumulated is the accumulated commission of a validator. */
    accumulated?: ValidatorAccumulatedCommission | undefined;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecord {
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** period defines the period the historical rewards apply to. */
    period: bigint;
    /** rewards defines the historical rewards of a validator. */
    rewards?: ValidatorHistoricalRewards | undefined;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecord {
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** rewards defines the current rewards of a validator. */
    rewards?: ValidatorCurrentRewards | undefined;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecord {
    /** delegator_address is the address of the delegator. */
    delegatorAddress: string;
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** starting_info defines the starting info of a delegator. */
    startingInfo?: DelegatorStartingInfo | undefined;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecord {
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** height defines the block height at which the slash event occurred. */
    height: bigint;
    /** period is the period of the slash event. */
    period: bigint;
    /** validator_slash_event describes the slash event. */
    validatorSlashEvent?: ValidatorSlashEvent | undefined;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params?: Params | undefined;
    /** fee_pool defines the fee pool at genesis. */
    feePool?: FeePool | undefined;
    /** fee_pool defines the delegator withdraw infos at genesis. */
    delegatorWithdrawInfos: DelegatorWithdrawInfo[];
    /** fee_pool defines the previous proposer at genesis. */
    previousProposer: string;
    /** fee_pool defines the outstanding rewards of all validators at genesis. */
    outstandingRewards: ValidatorOutstandingRewardsRecord[];
    /** fee_pool defines the accumulated commissions of all validators at genesis. */
    validatorAccumulatedCommissions: ValidatorAccumulatedCommissionRecord[];
    /** fee_pool defines the historical rewards of all validators at genesis. */
    validatorHistoricalRewards: ValidatorHistoricalRewardsRecord[];
    /** fee_pool defines the current rewards of all validators at genesis. */
    validatorCurrentRewards: ValidatorCurrentRewardsRecord[];
    /** fee_pool defines the delegator starting infos at genesis. */
    delegatorStartingInfos: DelegatorStartingInfoRecord[];
    /** fee_pool defines the validator slash events at genesis. */
    validatorSlashEvents: ValidatorSlashEventRecord[];
}
export declare const ValidatorOutstandingRewardsRecord: MessageFns<ValidatorOutstandingRewardsRecord>;
export declare const ValidatorAccumulatedCommissionRecord: MessageFns<ValidatorAccumulatedCommissionRecord>;
export declare const ValidatorHistoricalRewardsRecord: MessageFns<ValidatorHistoricalRewardsRecord>;
export declare const ValidatorCurrentRewardsRecord: MessageFns<ValidatorCurrentRewardsRecord>;
export declare const DelegatorStartingInfoRecord: MessageFns<DelegatorStartingInfoRecord>;
export declare const ValidatorSlashEventRecord: MessageFns<ValidatorSlashEventRecord>;
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
