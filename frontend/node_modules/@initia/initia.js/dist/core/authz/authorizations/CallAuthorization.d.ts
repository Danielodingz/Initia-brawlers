import { JSONSerializable } from '../../../util/json';
import { CallAuthorization as CallAuthorization_pb } from '@initia/initia.proto/minievm/evm/v1/authz';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class CallAuthorization extends JSONSerializable<CallAuthorization.Amino, CallAuthorization.Data, CallAuthorization.Proto> {
    contracts: string[];
    constructor(contracts: string[]);
    static fromAmino(data: CallAuthorization.Amino): CallAuthorization;
    toAmino(): CallAuthorization.Amino;
    static fromData(data: CallAuthorization.Data): CallAuthorization;
    toData(): CallAuthorization.Data;
    static fromProto(proto: CallAuthorization.Proto): CallAuthorization;
    toProto(): CallAuthorization.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): CallAuthorization;
}
export declare namespace CallAuthorization {
    interface Amino {
        type: 'evm/CallAuthorization';
        value: {
            contracts: string[] | null;
        };
    }
    interface Data {
        '@type': '/minievm.evm.v1.CallAuthorization';
        contracts: string[];
    }
    type Proto = CallAuthorization_pb;
}
