import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Allowance } from '../allowances';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgGrantAllowance as MsgGrantAllowance_pb } from '@initia/initia.proto/cosmos/feegrant/v1beta1/tx';
export declare class MsgGrantAllowance extends JSONSerializable<MsgGrantAllowance.Amino, MsgGrantAllowance.Data, MsgGrantAllowance.Proto> {
    granter: AccAddress;
    grantee: AccAddress;
    allowance: Allowance;
    constructor(granter: AccAddress, grantee: AccAddress, allowance: Allowance);
    static fromAmino(data: MsgGrantAllowance.Amino): MsgGrantAllowance;
    toAmino(): MsgGrantAllowance.Amino;
    static fromData(data: MsgGrantAllowance.Data): MsgGrantAllowance;
    toData(): MsgGrantAllowance.Data;
    static fromProto(proto: MsgGrantAllowance.Proto): MsgGrantAllowance;
    toProto(): MsgGrantAllowance.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgGrantAllowance;
}
export declare namespace MsgGrantAllowance {
    interface Amino {
        type: 'cosmos-sdk/MsgGrantAllowance';
        value: {
            granter: AccAddress;
            grantee: AccAddress;
            allowance: Allowance.Amino;
        };
    }
    interface Data {
        '@type': '/cosmos.feegrant.v1beta1.MsgGrantAllowance';
        granter: AccAddress;
        grantee: AccAddress;
        allowance: Allowance.Data;
    }
    type Proto = MsgGrantAllowance_pb;
}
