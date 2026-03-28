import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Any } from "../../../google/protobuf/any";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { BaseAccount, Params } from "./auth";
export declare const protobufPackage = "cosmos.auth.v1beta1";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
    /** accounts are the existing accounts */
    accounts: Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    /** address defines the address to query for. */
    address: string;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
    /** account defines the account of the corresponding address. */
    account?: Any | undefined;
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
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsRequest {
}
/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsResponse {
    accounts: Any[];
}
/** QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameRequest {
    name: string;
}
/** QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameResponse {
    account?: Any | undefined;
}
/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixRequest {
}
/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixResponse {
    bech32Prefix: string;
}
/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringRequest {
    addressBytes: Uint8Array;
}
/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringResponse {
    addressString: string;
}
/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesRequest {
    addressString: string;
}
/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesResponse {
    addressBytes: Uint8Array;
}
/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDRequest {
    /**
     * Deprecated, use account_id instead
     *
     * id is the account number of the address to be queried. This field
     * should have been an uint64 (like all account numbers), and will be
     * updated to uint64 in a future version of the auth query.
     *
     * @deprecated
     */
    id: bigint;
    /**
     * account_id is the account number of the address to be queried.
     *
     * Since: cosmos-sdk 0.47
     */
    accountId: bigint;
}
/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDResponse {
    accountAddress: string;
}
/**
 * QueryAccountInfoRequest is the Query/AccountInfo request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoRequest {
    /** address is the account address string. */
    address: string;
}
/**
 * QueryAccountInfoResponse is the Query/AccountInfo response type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoResponse {
    /** info is the account info which is represented by BaseAccount. */
    info?: BaseAccount | undefined;
}
export declare const QueryAccountsRequest: MessageFns<QueryAccountsRequest>;
export declare const QueryAccountsResponse: MessageFns<QueryAccountsResponse>;
export declare const QueryAccountRequest: MessageFns<QueryAccountRequest>;
export declare const QueryAccountResponse: MessageFns<QueryAccountResponse>;
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
export declare const QueryModuleAccountsRequest: MessageFns<QueryModuleAccountsRequest>;
export declare const QueryModuleAccountsResponse: MessageFns<QueryModuleAccountsResponse>;
export declare const QueryModuleAccountByNameRequest: MessageFns<QueryModuleAccountByNameRequest>;
export declare const QueryModuleAccountByNameResponse: MessageFns<QueryModuleAccountByNameResponse>;
export declare const Bech32PrefixRequest: MessageFns<Bech32PrefixRequest>;
export declare const Bech32PrefixResponse: MessageFns<Bech32PrefixResponse>;
export declare const AddressBytesToStringRequest: MessageFns<AddressBytesToStringRequest>;
export declare const AddressBytesToStringResponse: MessageFns<AddressBytesToStringResponse>;
export declare const AddressStringToBytesRequest: MessageFns<AddressStringToBytesRequest>;
export declare const AddressStringToBytesResponse: MessageFns<AddressStringToBytesResponse>;
export declare const QueryAccountAddressByIDRequest: MessageFns<QueryAccountAddressByIDRequest>;
export declare const QueryAccountAddressByIDResponse: MessageFns<QueryAccountAddressByIDResponse>;
export declare const QueryAccountInfoRequest: MessageFns<QueryAccountInfoRequest>;
export declare const QueryAccountInfoResponse: MessageFns<QueryAccountInfoResponse>;
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Accounts returns all the existing accounts.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.43
     */
    Accounts(request: DeepPartial<QueryAccountsRequest>, metadata?: grpc.Metadata): Promise<QueryAccountsResponse>;
    /** Account returns account details based on address. */
    Account(request: DeepPartial<QueryAccountRequest>, metadata?: grpc.Metadata): Promise<QueryAccountResponse>;
    /**
     * AccountAddressByID returns account address based on account number.
     *
     * Since: cosmos-sdk 0.46.2
     */
    AccountAddressByID(request: DeepPartial<QueryAccountAddressByIDRequest>, metadata?: grpc.Metadata): Promise<QueryAccountAddressByIDResponse>;
    /** Params queries all parameters. */
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    /**
     * ModuleAccounts returns all the existing module accounts.
     *
     * Since: cosmos-sdk 0.46
     */
    ModuleAccounts(request: DeepPartial<QueryModuleAccountsRequest>, metadata?: grpc.Metadata): Promise<QueryModuleAccountsResponse>;
    /** ModuleAccountByName returns the module account info by module name */
    ModuleAccountByName(request: DeepPartial<QueryModuleAccountByNameRequest>, metadata?: grpc.Metadata): Promise<QueryModuleAccountByNameResponse>;
    /**
     * Bech32Prefix queries bech32Prefix
     *
     * Since: cosmos-sdk 0.46
     */
    Bech32Prefix(request: DeepPartial<Bech32PrefixRequest>, metadata?: grpc.Metadata): Promise<Bech32PrefixResponse>;
    /**
     * AddressBytesToString converts Account Address bytes to string
     *
     * Since: cosmos-sdk 0.46
     */
    AddressBytesToString(request: DeepPartial<AddressBytesToStringRequest>, metadata?: grpc.Metadata): Promise<AddressBytesToStringResponse>;
    /**
     * AddressStringToBytes converts Address string to bytes
     *
     * Since: cosmos-sdk 0.46
     */
    AddressStringToBytes(request: DeepPartial<AddressStringToBytesRequest>, metadata?: grpc.Metadata): Promise<AddressStringToBytesResponse>;
    /**
     * AccountInfo queries account info which is common to all account types.
     *
     * Since: cosmos-sdk 0.47
     */
    AccountInfo(request: DeepPartial<QueryAccountInfoRequest>, metadata?: grpc.Metadata): Promise<QueryAccountInfoResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Accounts(request: DeepPartial<QueryAccountsRequest>, metadata?: grpc.Metadata): Promise<QueryAccountsResponse>;
    Account(request: DeepPartial<QueryAccountRequest>, metadata?: grpc.Metadata): Promise<QueryAccountResponse>;
    AccountAddressByID(request: DeepPartial<QueryAccountAddressByIDRequest>, metadata?: grpc.Metadata): Promise<QueryAccountAddressByIDResponse>;
    Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
    ModuleAccounts(request: DeepPartial<QueryModuleAccountsRequest>, metadata?: grpc.Metadata): Promise<QueryModuleAccountsResponse>;
    ModuleAccountByName(request: DeepPartial<QueryModuleAccountByNameRequest>, metadata?: grpc.Metadata): Promise<QueryModuleAccountByNameResponse>;
    Bech32Prefix(request: DeepPartial<Bech32PrefixRequest>, metadata?: grpc.Metadata): Promise<Bech32PrefixResponse>;
    AddressBytesToString(request: DeepPartial<AddressBytesToStringRequest>, metadata?: grpc.Metadata): Promise<AddressBytesToStringResponse>;
    AddressStringToBytes(request: DeepPartial<AddressStringToBytesRequest>, metadata?: grpc.Metadata): Promise<AddressStringToBytesResponse>;
    AccountInfo(request: DeepPartial<QueryAccountInfoRequest>, metadata?: grpc.Metadata): Promise<QueryAccountInfoResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryAccountsDesc: UnaryMethodDefinitionish;
export declare const QueryAccountDesc: UnaryMethodDefinitionish;
export declare const QueryAccountAddressByIDDesc: UnaryMethodDefinitionish;
export declare const QueryParamsDesc: UnaryMethodDefinitionish;
export declare const QueryModuleAccountsDesc: UnaryMethodDefinitionish;
export declare const QueryModuleAccountByNameDesc: UnaryMethodDefinitionish;
export declare const QueryBech32PrefixDesc: UnaryMethodDefinitionish;
export declare const QueryAddressBytesToStringDesc: UnaryMethodDefinitionish;
export declare const QueryAddressStringToBytesDesc: UnaryMethodDefinitionish;
export declare const QueryAccountInfoDesc: UnaryMethodDefinitionish;
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
