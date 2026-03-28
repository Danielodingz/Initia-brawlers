import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { MemoEntry } from "./memo";
export declare const protobufPackage = "noble.forwarding.v1";
export interface MsgRegisterAccount {
    signer: string;
    recipient: string;
    channel: string;
    fallback: string;
    memos: MemoEntry[];
}
export interface MsgRegisterAccountResponse {
    address: string;
}
export interface MsgClearAccount {
    signer: string;
    address: string;
    fallback: boolean;
}
export interface MsgClearAccountResponse {
}
export interface MsgSetAllowedDenoms {
    signer: string;
    denoms: string[];
}
export interface MsgSetAllowedDenomsResponse {
}
/** register memo which will be attached to all forwarded txs for a given address+denom pair */
export interface MsgSetMemo {
    signer: string;
    recipient: string;
    channel: string;
    fallback: string;
    denom: string;
    memo: string;
}
export interface MsgSetMemoResponse {
}
export declare const MsgRegisterAccount: MessageFns<MsgRegisterAccount>;
export declare const MsgRegisterAccountResponse: MessageFns<MsgRegisterAccountResponse>;
export declare const MsgClearAccount: MessageFns<MsgClearAccount>;
export declare const MsgClearAccountResponse: MessageFns<MsgClearAccountResponse>;
export declare const MsgSetAllowedDenoms: MessageFns<MsgSetAllowedDenoms>;
export declare const MsgSetAllowedDenomsResponse: MessageFns<MsgSetAllowedDenomsResponse>;
export declare const MsgSetMemo: MessageFns<MsgSetMemo>;
export declare const MsgSetMemoResponse: MessageFns<MsgSetMemoResponse>;
export interface Msg {
    RegisterAccount(request: DeepPartial<MsgRegisterAccount>, metadata?: grpc.Metadata): Promise<MsgRegisterAccountResponse>;
    ClearAccount(request: DeepPartial<MsgClearAccount>, metadata?: grpc.Metadata): Promise<MsgClearAccountResponse>;
    SetAllowedDenoms(request: DeepPartial<MsgSetAllowedDenoms>, metadata?: grpc.Metadata): Promise<MsgSetAllowedDenomsResponse>;
    SetMemo(request: DeepPartial<MsgSetMemo>, metadata?: grpc.Metadata): Promise<MsgSetMemoResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterAccount(request: DeepPartial<MsgRegisterAccount>, metadata?: grpc.Metadata): Promise<MsgRegisterAccountResponse>;
    ClearAccount(request: DeepPartial<MsgClearAccount>, metadata?: grpc.Metadata): Promise<MsgClearAccountResponse>;
    SetAllowedDenoms(request: DeepPartial<MsgSetAllowedDenoms>, metadata?: grpc.Metadata): Promise<MsgSetAllowedDenomsResponse>;
    SetMemo(request: DeepPartial<MsgSetMemo>, metadata?: grpc.Metadata): Promise<MsgSetMemoResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgRegisterAccountDesc: UnaryMethodDefinitionish;
export declare const MsgClearAccountDesc: UnaryMethodDefinitionish;
export declare const MsgSetAllowedDenomsDesc: UnaryMethodDefinitionish;
export declare const MsgSetMemoDesc: UnaryMethodDefinitionish;
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
