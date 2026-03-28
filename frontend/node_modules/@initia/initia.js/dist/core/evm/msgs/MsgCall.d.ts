import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { AccessTuple } from '../AccessTuple';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgCall as MsgCall_pb } from '@initia/initia.proto/minievm/evm/v1/tx';
import { SetCodeAuthorization } from '../SetCodeAuthorization';
export declare class MsgCall extends JSONSerializable<MsgCall.Amino, MsgCall.Data, MsgCall.Proto> {
    sender: AccAddress;
    contract_addr: AccAddress;
    input: string;
    value: string;
    access_list: AccessTuple[];
    auth_list?: SetCodeAuthorization[] | undefined;
    constructor(sender: AccAddress, contract_addr: AccAddress, input: string, value: string, access_list: AccessTuple[], auth_list?: SetCodeAuthorization[] | undefined);
    static fromAmino(data: MsgCall.Amino): MsgCall;
    toAmino(): MsgCall.Amino;
    static fromData(data: MsgCall.Data): MsgCall;
    toData(): MsgCall.Data;
    static fromProto(data: MsgCall.Proto): MsgCall;
    toProto(): MsgCall.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgCall;
}
export declare namespace MsgCall {
    interface Amino {
        type: 'evm/MsgCall';
        value: {
            sender: AccAddress;
            contract_addr: AccAddress;
            input: string;
            value: string;
            access_list: AccessTuple.Amino[] | null;
            auth_list?: SetCodeAuthorization.Amino[];
        };
    }
    interface Data {
        '@type': '/minievm.evm.v1.MsgCall';
        sender: AccAddress;
        contract_addr: AccAddress;
        input: string;
        value: string;
        access_list: AccessTuple.Data[];
        auth_list?: SetCodeAuthorization.Data[];
    }
    type Proto = MsgCall_pb;
}
