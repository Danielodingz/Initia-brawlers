import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ProposalStatus, TallyResult as TallyResult1 } from "../../../cosmos/gov/v1/gov";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
export declare const protobufPackage = "initia.gov.v1";
/** Params defines the parameters for the x/gov module. */
export interface Params {
    /** Minimum deposit for a proposal to enter voting period. */
    minDeposit: Coin[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     * months.
     */
    maxDepositPeriod?: Duration | undefined;
    /** Duration of the voting period. */
    votingPeriod?: Duration | undefined;
    /**
     * Minimum percentage of total stake needed to vote for a result to be
     *  considered valid.
     */
    quorum: string;
    /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
    threshold: string;
    /**
     * Minimum value of Veto votes to Total votes ratio for proposal to be
     *  vetoed. Default value: 1/3.
     */
    vetoThreshold: string;
    /** The ratio representing the proportion of the deposit value that must be paid at proposal submission. */
    minInitialDepositRatio: string;
    /**
     * The cancel ratio which will not be returned back to the depositors when a proposal is cancelled.
     *
     * Since: cosmos-sdk 0.50
     */
    proposalCancelRatio: string;
    /**
     * The address which will receive (proposal_cancel_ratio * deposit) proposal deposits.
     * If empty, the (proposal_cancel_ratio * deposit) proposal deposits will be burned.
     *
     * Since: cosmos-sdk 0.50
     */
    proposalCancelDest: string;
    /**
     * Duration of the voting period of an expedited proposal.
     *
     * Since: cosmos-sdk 0.50
     */
    expeditedVotingPeriod?: Duration | undefined;
    /**
     * Minimum proportion of Yes votes for proposal to pass. Default value: 0.67.
     *
     * Since: cosmos-sdk 0.50
     */
    expeditedThreshold: string;
    /** Minimum expedited deposit for a proposal to enter voting period. */
    expeditedMinDeposit: Coin[];
    /** burn deposits if a proposal does not meet quorum */
    burnVoteQuorum: boolean;
    /** burn deposits if the proposal does not enter voting period */
    burnProposalDepositPrevote: boolean;
    /** burn deposits if quorum with vote type no_veto is met */
    burnVoteVeto: boolean;
    /**
     * The ratio representing the proportion of the deposit value minimum that must be met when making a deposit.
     * Default value: 0.01. Meaning that for a chain with a min_deposit of 100stake, a deposit of 1stake would be
     * required.
     *
     * Since: cosmos-sdk 0.50
     */
    minDepositRatio: string;
    /** Minimum deposit for a emergency proposal to enter voting period. */
    emergencyMinDeposit: Coin[];
    /** Tally interval for emergency proposal. */
    emergencyTallyInterval?: Duration | undefined;
    /**
     * Low threshold functions for emergency and expedited proposal.
     * These are Move function identifiers and can only be applied
     * for Move execute messages.
     */
    lowThresholdFunctions: string[];
    /** Vesting is the vesting contract info for tally. */
    vesting?: Vesting | undefined;
    /** Whitelist addresses that can submit emergency proposals. */
    emergencySubmitters: string[];
}
/**
 * Vesting defines the vesting contract info for MsgVestingVote.
 * At tally time, gov module would check vesting token amount.
 */
export interface Vesting {
    /** module_addr is the address of the vesting module. */
    moduleAddr: string;
    /** module_name is the name of the vesting module. */
    moduleName: string;
    /** creator_addr is the address of the creator of the vesting contract. */
    creatorAddr: string;
}
/** TallyResult defines the result of a tally. */
export interface TallyResult {
    tallyHeight: bigint;
    totalStakingPower: string;
    totalVestingPower: string;
    /**
     * v1_tally_result is the original TallyResult from cosmos-sdk,
     * which contains both staking and vesting power.
     */
    v1TallyResult?: TallyResult1 | undefined;
}
/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
    /** id defines the unique id of the proposal. */
    id: bigint;
    /** messages are the arbitrary messages to be executed if the proposal passes. */
    messages: Any[];
    /** status defines the proposal status. */
    status: ProposalStatus;
    /**
     * final_tally_result is the final tally result of the proposal. When
     * querying a proposal via gRPC, this field is not populated until the
     * proposal's voting period has ended.
     */
    finalTallyResult?: TallyResult | undefined;
    /** submit_time is the time of proposal submission. */
    submitTime?: Date | undefined;
    /** deposit_end_time is the end time for deposition. */
    depositEndTime?: Date | undefined;
    /** total_deposit is the total deposit on the proposal. */
    totalDeposit: Coin[];
    /** voting_start_time is the starting time to vote on a proposal. */
    votingStartTime?: Date | undefined;
    /** voting_end_time is the end time of voting on a proposal. */
    votingEndTime?: Date | undefined;
    emergencyStartTime?: Date | undefined;
    emergencyNextTallyTime?: Date | undefined;
    /**
     * metadata is any arbitrary metadata attached to the proposal.
     * the recommended format of the metadata is to be found here:
     * https://docs.cosmos.network/v0.47/modules/gov#proposal-3
     */
    metadata: string;
    /**
     * title is the title of the proposal
     *
     * Since: cosmos-sdk 0.47
     */
    title: string;
    /**
     * summary is a short summary of the proposal
     *
     * Since: cosmos-sdk 0.47
     */
    summary: string;
    /**
     * proposer is the address of the proposal sumbitter
     *
     * Since: cosmos-sdk 0.47
     */
    proposer: string;
    /**
     * expedited defines if the proposal is expedited
     *
     * Since: cosmos-sdk 0.50
     */
    expedited: boolean;
    emergency: boolean;
    /**
     * failed_reason defines the reason why the proposal failed
     *
     * Since: cosmos-sdk 0.50
     */
    failedReason: string;
}
export declare const Params: MessageFns<Params>;
export declare const Vesting: MessageFns<Vesting>;
export declare const TallyResult: MessageFns<TallyResult>;
export declare const Proposal: MessageFns<Proposal>;
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
