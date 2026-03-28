import { Coins } from '../Coins';
import { JSONSerializable } from '../../util/json';
import { AccAddress } from '../bech32';
import { Deposit as Deposit_pb } from '@initia/initia.proto/cosmos/gov/v1/gov';
export declare class Deposit extends JSONSerializable<Deposit.Amino, Deposit.Data, Deposit.Proto> {
    proposal_id: number;
    depositor: AccAddress;
    amount: Coins;
    constructor(proposal_id: number, depositor: AccAddress, amount: Coins.Input);
    static fromAmino(data: Deposit.Amino): Deposit;
    toAmino(): Deposit.Amino;
    static fromData(data: Deposit.Data): Deposit;
    toData(): Deposit.Data;
    static fromProto(data: Deposit.Proto): Deposit;
    toProto(): Deposit.Proto;
}
export declare namespace Deposit {
    interface Amino {
        proposal_id: string;
        depositor: AccAddress;
        amount: Coins.Amino | null;
    }
    interface Data {
        proposal_id: string;
        depositor: AccAddress;
        amount: Coins.Data;
    }
    type Proto = Deposit_pb;
}
