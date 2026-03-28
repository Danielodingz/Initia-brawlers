import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { DecisionPolicy } from '../policies';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MemberRequest } from '../GroupMember';
import { MsgCreateGroupWithPolicy as MsgCreateGroupWithPolicy_pb } from '@initia/initia.proto/cosmos/group/v1/tx';
export declare class MsgCreateGroupWithPolicy extends JSONSerializable<MsgCreateGroupWithPolicy.Amino, MsgCreateGroupWithPolicy.Data, MsgCreateGroupWithPolicy.Proto> {
    admin: AccAddress;
    members: MemberRequest[];
    group_metadata: string;
    group_policy_metadata: string;
    group_policy_as_admin: boolean;
    decision_policy: DecisionPolicy;
    constructor(admin: AccAddress, members: MemberRequest[], group_metadata: string, group_policy_metadata: string, group_policy_as_admin: boolean, decision_policy: DecisionPolicy);
    static fromAmino(data: MsgCreateGroupWithPolicy.Amino): MsgCreateGroupWithPolicy;
    toAmino(): MsgCreateGroupWithPolicy.Amino;
    static fromData(data: MsgCreateGroupWithPolicy.Data): MsgCreateGroupWithPolicy;
    toData(): MsgCreateGroupWithPolicy.Data;
    static fromProto(data: MsgCreateGroupWithPolicy.Proto): MsgCreateGroupWithPolicy;
    toProto(): MsgCreateGroupWithPolicy.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgCreateGroupWithPolicy;
}
export declare namespace MsgCreateGroupWithPolicy {
    interface Amino {
        type: 'cosmos-sdk/MsgCreateGroupWithPolicy';
        value: {
            admin: AccAddress;
            members: MemberRequest.Amino[] | null;
            group_metadata: string;
            group_policy_metadata: string;
            group_policy_as_admin: boolean;
            decision_policy: DecisionPolicy.Amino;
        };
    }
    interface Data {
        '@type': '/cosmos.group.v1.MsgCreateGroupWithPolicy';
        admin: AccAddress;
        members: MemberRequest.Data[];
        group_metadata: string;
        group_policy_metadata: string;
        group_policy_as_admin: boolean;
        decision_policy: DecisionPolicy.Data;
    }
    type Proto = MsgCreateGroupWithPolicy_pb;
}
