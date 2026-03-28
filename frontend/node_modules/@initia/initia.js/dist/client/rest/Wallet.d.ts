import { RESTClient } from './RESTClient';
import { Key } from '../../key';
import { CreateTxOptions } from './api/TxAPI';
import { Tx } from '../../core';
import { SignMode } from '@initia/initia.proto/cosmos/tx/signing/v1beta1/signing';
export declare class Wallet {
    rest: RESTClient;
    key: Key;
    private accAddress;
    constructor(rest: RESTClient, key: Key);
    setAccountAddress(accAddress: string): void;
    accountNumberAndSequence(): Promise<{
        account_number: number;
        sequence: number;
    }>;
    accountNumber(): Promise<number>;
    sequence(): Promise<number>;
    createTx(options: CreateTxOptions & {
        sequence?: number;
    }): Promise<Tx>;
    createAndSignTx(options: CreateTxOptions & {
        sequence?: number;
        accountNumber?: number;
        signMode?: SignMode;
    }): Promise<Tx>;
}
