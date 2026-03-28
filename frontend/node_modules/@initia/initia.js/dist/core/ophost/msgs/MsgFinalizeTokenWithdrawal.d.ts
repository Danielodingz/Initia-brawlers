import { JSONSerializable } from '../../../util/json';
import { AccAddress } from '../../bech32';
import { Coin } from '../../Coin';
import { MsgFinalizeTokenWithdrawal as MsgFinalizeTokenWithdrawal_pb } from '@initia/opinit.proto/opinit/ophost/v1/tx';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class MsgFinalizeTokenWithdrawal extends JSONSerializable<MsgFinalizeTokenWithdrawal.Amino, MsgFinalizeTokenWithdrawal.Data, MsgFinalizeTokenWithdrawal.Proto> {
    sender: AccAddress;
    bridge_id: number;
    output_index: number;
    withdrawal_proofs: string[];
    from: AccAddress;
    to: AccAddress;
    sequence: number;
    amount: Coin;
    version: string;
    storage_root: string;
    last_block_hash: string;
    constructor(sender: AccAddress, bridge_id: number, output_index: number, withdrawal_proofs: string[], from: AccAddress, to: AccAddress, sequence: number, amount: Coin, version: string, storage_root: string, last_block_hash: string);
    static fromAmino(data: MsgFinalizeTokenWithdrawal.Amino): MsgFinalizeTokenWithdrawal;
    toAmino(): MsgFinalizeTokenWithdrawal.Amino;
    static fromData(data: MsgFinalizeTokenWithdrawal.Data): MsgFinalizeTokenWithdrawal;
    toData(): MsgFinalizeTokenWithdrawal.Data;
    static fromProto(data: MsgFinalizeTokenWithdrawal.Proto): MsgFinalizeTokenWithdrawal;
    toProto(): MsgFinalizeTokenWithdrawal.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): MsgFinalizeTokenWithdrawal;
}
export declare namespace MsgFinalizeTokenWithdrawal {
    interface Amino {
        type: 'ophost/MsgFinalizeTokenWithdrawal';
        value: {
            sender: AccAddress;
            bridge_id: string;
            output_index: string;
            withdrawal_proofs: string[];
            from: AccAddress;
            to: AccAddress;
            sequence: string;
            amount: Coin.Amino;
            version: string;
            storage_root: string;
            last_block_hash: string;
        };
    }
    interface Data {
        '@type': '/opinit.ophost.v1.MsgFinalizeTokenWithdrawal';
        sender: AccAddress;
        bridge_id: string;
        output_index: string;
        withdrawal_proofs: string[];
        from: AccAddress;
        to: AccAddress;
        sequence: string;
        amount: Coin.Data;
        version: string;
        storage_root: string;
        last_block_hash: string;
    }
    type Proto = MsgFinalizeTokenWithdrawal_pb;
}
