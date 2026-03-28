import { Key } from './Key';
export declare class RawKey extends Key {
    privateKey: Buffer;
    eth: boolean;
    constructor(privateKey: Buffer, eth?: boolean);
    static fromHex(key: string): RawKey;
    sign(payload: Buffer): Promise<Buffer>;
    signWithKeccak256(payload: Buffer): Promise<Buffer>;
}
