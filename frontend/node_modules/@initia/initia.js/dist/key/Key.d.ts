import { AccAddress, ValAddress, Tx, SignDoc, PublicKey, SignatureV2 } from '../core';
import { SignMode } from '@initia/initia.proto/cosmos/tx/signing/v1beta1/signing';
export declare abstract class Key {
    publicKey?: PublicKey | undefined;
    abstract sign(payload: Buffer): Promise<Buffer>;
    abstract signWithKeccak256(payload: Buffer): Promise<Buffer>;
    get accAddress(): AccAddress;
    get valAddress(): ValAddress;
    constructor(publicKey?: PublicKey | undefined);
    createSignatureAmino(tx: SignDoc): Promise<SignatureV2>;
    createSignature(signDoc: SignDoc): Promise<SignatureV2>;
    createSignatureEIP191(tx: SignDoc): Promise<SignatureV2>;
    signTx(tx: Tx, options: SignOptions): Promise<Tx>;
}
export interface SignOptions {
    accountNumber: number;
    sequence: number;
    signMode: SignMode;
    chainId: string;
}
