import { JSONSerializable } from '../../../../../util/json';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgRegisterCounterpartyPayee as MsgRegisterCounterpartyPayee_pb } from '@initia/initia.proto/ibc/applications/fee/v1/tx';
export declare class MsgRegisterCounterpartyPayee extends JSONSerializable<any, MsgRegisterCounterpartyPayee.Data, MsgRegisterCounterpartyPayee.Proto> {
    port_id: string;
    channel_id: string;
    relayer: string;
    counterparty_payee: string;
    constructor(port_id: string, channel_id: string, relayer: string, counterparty_payee: string);
    static fromAmino(_: any): MsgRegisterCounterpartyPayee;
    toAmino(): any;
    static fromData(data: MsgRegisterCounterpartyPayee.Data): MsgRegisterCounterpartyPayee;
    toData(): MsgRegisterCounterpartyPayee.Data;
    static fromProto(proto: MsgRegisterCounterpartyPayee.Proto): MsgRegisterCounterpartyPayee;
    toProto(): MsgRegisterCounterpartyPayee.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgRegisterCounterpartyPayee;
}
export declare namespace MsgRegisterCounterpartyPayee {
    interface Data {
        '@type': '/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee';
        port_id: string;
        channel_id: string;
        relayer: string;
        counterparty_payee: string;
    }
    type Proto = MsgRegisterCounterpartyPayee_pb;
}
