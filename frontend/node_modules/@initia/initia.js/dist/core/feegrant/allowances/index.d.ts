import { BasicAllowance } from './BasicAllowance';
import { PeriodicAllowance } from './PeriodicAllowance';
import { AllowedMsgAllowance } from './AllowedMsgAllowance';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export * from './BasicAllowance';
export * from './PeriodicAllowance';
export * from './AllowedMsgAllowance';
export type Allowance = BasicAllowance | PeriodicAllowance | AllowedMsgAllowance;
export declare namespace Allowance {
    type Amino = BasicAllowance.Amino | PeriodicAllowance.Amino | AllowedMsgAllowance.Amino;
    type Data = BasicAllowance.Data | PeriodicAllowance.Data | AllowedMsgAllowance.Data;
    type Proto = BasicAllowance.Proto | PeriodicAllowance.Proto | AllowedMsgAllowance.Proto;
    function fromAmino(data: Allowance.Amino): Allowance;
    function fromData(data: Allowance.Data): Allowance;
    function fromProto(proto: Any): Allowance;
}
