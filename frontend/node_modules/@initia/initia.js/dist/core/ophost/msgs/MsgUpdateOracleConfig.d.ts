import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { MsgUpdateOracleConfig as MsgUpdateOracleConfig_pb } from '@initia/opinit.proto/opinit/ophost/v1/tx';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class MsgUpdateOracleConfig extends JSONSerializable<MsgUpdateOracleConfig.Amino, MsgUpdateOracleConfig.Data, MsgUpdateOracleConfig.Proto> {
    authority: AccAddress;
    bridge_id: number;
    oracle_enabled: boolean;
    constructor(authority: AccAddress, bridge_id: number, oracle_enabled: boolean);
    static fromAmino(data: MsgUpdateOracleConfig.Amino): MsgUpdateOracleConfig;
    toAmino(): MsgUpdateOracleConfig.Amino;
    static fromData(data: MsgUpdateOracleConfig.Data): MsgUpdateOracleConfig;
    toData(): MsgUpdateOracleConfig.Data;
    static fromProto(data: MsgUpdateOracleConfig.Proto): MsgUpdateOracleConfig;
    toProto(): MsgUpdateOracleConfig.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgUpdateOracleConfig;
}
export declare namespace MsgUpdateOracleConfig {
    interface Amino {
        type: 'ophost/MsgUpdateOracleConfig';
        value: {
            authority: AccAddress;
            bridge_id: string;
            oracle_enabled: boolean;
        };
    }
    interface Data {
        '@type': '/opinit.ophost.v1.MsgUpdateOracleConfig';
        authority: AccAddress;
        bridge_id: string;
        oracle_enabled: boolean;
    }
    type Proto = MsgUpdateOracleConfig_pb;
}
