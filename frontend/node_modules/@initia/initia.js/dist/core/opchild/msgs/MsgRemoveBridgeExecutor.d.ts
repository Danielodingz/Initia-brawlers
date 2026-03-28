import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgRemoveBridgeExecutor as MsgRemoveBridgeExecutor_pb } from '@initia/opinit.proto/opinit/opchild/v1/tx';
export declare class MsgRemoveBridgeExecutor extends JSONSerializable<MsgRemoveBridgeExecutor.Amino, MsgRemoveBridgeExecutor.Data, MsgRemoveBridgeExecutor.Proto> {
    authority: AccAddress;
    addresses: AccAddress[];
    constructor(authority: AccAddress, addresses: AccAddress[]);
    static fromAmino(data: MsgRemoveBridgeExecutor.Amino): MsgRemoveBridgeExecutor;
    toAmino(): MsgRemoveBridgeExecutor.Amino;
    static fromData(data: MsgRemoveBridgeExecutor.Data): MsgRemoveBridgeExecutor;
    toData(): MsgRemoveBridgeExecutor.Data;
    static fromProto(data: MsgRemoveBridgeExecutor.Proto): MsgRemoveBridgeExecutor;
    toProto(): MsgRemoveBridgeExecutor.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgRemoveBridgeExecutor;
}
export declare namespace MsgRemoveBridgeExecutor {
    interface Amino {
        type: 'opchild/MsgRemoveBridgeExecutor';
        value: {
            authority: AccAddress;
            addresses: AccAddress[];
        };
    }
    interface Data {
        '@type': '/opinit.opchild.v1.MsgRemoveBridgeExecutor';
        authority: AccAddress;
        addresses: AccAddress[];
    }
    type Proto = MsgRemoveBridgeExecutor_pb;
}
