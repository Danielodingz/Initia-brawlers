import { JSONSerializable } from '../../util/json';
import { Plan as Plan_pb } from '@initia/initia.proto/cosmos/upgrade/v1beta1/upgrade';
export declare class Plan extends JSONSerializable<Plan.Amino, Plan.Data, Plan.Proto> {
    name: string;
    height: number;
    info: string;
    constructor(name: string, height: number, info: string);
    static fromAmino(data: Plan.Amino): Plan;
    toAmino(): Plan.Amino;
    static fromData(data: Plan.Data): Plan;
    toData(): Plan.Data;
    static fromProto(proto: Plan.Proto): Plan;
    toProto(): Plan.Proto;
}
export declare namespace Plan {
    interface Amino {
        name: string;
        height: string;
        info: string;
    }
    interface Data {
        name: string;
        height: string;
        info: string;
    }
    type Proto = Plan_pb;
}
