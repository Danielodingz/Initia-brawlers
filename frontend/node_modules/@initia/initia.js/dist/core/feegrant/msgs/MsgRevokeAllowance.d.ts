import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgRevokeAllowance as MsgRevokeAllowance_pb } from '@initia/initia.proto/cosmos/feegrant/v1beta1/tx';
export declare class MsgRevokeAllowance extends JSONSerializable<MsgRevokeAllowance.Amino, MsgRevokeAllowance.Data, MsgRevokeAllowance.Proto> {
    granter: AccAddress;
    grantee: AccAddress;
    constructor(granter: AccAddress, grantee: AccAddress);
    static fromAmino(data: MsgRevokeAllowance.Amino): MsgRevokeAllowance;
    toAmino(): MsgRevokeAllowance.Amino;
    static fromData(proto: MsgRevokeAllowance.Data): MsgRevokeAllowance;
    toData(): MsgRevokeAllowance.Data;
    static fromProto(proto: MsgRevokeAllowance.Proto): MsgRevokeAllowance;
    toProto(): MsgRevokeAllowance.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgRevokeAllowance;
}
export declare namespace MsgRevokeAllowance {
    interface Amino {
        type: 'cosmos-sdk/MsgRevokeAllowance';
        value: {
            granter: AccAddress;
            grantee: AccAddress;
        };
    }
    interface Data {
        '@type': '/cosmos.feegrant.v1beta1.MsgRevokeAllowance';
        granter: AccAddress;
        grantee: AccAddress;
    }
    type Proto = MsgRevokeAllowance_pb;
}
