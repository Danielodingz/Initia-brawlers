import { JSONSerializable } from '../../../util/json';
import { Coins } from '../../Coins';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgMultiSend as MsgMultiSend_pb } from '@initia/initia.proto/cosmos/bank/v1beta1/tx';
import { Input as Input_pb, Output as Output_pb } from '@initia/initia.proto/cosmos/bank/v1beta1/bank';
export declare class MsgMultiSend extends JSONSerializable<MsgMultiSend.Amino, MsgMultiSend.Data, MsgMultiSend.Proto> {
    inputs: MsgMultiSend.Input[];
    outputs: MsgMultiSend.Output[];
    constructor(inputs: MsgMultiSend.Input[], outputs: MsgMultiSend.Output[]);
    static fromAmino(data: MsgMultiSend.Amino): MsgMultiSend;
    toAmino(): MsgMultiSend.Amino;
    static fromData(data: MsgMultiSend.Data): MsgMultiSend;
    toData(): MsgMultiSend.Data;
    static fromProto(proto: MsgMultiSend.Proto): MsgMultiSend;
    toProto(): MsgMultiSend.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgMultiSend;
}
export declare namespace MsgMultiSend {
    interface Amino {
        readonly type: 'cosmos-sdk/MsgMultiSend';
        value: {
            inputs: Input.Amino[] | null;
            outputs: Output.Amino[] | null;
        };
    }
    interface Data {
        '@type': '/cosmos.bank.v1beta1.MsgMultiSend';
        inputs: Input.Data[];
        outputs: Output.Data[];
    }
    type Proto = MsgMultiSend_pb;
    class Input extends JSONSerializable<Input.Amino, Input.Data, Input.Proto> {
        address: AccAddress;
        coins: Coins;
        constructor(address: AccAddress, coins_input: Coins.Input);
        static fromAmino(data: Input.Amino): Input;
        toAmino(): Input.Amino;
        static fromData(data: Input.Data): Input;
        toData(): Input.Data;
        static fromProto(proto: Input.Proto): Input;
        toProto(): Input.Proto;
    }
    class Output extends JSONSerializable<Output.Amino, Output.Data, Output.Proto> {
        address: AccAddress;
        coins: Coins;
        constructor(address: AccAddress, coins_input: Coins.Input);
        static fromAmino(data: Output.Amino): Output;
        toAmino(): Output.Amino;
        static fromData(data: Output.Data): Output;
        toData(): Output.Data;
        static fromProto(proto: Output.Proto): Output;
        toProto(): Output.Proto;
    }
    namespace Input {
        interface Amino {
            address: AccAddress;
            coins: Coins.Amino;
        }
        interface Data {
            address: AccAddress;
            coins: Coins.Data;
        }
        type Proto = Input_pb;
    }
    namespace Output {
        interface Amino {
            address: AccAddress;
            coins: Coins.Amino;
        }
        interface Data {
            address: AccAddress;
            coins: Coins.Data;
        }
        type Proto = Output_pb;
    }
}
