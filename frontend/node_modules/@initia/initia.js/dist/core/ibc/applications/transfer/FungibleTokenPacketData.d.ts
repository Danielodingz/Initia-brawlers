import { FungibleTokenPacketData as FungibleTokenPacketData_pb } from '@initia/initia.proto/ibc/applications/transfer/v2/packet';
import { JSONSerializable } from '../../../../util/json';
export declare class FungibleTokenPacketData extends JSONSerializable<FungibleTokenPacketData.Amino, FungibleTokenPacketData.Data, FungibleTokenPacketData.Proto> {
    denom: string;
    amount: string;
    sender: string;
    receiver: string;
    memo?: string | undefined;
    constructor(denom: string, amount: string, sender: string, receiver: string, memo?: string | undefined);
    static fromAmino(data: FungibleTokenPacketData.Amino): FungibleTokenPacketData;
    toAmino(): FungibleTokenPacketData.Amino;
    static fromData(data: FungibleTokenPacketData.Data): FungibleTokenPacketData;
    toData(): FungibleTokenPacketData.Data;
    static fromProto(proto: FungibleTokenPacketData.Proto): FungibleTokenPacketData;
    toProto(): FungibleTokenPacketData.Proto;
}
export declare namespace FungibleTokenPacketData {
    interface Amino {
        denom: string;
        amount: string;
        sender: string;
        receiver: string;
        memo?: string;
    }
    interface Data {
        denom: string;
        amount: string;
        sender: string;
        receiver: string;
        memo?: string;
    }
    type Proto = FungibleTokenPacketData_pb;
}
