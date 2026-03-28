import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { ContractLimit } from './ContractLimit';
import { ContractFilter } from './ContractFilter';
import { ContractGrant as ContractGrant_pb } from '@initia/initia.proto/cosmwasm/wasm/v1/authz';
export declare class ContractGrant extends JSONSerializable<ContractGrant.Amino, ContractGrant.Data, ContractGrant.Proto> {
    contract: AccAddress;
    limit: ContractLimit;
    filter: ContractFilter;
    constructor(contract: AccAddress, limit: ContractLimit, filter: ContractFilter);
    static fromAmino(data: ContractGrant.Amino): ContractGrant;
    toAmino(): ContractGrant.Amino;
    static fromData(data: ContractGrant.Data): ContractGrant;
    toData(): ContractGrant.Data;
    static fromProto(data: ContractGrant.Proto): ContractGrant;
    toProto(): ContractGrant.Proto;
}
export declare namespace ContractGrant {
    interface Amino {
        contract: AccAddress;
        limit: ContractLimit.Amino;
        filter: ContractFilter.Amino;
    }
    interface Data {
        contract: AccAddress;
        limit: ContractLimit.Data;
        filter: ContractFilter.Data;
    }
    type Proto = ContractGrant_pb;
}
