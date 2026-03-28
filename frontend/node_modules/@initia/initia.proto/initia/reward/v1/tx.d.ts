import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./types";
export declare const protobufPackage = "initia.reward.v1";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/reward parameters to update.
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
/** MsgFundCommunityPool is the Msg/FundCommunityPool request type. */
export interface MsgFundCommunityPool {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /** amount is the amount to fund the community pool. */
    amount: Coin[];
}
/**
 * MsgFundCommunityPoolResponse defines the response structure for executing a
 * MsgFundCommunityPool message.
 */
export interface MsgFundCommunityPoolResponse {
}
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse>;
export declare const MsgFundCommunityPool: MessageFns<MsgFundCommunityPool>;
export declare const MsgFundCommunityPoolResponse: MessageFns<MsgFundCommunityPoolResponse>;
/** Msg defines the reward Msg service. */
export interface Msg {
    /** UpdateParams defines a rpc handler method for MsgUpdateParams. */
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    /** FundCommunityPool defines a rpc handler method for MsgFundCommunityPool. */
    FundCommunityPool(request: DeepPartial<MsgFundCommunityPool>, metadata?: grpc.Metadata): Promise<MsgFundCommunityPoolResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    FundCommunityPool(request: DeepPartial<MsgFundCommunityPool>, metadata?: grpc.Metadata): Promise<MsgFundCommunityPoolResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgUpdateParamsDesc: UnaryMethodDefinitionish;
export declare const MsgFundCommunityPoolDesc: UnaryMethodDefinitionish;
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
