import { RawKey } from './RawKey';
export declare const INIT_COIN_TYPE = 60;
interface MnemonicKeyOptions {
    mnemonic?: string;
    account?: number;
    index?: number;
    coinType?: number;
    eth?: boolean;
}
export declare class MnemonicKey extends RawKey {
    mnemonic: string;
    constructor(options?: MnemonicKeyOptions);
}
export {};
