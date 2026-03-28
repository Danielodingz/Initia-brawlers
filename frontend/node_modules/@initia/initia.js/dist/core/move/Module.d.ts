import { JSONSerializable } from '../../util/json';
import { AccAddress } from '../bech32';
import { Module as Module_pb, UpgradePolicy } from '@initia/initia.proto/initia/move/v1/types';
export declare class Module extends JSONSerializable<Module.Amino, Module.Data, Module.Proto> {
    address: AccAddress;
    module_name: string;
    abi: string;
    raw_bytes: string;
    upgrade_policy: Module.Policy;
    constructor(address: AccAddress, module_name: string, abi: string, raw_bytes: string, upgrade_policy: Module.Policy);
    static fromAmino(data: Module.Amino): Module;
    toAmino(): Module.Amino;
    static fromData(data: Module.Data): Module;
    toData(): Module.Data;
    static fromProto(data: Module.Proto): Module;
    toProto(): Module.Proto;
}
export declare namespace Module {
    type Policy = UpgradePolicy;
    const Policy: typeof UpgradePolicy;
    interface Amino {
        address: AccAddress;
        module_name: string;
        abi: string;
        raw_bytes: string;
        upgrade_policy: string;
    }
    interface Data {
        address: AccAddress;
        module_name: string;
        abi: string;
        raw_bytes: string;
        upgrade_policy: string;
    }
    type Proto = Module_pb;
}
