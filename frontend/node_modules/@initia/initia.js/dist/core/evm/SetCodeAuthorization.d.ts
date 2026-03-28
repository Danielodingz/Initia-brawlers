import { JSONSerializable } from '../../util/json';
import { SetCodeAuthorization as SetCodeAuthorization_pb } from '@initia/initia.proto/minievm/evm/v1/types';
export declare class SetCodeAuthorization extends JSONSerializable<SetCodeAuthorization.Amino, SetCodeAuthorization.Data, SetCodeAuthorization.Proto> {
    chain_id: string;
    address: string;
    nonce: number;
    signature: string;
    constructor(chain_id: string, address: string, nonce: number, signature: string);
    static fromAmino(data: SetCodeAuthorization.Amino): SetCodeAuthorization;
    toAmino(): SetCodeAuthorization.Amino;
    static fromData(data: SetCodeAuthorization.Data): SetCodeAuthorization;
    toData(): SetCodeAuthorization.Data;
    static fromProto(data: SetCodeAuthorization.Proto): SetCodeAuthorization;
    toProto(): SetCodeAuthorization.Proto;
}
export declare namespace SetCodeAuthorization {
    interface Amino {
        chain_id: string;
        address: string;
        nonce: string;
        signature: string;
    }
    interface Data {
        chain_id: string;
        address: string;
        nonce: string;
        signature: string;
    }
    type Proto = SetCodeAuthorization_pb;
}
