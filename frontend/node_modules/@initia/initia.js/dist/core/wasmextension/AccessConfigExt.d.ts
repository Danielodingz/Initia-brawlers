import { JSONSerializable } from '../../util/json';
import { AccAddress } from '../bech32';
import { AccessConfig as AccessConfig_pb } from '@initia/initia.proto/miniwasm/wasmextension/v1/types';
import { AccessType } from '@initia/initia.proto/cosmwasm/wasm/v1/types';
export declare class AccessConfigExt extends JSONSerializable<AccessConfigExt.Amino, AccessConfigExt.Data, AccessConfigExt.Proto> {
    permission: AccessType;
    addresses: AccAddress[];
    constructor(permission: AccessType, addresses: AccAddress[]);
    static fromAmino(data: AccessConfigExt.Amino): AccessConfigExt;
    toAmino(): AccessConfigExt.Amino;
    static fromData(data: AccessConfigExt.Data): AccessConfigExt;
    toData(): AccessConfigExt.Data;
    static fromProto(data: AccessConfigExt.Proto): AccessConfigExt;
    toProto(): AccessConfigExt.Proto;
}
export declare namespace AccessConfigExt {
    type Type = AccessType;
    const Type: typeof AccessType;
    interface Amino {
        permission: string;
        addresses: AccAddress[];
    }
    interface Data {
        permission: string;
        addresses: AccAddress[];
    }
    type Proto = AccessConfig_pb;
}
