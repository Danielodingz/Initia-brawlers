import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { MsgDisableBridge as MsgDisableBridge_pb } from '@initia/opinit.proto/opinit/ophost/v1/tx';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class MsgDisableBridge extends JSONSerializable<MsgDisableBridge.Amino, MsgDisableBridge.Data, MsgDisableBridge.Proto> {
    authority: AccAddress;
    bridge_id: number;
    constructor(authority: AccAddress, bridge_id: number);
    static fromAmino(data: MsgDisableBridge.Amino): MsgDisableBridge;
    toAmino(): MsgDisableBridge.Amino;
    static fromData(data: MsgDisableBridge.Data): MsgDisableBridge;
    toData(): MsgDisableBridge.Data;
    static fromProto(data: MsgDisableBridge.Proto): MsgDisableBridge;
    toProto(): MsgDisableBridge.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgDisableBridge;
}
export declare namespace MsgDisableBridge {
    interface Amino {
        type: 'ophost/MsgDisableBridge';
        value: {
            authority: AccAddress;
            bridge_id: string;
        };
    }
    interface Data {
        '@type': '/opinit.ophost.v1.MsgDisableBridge';
        authority: AccAddress;
        bridge_id: string;
    }
    type Proto = MsgDisableBridge_pb;
}
