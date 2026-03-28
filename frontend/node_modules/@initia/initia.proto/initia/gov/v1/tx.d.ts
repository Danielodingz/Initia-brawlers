import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Params } from "./gov";
export declare const protobufPackage = "initia.gov.v1";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/gov parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params | undefined;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
/** MsgAddEmergencySubmitters is the Msg/AddEmergencySubmitters request type. */
export interface MsgAddEmergencySubmitters {
    authority: string;
    emergencySubmitters: string[];
}
/**
 * MsgAddEmergencySubmittersResponse defines the response structure for executing a
 * MsgAddEmergencySubmitters message.
 */
export interface MsgAddEmergencySubmittersResponse {
}
/** MsgRemoveEmergencySubmitters is the Msg/RemoveEmergencySubmitters request type. */
export interface MsgRemoveEmergencySubmitters {
    authority: string;
    emergencySubmitters: string[];
}
/**
 * MsgRemoveEmergencySubmittersResponse defines the response structure for executing a
 * MsgRemoveEmergencySubmitters message.
 */
export interface MsgRemoveEmergencySubmittersResponse {
}
/** MsgActivateEmergencyProposal is the Msg/ActivateEmergencyProposal request type. */
export interface MsgActivateEmergencyProposal {
    sender: string;
    proposalId: bigint;
}
/**
 * MsgActivateEmergencyProposalResponse defines the response structure for executing a
 * MsgActivateEmergencyProposal message.
 */
export interface MsgActivateEmergencyProposalResponse {
}
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse>;
export declare const MsgAddEmergencySubmitters: MessageFns<MsgAddEmergencySubmitters>;
export declare const MsgAddEmergencySubmittersResponse: MessageFns<MsgAddEmergencySubmittersResponse>;
export declare const MsgRemoveEmergencySubmitters: MessageFns<MsgRemoveEmergencySubmitters>;
export declare const MsgRemoveEmergencySubmittersResponse: MessageFns<MsgRemoveEmergencySubmittersResponse>;
export declare const MsgActivateEmergencyProposal: MessageFns<MsgActivateEmergencyProposal>;
export declare const MsgActivateEmergencyProposalResponse: MessageFns<MsgActivateEmergencyProposalResponse>;
/** Msg defines the gov Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a governance operation for updating the x/gov
     * module parameters. The authority is defined in the keeper.
     */
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    /** AddEmergencySubmitters defines a governance operation for adding emergency proposal submitters. */
    AddEmergencySubmitters(request: DeepPartial<MsgAddEmergencySubmitters>, metadata?: grpc.Metadata): Promise<MsgAddEmergencySubmittersResponse>;
    /** RemoveEmergencySubmitters defines a governance operation for removing emergency proposal submitters. */
    RemoveEmergencySubmitters(request: DeepPartial<MsgRemoveEmergencySubmitters>, metadata?: grpc.Metadata): Promise<MsgRemoveEmergencySubmittersResponse>;
    /** ActivateEmergencyProposal defines a governance operation for activating an emergency proposal. */
    ActivateEmergencyProposal(request: DeepPartial<MsgActivateEmergencyProposal>, metadata?: grpc.Metadata): Promise<MsgActivateEmergencyProposalResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    AddEmergencySubmitters(request: DeepPartial<MsgAddEmergencySubmitters>, metadata?: grpc.Metadata): Promise<MsgAddEmergencySubmittersResponse>;
    RemoveEmergencySubmitters(request: DeepPartial<MsgRemoveEmergencySubmitters>, metadata?: grpc.Metadata): Promise<MsgRemoveEmergencySubmittersResponse>;
    ActivateEmergencyProposal(request: DeepPartial<MsgActivateEmergencyProposal>, metadata?: grpc.Metadata): Promise<MsgActivateEmergencyProposalResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgUpdateParamsDesc: UnaryMethodDefinitionish;
export declare const MsgAddEmergencySubmittersDesc: UnaryMethodDefinitionish;
export declare const MsgRemoveEmergencySubmittersDesc: UnaryMethodDefinitionish;
export declare const MsgActivateEmergencyProposalDesc: UnaryMethodDefinitionish;
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
