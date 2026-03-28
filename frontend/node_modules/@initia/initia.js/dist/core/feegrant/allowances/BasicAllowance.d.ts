import { JSONSerializable } from '../../../util/json';
import { Coins } from '../../Coins';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { BasicAllowance as BasicAllowance_pb } from '@initia/initia.proto/cosmos/feegrant/v1beta1/feegrant';
export declare class BasicAllowance extends JSONSerializable<BasicAllowance.Amino, BasicAllowance.Data, BasicAllowance.Proto> {
    expiration?: Date | undefined;
    spend_limit?: Coins;
    constructor(spend_limit?: Coins.Input, expiration?: Date | undefined);
    static fromAmino(data: BasicAllowance.Amino): BasicAllowance;
    toAmino(): BasicAllowance.Amino;
    static fromData(proto: BasicAllowance.Data): BasicAllowance;
    toData(): BasicAllowance.Data;
    static fromProto(proto: BasicAllowance.Proto): BasicAllowance;
    toProto(): BasicAllowance.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): BasicAllowance;
}
export declare namespace BasicAllowance {
    interface Amino {
        type: 'cosmos-sdk/BasicAllowance';
        value: {
            spend_limit?: Coins.Amino;
            expiration?: string;
        };
    }
    interface Data {
        '@type': '/cosmos.feegrant.v1beta1.BasicAllowance';
        spend_limit?: Coins.Data;
        expiration?: string;
    }
    type Proto = BasicAllowance_pb;
}
