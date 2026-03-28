import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Any } from "../../../../google/protobuf/any";
export declare const protobufPackage = "ibc.lightclients.solomachine.v3";
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientState {
    /** latest sequence of the client state */
    sequence: bigint;
    /** frozen sequence of the solo machine */
    isFrozen: boolean;
    consensusState?: ConsensusState | undefined;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusState {
    /** public key of the solo machine */
    publicKey?: Any | undefined;
    /**
     * diversifier allows the same public key to be re-used across different solo
     * machine clients (potentially on different chains) without being considered
     * misbehaviour.
     */
    diversifier: string;
    timestamp: bigint;
}
/** Header defines a solo machine consensus header */
export interface Header {
    timestamp: bigint;
    signature: Uint8Array;
    newPublicKey?: Any | undefined;
    newDiversifier: string;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface Misbehaviour {
    sequence: bigint;
    signatureOne?: SignatureAndData | undefined;
    signatureTwo?: SignatureAndData | undefined;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndData {
    signature: Uint8Array;
    path: Uint8Array;
    data: Uint8Array;
    timestamp: bigint;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureData {
    signatureData: Uint8Array;
    timestamp: bigint;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytes {
    /** the sequence number */
    sequence: bigint;
    /** the proof timestamp */
    timestamp: bigint;
    /** the public key diversifier */
    diversifier: string;
    /** the standardised path bytes */
    path: Uint8Array;
    /** the marshaled data bytes */
    data: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderData {
    /** header public key */
    newPubKey?: Any | undefined;
    /** header diversifier */
    newDiversifier: string;
}
export declare const ClientState: MessageFns<ClientState>;
export declare const ConsensusState: MessageFns<ConsensusState>;
export declare const Header: MessageFns<Header>;
export declare const Misbehaviour: MessageFns<Misbehaviour>;
export declare const SignatureAndData: MessageFns<SignatureAndData>;
export declare const TimestampedSignatureData: MessageFns<TimestampedSignatureData>;
export declare const SignBytes: MessageFns<SignBytes>;
export declare const HeaderData: MessageFns<HeaderData>;
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
