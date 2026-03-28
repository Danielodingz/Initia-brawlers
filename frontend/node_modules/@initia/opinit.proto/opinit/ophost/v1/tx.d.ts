import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { BatchInfo, BridgeConfig, MigrationInfo, Params } from "./types";
export declare const protobufPackage = "opinit.ophost.v1";
/** MsgRecordBatch is no_op message, which is only for tx indexing. */
export interface MsgRecordBatch {
    submitter: string;
    bridgeId: bigint;
    batchBytes: Uint8Array;
}
/** MsgRecordBatchResponse returns MsgRecordBatch message result data */
export interface MsgRecordBatchResponse {
}
/**
 * MsgCreateBridge is a message to register a new bridge with
 * new bridge id.
 */
export interface MsgCreateBridge {
    creator: string;
    config?: BridgeConfig | undefined;
}
/**
 * MsgCreateBridgeResponse returns MsgCreateBridge message
 * result data
 */
export interface MsgCreateBridgeResponse {
    bridgeId: bigint;
}
/** MsgProposeOutput is a message to submit l2 block proposal. */
export interface MsgProposeOutput {
    proposer: string;
    bridgeId: bigint;
    outputIndex: bigint;
    l2BlockNumber: bigint;
    outputRoot: Uint8Array;
}
/** MsgProposeOutputResponse returns deposit result data */
export interface MsgProposeOutputResponse {
}
/**
 * MsgDeleteOutput is a message to delete unfinalized l2 output proposals
 * in [outputIndex, nextOutputIndex) range.
 */
export interface MsgDeleteOutput {
    challenger: string;
    bridgeId: bigint;
    outputIndex: bigint;
}
/** MsgDeleteOutputResponse returns a message handle result. */
export interface MsgDeleteOutputResponse {
}
/** MsgInitiateTokenDeposit is a message to deposit a new token from L1 to L2. */
export interface MsgInitiateTokenDeposit {
    sender: string;
    bridgeId: bigint;
    to: string;
    amount?: Coin | undefined;
    data: Uint8Array;
}
/** MsgInitiateTokenDepositResponse returns a message handle result. */
export interface MsgInitiateTokenDepositResponse {
    sequence: bigint;
}
/** MsgFinalizeTokenWithdrawal is a message finalizing funds withdrawal from L2. */
export interface MsgFinalizeTokenWithdrawal {
    sender: string;
    bridgeId: bigint;
    outputIndex: bigint;
    withdrawalProofs: Uint8Array[];
    from: string;
    to: string;
    sequence: bigint;
    amount?: Coin | undefined;
    /** version of the output root */
    version: Uint8Array;
    storageRoot: Uint8Array;
    lastBlockHash: Uint8Array;
}
/** MsgFinalizeTokenWithdrawalResponse returns a message handle result. */
export interface MsgFinalizeTokenWithdrawalResponse {
}
/** MsgUpdateProposer is a message to change a proposer */
export interface MsgUpdateProposer {
    /**
     * authority is the address that controls the module (defaults to x/gov unless overwritten)
     * or the current proposer address.
     */
    authority: string;
    bridgeId: bigint;
    newProposer: string;
}
/** MsgUpdateProposerResponse returns a message handle result. */
export interface MsgUpdateProposerResponse {
    /** last finalized output index */
    outputIndex: bigint;
    /** last finalized l2 block number */
    l2BlockNumber: bigint;
}
/** MsgUpdateChallenger is a message to change a challenger */
export interface MsgUpdateChallenger {
    /**
     * authority is the address that controls the module (defaults to x/gov unless overwritten)
     * or the current challenger address.
     *
     * If the given authority is a challenger address, it has the ability to replace itself with another address.
     */
    authority: string;
    bridgeId: bigint;
    challenger: string;
}
/** MsgUpdateChallengerResponse returns a message handle result. */
export interface MsgUpdateChallengerResponse {
    /** last finalized output index */
    outputIndex: bigint;
    /** last finalized l2 block number */
    l2BlockNumber: bigint;
}
/** MsgUpdateBatchInfo is a message to change a batch info */
export interface MsgUpdateBatchInfo {
    /**
     * authority is the address that controls the module (defaults to x/gov unless overwritten)
     * or the current proposer address.
     */
    authority: string;
    bridgeId: bigint;
    newBatchInfo?: BatchInfo | undefined;
}
/** MsgUpdateBatchInfoResponse returns a message handle result. */
export interface MsgUpdateBatchInfoResponse {
    /** last finalized output index */
    outputIndex: bigint;
    /** last finalized l2 block number */
    l2BlockNumber: bigint;
}
/** MsgUpdateOracleFlag is a message to change oracle config */
export interface MsgUpdateOracleConfig {
    /**
     * authority is the address that controls the module (defaults to x/gov unless overwritten)
     * or the current proposer address.
     */
    authority: string;
    bridgeId: bigint;
    oracleEnabled: boolean;
}
/** MsgUpdateOracleFlagResponse returns a message handle result. */
export interface MsgUpdateOracleConfigResponse {
}
/** MsgUpdateMetadata is a message to change metadata */
export interface MsgUpdateMetadata {
    /**
     * authority is the address that controls the module (defaults to x/gov unless overwritten)
     * or the current challenger address.
     *
     * If the given authority is a challenger address, it has the ability to replace oneself to another address or remove
     * oneself.
     */
    authority: string;
    bridgeId: bigint;
    metadata: Uint8Array;
}
/** MsgUpdateMetadataResponse returns a message handle result. */
export interface MsgUpdateMetadataResponse {
    /** last finalized output index */
    outputIndex: bigint;
    /** last finalized l2 block number */
    l2BlockNumber: bigint;
}
/** MsgUpdateParams is a message to update parameters */
export interface MsgUpdateParams {
    /**
     * authority is the address that controls the module
     * (defaults to x/gov unless overwritten).
     */
    authority: string;
    /** params are the arbitrary parameters to be updated. */
    params?: Params | undefined;
}
/** MsgUpdateParamsResponse returns a message handle result. */
export interface MsgUpdateParamsResponse {
}
/** MsgUpdateFinalizationPeriod is a message to update the finalization period */
export interface MsgUpdateFinalizationPeriod {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten) */
    authority: string;
    bridgeId: bigint;
    /** The minimum time duration that must elapse before a withdrawal can be finalized. */
    finalizationPeriod?: Duration | undefined;
}
/** MsgUpdateFinalizationPeriodResponse returns a message handle result. */
export interface MsgUpdateFinalizationPeriodResponse {
}
/** MsgDisableBridge is a message to disable the bridge */
export interface MsgDisableBridge {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten) */
    authority: string;
    bridgeId: bigint;
}
/** MsgDisableBridgeResponse returns a message handle result. */
export interface MsgDisableBridgeResponse {
}
/** MsgRegisterMigrationInfo is a message to register the migration info */
export interface MsgRegisterMigrationInfo {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten) */
    authority: string;
    migrationInfo?: MigrationInfo | undefined;
}
/** MsgRegisterMigrationInfoResponse returns a message handle result. */
export interface MsgRegisterMigrationInfoResponse {
}
export declare const MsgRecordBatch: MessageFns<MsgRecordBatch>;
export declare const MsgRecordBatchResponse: MessageFns<MsgRecordBatchResponse>;
export declare const MsgCreateBridge: MessageFns<MsgCreateBridge>;
export declare const MsgCreateBridgeResponse: MessageFns<MsgCreateBridgeResponse>;
export declare const MsgProposeOutput: MessageFns<MsgProposeOutput>;
export declare const MsgProposeOutputResponse: MessageFns<MsgProposeOutputResponse>;
export declare const MsgDeleteOutput: MessageFns<MsgDeleteOutput>;
export declare const MsgDeleteOutputResponse: MessageFns<MsgDeleteOutputResponse>;
export declare const MsgInitiateTokenDeposit: MessageFns<MsgInitiateTokenDeposit>;
export declare const MsgInitiateTokenDepositResponse: MessageFns<MsgInitiateTokenDepositResponse>;
export declare const MsgFinalizeTokenWithdrawal: MessageFns<MsgFinalizeTokenWithdrawal>;
export declare const MsgFinalizeTokenWithdrawalResponse: MessageFns<MsgFinalizeTokenWithdrawalResponse>;
export declare const MsgUpdateProposer: MessageFns<MsgUpdateProposer>;
export declare const MsgUpdateProposerResponse: MessageFns<MsgUpdateProposerResponse>;
export declare const MsgUpdateChallenger: MessageFns<MsgUpdateChallenger>;
export declare const MsgUpdateChallengerResponse: MessageFns<MsgUpdateChallengerResponse>;
export declare const MsgUpdateBatchInfo: MessageFns<MsgUpdateBatchInfo>;
export declare const MsgUpdateBatchInfoResponse: MessageFns<MsgUpdateBatchInfoResponse>;
export declare const MsgUpdateOracleConfig: MessageFns<MsgUpdateOracleConfig>;
export declare const MsgUpdateOracleConfigResponse: MessageFns<MsgUpdateOracleConfigResponse>;
export declare const MsgUpdateMetadata: MessageFns<MsgUpdateMetadata>;
export declare const MsgUpdateMetadataResponse: MessageFns<MsgUpdateMetadataResponse>;
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse>;
export declare const MsgUpdateFinalizationPeriod: MessageFns<MsgUpdateFinalizationPeriod>;
export declare const MsgUpdateFinalizationPeriodResponse: MessageFns<MsgUpdateFinalizationPeriodResponse>;
export declare const MsgDisableBridge: MessageFns<MsgDisableBridge>;
export declare const MsgDisableBridgeResponse: MessageFns<MsgDisableBridgeResponse>;
export declare const MsgRegisterMigrationInfo: MessageFns<MsgRegisterMigrationInfo>;
export declare const MsgRegisterMigrationInfoResponse: MessageFns<MsgRegisterMigrationInfoResponse>;
/** Msg defines the rollup Msg service. */
export interface Msg {
    /** RecordBatch defines a rpc handler method for MsgRecordBatch. */
    RecordBatch(request: DeepPartial<MsgRecordBatch>, metadata?: grpc.Metadata): Promise<MsgRecordBatchResponse>;
    /** CreateBridge defines a rpc handler method for MsgCreateBridge. */
    CreateBridge(request: DeepPartial<MsgCreateBridge>, metadata?: grpc.Metadata): Promise<MsgCreateBridgeResponse>;
    /** ProposeOutput defines a rpc handler method for MsgProposeOutput. */
    ProposeOutput(request: DeepPartial<MsgProposeOutput>, metadata?: grpc.Metadata): Promise<MsgProposeOutputResponse>;
    /** DeleteOutput defines a rpc handler method for MsgDeleteOutput. */
    DeleteOutput(request: DeepPartial<MsgDeleteOutput>, metadata?: grpc.Metadata): Promise<MsgDeleteOutputResponse>;
    /** InitiateTokenDeposit defines a user facing l1 => l2 token transfer interface. */
    InitiateTokenDeposit(request: DeepPartial<MsgInitiateTokenDeposit>, metadata?: grpc.Metadata): Promise<MsgInitiateTokenDepositResponse>;
    /** FinalizeTokenWithdrawal defines a user facing l2 => l1 token transfer interface. */
    FinalizeTokenWithdrawal(request: DeepPartial<MsgFinalizeTokenWithdrawal>, metadata?: grpc.Metadata): Promise<MsgFinalizeTokenWithdrawalResponse>;
    /** UpdateProposer defines a rpc handler method for MsgUpdateProposer. */
    UpdateProposer(request: DeepPartial<MsgUpdateProposer>, metadata?: grpc.Metadata): Promise<MsgUpdateProposerResponse>;
    /** UpdateChallenger defines a rpc handler method for MsgUpdateChallenger. */
    UpdateChallenger(request: DeepPartial<MsgUpdateChallenger>, metadata?: grpc.Metadata): Promise<MsgUpdateChallengerResponse>;
    /** UpdateBatchInfo defines a rpc handler method for MsgUpdateBatchInfo. */
    UpdateBatchInfo(request: DeepPartial<MsgUpdateBatchInfo>, metadata?: grpc.Metadata): Promise<MsgUpdateBatchInfoResponse>;
    /** UpdateMetadata defines a rpc handler method for MsgUpdateMetadata. */
    UpdateMetadata(request: DeepPartial<MsgUpdateMetadata>, metadata?: grpc.Metadata): Promise<MsgUpdateMetadataResponse>;
    /** UpdateOracleConfig defines a rpc handler method for MsgUpdateOracleConfig. */
    UpdateOracleConfig(request: DeepPartial<MsgUpdateOracleConfig>, metadata?: grpc.Metadata): Promise<MsgUpdateOracleConfigResponse>;
    /**
     * UpdateParams defines an operation for updating the
     * x/opchild module parameters.
     */
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    /** UpdateFinalizationPeriod defines a rpc handler method for MsgUpdateFinalizationPeriod. */
    UpdateFinalizationPeriod(request: DeepPartial<MsgUpdateFinalizationPeriod>, metadata?: grpc.Metadata): Promise<MsgUpdateFinalizationPeriodResponse>;
    /** DisableBridge defines a rpc handler method for MsgDisableBridge. */
    DisableBridge(request: DeepPartial<MsgDisableBridge>, metadata?: grpc.Metadata): Promise<MsgDisableBridgeResponse>;
    /** RegisterMigrationInfo defines a rpc handler method for MsgRegisterMigrationInfo. */
    RegisterMigrationInfo(request: DeepPartial<MsgRegisterMigrationInfo>, metadata?: grpc.Metadata): Promise<MsgRegisterMigrationInfoResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RecordBatch(request: DeepPartial<MsgRecordBatch>, metadata?: grpc.Metadata): Promise<MsgRecordBatchResponse>;
    CreateBridge(request: DeepPartial<MsgCreateBridge>, metadata?: grpc.Metadata): Promise<MsgCreateBridgeResponse>;
    ProposeOutput(request: DeepPartial<MsgProposeOutput>, metadata?: grpc.Metadata): Promise<MsgProposeOutputResponse>;
    DeleteOutput(request: DeepPartial<MsgDeleteOutput>, metadata?: grpc.Metadata): Promise<MsgDeleteOutputResponse>;
    InitiateTokenDeposit(request: DeepPartial<MsgInitiateTokenDeposit>, metadata?: grpc.Metadata): Promise<MsgInitiateTokenDepositResponse>;
    FinalizeTokenWithdrawal(request: DeepPartial<MsgFinalizeTokenWithdrawal>, metadata?: grpc.Metadata): Promise<MsgFinalizeTokenWithdrawalResponse>;
    UpdateProposer(request: DeepPartial<MsgUpdateProposer>, metadata?: grpc.Metadata): Promise<MsgUpdateProposerResponse>;
    UpdateChallenger(request: DeepPartial<MsgUpdateChallenger>, metadata?: grpc.Metadata): Promise<MsgUpdateChallengerResponse>;
    UpdateBatchInfo(request: DeepPartial<MsgUpdateBatchInfo>, metadata?: grpc.Metadata): Promise<MsgUpdateBatchInfoResponse>;
    UpdateMetadata(request: DeepPartial<MsgUpdateMetadata>, metadata?: grpc.Metadata): Promise<MsgUpdateMetadataResponse>;
    UpdateOracleConfig(request: DeepPartial<MsgUpdateOracleConfig>, metadata?: grpc.Metadata): Promise<MsgUpdateOracleConfigResponse>;
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    UpdateFinalizationPeriod(request: DeepPartial<MsgUpdateFinalizationPeriod>, metadata?: grpc.Metadata): Promise<MsgUpdateFinalizationPeriodResponse>;
    DisableBridge(request: DeepPartial<MsgDisableBridge>, metadata?: grpc.Metadata): Promise<MsgDisableBridgeResponse>;
    RegisterMigrationInfo(request: DeepPartial<MsgRegisterMigrationInfo>, metadata?: grpc.Metadata): Promise<MsgRegisterMigrationInfoResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgRecordBatchDesc: UnaryMethodDefinitionish;
export declare const MsgCreateBridgeDesc: UnaryMethodDefinitionish;
export declare const MsgProposeOutputDesc: UnaryMethodDefinitionish;
export declare const MsgDeleteOutputDesc: UnaryMethodDefinitionish;
export declare const MsgInitiateTokenDepositDesc: UnaryMethodDefinitionish;
export declare const MsgFinalizeTokenWithdrawalDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateProposerDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateChallengerDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateBatchInfoDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateMetadataDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateOracleConfigDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateParamsDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateFinalizationPeriodDesc: UnaryMethodDefinitionish;
export declare const MsgDisableBridgeDesc: UnaryMethodDefinitionish;
export declare const MsgRegisterMigrationInfoDesc: UnaryMethodDefinitionish;
interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
    requestStream: any;
    responseStream: any;
}
type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;
interface Rpc {
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export declare class GrpcWebImpl {
    private host;
    private options;
    constructor(host: string, options: {
        transport?: grpc.TransportFactory;
        debug?: boolean;
        metadata?: grpc.Metadata;
        upStreamRetryCodes?: number[];
    });
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
declare const gt: any;
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
export declare class GrpcWebError extends gt.Error {
    code: grpc.Code;
    metadata: grpc.Metadata;
    constructor(message: string, code: grpc.Code, metadata: grpc.Metadata);
}
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
