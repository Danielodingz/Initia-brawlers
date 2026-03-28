import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "connect.marketmap.v2";
/** Params defines the parameters for the x/marketmap module. */
export interface Params {
    /**
     * MarketAuthorities is the list of authority accounts that are able to
     * control updating the marketmap.
     */
    marketAuthorities: string[];
    /**
     * Admin is an address that can remove addresses from the MarketAuthorities
     * list. Only governance can add to the MarketAuthorities or change the Admin.
     */
    admin: string;
}
export declare const Params: MessageFns<Params>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
