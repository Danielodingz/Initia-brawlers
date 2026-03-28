import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "cosmos.feegrant.v1beta1";
/** Since: cosmos-sdk 0.43 */
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: Any | undefined;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponse {
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponse {
}
/**
 * MsgPruneAllowances prunes expired fee allowances.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowances {
    /** pruner is the address of the user pruning expired allowances. */
    pruner: string;
}
/**
 * MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesResponse {
}
export declare const MsgGrantAllowance: MessageFns<MsgGrantAllowance>;
export declare const MsgGrantAllowanceResponse: MessageFns<MsgGrantAllowanceResponse>;
export declare const MsgRevokeAllowance: MessageFns<MsgRevokeAllowance>;
export declare const MsgRevokeAllowanceResponse: MessageFns<MsgRevokeAllowanceResponse>;
export declare const MsgPruneAllowances: MessageFns<MsgPruneAllowances>;
export declare const MsgPruneAllowancesResponse: MessageFns<MsgPruneAllowancesResponse>;
/** Msg defines the feegrant msg service. */
export interface Msg {
    /**
     * GrantAllowance grants fee allowance to the grantee on the granter's
     * account with the provided expiration time.
     */
    GrantAllowance(request: DeepPartial<MsgGrantAllowance>, metadata?: grpc.Metadata): Promise<MsgGrantAllowanceResponse>;
    /**
     * RevokeAllowance revokes any fee allowance of granter's account that
     * has been granted to the grantee.
     */
    RevokeAllowance(request: DeepPartial<MsgRevokeAllowance>, metadata?: grpc.Metadata): Promise<MsgRevokeAllowanceResponse>;
    /**
     * PruneAllowances prunes expired fee allowances, currently up to 75 at a time.
     *
     * Since cosmos-sdk 0.50
     */
    PruneAllowances(request: DeepPartial<MsgPruneAllowances>, metadata?: grpc.Metadata): Promise<MsgPruneAllowancesResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    GrantAllowance(request: DeepPartial<MsgGrantAllowance>, metadata?: grpc.Metadata): Promise<MsgGrantAllowanceResponse>;
    RevokeAllowance(request: DeepPartial<MsgRevokeAllowance>, metadata?: grpc.Metadata): Promise<MsgRevokeAllowanceResponse>;
    PruneAllowances(request: DeepPartial<MsgPruneAllowances>, metadata?: grpc.Metadata): Promise<MsgPruneAllowancesResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgGrantAllowanceDesc: UnaryMethodDefinitionish;
export declare const MsgRevokeAllowanceDesc: UnaryMethodDefinitionish;
export declare const MsgPruneAllowancesDesc: UnaryMethodDefinitionish;
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
