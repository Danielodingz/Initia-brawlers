import { JSONSerializable } from '../../util/json';
import { AccAddress } from '../bech32';
import { Vesting as Vesting_pb } from '@initia/initia.proto/initia/gov/v1/gov';
export declare class Vesting extends JSONSerializable<Vesting.Amino, Vesting.Data, Vesting.Proto> {
    module_addr: AccAddress;
    module_name: string;
    creator_addr: AccAddress;
    constructor(module_addr: AccAddress, module_name: string, creator_addr: AccAddress);
    static fromAmino(data: Vesting.Amino): Vesting;
    toAmino(): Vesting.Amino;
    static fromData(data: Vesting.Data): Vesting;
    toData(): Vesting.Data;
    static fromProto(data: Vesting.Proto): Vesting;
    toProto(): Vesting.Proto;
}
export declare namespace Vesting {
    interface Amino {
        module_addr: AccAddress;
        module_name: string;
        creator_addr: AccAddress;
    }
    interface Data {
        module_addr: AccAddress;
        module_name: string;
        creator_addr: AccAddress;
    }
    type Proto = Vesting_pb;
}
