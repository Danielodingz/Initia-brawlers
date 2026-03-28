import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { RequestFinalizeBlock, ResponseCommit, ResponseFinalizeBlock } from "../../../../tendermint/abci/types";
import { StoreKVPair } from "../../v1beta1/listening";
export declare const protobufPackage = "cosmos.store.streaming.abci";
/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockRequest {
    req?: RequestFinalizeBlock | undefined;
    res?: ResponseFinalizeBlock | undefined;
}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockResponse {
}
/** ListenCommitRequest is the request type for the ListenCommit RPC method */
export interface ListenCommitRequest {
    /** explicitly pass in block height as ResponseCommit does not contain this info */
    blockHeight: bigint;
    res?: ResponseCommit | undefined;
    changeSet: StoreKVPair[];
}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */
export interface ListenCommitResponse {
}
export declare const ListenFinalizeBlockRequest: MessageFns<ListenFinalizeBlockRequest>;
export declare const ListenFinalizeBlockResponse: MessageFns<ListenFinalizeBlockResponse>;
export declare const ListenCommitRequest: MessageFns<ListenCommitRequest>;
export declare const ListenCommitResponse: MessageFns<ListenCommitResponse>;
/** ABCIListenerService is the service for the BaseApp ABCIListener interface */
export interface ABCIListenerService {
    /** ListenFinalizeBlock is the corresponding endpoint for ABCIListener.ListenEndBlock */
    ListenFinalizeBlock(request: DeepPartial<ListenFinalizeBlockRequest>, metadata?: grpc.Metadata): Promise<ListenFinalizeBlockResponse>;
    /** ListenCommit is the corresponding endpoint for ABCIListener.ListenCommit */
    ListenCommit(request: DeepPartial<ListenCommitRequest>, metadata?: grpc.Metadata): Promise<ListenCommitResponse>;
}
export declare class ABCIListenerServiceClientImpl implements ABCIListenerService {
    private readonly rpc;
    constructor(rpc: Rpc);
    ListenFinalizeBlock(request: DeepPartial<ListenFinalizeBlockRequest>, metadata?: grpc.Metadata): Promise<ListenFinalizeBlockResponse>;
    ListenCommit(request: DeepPartial<ListenCommitRequest>, metadata?: grpc.Metadata): Promise<ListenCommitResponse>;
}
export declare const ABCIListenerServiceDesc: {
    serviceName: string;
};
export declare const ABCIListenerServiceListenFinalizeBlockDesc: UnaryMethodDefinitionish;
export declare const ABCIListenerServiceListenCommitDesc: UnaryMethodDefinitionish;
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
