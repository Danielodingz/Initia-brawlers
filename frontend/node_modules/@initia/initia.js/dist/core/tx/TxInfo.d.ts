import { Tx } from './Tx';
import { ABCIMessageLog as ABCIMessageLog_pb, TxResponse as TxResponse_pb } from '@initia/initia.proto/cosmos/base/abci/v1beta1/abci';
export declare class TxInfo {
    height: number;
    txhash: string;
    raw_log: string;
    logs: TxLog[] | undefined;
    gas_wanted: number;
    gas_used: number;
    tx: Tx;
    timestamp: string;
    events: Event[];
    code?: number | undefined;
    codespace?: string | undefined;
    constructor(height: number, txhash: string, raw_log: string, logs: TxLog[] | undefined, gas_wanted: number, gas_used: number, tx: Tx, timestamp: string, events: Event[], code?: number | undefined, codespace?: string | undefined);
    static fromProto(proto: TxInfo.Proto): TxInfo;
    static fromData(data: TxInfo.Data): TxInfo;
}
export interface EventKV {
    key: string;
    value: string;
}
export interface Event {
    type: string;
    attributes: EventKV[];
}
export type EventsByType = Record<string, Map<string, string[]>>;
export declare namespace EventsByType {
    function parse(eventAmino: Event[]): EventsByType;
}
export declare class TxLog {
    msg_index: number;
    log: string;
    events: Event[];
    eventsByType: EventsByType;
    constructor(msg_index: number, log: string, events: Event[]);
    static fromData(data: TxLog.Data): TxLog;
    toData(): TxLog.Data;
    static fromProto(proto: TxLog.Proto): TxLog;
    toProto(): TxLog.Proto;
}
export declare namespace TxLog {
    interface Data {
        msg_index: number;
        log: string;
        events: {
            type: string;
            attributes: {
                key: string;
                value: string;
            }[];
        }[];
        eventsByType: EventsByType;
    }
    type Proto = ABCIMessageLog_pb;
}
export declare namespace TxInfo {
    interface Data {
        height: string;
        txhash: string;
        codespace: string;
        code: number;
        data: string;
        raw_log: string;
        logs: TxLog.Data[];
        info: string;
        gas_wanted: string;
        gas_used: string;
        tx: Tx.Data;
        timestamp: string;
        events: Event[];
    }
    type Proto = TxResponse_pb;
}
