import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { AccessConfig, ContractCodeHistoryEntry, ContractInfo, Model, Params } from "./types";
export declare const protobufPackage = "cosmwasm.wasm.v1";
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequest {
    /** address is the address of the contract to query */
    address: string;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponse {
    /** address is the address of the contract */
    address: string;
    contractInfo?: ContractInfo | undefined;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequest {
    /** address is the address of the contract to query */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponse {
    entries: ContractCodeHistoryEntry[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequest {
    /** grpc-gateway_out does not support Go style CodeID */
    codeId: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponse {
    /** contracts are a set of contract addresses */
    contracts: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequest {
    /** address is the address of the contract */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponse {
    models: Model[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequest {
    /** address is the address of the contract */
    address: string;
    queryData: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponse {
    /** Data contains the raw store data */
    data: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequest {
    /** address is the address of the contract */
    address: string;
    /** QueryData contains the query data passed to the contract */
    queryData: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponse {
    /** Data contains the json data returned from the smart contract */
    data: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequest {
    /** grpc-gateway_out does not support Go style CodeID */
    codeId: bigint;
}
/** QueryCodeInfoRequest is the request type for the Query/CodeInfo RPC method */
export interface QueryCodeInfoRequest {
    /** grpc-gateway_out does not support Go style CodeID */
    codeId: bigint;
}
/** QueryCodeInfoResponse is the response type for the Query/CodeInfo RPC method */
export interface QueryCodeInfoResponse {
    codeId: bigint;
    creator: string;
    checksum: Uint8Array;
    instantiatePermission?: AccessConfig | undefined;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponse {
    /** id for legacy support */
    codeId: bigint;
    creator: string;
    dataHash: Uint8Array;
    instantiatePermission?: AccessConfig | undefined;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponse {
    codeInfo?: CodeInfoResponse | undefined;
    data: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponse {
    codeInfos: CodeInfoResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponse {
    codeIds: bigint[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params | undefined;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequest {
    /** CreatorAddress is the address of contract creator */
    creatorAddress: string;
    /** Pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponse {
    /** ContractAddresses result set */
    contractAddresses: string[];
    /** Pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/**
 * QueryWasmLimitsConfigRequest is the request type for the
 * Query/WasmLimitsConfig RPC method.
 */
export interface QueryWasmLimitsConfigRequest {
}
/**
 * QueryWasmLimitsConfigResponse is the response type for the
 * Query/WasmLimitsConfig RPC method. It contains the JSON encoded limits for
 * static validation of Wasm files.
 */
export interface QueryWasmLimitsConfigResponse {
    config: string;
}
/**
 * QueryBuildAddressRequest is the request type for the Query/BuildAddress RPC
 * method.
 */
export interface QueryBuildAddressRequest {
    /** CodeHash is the hash of the code */
    codeHash: string;
    /** CreatorAddress is the address of the contract instantiator */
    creatorAddress: string;
    /** Salt is a hex encoded salt */
    salt: string;
    /**
     * InitArgs are optional json encoded init args to be used in contract address
     * building if provided
     */
    initArgs: Uint8Array;
}
/**
 * QueryBuildAddressResponse is the response type for the Query/BuildAddress RPC
 * method.
 */
export interface QueryBuildAddressResponse {
    /** Address is the contract address */
    address: string;
}
export declare const QueryContractInfoRequest: MessageFns<QueryContractInfoRequest>;
export declare const QueryContractInfoResponse: MessageFns<QueryContractInfoResponse>;
export declare const QueryContractHistoryRequest: MessageFns<QueryContractHistoryRequest>;
export declare const QueryContractHistoryResponse: MessageFns<QueryContractHistoryResponse>;
export declare const QueryContractsByCodeRequest: MessageFns<QueryContractsByCodeRequest>;
export declare const QueryContractsByCodeResponse: MessageFns<QueryContractsByCodeResponse>;
export declare const QueryAllContractStateRequest: MessageFns<QueryAllContractStateRequest>;
export declare const QueryAllContractStateResponse: MessageFns<QueryAllContractStateResponse>;
export declare const QueryRawContractStateRequest: MessageFns<QueryRawContractStateRequest>;
export declare const QueryRawContractStateResponse: MessageFns<QueryRawContractStateResponse>;
export declare const QuerySmartContractStateRequest: MessageFns<QuerySmartContractStateRequest>;
export declare const QuerySmartContractStateResponse: MessageFns<QuerySmartContractStateResponse>;
export declare const QueryCodeRequest: MessageFns<QueryCodeRequest>;
export declare const QueryCodeInfoRequest: MessageFns<QueryCodeInfoRequest>;
export declare const QueryCodeInfoResponse: MessageFns<QueryCodeInfoResponse>;
export declare const CodeInfoResponse: MessageFns<CodeInfoResponse>;
export declare const QueryCodeResponse: MessageFns<QueryCodeResponse>;
export declare const QueryCodesRequest: MessageFns<QueryCodesRequest>;
export declare const QueryCodesResponse: MessageFns<QueryCodesResponse>;
export declare const QueryPinnedCodesRequest: MessageFns<QueryPinnedCodesRequest>;
export declare const QueryPinnedCodesResponse: MessageFns<QueryPinnedCodesResponse>;
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
export declare const QueryContractsByCreatorRequest: MessageFns<QueryContractsByCreatorRequest>;
export declare const QueryContractsByCreatorResponse: MessageFns<QueryContractsByCreatorResponse>;
export declare const QueryWasmLimitsConfigRequest: MessageFns<QueryWasmLimitsConfigRequest>;
export declare const QueryWasmLimitsConfigResponse: MessageFns<QueryWasmLimitsConfigResponse>;
export declare const QueryBuildAddressRequest: MessageFns<QueryBuildAddressRequest>;
export declare const QueryBuildAddressResponse: MessageFns<QueryBuildAddressResponse>;
/** Query provides defines the gRPC querier service */
export interface Query {
    /** ContractInfo gets the contract meta data */
    ContractInfo(request: DeepPartial<QueryContractInfoRequest>, metadata?: grpc.Metadata): Promise<QueryContractInfoResponse>;
    /** ContractHistory gets the contract code history */
    ContractHistory(request: DeepPartial<QueryContractHistoryRequest>, metadata?: grpc.Metadata): Promise<QueryContractHistoryResponse>;
    /** ContractsByCode lists all smart contracts for a code id */
    ContractsByCode(request: DeepPartial<QueryContractsByCodeRequest>, metadata?: grpc.Metadata): Promise<QueryContractsByCodeResponse>;
    /** AllContractState gets all raw store data for a single contract */
    AllContractState(request: DeepPartial<QueryAllContractStateRequest>, metadata?: grpc.Metadata): Promise<QueryAllContractStateResponse>;
    /** RawContractState gets single key from the raw store data of a contract */
    RawContractState(request: DeepPartial<QueryRawContractStateRequest>, metadata?: grpc.Metadata): Promise<QueryRawContractStateResponse>;
    /** SmartContractState get smart query result from the contract */
    SmartContractState(request: DeepPartial<QuerySmartContractStateRequest>, metadata?: grpc.Metadata): Promise<QuerySmartContractStateResponse>;
    /** Code gets the binary code and metadata for a single wasm code */
    Code(request: DeepPartial<QueryCodeRequest>, metadata?: grpc.Metadata): Promise<QueryCodeResponse>;
    /** Codes gets the metadata for all stored wasm codes */
    Codes(request: DeepPartial<QueryCodesRequest>, metadata?: grpc.Metadata): Promise<QueryCodesResponse>;
    /** CodeInfo gets the metadata for a single wasm code */
    CodeInfo(request: DeepPartial<QueryCodeInfoRequest>, metadata?: grpc.Metadata): Promise<QueryCodeInfoResponse>;
    /** PinnedCodes gets the pinned code ids */
    PinnedCodes(request: DeepPartial<QueryPinnedCodesRequest>, metadata?: grpc.Metadata): Promise<QueryPinnedCodesResponse>;
    /** Params gets the module params */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    /** ContractsByCreator gets the contracts by creator */
    ContractsByCreator(request: DeepPartial<QueryContractsByCreatorRequest>, metadata?: grpc.Metadata): Promise<QueryContractsByCreatorResponse>;
    /**
     * WasmLimitsConfig gets the configured limits for static validation of Wasm
     * files, encoded in JSON.
     */
    WasmLimitsConfig(request: DeepPartial<QueryWasmLimitsConfigRequest>, metadata?: grpc.Metadata): Promise<QueryWasmLimitsConfigResponse>;
    /** BuildAddress builds a contract address */
    BuildAddress(request: DeepPartial<QueryBuildAddressRequest>, metadata?: grpc.Metadata): Promise<QueryBuildAddressResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ContractInfo(request: DeepPartial<QueryContractInfoRequest>, metadata?: grpc.Metadata): Promise<QueryContractInfoResponse>;
    ContractHistory(request: DeepPartial<QueryContractHistoryRequest>, metadata?: grpc.Metadata): Promise<QueryContractHistoryResponse>;
    ContractsByCode(request: DeepPartial<QueryContractsByCodeRequest>, metadata?: grpc.Metadata): Promise<QueryContractsByCodeResponse>;
    AllContractState(request: DeepPartial<QueryAllContractStateRequest>, metadata?: grpc.Metadata): Promise<QueryAllContractStateResponse>;
    RawContractState(request: DeepPartial<QueryRawContractStateRequest>, metadata?: grpc.Metadata): Promise<QueryRawContractStateResponse>;
    SmartContractState(request: DeepPartial<QuerySmartContractStateRequest>, metadata?: grpc.Metadata): Promise<QuerySmartContractStateResponse>;
    Code(request: DeepPartial<QueryCodeRequest>, metadata?: grpc.Metadata): Promise<QueryCodeResponse>;
    Codes(request: DeepPartial<QueryCodesRequest>, metadata?: grpc.Metadata): Promise<QueryCodesResponse>;
    CodeInfo(request: DeepPartial<QueryCodeInfoRequest>, metadata?: grpc.Metadata): Promise<QueryCodeInfoResponse>;
    PinnedCodes(request: DeepPartial<QueryPinnedCodesRequest>, metadata?: grpc.Metadata): Promise<QueryPinnedCodesResponse>;
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    ContractsByCreator(request: DeepPartial<QueryContractsByCreatorRequest>, metadata?: grpc.Metadata): Promise<QueryContractsByCreatorResponse>;
    WasmLimitsConfig(request: DeepPartial<QueryWasmLimitsConfigRequest>, metadata?: grpc.Metadata): Promise<QueryWasmLimitsConfigResponse>;
    BuildAddress(request: DeepPartial<QueryBuildAddressRequest>, metadata?: grpc.Metadata): Promise<QueryBuildAddressResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryContractInfoDesc: UnaryMethodDefinitionish;
export declare const QueryContractHistoryDesc: UnaryMethodDefinitionish;
export declare const QueryContractsByCodeDesc: UnaryMethodDefinitionish;
export declare const QueryAllContractStateDesc: UnaryMethodDefinitionish;
export declare const QueryRawContractStateDesc: UnaryMethodDefinitionish;
export declare const QuerySmartContractStateDesc: UnaryMethodDefinitionish;
export declare const QueryCodeDesc: UnaryMethodDefinitionish;
export declare const QueryCodesDesc: UnaryMethodDefinitionish;
export declare const QueryCodeInfoDesc: UnaryMethodDefinitionish;
export declare const QueryPinnedCodesDesc: UnaryMethodDefinitionish;
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QueryContractsByCreatorDesc: UnaryMethodDefinitionish;
export declare const QueryWasmLimitsConfigDesc: UnaryMethodDefinitionish;
export declare const QueryBuildAddressDesc: UnaryMethodDefinitionish;
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
