import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { CommissionRates, Description, Params } from "./staking";
export declare const protobufPackage = "initia.mstaking.v1";
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidator {
    description?: Description | undefined;
    commission?: CommissionRates | undefined;
    validatorAddress: string;
    pubkey?: Any | undefined;
    amount: Coin[];
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponse {
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidator {
    description?: Description | undefined;
    validatorAddress: string;
    /**
     * We pass a reference to the new commission rate and min self delegation as
     * it's not mandatory to update. If not updated, the deserialized rate will be
     * zero with no way to distinguish if an update was intended.
     * REF: #2373
     */
    commissionRate: string;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponse {
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount: Coin[];
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponse {
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegate {
    delegatorAddress: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
    amount: Coin[];
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponse {
    completionTime?: Date | undefined;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount: Coin[];
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponse {
    completionTime?: Date | undefined;
    /**
     * amount returns the amount of undelegated coins
     *
     * Since: cosmos-sdk 0.50
     */
    amount: Coin[];
}
/** MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator */
export interface MsgCancelUnbondingDelegation {
    delegatorAddress: string;
    validatorAddress: string;
    /** amount is always less than or equal to unbonding delegation entry balance */
    amount: Coin[];
    /** creation_height is the height which the unbonding took place. */
    creationHeight: bigint;
}
/** MsgCancelUnbondingDelegationResponse */
export interface MsgCancelUnbondingDelegationResponse {
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/staking parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params | undefined;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export declare const MsgCreateValidator: MessageFns<MsgCreateValidator>;
export declare const MsgCreateValidatorResponse: MessageFns<MsgCreateValidatorResponse>;
export declare const MsgEditValidator: MessageFns<MsgEditValidator>;
export declare const MsgEditValidatorResponse: MessageFns<MsgEditValidatorResponse>;
export declare const MsgDelegate: MessageFns<MsgDelegate>;
export declare const MsgDelegateResponse: MessageFns<MsgDelegateResponse>;
export declare const MsgBeginRedelegate: MessageFns<MsgBeginRedelegate>;
export declare const MsgBeginRedelegateResponse: MessageFns<MsgBeginRedelegateResponse>;
export declare const MsgUndelegate: MessageFns<MsgUndelegate>;
export declare const MsgUndelegateResponse: MessageFns<MsgUndelegateResponse>;
export declare const MsgCancelUnbondingDelegation: MessageFns<MsgCancelUnbondingDelegation>;
export declare const MsgCancelUnbondingDelegationResponse: MessageFns<MsgCancelUnbondingDelegationResponse>;
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse>;
/** Msg defines the staking Msg service. */
export interface Msg {
    /** CreateValidator defines a method for creating a new validator. */
    CreateValidator(request: DeepPartial<MsgCreateValidator>, metadata?: grpc.Metadata): Promise<MsgCreateValidatorResponse>;
    /** EditValidator defines a method for editing an existing validator. */
    EditValidator(request: DeepPartial<MsgEditValidator>, metadata?: grpc.Metadata): Promise<MsgEditValidatorResponse>;
    /**
     * Delegate defines a method for performing a delegation of coins
     * from a delegator to a validator.
     */
    Delegate(request: DeepPartial<MsgDelegate>, metadata?: grpc.Metadata): Promise<MsgDelegateResponse>;
    /**
     * BeginRedelegate defines a method for performing a redelegation
     * of coins from a delegator and source validator to a destination validator.
     */
    BeginRedelegate(request: DeepPartial<MsgBeginRedelegate>, metadata?: grpc.Metadata): Promise<MsgBeginRedelegateResponse>;
    /**
     * Undelegate defines a method for performing an undelegation from a
     * delegate and a validator.
     */
    Undelegate(request: DeepPartial<MsgUndelegate>, metadata?: grpc.Metadata): Promise<MsgUndelegateResponse>;
    /**
     * CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
     * and delegate back to previous validator.
     */
    CancelUnbondingDelegation(request: DeepPartial<MsgCancelUnbondingDelegation>, metadata?: grpc.Metadata): Promise<MsgCancelUnbondingDelegationResponse>;
    /**
     * UpdateParams defines an operation for updating the x/staking module
     * parameters.
     */
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateValidator(request: DeepPartial<MsgCreateValidator>, metadata?: grpc.Metadata): Promise<MsgCreateValidatorResponse>;
    EditValidator(request: DeepPartial<MsgEditValidator>, metadata?: grpc.Metadata): Promise<MsgEditValidatorResponse>;
    Delegate(request: DeepPartial<MsgDelegate>, metadata?: grpc.Metadata): Promise<MsgDelegateResponse>;
    BeginRedelegate(request: DeepPartial<MsgBeginRedelegate>, metadata?: grpc.Metadata): Promise<MsgBeginRedelegateResponse>;
    Undelegate(request: DeepPartial<MsgUndelegate>, metadata?: grpc.Metadata): Promise<MsgUndelegateResponse>;
    CancelUnbondingDelegation(request: DeepPartial<MsgCancelUnbondingDelegation>, metadata?: grpc.Metadata): Promise<MsgCancelUnbondingDelegationResponse>;
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgCreateValidatorDesc: UnaryMethodDefinitionish;
export declare const MsgEditValidatorDesc: UnaryMethodDefinitionish;
export declare const MsgDelegateDesc: UnaryMethodDefinitionish;
export declare const MsgBeginRedelegateDesc: UnaryMethodDefinitionish;
export declare const MsgUndelegateDesc: UnaryMethodDefinitionish;
export declare const MsgCancelUnbondingDelegationDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateParamsDesc: UnaryMethodDefinitionish;
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
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
