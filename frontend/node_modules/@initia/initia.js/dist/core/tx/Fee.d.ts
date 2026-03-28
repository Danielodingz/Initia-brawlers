import { JSONSerializable } from '../../util/json';
import { Coins } from '../Coins';
import { AccAddress } from '../bech32';
import { Fee as Fee_pb } from '@initia/initia.proto/cosmos/tx/v1beta1/tx';
export declare class Fee extends JSONSerializable<Fee.Amino, Fee.Data, Fee.Proto> {
    readonly gas_limit: number;
    payer?: AccAddress | undefined;
    granter?: AccAddress | undefined;
    readonly amount: Coins;
    constructor(gas_limit: number, amount: Coins.Input, payer?: AccAddress | undefined, granter?: AccAddress | undefined);
    static fromAmino(data: Fee.Amino): Fee;
    toAmino(): Fee.Amino;
    static fromData(data: Fee.Data): Fee;
    toData(): Fee.Data;
    static fromProto(proto: Fee.Proto): Fee;
    toProto(): Fee.Proto;
    gasPrices(): Coins;
}
export declare namespace Fee {
    interface Amino {
        gas: string;
        amount: Coins.Amino;
    }
    interface Data {
        gas_limit: string;
        payer: string;
        granter: string;
        amount: Coins.Data;
    }
    type Proto = Fee_pb;
}
