import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgAddBridgeExecutor as MsgAddBridgeExecutor_pb } from '@initia/opinit.proto/opinit/opchild/v1/tx';
export declare class MsgAddBridgeExecutor extends JSONSerializable<MsgAddBridgeExecutor.Amino, MsgAddBridgeExecutor.Data, MsgAddBridgeExecutor.Proto> {
    authority: AccAddress;
    addresses: AccAddress[];
    constructor(authority: AccAddress, addresses: AccAddress[]);
    static fromAmino(data: MsgAddBridgeExecutor.Amino): MsgAddBridgeExecutor;
    toAmino(): MsgAddBridgeExecutor.Amino;
    static fromData(data: MsgAddBridgeExecutor.Data): MsgAddBridgeExecutor;
    toData(): MsgAddBridgeExecutor.Data;
    static fromProto(data: MsgAddBridgeExecutor.Proto): MsgAddBridgeExecutor;
    toProto(): MsgAddBridgeExecutor.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgAddBridgeExecutor;
}
export declare namespace MsgAddBridgeExecutor {
    interface Amino {
        type: 'opchild/MsgAddBridgeExecutor';
        value: {
            authority: AccAddress;
            addresses: AccAddress[];
        };
    }
    interface Data {
        '@type': '/opinit.opchild.v1.MsgAddBridgeExecutor';
        authority: AccAddress;
        addresses: AccAddress[];
    }
    type Proto = MsgAddBridgeExecutor_pb;
}
