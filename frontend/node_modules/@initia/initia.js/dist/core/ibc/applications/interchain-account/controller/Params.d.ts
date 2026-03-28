import { Params as Params_pb } from '@initia/initia.proto/ibc/applications/interchain_accounts/controller/v1/controller';
import { JSONSerializable } from '../../../../../util/json';
export declare class Params extends JSONSerializable<Params.Amino, Params.Data, Params.Proto> {
    controller_enabled: boolean;
    constructor(controller_enabled: boolean);
    static fromAmino(data: Params.Amino): Params;
    toAmino(): Params.Amino;
    static fromData(data: Params.Data): Params;
    toData(): Params.Data;
    static fromProto(proto: Params.Proto): Params;
    toProto(): Params.Proto;
}
export declare namespace Params {
    interface Amino {
        controller_enabled: boolean;
    }
    interface Data {
        controller_enabled: boolean;
    }
    type Proto = Params_pb;
}
