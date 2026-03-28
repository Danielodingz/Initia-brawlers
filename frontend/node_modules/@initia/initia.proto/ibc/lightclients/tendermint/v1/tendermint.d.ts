import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ProofSpec } from "../../../../cosmos/ics23/v1/proofs";
import { Duration } from "../../../../google/protobuf/duration";
import { SignedHeader } from "../../../../tendermint/types/types";
import { ValidatorSet } from "../../../../tendermint/types/validator";
import { Height } from "../../../core/client/v1/client";
import { MerkleRoot } from "../../../core/commitment/v1/commitment";
export declare const protobufPackage = "ibc.lightclients.tendermint.v1";
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientState {
    chainId: string;
    trustLevel?: Fraction | undefined;
    /**
     * duration of the period since the LastestTimestamp during which the
     * submitted headers are valid for upgrade
     */
    trustingPeriod?: Duration | undefined;
    /** duration of the staking unbonding period */
    unbondingPeriod?: Duration | undefined;
    /** defines how much new (untrusted) header's Time can drift into the future. */
    maxClockDrift?: Duration | undefined;
    /** Block height when the client was frozen due to a misbehaviour */
    frozenHeight?: Height | undefined;
    /** Latest height the client was updated to */
    latestHeight?: Height | undefined;
    /** Proof specifications used in verifying counterparty state */
    proofSpecs: ProofSpec[];
    /**
     * Path at which next upgraded client will be committed.
     * Each element corresponds to the key for a single CommitmentProof in the
     * chained proof. NOTE: ClientState must stored under
     * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
     * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
     * the default upgrade module, upgrade_path should be []string{"upgrade",
     * "upgradedIBCState"}`
     */
    upgradePath: string[];
    /**
     * allow_update_after_expiry is deprecated
     *
     * @deprecated
     */
    allowUpdateAfterExpiry: boolean;
    /**
     * allow_update_after_misbehaviour is deprecated
     *
     * @deprecated
     */
    allowUpdateAfterMisbehaviour: boolean;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusState {
    /**
     * timestamp that corresponds to the block height in which the ConsensusState
     * was stored.
     */
    timestamp?: Date | undefined;
    /** commitment root (i.e app hash) */
    root?: MerkleRoot | undefined;
    nextValidatorsHash: Uint8Array;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface Misbehaviour {
    /**
     * ClientID is deprecated
     *
     * @deprecated
     */
    clientId: string;
    header1?: Header | undefined;
    header2?: Header | undefined;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface Header {
    signedHeader?: SignedHeader | undefined;
    validatorSet?: ValidatorSet | undefined;
    trustedHeight?: Height | undefined;
    trustedValidators?: ValidatorSet | undefined;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface Fraction {
    numerator: bigint;
    denominator: bigint;
}
export declare const ClientState: MessageFns<ClientState>;
export declare const ConsensusState: MessageFns<ConsensusState>;
export declare const Misbehaviour: MessageFns<Misbehaviour>;
export declare const Header: MessageFns<Header>;
export declare const Fraction: MessageFns<Fraction>;
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
