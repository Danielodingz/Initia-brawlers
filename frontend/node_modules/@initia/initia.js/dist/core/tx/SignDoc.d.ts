import { JSONSerializable } from '../../util/json';
import { Fee } from './Fee';
import { Msg } from '../Msg';
import { SignDoc as SignDoc_pb } from '@initia/initia.proto/cosmos/tx/v1beta1/tx';
import { TxBody, AuthInfo, Tx } from './Tx';
export declare class SignDoc extends JSONSerializable<SignDoc.Amino, SignDoc.Data, SignDoc.Proto> {
    chain_id: string;
    account_number: number;
    sequence: number;
    auth_info: AuthInfo;
    tx_body: TxBody;
    constructor(chain_id: string, account_number: number, sequence: number, auth_info: AuthInfo, tx_body: TxBody);
    toAmino(): SignDoc.Amino;
    toData(): SignDoc.Data;
    toProto(): SignDoc.Proto;
    toUnSignedTx(): Tx;
    toBytes(): Uint8Array;
}
export declare namespace SignDoc {
    interface Amino {
        chain_id: string;
        account_number: string;
        sequence: string;
        timeout_height?: string;
        fee: Fee.Amino;
        msgs: Msg.Amino[];
        memo: string;
    }
    interface Data {
        body_bytes: string;
        auth_info_bytes: string;
        chain_id: string;
        account_number: string;
    }
    type Proto = SignDoc_pb;
}
