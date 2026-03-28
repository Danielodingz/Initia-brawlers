import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { CurrencyPair } from "../../types/v2/currency_pair";
export declare const protobufPackage = "connect.oracle.v2";
/**
 * Given an authority + a set of CurrencyPairs, the x/oracle module will
 * check to see that the authority has permissions to update the set of
 * CurrencyPairs tracked in the oracle, and add the given CurrencyPairs to be
 * tracked in each VoteExtension
 */
export interface MsgAddCurrencyPairs {
    /**
     * authority is the address of the account that is authorized to update the
     * x/oracle's CurrencyPairs
     */
    authority: string;
    /**
     * set of CurrencyPairs to be added to the module (+ prices if they are to be
     * set)
     */
    currencyPairs: CurrencyPair[];
}
export interface MsgAddCurrencyPairsResponse {
}
/**
 * Given an authority + a set of CurrencyPairIDs, the x/oracle module's message
 * service will remove all of the CurrencyPairs identified by each
 * CurrencyPairID in the request from state. Notice, if a given currency-pair
 * does not exist in state, the module ignores that currency-pair and continues
 * removing the rest.
 */
export interface MsgRemoveCurrencyPairs {
    /**
     * authority is the address of the account that is authorized to update the
     * x/oracle's CurrencyPairs
     */
    authority: string;
    /**
     * currency_pair_ids are the stringified representation of a currency-pairs
     * (base/quote) to be removed from the module's state
     */
    currencyPairIds: string[];
}
export interface MsgRemoveCurrencyPairsResponse {
}
export declare const MsgAddCurrencyPairs: MessageFns<MsgAddCurrencyPairs>;
export declare const MsgAddCurrencyPairsResponse: MessageFns<MsgAddCurrencyPairsResponse>;
export declare const MsgRemoveCurrencyPairs: MessageFns<MsgRemoveCurrencyPairs>;
export declare const MsgRemoveCurrencyPairsResponse: MessageFns<MsgRemoveCurrencyPairsResponse>;
/** Msg is the message service for the x/oracle module. */
export interface Msg {
    /**
     * AddCurrencyPairs will be used only by governance to update the set of
     * available CurrencyPairs. Given a set of CurrencyPair objects, update
     * the available currency pairs in the module .
     */
    AddCurrencyPairs(request: DeepPartial<MsgAddCurrencyPairs>, metadata?: grpc.Metadata): Promise<MsgAddCurrencyPairsResponse>;
    /**
     * RemoveCurrencyPairs will be used explicitly by governance to remove the
     * given set of currency-pairs from the module's state. Thus these
     * CurrencyPairs will no longer have price-data available from this module.
     */
    RemoveCurrencyPairs(request: DeepPartial<MsgRemoveCurrencyPairs>, metadata?: grpc.Metadata): Promise<MsgRemoveCurrencyPairsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    AddCurrencyPairs(request: DeepPartial<MsgAddCurrencyPairs>, metadata?: grpc.Metadata): Promise<MsgAddCurrencyPairsResponse>;
    RemoveCurrencyPairs(request: DeepPartial<MsgRemoveCurrencyPairs>, metadata?: grpc.Metadata): Promise<MsgRemoveCurrencyPairsResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgAddCurrencyPairsDesc: UnaryMethodDefinitionish;
export declare const MsgRemoveCurrencyPairsDesc: UnaryMethodDefinitionish;
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
