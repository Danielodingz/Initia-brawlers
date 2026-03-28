import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { ModuleVersion, Plan } from "./upgrade";
export declare const protobufPackage = "cosmos.upgrade.v1beta1";
/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequest {
}
/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponse {
    /** plan is the current upgrade plan. */
    plan?: Plan | undefined;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequest {
    /** name is the name of the applied plan to query for. */
    name: string;
}
/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponse {
    /** height is the block height at which the plan was applied. */
    height: bigint;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 *
 * @deprecated
 */
export interface QueryUpgradedConsensusStateRequest {
    /**
     * last height of the current chain must be sent in request
     * as this is the height under which next consensus state is stored
     */
    lastHeight: bigint;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 *
 * @deprecated
 */
export interface QueryUpgradedConsensusStateResponse {
    /** Since: cosmos-sdk 0.43 */
    upgradedConsensusState: Uint8Array;
}
/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsRequest {
    /**
     * module_name is a field to query a specific module
     * consensus version from state. Leaving this empty will
     * fetch the full list of module versions from state
     */
    moduleName: string;
}
/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsResponse {
    /** module_versions is a list of module names with their consensus versions. */
    moduleVersions: ModuleVersion[];
}
/**
 * QueryAuthorityRequest is the request type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityRequest {
}
/**
 * QueryAuthorityResponse is the response type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityResponse {
    address: string;
}
export declare const QueryCurrentPlanRequest: MessageFns<QueryCurrentPlanRequest>;
export declare const QueryCurrentPlanResponse: MessageFns<QueryCurrentPlanResponse>;
export declare const QueryAppliedPlanRequest: MessageFns<QueryAppliedPlanRequest>;
export declare const QueryAppliedPlanResponse: MessageFns<QueryAppliedPlanResponse>;
export declare const QueryUpgradedConsensusStateRequest: MessageFns<QueryUpgradedConsensusStateRequest>;
export declare const QueryUpgradedConsensusStateResponse: MessageFns<QueryUpgradedConsensusStateResponse>;
export declare const QueryModuleVersionsRequest: MessageFns<QueryModuleVersionsRequest>;
export declare const QueryModuleVersionsResponse: MessageFns<QueryModuleVersionsResponse>;
export declare const QueryAuthorityRequest: MessageFns<QueryAuthorityRequest>;
export declare const QueryAuthorityResponse: MessageFns<QueryAuthorityResponse>;
/** Query defines the gRPC upgrade querier service. */
export interface Query {
    /** CurrentPlan queries the current upgrade plan. */
    CurrentPlan(request: DeepPartial<QueryCurrentPlanRequest>, metadata?: grpc.Metadata): Promise<QueryCurrentPlanResponse>;
    /** AppliedPlan queries a previously applied upgrade plan by its name. */
    AppliedPlan(request: DeepPartial<QueryAppliedPlanRequest>, metadata?: grpc.Metadata): Promise<QueryAppliedPlanResponse>;
    /**
     * UpgradedConsensusState queries the consensus state that will serve
     * as a trusted kernel for the next version of this chain. It will only be
     * stored at the last height of this chain.
     * UpgradedConsensusState RPC not supported with legacy querier
     * This rpc is deprecated now that IBC has its own replacement
     * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
     *
     * @deprecated
     */
    UpgradedConsensusState(request: DeepPartial<QueryUpgradedConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedConsensusStateResponse>;
    /**
     * ModuleVersions queries the list of module versions from state.
     *
     * Since: cosmos-sdk 0.43
     */
    ModuleVersions(request: DeepPartial<QueryModuleVersionsRequest>, metadata?: grpc.Metadata): Promise<QueryModuleVersionsResponse>;
    /**
     * Returns the account with authority to conduct upgrades
     *
     * Since: cosmos-sdk 0.46
     */
    Authority(request: DeepPartial<QueryAuthorityRequest>, metadata?: grpc.Metadata): Promise<QueryAuthorityResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    CurrentPlan(request: DeepPartial<QueryCurrentPlanRequest>, metadata?: grpc.Metadata): Promise<QueryCurrentPlanResponse>;
    AppliedPlan(request: DeepPartial<QueryAppliedPlanRequest>, metadata?: grpc.Metadata): Promise<QueryAppliedPlanResponse>;
    UpgradedConsensusState(request: DeepPartial<QueryUpgradedConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedConsensusStateResponse>;
    ModuleVersions(request: DeepPartial<QueryModuleVersionsRequest>, metadata?: grpc.Metadata): Promise<QueryModuleVersionsResponse>;
    Authority(request: DeepPartial<QueryAuthorityRequest>, metadata?: grpc.Metadata): Promise<QueryAuthorityResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryCurrentPlanDesc: UnaryMethodDefinitionish;
export declare const QueryAppliedPlanDesc: UnaryMethodDefinitionish;
export declare const QueryUpgradedConsensusStateDesc: UnaryMethodDefinitionish;
export declare const QueryModuleVersionsDesc: UnaryMethodDefinitionish;
export declare const QueryAuthorityDesc: UnaryMethodDefinitionish;
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
