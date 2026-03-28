import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Permissions } from "./types";
export declare const protobufPackage = "cosmos.circuit.v1";
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker request type. */
export interface MsgAuthorizeCircuitBreaker {
    /**
     * granter is the granter of the circuit breaker permissions and must have
     * LEVEL_SUPER_ADMIN.
     */
    granter: string;
    /** grantee is the account authorized with the provided permissions. */
    grantee: string;
    /**
     * permissions are the circuit breaker permissions that the grantee receives.
     * These will overwrite any existing permissions. LEVEL_NONE_UNSPECIFIED can
     * be specified to revoke all permissions.
     */
    permissions?: Permissions | undefined;
}
/** MsgAuthorizeCircuitBreakerResponse defines the Msg/AuthorizeCircuitBreaker response type. */
export interface MsgAuthorizeCircuitBreakerResponse {
    success: boolean;
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker request type. */
export interface MsgTripCircuitBreaker {
    /** authority is the account authorized to trip the circuit breaker. */
    authority: string;
    /**
     * msg_type_urls specifies a list of type URLs to immediately stop processing.
     * IF IT IS LEFT EMPTY, ALL MSG PROCESSING WILL STOP IMMEDIATELY.
     * This value is validated against the authority's permissions and if the
     * authority does not have permissions to trip the specified msg type URLs
     * (or all URLs), the operation will fail.
     */
    msgTypeUrls: string[];
}
/** MsgTripCircuitBreakerResponse defines the Msg/TripCircuitBreaker response type. */
export interface MsgTripCircuitBreakerResponse {
    success: boolean;
}
/** MsgResetCircuitBreaker defines the Msg/ResetCircuitBreaker request type. */
export interface MsgResetCircuitBreaker {
    /** authority is the account authorized to trip or reset the circuit breaker. */
    authority: string;
    /**
     * msg_type_urls specifies a list of Msg type URLs to resume processing. If
     * it is left empty all Msg processing for type URLs that the account is
     * authorized to trip will resume.
     */
    msgTypeUrls: string[];
}
/** MsgResetCircuitBreakerResponse defines the Msg/ResetCircuitBreaker response type. */
export interface MsgResetCircuitBreakerResponse {
    success: boolean;
}
export declare const MsgAuthorizeCircuitBreaker: MessageFns<MsgAuthorizeCircuitBreaker>;
export declare const MsgAuthorizeCircuitBreakerResponse: MessageFns<MsgAuthorizeCircuitBreakerResponse>;
export declare const MsgTripCircuitBreaker: MessageFns<MsgTripCircuitBreaker>;
export declare const MsgTripCircuitBreakerResponse: MessageFns<MsgTripCircuitBreakerResponse>;
export declare const MsgResetCircuitBreaker: MessageFns<MsgResetCircuitBreaker>;
export declare const MsgResetCircuitBreakerResponse: MessageFns<MsgResetCircuitBreakerResponse>;
/** Msg defines the circuit Msg service. */
export interface Msg {
    /**
     * AuthorizeCircuitBreaker allows a super-admin to grant (or revoke) another
     * account's circuit breaker permissions.
     */
    AuthorizeCircuitBreaker(request: DeepPartial<MsgAuthorizeCircuitBreaker>, metadata?: grpc.Metadata): Promise<MsgAuthorizeCircuitBreakerResponse>;
    /** TripCircuitBreaker pauses processing of Msg's in the state machine. */
    TripCircuitBreaker(request: DeepPartial<MsgTripCircuitBreaker>, metadata?: grpc.Metadata): Promise<MsgTripCircuitBreakerResponse>;
    /**
     * ResetCircuitBreaker resumes processing of Msg's in the state machine that
     * have been been paused using TripCircuitBreaker.
     */
    ResetCircuitBreaker(request: DeepPartial<MsgResetCircuitBreaker>, metadata?: grpc.Metadata): Promise<MsgResetCircuitBreakerResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    AuthorizeCircuitBreaker(request: DeepPartial<MsgAuthorizeCircuitBreaker>, metadata?: grpc.Metadata): Promise<MsgAuthorizeCircuitBreakerResponse>;
    TripCircuitBreaker(request: DeepPartial<MsgTripCircuitBreaker>, metadata?: grpc.Metadata): Promise<MsgTripCircuitBreakerResponse>;
    ResetCircuitBreaker(request: DeepPartial<MsgResetCircuitBreaker>, metadata?: grpc.Metadata): Promise<MsgResetCircuitBreakerResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgAuthorizeCircuitBreakerDesc: UnaryMethodDefinitionish;
export declare const MsgTripCircuitBreakerDesc: UnaryMethodDefinitionish;
export declare const MsgResetCircuitBreakerDesc: UnaryMethodDefinitionish;
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
