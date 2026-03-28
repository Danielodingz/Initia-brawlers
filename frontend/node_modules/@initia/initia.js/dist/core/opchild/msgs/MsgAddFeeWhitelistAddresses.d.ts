import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgAddFeeWhitelistAddresses as MsgAddFeeWhitelistAddresses_pb } from '@initia/opinit.proto/opinit/opchild/v1/tx';
export declare class MsgAddFeeWhitelistAddresses extends JSONSerializable<MsgAddFeeWhitelistAddresses.Amino, MsgAddFeeWhitelistAddresses.Data, MsgAddFeeWhitelistAddresses.Proto> {
    authority: AccAddress;
    addresses: AccAddress[];
    constructor(authority: AccAddress, addresses: AccAddress[]);
    static fromAmino(data: MsgAddFeeWhitelistAddresses.Amino): MsgAddFeeWhitelistAddresses;
    toAmino(): MsgAddFeeWhitelistAddresses.Amino;
    static fromData(data: MsgAddFeeWhitelistAddresses.Data): MsgAddFeeWhitelistAddresses;
    toData(): MsgAddFeeWhitelistAddresses.Data;
    static fromProto(data: MsgAddFeeWhitelistAddresses.Proto): MsgAddFeeWhitelistAddresses;
    toProto(): MsgAddFeeWhitelistAddresses.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgAddFeeWhitelistAddresses;
}
export declare namespace MsgAddFeeWhitelistAddresses {
    interface Amino {
        type: 'opchild/MsgAddFeeWhitelistAddresses';
        value: {
            authority: AccAddress;
            addresses: AccAddress[];
        };
    }
    interface Data {
        '@type': '/opinit.opchild.v1.MsgAddFeeWhitelistAddresses';
        authority: AccAddress;
        addresses: AccAddress[];
    }
    type Proto = MsgAddFeeWhitelistAddresses_pb;
}
