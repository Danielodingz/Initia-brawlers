import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
export declare const protobufPackage = "miniwasm.tokenfactory.v1";
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenom {
    sender: string;
    /** subdenom can be up to 44 "alphanumeric" characters long. */
    subdenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponse {
    newTokenDenom: string;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.
 * Only the admin of the token factory denom has permission to mint unless
 * the denom does not have any admin.
 */
export interface MsgMint {
    sender: string;
    amount?: Coin | undefined;
    mintToAddress: string;
}
/**
 * MsgMintResponse defines the response structure for an executed
 * MsgMint message.
 */
export interface MsgMintResponse {
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.
 * Only the admin of the token factory denom has permission to burn unless
 * the denom does not have any admin.
 */
export interface MsgBurn {
    sender: string;
    amount?: Coin | undefined;
}
/**
 * MsgBurnResponse defines the response structure for an executed
 * MsgBurn message.
 */
export interface MsgBurnResponse {
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdmin {
    sender: string;
    denom: string;
    newAdmin: string;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponse {
}
/**
 * MsgSetBeforeSendHook is the sdk.Msg type for allowing an admin account to
 * assign a CosmWasm contract to call with a BeforeSend hook
 */
export interface MsgSetBeforeSendHook {
    sender: string;
    denom: string;
    cosmwasmAddress: string;
}
/**
 * MsgSetBeforeSendHookResponse defines the response structure for an executed
 * MsgSetBeforeSendHook message.
 */
export interface MsgSetBeforeSendHookResponse {
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadata {
    sender: string;
    metadata?: Metadata | undefined;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponse {
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /**
     * authority is the address that controls the module
     * (defaults to x/gov unless overwritten).
     */
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
export declare const MsgCreateDenom: MessageFns<MsgCreateDenom>;
export declare const MsgCreateDenomResponse: MessageFns<MsgCreateDenomResponse>;
export declare const MsgMint: MessageFns<MsgMint>;
export declare const MsgMintResponse: MessageFns<MsgMintResponse>;
export declare const MsgBurn: MessageFns<MsgBurn>;
export declare const MsgBurnResponse: MessageFns<MsgBurnResponse>;
export declare const MsgChangeAdmin: MessageFns<MsgChangeAdmin>;
export declare const MsgChangeAdminResponse: MessageFns<MsgChangeAdminResponse>;
export declare const MsgSetBeforeSendHook: MessageFns<MsgSetBeforeSendHook>;
export declare const MsgSetBeforeSendHookResponse: MessageFns<MsgSetBeforeSendHookResponse>;
export declare const MsgSetDenomMetadata: MessageFns<MsgSetDenomMetadata>;
export declare const MsgSetDenomMetadataResponse: MessageFns<MsgSetDenomMetadataResponse>;
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse>;
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
    /** CreateDenom defines a gRPC service method for creating a new denom. */
    CreateDenom(request: DeepPartial<MsgCreateDenom>, metadata?: grpc.Metadata): Promise<MsgCreateDenomResponse>;
    /** Mint defines a gRPC service method for minting more of a token. */
    Mint(request: DeepPartial<MsgMint>, metadata?: grpc.Metadata): Promise<MsgMintResponse>;
    /** Burn defines a gRPC service method for burning a token. */
    Burn(request: DeepPartial<MsgBurn>, metadata?: grpc.Metadata): Promise<MsgBurnResponse>;
    /**
     * ChangeAdmin defines a gRPC service method for changing the admin of a
     * denom.
     */
    ChangeAdmin(request: DeepPartial<MsgChangeAdmin>, metadata?: grpc.Metadata): Promise<MsgChangeAdminResponse>;
    /**
     * SetDenomMetadata defines a gRPC service method for setting the metadata of
     * a denom.
     */
    SetDenomMetadata(request: DeepPartial<MsgSetDenomMetadata>, metadata?: grpc.Metadata): Promise<MsgSetDenomMetadataResponse>;
    /**
     * SetBeforeSendHook defines a gRPC service method for setting the before send
     * hook of a denom.
     */
    SetBeforeSendHook(request: DeepPartial<MsgSetBeforeSendHook>, metadata?: grpc.Metadata): Promise<MsgSetBeforeSendHookResponse>;
    /**
     * UpdateParams defines an operation for updating the x/tokenfactory module
     * parameters.
     */
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateDenom(request: DeepPartial<MsgCreateDenom>, metadata?: grpc.Metadata): Promise<MsgCreateDenomResponse>;
    Mint(request: DeepPartial<MsgMint>, metadata?: grpc.Metadata): Promise<MsgMintResponse>;
    Burn(request: DeepPartial<MsgBurn>, metadata?: grpc.Metadata): Promise<MsgBurnResponse>;
    ChangeAdmin(request: DeepPartial<MsgChangeAdmin>, metadata?: grpc.Metadata): Promise<MsgChangeAdminResponse>;
    SetDenomMetadata(request: DeepPartial<MsgSetDenomMetadata>, metadata?: grpc.Metadata): Promise<MsgSetDenomMetadataResponse>;
    SetBeforeSendHook(request: DeepPartial<MsgSetBeforeSendHook>, metadata?: grpc.Metadata): Promise<MsgSetBeforeSendHookResponse>;
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgCreateDenomDesc: UnaryMethodDefinitionish;
export declare const MsgMintDesc: UnaryMethodDefinitionish;
export declare const MsgBurnDesc: UnaryMethodDefinitionish;
export declare const MsgChangeAdminDesc: UnaryMethodDefinitionish;
export declare const MsgSetDenomMetadataDesc: UnaryMethodDefinitionish;
export declare const MsgSetBeforeSendHookDesc: UnaryMethodDefinitionish;
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
