import { JSONSerializable } from '../../../../../util/json';
import { AccAddress } from '../../../../bech32';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { MsgConnectionOpenInit as MsgConnectionOpenInit_pb } from '@initia/initia.proto/ibc/core/connection/v1/tx';
import { ConnectionCounterparty } from '../ConnectionCounterparty';
import { IbcVersion } from '../IbcVersion';
export declare class MsgConnectionOpenInit extends JSONSerializable<any, MsgConnectionOpenInit.Data, MsgConnectionOpenInit.Proto> {
    client_id: string;
    counterparty: ConnectionCounterparty;
    version: IbcVersion | undefined;
    delay_period: number;
    signer: AccAddress;
    constructor(client_id: string, counterparty: ConnectionCounterparty, version: IbcVersion | undefined, delay_period: number, signer: AccAddress);
    static fromAmino(_: any): MsgConnectionOpenInit;
    toAmino(): any;
    static fromData(data: MsgConnectionOpenInit.Data): MsgConnectionOpenInit;
    toData(): MsgConnectionOpenInit.Data;
    static fromProto(proto: MsgConnectionOpenInit.Proto): MsgConnectionOpenInit;
    toProto(): MsgConnectionOpenInit.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgConnectionOpenInit;
}
export declare namespace MsgConnectionOpenInit {
    interface Data {
        '@type': '/ibc.core.connection.v1.MsgConnectionOpenInit';
        client_id: string;
        counterparty: ConnectionCounterparty.Data;
        version?: IbcVersion.Data;
        delay_period: string;
        signer: AccAddress;
    }
    type Proto = MsgConnectionOpenInit_pb;
}
