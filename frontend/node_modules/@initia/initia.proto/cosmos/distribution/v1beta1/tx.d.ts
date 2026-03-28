import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Coin } from "../../base/v1beta1/coin";
import { Params } from "./distribution";
export declare const protobufPackage = "cosmos.distribution.v1beta1";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
    delegatorAddress: string;
    withdrawAddress: string;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 */
export interface MsgSetWithdrawAddressResponse {
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
    delegatorAddress: string;
    validatorAddress: string;
}
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 */
export interface MsgWithdrawDelegatorRewardResponse {
    /** Since: cosmos-sdk 0.46 */
    amount: Coin[];
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
    validatorAddress: string;
}
/**
 * MsgWithdrawValidatorCommissionResponse defines the
 * Msg/WithdrawValidatorCommission response type.
 */
export interface MsgWithdrawValidatorCommissionResponse {
    /** Since: cosmos-sdk 0.46 */
    amount: Coin[];
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
    amount: Coin[];
    depositor: string;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/distribution parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params | undefined;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpend {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    recipient: string;
    amount: Coin[];
}
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpendResponse {
}
/**
 * DepositValidatorRewardsPool defines the request structure to provide
 * additional rewards to delegators from a specific validator.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgDepositValidatorRewardsPool {
    depositor: string;
    validatorAddress: string;
    amount: Coin[];
}
/**
 * MsgDepositValidatorRewardsPoolResponse defines the response to executing a
 * MsgDepositValidatorRewardsPool message.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgDepositValidatorRewardsPoolResponse {
}
export declare const MsgSetWithdrawAddress: MessageFns<MsgSetWithdrawAddress>;
export declare const MsgSetWithdrawAddressResponse: MessageFns<MsgSetWithdrawAddressResponse>;
export declare const MsgWithdrawDelegatorReward: MessageFns<MsgWithdrawDelegatorReward>;
export declare const MsgWithdrawDelegatorRewardResponse: MessageFns<MsgWithdrawDelegatorRewardResponse>;
export declare const MsgWithdrawValidatorCommission: MessageFns<MsgWithdrawValidatorCommission>;
export declare const MsgWithdrawValidatorCommissionResponse: MessageFns<MsgWithdrawValidatorCommissionResponse>;
export declare const MsgFundCommunityPool: MessageFns<MsgFundCommunityPool>;
export declare const MsgFundCommunityPoolResponse: MessageFns<MsgFundCommunityPoolResponse>;
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse>;
export declare const MsgCommunityPoolSpend: MessageFns<MsgCommunityPoolSpend>;
export declare const MsgCommunityPoolSpendResponse: MessageFns<MsgCommunityPoolSpendResponse>;
export declare const MsgDepositValidatorRewardsPool: MessageFns<MsgDepositValidatorRewardsPool>;
export declare const MsgDepositValidatorRewardsPoolResponse: MessageFns<MsgDepositValidatorRewardsPoolResponse>;
/** Msg defines the distribution Msg service. */
export interface Msg {
    /**
     * SetWithdrawAddress defines a method to change the withdraw address
     * for a delegator (or validator self-delegation).
     */
    SetWithdrawAddress(request: DeepPartial<MsgSetWithdrawAddress>, metadata?: grpc.Metadata): Promise<MsgSetWithdrawAddressResponse>;
    /**
     * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     * from a single validator.
     */
    WithdrawDelegatorReward(request: DeepPartial<MsgWithdrawDelegatorReward>, metadata?: grpc.Metadata): Promise<MsgWithdrawDelegatorRewardResponse>;
    /**
     * WithdrawValidatorCommission defines a method to withdraw the
     * full commission to the validator address.
     */
    WithdrawValidatorCommission(request: DeepPartial<MsgWithdrawValidatorCommission>, metadata?: grpc.Metadata): Promise<MsgWithdrawValidatorCommissionResponse>;
    /**
     * FundCommunityPool defines a method to allow an account to directly
     * fund the community pool.
     */
    FundCommunityPool(request: DeepPartial<MsgFundCommunityPool>, metadata?: grpc.Metadata): Promise<MsgFundCommunityPoolResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/distribution
     * module parameters. The authority is defined in the keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    /**
     * CommunityPoolSpend defines a governance operation for sending tokens from
     * the community pool in the x/distribution module to another account, which
     * could be the governance module itself. The authority is defined in the
     * keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    CommunityPoolSpend(request: DeepPartial<MsgCommunityPoolSpend>, metadata?: grpc.Metadata): Promise<MsgCommunityPoolSpendResponse>;
    /**
     * DepositValidatorRewardsPool defines a method to provide additional rewards
     * to delegators to a specific validator.
     *
     * Since: cosmos-sdk 0.50
     */
    DepositValidatorRewardsPool(request: DeepPartial<MsgDepositValidatorRewardsPool>, metadata?: grpc.Metadata): Promise<MsgDepositValidatorRewardsPoolResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SetWithdrawAddress(request: DeepPartial<MsgSetWithdrawAddress>, metadata?: grpc.Metadata): Promise<MsgSetWithdrawAddressResponse>;
    WithdrawDelegatorReward(request: DeepPartial<MsgWithdrawDelegatorReward>, metadata?: grpc.Metadata): Promise<MsgWithdrawDelegatorRewardResponse>;
    WithdrawValidatorCommission(request: DeepPartial<MsgWithdrawValidatorCommission>, metadata?: grpc.Metadata): Promise<MsgWithdrawValidatorCommissionResponse>;
    FundCommunityPool(request: DeepPartial<MsgFundCommunityPool>, metadata?: grpc.Metadata): Promise<MsgFundCommunityPoolResponse>;
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    CommunityPoolSpend(request: DeepPartial<MsgCommunityPoolSpend>, metadata?: grpc.Metadata): Promise<MsgCommunityPoolSpendResponse>;
    DepositValidatorRewardsPool(request: DeepPartial<MsgDepositValidatorRewardsPool>, metadata?: grpc.Metadata): Promise<MsgDepositValidatorRewardsPoolResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgSetWithdrawAddressDesc: UnaryMethodDefinitionish;
export declare const MsgWithdrawDelegatorRewardDesc: UnaryMethodDefinitionish;
export declare const MsgWithdrawValidatorCommissionDesc: UnaryMethodDefinitionish;
export declare const MsgFundCommunityPoolDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateParamsDesc: UnaryMethodDefinitionish;
export declare const MsgCommunityPoolSpendDesc: UnaryMethodDefinitionish;
export declare const MsgDepositValidatorRewardsPoolDesc: UnaryMethodDefinitionish;
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
