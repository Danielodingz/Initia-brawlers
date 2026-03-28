import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Coin } from '../../Coin';
import { Denom } from '../../Denom';
import { MsgFinalizeTokenDeposit as MsgFinalizeTokenDeposit_pb } from '@initia/opinit.proto/opinit/opchild/v1/tx';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class MsgFinalizeTokenDeposit extends JSONSerializable<MsgFinalizeTokenDeposit.Amino, MsgFinalizeTokenDeposit.Data, MsgFinalizeTokenDeposit.Proto> {
    sender: AccAddress;
    from: AccAddress;
    to: AccAddress;
    amount: Coin;
    sequence: number;
    height: number;
    base_denom: Denom;
    data?: string | undefined;
    constructor(sender: AccAddress, from: AccAddress, to: AccAddress, amount: Coin, sequence: number, height: number, base_denom: Denom, data?: string | undefined);
    static fromAmino(msgAmino: MsgFinalizeTokenDeposit.Amino): MsgFinalizeTokenDeposit;
    toAmino(): MsgFinalizeTokenDeposit.Amino;
    static fromData(msgData: MsgFinalizeTokenDeposit.Data): MsgFinalizeTokenDeposit;
    toData(): MsgFinalizeTokenDeposit.Data;
    static fromProto(msgProto: MsgFinalizeTokenDeposit.Proto): MsgFinalizeTokenDeposit;
    toProto(): MsgFinalizeTokenDeposit.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgFinalizeTokenDeposit;
}
export declare namespace MsgFinalizeTokenDeposit {
    interface Amino {
        type: 'opchild/MsgFinalizeTokenDeposit';
        value: {
            sender: AccAddress;
            from: AccAddress;
            to: AccAddress;
            amount: Coin.Amino;
            sequence: string;
            height: string;
            base_denom: Denom;
            data?: string;
        };
    }
    interface Data {
        '@type': '/opinit.opchild.v1.MsgFinalizeTokenDeposit';
        sender: AccAddress;
        from: AccAddress;
        to: AccAddress;
        amount: Coin.Data;
        sequence: string;
        height: string;
        base_denom: Denom;
        data?: string;
    }
    type Proto = MsgFinalizeTokenDeposit_pb;
}
