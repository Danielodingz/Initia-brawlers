import { Fee as Fee_pb } from '@initia/initia.proto/ibc/applications/fee/v1/fee';
import { Coins } from '../../../Coins';
import { JSONSerializable } from '../../../../util/json';
export declare class IbcFee extends JSONSerializable<IbcFee.Amino, IbcFee.Data, IbcFee.Proto> {
    recv_fee: Coins;
    ack_fee: Coins;
    timeout_fee: Coins;
    constructor(recv_fee: Coins.Input, ack_fee: Coins.Input, timeout_fee: Coins.Input);
    static fromAmino(data: IbcFee.Amino): IbcFee;
    toAmino(): IbcFee.Amino;
    static fromData(data: IbcFee.Data): IbcFee;
    toData(): IbcFee.Data;
    static fromProto(proto: IbcFee.Proto): IbcFee;
    toProto(): IbcFee.Proto;
}
export declare namespace IbcFee {
    interface Amino {
        recv_fee: Coins.Amino;
        ack_fee: Coins.Amino;
        timeout_fee: Coins.Amino;
    }
    interface Data {
        recv_fee: Coins.Data;
        ack_fee: Coins.Data;
        timeout_fee: Coins.Data;
    }
    type Proto = Fee_pb;
}
