import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Any } from "../../../google/protobuf/any";
import { Order } from "../../../ibc/core/channel/v1/channel";
export declare const protobufPackage = "initia.intertx.v1";
/** MsgRegisterAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterAccount {
    owner: string;
    connectionId: string;
    version: string;
    ordering: Order;
}
/** MsgRegisterAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterAccountResponse {
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTx {
    owner: string;
    connectionId: string;
    msg?: Any | undefined;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponse {
}
export declare const MsgRegisterAccount: MessageFns<MsgRegisterAccount>;
export declare const MsgRegisterAccountResponse: MessageFns<MsgRegisterAccountResponse>;
export declare const MsgSubmitTx: MessageFns<MsgSubmitTx>;
export declare const MsgSubmitTxResponse: MessageFns<MsgSubmitTxResponse>;
/** Msg defines the intertx Msg service. */
export interface Msg {
    /** Register defines a rpc handler for MsgRegisterAccount */
    RegisterAccount(request: DeepPartial<MsgRegisterAccount>, metadata?: grpc.Metadata): Promise<MsgRegisterAccountResponse>;
    /** SubmitTx defines a rpc handler for MsgSubmitTx */
    SubmitTx(request: DeepPartial<MsgSubmitTx>, metadata?: grpc.Metadata): Promise<MsgSubmitTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterAccount(request: DeepPartial<MsgRegisterAccount>, metadata?: grpc.Metadata): Promise<MsgRegisterAccountResponse>;
    SubmitTx(request: DeepPartial<MsgSubmitTx>, metadata?: grpc.Metadata): Promise<MsgSubmitTxResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgRegisterAccountDesc: UnaryMethodDefinitionish;
export declare const MsgSubmitTxDesc: UnaryMethodDefinitionish;
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
