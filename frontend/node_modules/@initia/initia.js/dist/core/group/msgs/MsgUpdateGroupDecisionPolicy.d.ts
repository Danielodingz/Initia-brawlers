import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { DecisionPolicy } from '../policies';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgUpdateGroupPolicyDecisionPolicy as MsgUpdateGroupPolicyDecisionPolicy_pb } from '@initia/initia.proto/cosmos/group/v1/tx';
export declare class MsgUpdateGroupDecisionPolicy extends JSONSerializable<MsgUpdateGroupDecisionPolicy.Amino, MsgUpdateGroupDecisionPolicy.Data, MsgUpdateGroupDecisionPolicy.Proto> {
    admin: AccAddress;
    group_policy_address: AccAddress;
    decision_policy: DecisionPolicy;
    constructor(admin: AccAddress, group_policy_address: AccAddress, decision_policy: DecisionPolicy);
    static fromAmino(data: MsgUpdateGroupDecisionPolicy.Amino): MsgUpdateGroupDecisionPolicy;
    toAmino(): MsgUpdateGroupDecisionPolicy.Amino;
    static fromData(data: MsgUpdateGroupDecisionPolicy.Data): MsgUpdateGroupDecisionPolicy;
    toData(): MsgUpdateGroupDecisionPolicy.Data;
    static fromProto(data: MsgUpdateGroupDecisionPolicy.Proto): MsgUpdateGroupDecisionPolicy;
    toProto(): MsgUpdateGroupDecisionPolicy.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUpdateGroupDecisionPolicy;
}
export declare namespace MsgUpdateGroupDecisionPolicy {
    interface Amino {
        type: 'cosmos-sdk/MsgUpdateGroupDecisionPolicy';
        value: {
            admin: AccAddress;
            group_policy_address: AccAddress;
            decision_policy: DecisionPolicy.Amino;
        };
    }
    interface Data {
        '@type': '/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy';
        admin: AccAddress;
        group_policy_address: AccAddress;
        decision_policy: DecisionPolicy.Data;
    }
    type Proto = MsgUpdateGroupPolicyDecisionPolicy_pb;
}
