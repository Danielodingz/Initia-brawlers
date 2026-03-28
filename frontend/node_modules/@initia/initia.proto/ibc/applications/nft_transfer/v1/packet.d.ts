import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "ibc.applications.nft_transfer.v1";
/**
 * NonFungibleTokenPacketData defines a struct for the packet payload
 * See NonFungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/main/spec/app/ics-721-nft-transfer
 */
export interface NonFungibleTokenPacketData {
    /** collection id == extension struct tag */
    classId: string;
    /** collection url */
    classUri: string;
    /** collection data */
    classData: string;
    /** nft token ids */
    tokenIds: string[];
    /** nft token uris */
    tokenUris: string[];
    /** nft token data array */
    tokenData: string[];
    /** sender of nft */
    sender: string;
    /** receiver of nft */
    receiver: string;
    /** optional memo field for future use */
    memo: string;
}
export declare const NonFungibleTokenPacketData: MessageFns<NonFungibleTokenPacketData>;
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
