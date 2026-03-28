import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { AccessConfig } from "./types";
export declare const protobufPackage = "cosmwasm.wasm.v1";
/**
 * StoreCodeAuthorization defines authorization for wasm code upload.
 * Since: wasmd 0.42
 */
export interface StoreCodeAuthorization {
    /** Grants for code upload */
    grants: CodeGrant[];
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorization {
    /** Grants for contract executions */
    grants: ContractGrant[];
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorization {
    /** Grants for contract migrations */
    grants: ContractGrant[];
}
/** CodeGrant a granted permission for a single code */
export interface CodeGrant {
    /**
     * CodeHash is the unique identifier created by wasmvm
     * Wildcard "*" is used to specify any kind of grant.
     */
    codeHash: Uint8Array;
    /**
     * InstantiatePermission is the superset access control to apply
     * on contract creation.
     * Optional
     */
    instantiatePermission?: AccessConfig | undefined;
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrant {
    /** Contract is the bech32 address of the smart contract */
    contract: string;
    /**
     * Limit defines execution limits that are enforced and updated when the grant
     * is applied. When the limit lapsed the grant is removed.
     */
    limit?: Any | undefined;
    /**
     * Filter define more fine-grained control on the message payload passed
     * to the contract in the operation. When no filter applies on execution, the
     * operation is prohibited.
     */
    filter?: Any | undefined;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimit {
    /** Remaining number that is decremented on each execution */
    remaining: bigint;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimit {
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimit {
    /** Remaining number that is decremented on each execution */
    callsRemaining: bigint;
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilter {
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilter {
    /** Messages is the list of unique keys */
    keys: string[];
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilter {
    /** Messages is the list of raw contract messages */
    messages: Uint8Array[];
}
export declare const StoreCodeAuthorization: MessageFns<StoreCodeAuthorization>;
export declare const ContractExecutionAuthorization: MessageFns<ContractExecutionAuthorization>;
export declare const ContractMigrationAuthorization: MessageFns<ContractMigrationAuthorization>;
export declare const CodeGrant: MessageFns<CodeGrant>;
export declare const ContractGrant: MessageFns<ContractGrant>;
export declare const MaxCallsLimit: MessageFns<MaxCallsLimit>;
export declare const MaxFundsLimit: MessageFns<MaxFundsLimit>;
export declare const CombinedLimit: MessageFns<CombinedLimit>;
export declare const AllowAllMessagesFilter: MessageFns<AllowAllMessagesFilter>;
export declare const AcceptedMessageKeysFilter: MessageFns<AcceptedMessageKeysFilter>;
export declare const AcceptedMessagesFilter: MessageFns<AcceptedMessagesFilter>;
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
