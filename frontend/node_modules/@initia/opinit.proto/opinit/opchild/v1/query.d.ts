import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BridgeInfo, MigrationInfo, Params, Validator } from "./types";
export declare const protobufPackage = "opinit.opchild.v1";
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
    /** validators contains all the queried validators. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
    /** validator defines the validator info. */
    validator?: Validator | undefined;
}
/** QueryBridgeInfoRequest is request type for the Query/BridgeInfo RPC method. */
export interface QueryBridgeInfoRequest {
}
/** QueryBridgeInfoResponse is response type for the Query/BridgeInfo RPC method. */
export interface QueryBridgeInfoResponse {
    /** bridge_info holds all the information about the bridge. */
    bridgeInfo?: BridgeInfo | undefined;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params | undefined;
}
/** QueryNextL1SequenceRequest is request type for the Query/NextL1Sequence RPC method. */
export interface QueryNextL1SequenceRequest {
}
/** QueryNextL1SequenceResponse is response type for the Query/NextL1Sequence RPC method. */
export interface QueryNextL1SequenceResponse {
    /** next_l1_sequence holds the next l1 sequence number. */
    nextL1Sequence: bigint;
}
/** QueryNextL2SequenceRequest is request type for the Query/NextL2Sequence RPC method. */
export interface QueryNextL2SequenceRequest {
}
/** QueryNextL2SequenceResponse is response type for the Query/NextL2Sequence RPC method. */
export interface QueryNextL2SequenceResponse {
    /** next_l2_sequence holds the next l2 sequence number. */
    nextL2Sequence: bigint;
}
/** QueryBaseDenomRequest is request type for the Query/BaseDenom RPC method. */
export interface QueryBaseDenomRequest {
    denom: string;
}
/** QueryBaseDenomResponse is response type for the Query/BaseDenom RPC method. */
export interface QueryBaseDenomResponse {
    baseDenom: string;
}
/** QueryMigrationInfoRequest is request type for the Query/MigrationInfo RPC method. */
export interface QueryMigrationInfoRequest {
    denom: string;
}
/** QueryMigrationInfoResponse is response type for the Query/MigrationInfo RPC method. */
export interface QueryMigrationInfoResponse {
    migrationInfo?: MigrationInfo | undefined;
    ibcDenom: string;
}
export declare const QueryValidatorsRequest: MessageFns<QueryValidatorsRequest>;
export declare const QueryValidatorsResponse: MessageFns<QueryValidatorsResponse>;
export declare const QueryValidatorRequest: MessageFns<QueryValidatorRequest>;
export declare const QueryValidatorResponse: MessageFns<QueryValidatorResponse>;
export declare const QueryBridgeInfoRequest: MessageFns<QueryBridgeInfoRequest>;
export declare const QueryBridgeInfoResponse: MessageFns<QueryBridgeInfoResponse>;
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
export declare const QueryNextL1SequenceRequest: MessageFns<QueryNextL1SequenceRequest>;
export declare const QueryNextL1SequenceResponse: MessageFns<QueryNextL1SequenceResponse>;
export declare const QueryNextL2SequenceRequest: MessageFns<QueryNextL2SequenceRequest>;
export declare const QueryNextL2SequenceResponse: MessageFns<QueryNextL2SequenceResponse>;
export declare const QueryBaseDenomRequest: MessageFns<QueryBaseDenomRequest>;
export declare const QueryBaseDenomResponse: MessageFns<QueryBaseDenomResponse>;
export declare const QueryMigrationInfoRequest: MessageFns<QueryMigrationInfoRequest>;
export declare const QueryMigrationInfoResponse: MessageFns<QueryMigrationInfoResponse>;
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Validators queries all validators
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    Validators(request: DeepPartial<QueryValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorsResponse>;
    /** Validator queries validator info for given validator address. */
    Validator(request: DeepPartial<QueryValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorResponse>;
    /** BridgeInfo queries the bridge information. */
    BridgeInfo(request: DeepPartial<QueryBridgeInfoRequest>, metadata?: grpc.Metadata): Promise<QueryBridgeInfoResponse>;
    /** Parameters queries the rollup parameters. */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    /** NextL1Sequence queries the next l1 sequence number. */
    NextL1Sequence(request: DeepPartial<QueryNextL1SequenceRequest>, metadata?: grpc.Metadata): Promise<QueryNextL1SequenceResponse>;
    /** NextL2Sequence queries the next l2 sequence number. */
    NextL2Sequence(request: DeepPartial<QueryNextL2SequenceRequest>, metadata?: grpc.Metadata): Promise<QueryNextL2SequenceResponse>;
    BaseDenom(request: DeepPartial<QueryBaseDenomRequest>, metadata?: grpc.Metadata): Promise<QueryBaseDenomResponse>;
    /** MigrationInfo queries the migration information. */
    MigrationInfo(request: DeepPartial<QueryMigrationInfoRequest>, metadata?: grpc.Metadata): Promise<QueryMigrationInfoResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Validators(request: DeepPartial<QueryValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorsResponse>;
    Validator(request: DeepPartial<QueryValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorResponse>;
    BridgeInfo(request: DeepPartial<QueryBridgeInfoRequest>, metadata?: grpc.Metadata): Promise<QueryBridgeInfoResponse>;
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    NextL1Sequence(request: DeepPartial<QueryNextL1SequenceRequest>, metadata?: grpc.Metadata): Promise<QueryNextL1SequenceResponse>;
    NextL2Sequence(request: DeepPartial<QueryNextL2SequenceRequest>, metadata?: grpc.Metadata): Promise<QueryNextL2SequenceResponse>;
    BaseDenom(request: DeepPartial<QueryBaseDenomRequest>, metadata?: grpc.Metadata): Promise<QueryBaseDenomResponse>;
    MigrationInfo(request: DeepPartial<QueryMigrationInfoRequest>, metadata?: grpc.Metadata): Promise<QueryMigrationInfoResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryValidatorsDesc: UnaryMethodDefinitionish;
export declare const QueryValidatorDesc: UnaryMethodDefinitionish;
export declare const QueryBridgeInfoDesc: UnaryMethodDefinitionish;
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QueryNextL1SequenceDesc: UnaryMethodDefinitionish;
export declare const QueryNextL2SequenceDesc: UnaryMethodDefinitionish;
export declare const QueryBaseDenomDesc: UnaryMethodDefinitionish;
export declare const QueryMigrationInfoDesc: UnaryMethodDefinitionish;
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
