import { BaseAPI } from './BaseAPI';
import { Msg, Tx, Coins, TxInfo, Fee, PublicKey, TxLog, Event, Denom, Coin } from '../../../core';
import { RESTClient } from '../RESTClient';
import { APIParams, Pagination, PaginationOptions } from '../APIRequester';
interface Wait {
    height: number;
    txhash: string;
    raw_log: string;
    gas_wanted: number;
    gas_used: number;
    logs: TxLog[];
    timestamp: string;
}
interface Block extends Wait {
    info: string;
    data: string;
}
interface Sync {
    height: number;
    txhash: string;
    raw_log: string;
}
interface Async {
    height: number;
    txhash: string;
}
export type TxBroadcastResult<B extends Wait | Block | Sync | Async, C extends TxSuccess | TxError | object> = B & C;
export interface TxSuccess {
    logs: TxLog[];
}
export interface TxError {
    code: number | string;
    codespace?: string;
}
export type WaitTxBroadcastResult = TxBroadcastResult<Wait, TxSuccess | TxError>;
export type BlockTxBroadcastResult = TxBroadcastResult<Block, TxSuccess | TxError>;
export type SyncTxBroadcastResult = TxBroadcastResult<Sync, TxError | object>;
export type AsyncTxBroadcastResult = TxBroadcastResult<Async, object>;
export declare function isTxError<T extends TxBroadcastResult<B, C>, B extends Wait | Block | Sync, C extends TxSuccess | TxError | object>(x: T): x is T & TxBroadcastResult<B, TxError>;
export declare namespace BlockTxBroadcastResult {
    interface Data {
        height: string;
        txhash: string;
        raw_log: string;
        gas_wanted: string;
        gas_used: string;
        logs: TxLog.Data[];
        code: number | string;
        codespace: string;
        info: string;
        data: string;
        timestamp: string;
        events: Event[];
    }
}
export declare namespace AsyncTxBroadcastResult {
    type Data = Pick<BlockTxBroadcastResult.Data, 'height' | 'txhash'>;
}
export declare namespace SyncTxBroadcastResult {
    type Data = Pick<BlockTxBroadcastResult.Data, 'height' | 'txhash' | 'raw_log' | 'code' | 'codespace'>;
}
export interface SignerOptions {
    address: string;
    sequenceNumber?: number;
    publicKey?: PublicKey;
}
export interface SignerData {
    sequenceNumber: number;
    publicKey?: PublicKey;
}
export interface CreateTxOptions {
    msgs: Msg[];
    fee?: Fee;
    memo?: string;
    gas?: string;
    gasPrices?: Coins.Input;
    gasAdjustment?: number | string;
    feeDenoms?: string[];
    timeoutHeight?: number;
}
export interface TxResult {
    tx: TxInfo;
}
export declare namespace TxResult {
    interface Data {
        tx: Tx.Data;
        tx_response: TxInfo.Data;
    }
}
export interface TxSearchResult {
    pagination: Pagination;
    total: number;
    txs: TxInfo[];
}
export declare namespace TxSearchResult {
    interface Data {
        txs: Tx.Data[];
        tx_responses: TxInfo.Data[];
        pagination: Pagination;
        total: string;
    }
}
export declare class SimulateResponse {
    gas_info: {
        gas_wanted: number;
        gas_used: number;
    };
    result: {
        data: string;
        log: string;
        events: {
            type: string;
            attributes: {
                key: string;
                value: string;
            }[];
        }[];
    };
    constructor(gas_info: {
        gas_wanted: number;
        gas_used: number;
    }, result: {
        data: string;
        log: string;
        events: {
            type: string;
            attributes: {
                key: string;
                value: string;
            }[];
        }[];
    });
    static fromData(data: SimulateResponse.Data): SimulateResponse;
}
export declare namespace SimulateResponse {
    interface Data {
        gas_info: {
            gas_wanted: string;
            gas_used: string;
        };
        result: {
            data: string;
            log: string;
            events: {
                type: string;
                attributes: {
                    key: string;
                    value: string;
                }[];
            }[];
        };
    }
}
export type TxSearchOp = '=' | '<' | '<=' | '>' | '>=' | 'CONTAINS' | 'EXISTS';
export interface TxSearchQuery {
    key: string;
    value: string;
    op?: TxSearchOp;
}
export interface TxSearchOptions extends PaginationOptions {
    page: number;
    query: TxSearchQuery[];
}
export declare class TxAPI extends BaseAPI {
    rest: RESTClient;
    constructor(rest: RESTClient);
    txInfo(tx_hash: string, params?: APIParams, headers?: Record<string, string>): Promise<TxInfo>;
    create(signers: SignerOptions[], options: CreateTxOptions): Promise<Tx>;
    txInfosByHeight(height: number | undefined): Promise<TxInfo[]>;
    estimateFee(signers: SignerData[], options: CreateTxOptions): Promise<Fee>;
    estimateGas(tx: Tx, options?: {
        gasAdjustment?: number | string;
        signers?: SignerData[];
    }, headers?: Record<string, string>): Promise<string>;
    simulate(options: CreateTxOptions & {
        sequence: number;
    }, headers?: Record<string, string>): Promise<SimulateResponse>;
    static encode(tx: Tx): string;
    static decode(encoded_tx: string): Tx;
    static hash(tx: Tx): string;
    private _broadcast;
    broadcast(tx: Tx | string, timeout?: number, headers?: Record<string, string>): Promise<WaitTxBroadcastResult>;
    broadcastSync(tx: Tx | string, headers?: Record<string, string>): Promise<SyncTxBroadcastResult>;
    broadcastAsync(tx: Tx | string, headers?: Record<string, string>): Promise<AsyncTxBroadcastResult>;
    search(options: Partial<TxSearchOptions>, headers?: Record<string, string>): Promise<TxSearchResult>;
    searchEvents(module_addr: string, module_name: string, start_height: number, end_height: number, headers?: Record<string, string>): Promise<Event[]>;
    gasPrices(params?: APIParams, headers?: Record<string, string>): Promise<Coins>;
    gasPrice(denom: Denom, params?: APIParams, headers?: Record<string, string>): Promise<Coin>;
}
export {};
