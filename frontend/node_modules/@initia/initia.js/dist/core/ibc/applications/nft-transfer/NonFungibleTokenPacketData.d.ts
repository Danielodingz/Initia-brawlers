import { NonFungibleTokenPacketData as NonFungibleTokenPacketData_pb } from '@initia/initia.proto/ibc/applications/nft_transfer/v1/packet';
import { JSONSerializable } from '../../../../util/json';
export declare class NonFungibleTokenPacketData extends JSONSerializable<NonFungibleTokenPacketData.Amino, NonFungibleTokenPacketData.Data, NonFungibleTokenPacketData.Proto> {
    class_id: string;
    class_uri: string;
    class_data: string;
    token_ids: string[];
    token_uris: string[];
    token_data: string[];
    sender: string;
    receiver: string;
    memo?: string | undefined;
    constructor(class_id: string, class_uri: string, class_data: string, token_ids: string[], token_uris: string[], token_data: string[], sender: string, receiver: string, memo?: string | undefined);
    static fromAmino(data: NonFungibleTokenPacketData.Amino): NonFungibleTokenPacketData;
    toAmino(): NonFungibleTokenPacketData.Amino;
    static fromData(data: NonFungibleTokenPacketData.Data): NonFungibleTokenPacketData;
    toData(): NonFungibleTokenPacketData.Data;
    static fromProto(proto: NonFungibleTokenPacketData.Proto): NonFungibleTokenPacketData;
    toProto(): NonFungibleTokenPacketData.Proto;
}
export declare namespace NonFungibleTokenPacketData {
    interface Amino {
        class_id: string;
        class_uri: string;
        class_data: string;
        token_ids: string[];
        token_uris: string[];
        token_data: string[];
        sender: string;
        receiver: string;
        memo?: string;
    }
    interface Data {
        class_id: string;
        class_uri: string;
        class_data: string;
        token_ids: string[];
        token_uris: string[];
        token_data: string[];
        sender: string;
        receiver: string;
        memo?: string;
    }
    type Proto = NonFungibleTokenPacketData_pb;
}
