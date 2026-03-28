import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgRemoveFeeWhitelistAddresses as MsgRemoveFeeWhitelistAddresses_pb } from '@initia/opinit.proto/opinit/opchild/v1/tx';
export declare class MsgRemoveFeeWhitelistAddresses extends JSONSerializable<MsgRemoveFeeWhitelistAddresses.Amino, MsgRemoveFeeWhitelistAddresses.Data, MsgRemoveFeeWhitelistAddresses.Proto> {
    authority: AccAddress;
    addresses: AccAddress[];
    constructor(authority: AccAddress, addresses: AccAddress[]);
    static fromAmino(data: MsgRemoveFeeWhitelistAddresses.Amino): MsgRemoveFeeWhitelistAddresses;
    toAmino(): MsgRemoveFeeWhitelistAddresses.Amino;
    static fromData(data: MsgRemoveFeeWhitelistAddresses.Data): MsgRemoveFeeWhitelistAddresses;
    toData(): MsgRemoveFeeWhitelistAddresses.Data;
    static fromProto(data: MsgRemoveFeeWhitelistAddresses.Proto): MsgRemoveFeeWhitelistAddresses;
    toProto(): MsgRemoveFeeWhitelistAddresses.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgRemoveFeeWhitelistAddresses;
}
export declare namespace MsgRemoveFeeWhitelistAddresses {
    interface Amino {
        type: 'opchild/MsgRemoveFeeWhitelistAddresses';
        value: {
            authority: AccAddress;
            addresses: AccAddress[];
        };
    }
    interface Data {
        '@type': '/opinit.opchild.v1.MsgRemoveFeeWhitelistAddresses';
        authority: AccAddress;
        addresses: AccAddress[];
    }
    type Proto = MsgRemoveFeeWhitelistAddresses_pb;
}
