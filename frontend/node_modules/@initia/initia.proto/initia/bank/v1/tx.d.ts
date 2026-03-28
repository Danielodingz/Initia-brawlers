import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
export declare const protobufPackage = "initia.bank.v1";
/** MsgSetDenomMetadata is the Msg/UpdateParams request type. */
export interface MsgSetDenomMetadata {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /** metadata defines the x/bank denom metadata to update. */
    metadata?: Metadata | undefined;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for executing a
 * MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponse {
}
export declare const MsgSetDenomMetadata: MessageFns<MsgSetDenomMetadata>;
export declare const MsgSetDenomMetadataResponse: MessageFns<MsgSetDenomMetadataResponse>;
/** Msg defines the bank Msg service. */
export interface Msg {
    /**
     * SetDenomMetadata defines a governance operation for updating the x/bank
     * denom metadata. The authority is defined in the keeper.
     */
    SetDenomMetadata(request: DeepPartial<MsgSetDenomMetadata>, metadata?: grpc.Metadata): Promise<MsgSetDenomMetadataResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SetDenomMetadata(request: DeepPartial<MsgSetDenomMetadata>, metadata?: grpc.Metadata): Promise<MsgSetDenomMetadataResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgSetDenomMetadataDesc: UnaryMethodDefinitionish;
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
