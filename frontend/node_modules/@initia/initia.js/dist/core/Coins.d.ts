import { Coin } from './Coin';
import { JSONSerializable } from '../util/json';
import { Denom } from './Denom';
export declare class Coins extends JSONSerializable<Coins.Amino, Coins.Data, Coins.Proto> implements Iterable<Coin.Data> {
    private _coins;
    [Symbol.iterator](): {
        next: () => {
            value: Coin;
            done: true;
        };
    };
    toString(): string;
    static fromString(str: string): Coins;
    denoms(): Denom[];
    toDecCoins(): Coins;
    toIntCoins(): Coins;
    toIntCeilCoins(): Coins;
    constructor(arg?: Coins.Input);
    get(denom: Denom): Coin | undefined;
    set(denom: Denom, value: number | string | Coin): void;
    toArray(): Coin[];
    add(other: Coin | Coins): Coins;
    sub(other: Coin | Coins): Coins;
    mul(other: number | string): Coins;
    div(other: number | string): Coins;
    mod(other: number | string): Coins;
    map<T>(fn: (c: Coin) => T): T[];
    filter(fn: (c: Coin) => boolean): Coins;
    static fromAmino(data?: Coins.Amino): Coins;
    toAmino(): Coins.Amino;
    static fromData(data?: Coins.Data): Coins;
    toData(): Coins.Data;
    static fromProto(data?: Coins.Proto): Coins;
    toProto(): Coins.Proto;
    static fromProtoDec(data?: Coins.Proto): Coins;
    toProtoDec(): Coins.Proto;
}
export declare namespace Coins {
    type Input = Coins.AminoDict | Coin[] | Coins | string;
    type Amino = Coin.Amino[];
    type Data = Coin.Data[];
    type Proto = Coin.Proto[];
    type AminoDict = Record<string, number | string>;
    type ReprDict = Record<string, Coin>;
}
