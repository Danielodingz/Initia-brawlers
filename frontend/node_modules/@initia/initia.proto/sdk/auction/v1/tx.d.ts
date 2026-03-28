import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
export declare const protobufPackage = "sdk.auction.v1";
/**
 * MsgAuctionBid defines a request type for sending bids to the x/auction
 * module.
 */
export interface MsgAuctionBid {
    /**
     * bidder is the address of the account that is submitting a bid to the
     * auction.
     */
    bidder: string;
    /**
     * bid is the amount of coins that the bidder is bidding to participate in the
     * auction.
     */
    bid?: Coin | undefined;
    /**
     * transactions are the bytes of the transactions that the bidder wants to
     * bundle together.
     */
    transactions: Uint8Array[];
}
/** MsgAuctionBidResponse defines the Msg/AuctionBid response type. */
export interface MsgAuctionBidResponse {
}
/**
 * MsgUpdateParams defines a request type for updating the x/auction module
 * parameters.
 */
export interface MsgUpdateParams {
    /**
     * authority is the address of the account that is authorized to update the
     * x/auction module parameters.
     */
    authority: string;
    /** params is the new parameters for the x/auction module. */
    params?: Params | undefined;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
export declare const MsgAuctionBid: MessageFns<MsgAuctionBid>;
export declare const MsgAuctionBidResponse: MessageFns<MsgAuctionBidResponse>;
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse>;
/** Msg defines the x/auction Msg service. */
export interface Msg {
    /** AuctionBid defines a method for sending bids to the x/auction module. */
    AuctionBid(request: DeepPartial<MsgAuctionBid>, metadata?: grpc.Metadata): Promise<MsgAuctionBidResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/auction
     * module parameters. The authority is hard-coded to the x/gov module account.
     */
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    AuctionBid(request: DeepPartial<MsgAuctionBid>, metadata?: grpc.Metadata): Promise<MsgAuctionBidResponse>;
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgAuctionBidDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateParamsDesc: UnaryMethodDefinitionish;
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
