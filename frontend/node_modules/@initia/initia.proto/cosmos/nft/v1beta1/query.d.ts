import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Class, NFT } from "./nft";
export declare const protobufPackage = "cosmos.nft.v1beta1";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequest {
    /** class_id associated with the nft */
    classId: string;
    /** owner is the owner address of the nft */
    owner: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponse {
    /** amount is the number of all NFTs of a given class owned by the owner */
    amount: bigint;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
    /** class_id associated with the nft */
    classId: string;
    /** id is a unique identifier of the NFT */
    id: string;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
    /** owner is the owner address of the nft */
    owner: string;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequest {
    /** class_id associated with the nft */
    classId: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
    /** amount is the number of all NFTs from the given class */
    amount: bigint;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequest {
    /** class_id associated with the nft */
    classId: string;
    /** owner is the owner address of the nft */
    owner: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponse {
    /** NFT defines the NFT */
    nfts: NFT[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
    /** class_id associated with the nft */
    classId: string;
    /** id is a unique identifier of the NFT */
    id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
    /** owner is the owner address of the nft */
    nft?: NFT | undefined;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequest {
    /** class_id associated with the nft */
    classId: string;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponse {
    /** class defines the class of the nft type. */
    class?: Class | undefined;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponse {
    /** class defines the class of the nft type. */
    classes: Class[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export declare const QueryBalanceRequest: MessageFns<QueryBalanceRequest>;
export declare const QueryBalanceResponse: MessageFns<QueryBalanceResponse>;
export declare const QueryOwnerRequest: MessageFns<QueryOwnerRequest>;
export declare const QueryOwnerResponse: MessageFns<QueryOwnerResponse>;
export declare const QuerySupplyRequest: MessageFns<QuerySupplyRequest>;
export declare const QuerySupplyResponse: MessageFns<QuerySupplyResponse>;
export declare const QueryNFTsRequest: MessageFns<QueryNFTsRequest>;
export declare const QueryNFTsResponse: MessageFns<QueryNFTsResponse>;
export declare const QueryNFTRequest: MessageFns<QueryNFTRequest>;
export declare const QueryNFTResponse: MessageFns<QueryNFTResponse>;
export declare const QueryClassRequest: MessageFns<QueryClassRequest>;
export declare const QueryClassResponse: MessageFns<QueryClassResponse>;
export declare const QueryClassesRequest: MessageFns<QueryClassesRequest>;
export declare const QueryClassesResponse: MessageFns<QueryClassesResponse>;
/** Query defines the gRPC querier service. */
export interface Query {
    /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
    Balance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse>;
    /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
    Owner(request: DeepPartial<QueryOwnerRequest>, metadata?: grpc.Metadata): Promise<QueryOwnerResponse>;
    /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
    Supply(request: DeepPartial<QuerySupplyRequest>, metadata?: grpc.Metadata): Promise<QuerySupplyResponse>;
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    NFTs(request: DeepPartial<QueryNFTsRequest>, metadata?: grpc.Metadata): Promise<QueryNFTsResponse>;
    /** NFT queries an NFT based on its class and id. */
    NFT(request: DeepPartial<QueryNFTRequest>, metadata?: grpc.Metadata): Promise<QueryNFTResponse>;
    /** Class queries an NFT class based on its id */
    Class(request: DeepPartial<QueryClassRequest>, metadata?: grpc.Metadata): Promise<QueryClassResponse>;
    /** Classes queries all NFT classes */
    Classes(request: DeepPartial<QueryClassesRequest>, metadata?: grpc.Metadata): Promise<QueryClassesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Balance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse>;
    Owner(request: DeepPartial<QueryOwnerRequest>, metadata?: grpc.Metadata): Promise<QueryOwnerResponse>;
    Supply(request: DeepPartial<QuerySupplyRequest>, metadata?: grpc.Metadata): Promise<QuerySupplyResponse>;
    NFTs(request: DeepPartial<QueryNFTsRequest>, metadata?: grpc.Metadata): Promise<QueryNFTsResponse>;
    NFT(request: DeepPartial<QueryNFTRequest>, metadata?: grpc.Metadata): Promise<QueryNFTResponse>;
    Class(request: DeepPartial<QueryClassRequest>, metadata?: grpc.Metadata): Promise<QueryClassResponse>;
    Classes(request: DeepPartial<QueryClassesRequest>, metadata?: grpc.Metadata): Promise<QueryClassesResponse>;
}
export declare const QueryDesc: {
    serviceName: string;
};
export declare const QueryBalanceDesc: UnaryMethodDefinitionish;
export declare const QueryOwnerDesc: UnaryMethodDefinitionish;
export declare const QuerySupplyDesc: UnaryMethodDefinitionish;
export declare const QueryNFTsDesc: UnaryMethodDefinitionish;
export declare const QueryNFTDesc: UnaryMethodDefinitionish;
export declare const QueryClassDesc: UnaryMethodDefinitionish;
export declare const QueryClassesDesc: UnaryMethodDefinitionish;
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
