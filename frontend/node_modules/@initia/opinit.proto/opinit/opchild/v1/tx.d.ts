import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { BridgeInfo, MigrationInfo, Params, ResponseResultType } from "./types";
export declare const protobufPackage = "opinit.opchild.v1";
/**
 * MsgExecuteMessages is a message to execute the given
 * authority messages with validator permission.
 */
export interface MsgExecuteMessages {
    /** Sender is the that actor that signed a messages */
    sender: string;
    /** messages are the arbitrary messages to be executed. */
    messages: Any[];
}
/** MsgExecuteMessagesResponse returns MsgExecuteMessages message result data */
export interface MsgExecuteMessagesResponse {
}
/** MsgSetBridgeInfo is a message to set the registered bridge information. */
export interface MsgSetBridgeInfo {
    /** the sender address */
    sender: string;
    /** bridge_info is the bridge information to be set. */
    bridgeInfo?: BridgeInfo | undefined;
}
/** MsgSetBridgeInfoResponse returns set bridge info result data */
export interface MsgSetBridgeInfoResponse {
}
/** MsgFinalizeTokenDeposit is a message to submit deposit funds from upper layer */
export interface MsgFinalizeTokenDeposit {
    /** the sender address */
    sender: string;
    /** from is l1 sender address */
    from: string;
    /** to is l2 recipient address */
    to: string;
    /** amount is the coin amount to deposit. */
    amount?: Coin | undefined;
    /** sequence is the sequence number of l1 bridge */
    sequence: bigint;
    /** height is the height of l1 which is including the deposit message */
    height: bigint;
    /** base_denom is the l1 denomination of the sent coin. */
    baseDenom: string;
    /** / data is a extra bytes for hooks. */
    data: Uint8Array;
}
/** MsgFinalizeTokenDepositResponse returns deposit result data */
export interface MsgFinalizeTokenDepositResponse {
    result: ResponseResultType;
}
/** MsgInitiateTokenWithdrawal is a message to withdraw a new token from L2 to L1. */
export interface MsgInitiateTokenWithdrawal {
    /** the l2 sender address */
    sender: string;
    /** to is l1 recipient address */
    to: string;
    /** amount is the coin amount to withdraw. */
    amount?: Coin | undefined;
}
/** MsgInitiateTokenWithdrawalResponse returns create token result data */
export interface MsgInitiateTokenWithdrawalResponse {
    /** l2 sequence number */
    sequence: bigint;
}
/**
 * MsgUpdateSequencer is a message to update the sequencer role in validator set
 * by removing the old sequencer and adding a new one.
 */
export interface MsgUpdateSequencer {
    /**
     * authority is the address that controls the module
     * (defaults to x/opchild unless overwritten).
     */
    authority: string;
    moniker: string;
    sequencerAddress: string;
    pubkey?: Any | undefined;
}
/** MsgUpdateSequencerResponse returns update sequencer result data */
export interface MsgUpdateSequencerResponse {
}
/** MsgAddAttestor defines a SDK message for adding a new attestor. */
export interface MsgAddAttestor {
    /**
     * authority is the address that controls the module
     * (defaults to x/opchild unless overwritten).
     */
    authority: string;
    moniker: string;
    attestorAddress: string;
    pubkey?: Any | undefined;
}
/** MsgAddAttestorResponse returns add result data */
export interface MsgAddAttestorResponse {
}
/** MsgRemoveAttestor is a message to remove a attestor from the validator set. */
export interface MsgRemoveAttestor {
    /**
     * authority is the address that controls the module
     * (defaults to x/opchild unless overwritten).
     */
    authority: string;
    /** attestor_address is the address of the attestor to be removed. */
    attestorAddress: string;
}
/** MsgRemoveAttestorResponse returns remove result data */
export interface MsgRemoveAttestorResponse {
}
/** MsgAddFeeWhitelistAddresses is a message to add addresses to the x/opchild fee whitelist */
export interface MsgAddFeeWhitelistAddresses {
    /**
     * authority is the address that controls the module
     * (defaults to x/opchild unless overwritten).
     */
    authority: string;
    addresses: string[];
}
/** MsgAddFeeWhitelistAddressesResponse returns the addition result data */
export interface MsgAddFeeWhitelistAddressesResponse {
}
/** MsgRemoveFeeWhitelistAddresses is a message to remove addresses from the x/opchild fee whitelist */
export interface MsgRemoveFeeWhitelistAddresses {
    /**
     * authority is the address that controls the module
     * (defaults to x/opchild unless overwritten).
     */
    authority: string;
    addresses: string[];
}
/** MsgRemoveFeeWhitelistAddressesResponse returns the removal result data */
export interface MsgRemoveFeeWhitelistAddressesResponse {
}
/** MsgAddBridgeExecutor is a message to add addresses to the x/opchild bridge executors */
export interface MsgAddBridgeExecutor {
    /**
     * authority is the address that controls the module
     * (defaults to x/opchild unless overwritten).
     */
    authority: string;
    addresses: string[];
}
/** MsgAddBridgeExecutorResponse returns the addition result data */
export interface MsgAddBridgeExecutorResponse {
}
/** MsgRemoveBridgeExecutor is a message to remove addresses from the x/opchild bridge executors */
export interface MsgRemoveBridgeExecutor {
    /**
     * authority is the address that controls the module
     * (defaults to x/opchild unless overwritten).
     */
    authority: string;
    addresses: string[];
}
/** MsgRemoveBridgeExecutorResponse returns the removal result data */
export interface MsgRemoveBridgeExecutorResponse {
}
/** MsgUpdateMinGasPrices is a message to update the min gas prices parameter */
export interface MsgUpdateMinGasPrices {
    /**
     * authority is the address that controls the module
     * (defaults to x/opchild unless overwritten).
     */
    authority: string;
    minGasPrices: DecCoin[];
}
/** MsgUpdateMinGasPricesResponse returns the update result data */
export interface MsgUpdateMinGasPricesResponse {
}
/** MsgUpdateAdmin is a message to update the opchild admin address */
export interface MsgUpdateAdmin {
    /**
     * authority is the address that controls the module
     * (defaults to x/opchild unless overwritten).
     */
    authority: string;
    newAdmin: string;
}
/** MsgUpdateAdminResponse returns the update result data */
export interface MsgUpdateAdminResponse {
}
/** MsgUpdateParams is a message to update parameters */
export interface MsgUpdateParams {
    /**
     * authority is the address that controls the module
     * (defaults to x/opchild unless overwritten).
     */
    authority: string;
    /** params are the arbitrary parameters to be updated. */
    params?: Params | undefined;
}
/** MsgUpdateParamsResponse returns parameter update result data */
export interface MsgUpdateParamsResponse {
}
/**
 * MsgSpendFeePool is a message to withdraw collected fees from the module
 * account to the recipient address.
 */
export interface MsgSpendFeePool {
    /**
     * authority is the address that controls the module
     * (defaults to x/opchild unless overwritten).
     */
    authority: string;
    /** recipient is address to receive the coins. */
    recipient: string;
    /** the coin amount to spend. */
    amount: Coin[];
}
/** MsgSpendFeePoolResponse returns deposit result data */
export interface MsgSpendFeePoolResponse {
}
/** MsgUpdateOracle is a message to update oracle prices which contains L1 extended commits for oracle. */
export interface MsgUpdateOracle {
    /** the sender address */
    sender: string;
    /** height is the height of l1 which is including the oracle message */
    height: bigint;
    /** / data is oracle votes bytes. */
    data: Uint8Array;
}
/** MsgUpdateOracleResponse returns oracle update result data */
export interface MsgUpdateOracleResponse {
}
/** MsgRegisterMigrationInfo is a message to register the migration information. */
export interface MsgRegisterMigrationInfo {
    /** the authority address */
    authority: string;
    /** migration_info is the migration information to be registered. */
    migrationInfo?: MigrationInfo | undefined;
}
/** MsgRegisterMigrationInfoResponse returns the registration result data */
export interface MsgRegisterMigrationInfoResponse {
}
/** MsgMigrateToken is a message to migrate the origin OP token to registered IBC token. */
export interface MsgMigrateToken {
    /** the sender address */
    sender: string;
    /** amount is the coin amount to migrate. */
    amount?: Coin | undefined;
}
/** MsgMigrateTokenResponse returns the migration result data */
export interface MsgMigrateTokenResponse {
}
export declare const MsgExecuteMessages: MessageFns<MsgExecuteMessages>;
export declare const MsgExecuteMessagesResponse: MessageFns<MsgExecuteMessagesResponse>;
export declare const MsgSetBridgeInfo: MessageFns<MsgSetBridgeInfo>;
export declare const MsgSetBridgeInfoResponse: MessageFns<MsgSetBridgeInfoResponse>;
export declare const MsgFinalizeTokenDeposit: MessageFns<MsgFinalizeTokenDeposit>;
export declare const MsgFinalizeTokenDepositResponse: MessageFns<MsgFinalizeTokenDepositResponse>;
export declare const MsgInitiateTokenWithdrawal: MessageFns<MsgInitiateTokenWithdrawal>;
export declare const MsgInitiateTokenWithdrawalResponse: MessageFns<MsgInitiateTokenWithdrawalResponse>;
export declare const MsgUpdateSequencer: MessageFns<MsgUpdateSequencer>;
export declare const MsgUpdateSequencerResponse: MessageFns<MsgUpdateSequencerResponse>;
export declare const MsgAddAttestor: MessageFns<MsgAddAttestor>;
export declare const MsgAddAttestorResponse: MessageFns<MsgAddAttestorResponse>;
export declare const MsgRemoveAttestor: MessageFns<MsgRemoveAttestor>;
export declare const MsgRemoveAttestorResponse: MessageFns<MsgRemoveAttestorResponse>;
export declare const MsgAddFeeWhitelistAddresses: MessageFns<MsgAddFeeWhitelistAddresses>;
export declare const MsgAddFeeWhitelistAddressesResponse: MessageFns<MsgAddFeeWhitelistAddressesResponse>;
export declare const MsgRemoveFeeWhitelistAddresses: MessageFns<MsgRemoveFeeWhitelistAddresses>;
export declare const MsgRemoveFeeWhitelistAddressesResponse: MessageFns<MsgRemoveFeeWhitelistAddressesResponse>;
export declare const MsgAddBridgeExecutor: MessageFns<MsgAddBridgeExecutor>;
export declare const MsgAddBridgeExecutorResponse: MessageFns<MsgAddBridgeExecutorResponse>;
export declare const MsgRemoveBridgeExecutor: MessageFns<MsgRemoveBridgeExecutor>;
export declare const MsgRemoveBridgeExecutorResponse: MessageFns<MsgRemoveBridgeExecutorResponse>;
export declare const MsgUpdateMinGasPrices: MessageFns<MsgUpdateMinGasPrices>;
export declare const MsgUpdateMinGasPricesResponse: MessageFns<MsgUpdateMinGasPricesResponse>;
export declare const MsgUpdateAdmin: MessageFns<MsgUpdateAdmin>;
export declare const MsgUpdateAdminResponse: MessageFns<MsgUpdateAdminResponse>;
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse>;
export declare const MsgSpendFeePool: MessageFns<MsgSpendFeePool>;
export declare const MsgSpendFeePoolResponse: MessageFns<MsgSpendFeePoolResponse>;
export declare const MsgUpdateOracle: MessageFns<MsgUpdateOracle>;
export declare const MsgUpdateOracleResponse: MessageFns<MsgUpdateOracleResponse>;
export declare const MsgRegisterMigrationInfo: MessageFns<MsgRegisterMigrationInfo>;
export declare const MsgRegisterMigrationInfoResponse: MessageFns<MsgRegisterMigrationInfoResponse>;
export declare const MsgMigrateToken: MessageFns<MsgMigrateToken>;
export declare const MsgMigrateTokenResponse: MessageFns<MsgMigrateTokenResponse>;
/** Msg defines the rollup Msg service. */
export interface Msg {
    /** ExecuteMessages defines a rpc handler method for MsgExecuteMessages. */
    ExecuteMessages(request: DeepPartial<MsgExecuteMessages>, metadata?: grpc.Metadata): Promise<MsgExecuteMessagesResponse>;
    /** SetBridgeInfo defines a rpc handler method for MsgSetBridgeInfo. */
    SetBridgeInfo(request: DeepPartial<MsgSetBridgeInfo>, metadata?: grpc.Metadata): Promise<MsgSetBridgeInfoResponse>;
    /** FinalizeTokenDeposit defines a rpc handler method for MsgFinalizeTokenDeposit. */
    FinalizeTokenDeposit(request: DeepPartial<MsgFinalizeTokenDeposit>, metadata?: grpc.Metadata): Promise<MsgFinalizeTokenDepositResponse>;
    /** InitiateTokenWithdrawal defines a user facing l2 => l1 token transfer interface. */
    InitiateTokenWithdrawal(request: DeepPartial<MsgInitiateTokenWithdrawal>, metadata?: grpc.Metadata): Promise<MsgInitiateTokenWithdrawalResponse>;
    /** UpdateSequencer defines a rpc handler method for MsgUpdateSequencer. */
    UpdateSequencer(request: DeepPartial<MsgUpdateSequencer>, metadata?: grpc.Metadata): Promise<MsgUpdateSequencerResponse>;
    /** AddAttestor defines a rpc handler method for MsgAddAttestor. */
    AddAttestor(request: DeepPartial<MsgAddAttestor>, metadata?: grpc.Metadata): Promise<MsgAddAttestorResponse>;
    /** RemoveAttestor defines a rpc handler method for MsgRemoveAttestor. */
    RemoveAttestor(request: DeepPartial<MsgRemoveAttestor>, metadata?: grpc.Metadata): Promise<MsgRemoveAttestorResponse>;
    /** AddFeeWhitelistAddresses defines an authorized operation for adding addresses to x/opchild fee whitelist. */
    AddFeeWhitelistAddresses(request: DeepPartial<MsgAddFeeWhitelistAddresses>, metadata?: grpc.Metadata): Promise<MsgAddFeeWhitelistAddressesResponse>;
    /**
     * RemoveFeeWhitelistAddresses defines an authorized operation for removing addresses from x/opchild
     * fee whitelist.
     */
    RemoveFeeWhitelistAddresses(request: DeepPartial<MsgRemoveFeeWhitelistAddresses>, metadata?: grpc.Metadata): Promise<MsgRemoveFeeWhitelistAddressesResponse>;
    /** AddBridgeExecutor defines an authorized operation for adding addresses to x/opchild bridge executors */
    AddBridgeExecutor(request: DeepPartial<MsgAddBridgeExecutor>, metadata?: grpc.Metadata): Promise<MsgAddBridgeExecutorResponse>;
    /**
     * RemoveBridgeExecutor defines an authorized operation for removing addresses from x/opchild
     * bridge executors.
     */
    RemoveBridgeExecutor(request: DeepPartial<MsgRemoveBridgeExecutor>, metadata?: grpc.Metadata): Promise<MsgRemoveBridgeExecutorResponse>;
    /** UpdateMinGasPrices defines an authorized operation for updating the min gas prices parameter */
    UpdateMinGasPrices(request: DeepPartial<MsgUpdateMinGasPrices>, metadata?: grpc.Metadata): Promise<MsgUpdateMinGasPricesResponse>;
    /** UpdateAdmin defines an authorized operation for updating the x/opchild admin */
    UpdateAdmin(request: DeepPartial<MsgUpdateAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateAdminResponse>;
    /**
     * UpdateParams defines an operation for updating the
     * x/opchild module parameters.
     */
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    /** SpendFeePool defines an operation that spend fee pool to a recipient. */
    SpendFeePool(request: DeepPartial<MsgSpendFeePool>, metadata?: grpc.Metadata): Promise<MsgSpendFeePoolResponse>;
    /** UpdateOracle defines an operation that update oracle prices. */
    UpdateOracle(request: DeepPartial<MsgUpdateOracle>, metadata?: grpc.Metadata): Promise<MsgUpdateOracleResponse>;
    /** RegisterMigrationInfo defines an operation that register the migration information. */
    RegisterMigrationInfo(request: DeepPartial<MsgRegisterMigrationInfo>, metadata?: grpc.Metadata): Promise<MsgRegisterMigrationInfoResponse>;
    /** MigrateToken defines an operation that migrate the origin OP token to registered IBC token. */
    MigrateToken(request: DeepPartial<MsgMigrateToken>, metadata?: grpc.Metadata): Promise<MsgMigrateTokenResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ExecuteMessages(request: DeepPartial<MsgExecuteMessages>, metadata?: grpc.Metadata): Promise<MsgExecuteMessagesResponse>;
    SetBridgeInfo(request: DeepPartial<MsgSetBridgeInfo>, metadata?: grpc.Metadata): Promise<MsgSetBridgeInfoResponse>;
    FinalizeTokenDeposit(request: DeepPartial<MsgFinalizeTokenDeposit>, metadata?: grpc.Metadata): Promise<MsgFinalizeTokenDepositResponse>;
    InitiateTokenWithdrawal(request: DeepPartial<MsgInitiateTokenWithdrawal>, metadata?: grpc.Metadata): Promise<MsgInitiateTokenWithdrawalResponse>;
    UpdateSequencer(request: DeepPartial<MsgUpdateSequencer>, metadata?: grpc.Metadata): Promise<MsgUpdateSequencerResponse>;
    AddAttestor(request: DeepPartial<MsgAddAttestor>, metadata?: grpc.Metadata): Promise<MsgAddAttestorResponse>;
    RemoveAttestor(request: DeepPartial<MsgRemoveAttestor>, metadata?: grpc.Metadata): Promise<MsgRemoveAttestorResponse>;
    AddFeeWhitelistAddresses(request: DeepPartial<MsgAddFeeWhitelistAddresses>, metadata?: grpc.Metadata): Promise<MsgAddFeeWhitelistAddressesResponse>;
    RemoveFeeWhitelistAddresses(request: DeepPartial<MsgRemoveFeeWhitelistAddresses>, metadata?: grpc.Metadata): Promise<MsgRemoveFeeWhitelistAddressesResponse>;
    AddBridgeExecutor(request: DeepPartial<MsgAddBridgeExecutor>, metadata?: grpc.Metadata): Promise<MsgAddBridgeExecutorResponse>;
    RemoveBridgeExecutor(request: DeepPartial<MsgRemoveBridgeExecutor>, metadata?: grpc.Metadata): Promise<MsgRemoveBridgeExecutorResponse>;
    UpdateMinGasPrices(request: DeepPartial<MsgUpdateMinGasPrices>, metadata?: grpc.Metadata): Promise<MsgUpdateMinGasPricesResponse>;
    UpdateAdmin(request: DeepPartial<MsgUpdateAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateAdminResponse>;
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    SpendFeePool(request: DeepPartial<MsgSpendFeePool>, metadata?: grpc.Metadata): Promise<MsgSpendFeePoolResponse>;
    UpdateOracle(request: DeepPartial<MsgUpdateOracle>, metadata?: grpc.Metadata): Promise<MsgUpdateOracleResponse>;
    RegisterMigrationInfo(request: DeepPartial<MsgRegisterMigrationInfo>, metadata?: grpc.Metadata): Promise<MsgRegisterMigrationInfoResponse>;
    MigrateToken(request: DeepPartial<MsgMigrateToken>, metadata?: grpc.Metadata): Promise<MsgMigrateTokenResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgExecuteMessagesDesc: UnaryMethodDefinitionish;
export declare const MsgSetBridgeInfoDesc: UnaryMethodDefinitionish;
export declare const MsgFinalizeTokenDepositDesc: UnaryMethodDefinitionish;
export declare const MsgInitiateTokenWithdrawalDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateSequencerDesc: UnaryMethodDefinitionish;
export declare const MsgAddAttestorDesc: UnaryMethodDefinitionish;
export declare const MsgRemoveAttestorDesc: UnaryMethodDefinitionish;
export declare const MsgAddFeeWhitelistAddressesDesc: UnaryMethodDefinitionish;
export declare const MsgRemoveFeeWhitelistAddressesDesc: UnaryMethodDefinitionish;
export declare const MsgAddBridgeExecutorDesc: UnaryMethodDefinitionish;
export declare const MsgRemoveBridgeExecutorDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateMinGasPricesDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateAdminDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateParamsDesc: UnaryMethodDefinitionish;
export declare const MsgSpendFeePoolDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateOracleDesc: UnaryMethodDefinitionish;
export declare const MsgRegisterMigrationInfoDesc: UnaryMethodDefinitionish;
export declare const MsgMigrateTokenDesc: UnaryMethodDefinitionish;
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
