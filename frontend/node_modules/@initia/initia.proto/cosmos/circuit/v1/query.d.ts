import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { GenesisAccountPermissions, Permissions } from "./types";
export declare const protobufPackage = "cosmos.circuit.v1";
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    address: string;
}
/** AccountResponse is the response type for the Query/Account RPC method. */
export interface AccountResponse {
    permission?: Permissions | undefined;
}
/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** AccountsResponse is the response type for the Query/Accounts RPC method. */
export interface AccountsResponse {
    accounts: GenesisAccountPermissions[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryDisableListRequest is the request type for the Query/DisabledList RPC method. */
export interface QueryDisabledListRequest {
}
/** DisabledListResponse is the response type for the Query/DisabledList RPC method. */
export interface DisabledListResponse {
    disabledList: string[];
}
export declare const QueryAccountRequest: MessageFns<QueryAccountRequest>;
export declare const AccountResponse: MessageFns<AccountResponse>;
export declare const QueryAccountsRequest: MessageFns<QueryAccountsRequest>;
export declare const AccountsResponse: MessageFns<AccountsResponse>;
export declare const QueryDisabledListRequest: MessageFns<QueryDisabledListRequest>;
export declare const DisabledListResponse: MessageFns<DisabledListResponse>;
/** Query defines the circuit gRPC querier service. */
export interface Query {
    /** Account returns account permissions. */
    Account(request: DeepPartial<QueryAccountRequest>, metadata?: grpc.Metadata): Promise<AccountResponse>;
    /** Account returns account permissions. */
    Accounts(request: DeepPartial<QueryAccountsRequest>, metadata?: grpc.Metadata): Promise<AccountsResponse>;
    /** DisabledList returns a list of disabled message urls */
    DisabledList(request: DeepPartial<QueryDisabledListRequest>, metadata?: grpc.Metadata): Promise<DisabledListResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Account(request: DeepPartial<QueryAccountRequest>, metadata?: grpc.Metadata): Promise<AccountResponse>;
    Accounts(request: DeepPartial<QueryAccountsRequest>, metadata?: grpc.Metadata): Promise<AccountsResponse>;
    DisabledList(request: DeepPartial<QueryDisabledListRequest>, metadata?: grpc.Metadata): Promise<DisabledListResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryAccountDesc: UnaryMethodDefinitionish;
export declare const QueryAccountsDesc: UnaryMethodDefinitionish;
export declare const QueryDisabledListDesc: UnaryMethodDefinitionish;
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
