import { JSONSerializable } from '../util/json';
import { LegacyAminoPubKey as LegacyAminoPubKey_pb } from '@initia/initia.proto/cosmos/crypto/multisig/keys';
import { Any } from '@initia/initia.proto/google/protobuf/any';
import { PubKey as PubKey_pb } from '@initia/initia.proto/cosmos/crypto/secp256k1/keys';
import { PubKey as ValConsPubKey_pb } from '@initia/initia.proto/cosmos/crypto/ed25519/keys';
import { PubKey as EthPubKey_pb } from '@initia/initia.proto/initia/crypto/v1beta1/ethsecp256k1/keys';
export type PublicKey = SimplePublicKey | LegacyAminoMultisigPublicKey | ValConsPublicKey | EthPublicKey;
export declare namespace PublicKey {
    type Amino = SimplePublicKey.Amino | LegacyAminoMultisigPublicKey.Amino | ValConsPublicKey.Amino | EthPublicKey.Amino;
    type Data = SimplePublicKey.Data | LegacyAminoMultisigPublicKey.Data | ValConsPublicKey.Data | EthPublicKey.Data;
    type Proto = Any;
    function fromAmino(data: PublicKey.Amino): PublicKey;
    function fromData(data: PublicKey.Data): PublicKey;
    function fromProto(pubkeyAny: PublicKey.Proto): PublicKey;
}
export declare class SimplePublicKey extends JSONSerializable<SimplePublicKey.Amino, SimplePublicKey.Data, SimplePublicKey.Proto> {
    key: string;
    constructor(key: string);
    static fromAmino(data: SimplePublicKey.Amino): SimplePublicKey;
    toAmino(): SimplePublicKey.Amino;
    static fromData(data: SimplePublicKey.Data): SimplePublicKey;
    toData(): SimplePublicKey.Data;
    static fromProto(pubkeyProto: SimplePublicKey.Proto): SimplePublicKey;
    toProto(): SimplePublicKey.Proto;
    packAny(): Any;
    static unpackAny(pubkeyAny: Any): SimplePublicKey;
    encodeAminoPubkey(): Uint8Array;
    rawAddress(): Uint8Array;
    address(): string;
}
export declare namespace SimplePublicKey {
    interface Amino {
        type: 'tendermint/PubKeySecp256k1';
        value: string;
    }
    interface Data {
        '@type': '/cosmos.crypto.secp256k1.PubKey';
        key: string;
    }
    type Proto = PubKey_pb;
}
export declare class LegacyAminoMultisigPublicKey extends JSONSerializable<LegacyAminoMultisigPublicKey.Amino, LegacyAminoMultisigPublicKey.Data, LegacyAminoMultisigPublicKey.Proto> {
    threshold: number;
    pubkeys: SimplePublicKey[];
    constructor(threshold: number, pubkeys: SimplePublicKey[]);
    encodeAminoPubkey(): Uint8Array;
    rawAddress(): Uint8Array;
    address(): string;
    static fromAmino(data: LegacyAminoMultisigPublicKey.Amino): LegacyAminoMultisigPublicKey;
    toAmino(): LegacyAminoMultisigPublicKey.Amino;
    static fromData(data: LegacyAminoMultisigPublicKey.Data): LegacyAminoMultisigPublicKey;
    toData(): LegacyAminoMultisigPublicKey.Data;
    static fromProto(pubkeyProto: LegacyAminoMultisigPublicKey.Proto): LegacyAminoMultisigPublicKey;
    toProto(): LegacyAminoMultisigPublicKey.Proto;
    packAny(): Any;
    static unpackAny(pubkeyAny: Any): LegacyAminoMultisigPublicKey;
}
export declare namespace LegacyAminoMultisigPublicKey {
    interface Amino {
        type: 'tendermint/PubKeyMultisigThreshold';
        value: {
            threshold: string;
            pubkeys: SimplePublicKey.Amino[];
        };
    }
    interface Data {
        '@type': '/cosmos.crypto.multisig.LegacyAminoPubKey';
        threshold: string;
        public_keys: SimplePublicKey.Data[];
    }
    type Proto = LegacyAminoPubKey_pb;
}
export declare class ValConsPublicKey extends JSONSerializable<ValConsPublicKey.Amino, ValConsPublicKey.Data, ValConsPublicKey.Proto> {
    key: string;
    constructor(key: string);
    static fromAmino(data: ValConsPublicKey.Amino): ValConsPublicKey;
    toAmino(): ValConsPublicKey.Amino;
    static fromData(data: ValConsPublicKey.Data): ValConsPublicKey;
    toData(): ValConsPublicKey.Data;
    static fromProto(pubkeyProto: ValConsPublicKey.Proto): ValConsPublicKey;
    toProto(): ValConsPublicKey.Proto;
    packAny(): Any;
    static unpackAny(pubkeyAny: Any): ValConsPublicKey;
    rawAddress(): Uint8Array;
    address(): string;
}
export declare namespace ValConsPublicKey {
    interface Amino {
        type: 'tendermint/PubKeyEd25519';
        value: string;
    }
    interface Data {
        '@type': '/cosmos.crypto.ed25519.PubKey';
        key: string;
    }
    type Proto = ValConsPubKey_pb;
}
export declare class EthPublicKey extends JSONSerializable<EthPublicKey.Amino, EthPublicKey.Data, EthPublicKey.Proto> {
    key: string;
    constructor(key: string);
    static fromAmino(data: EthPublicKey.Amino): EthPublicKey;
    toAmino(): EthPublicKey.Amino;
    static fromData(data: EthPublicKey.Data): EthPublicKey;
    toData(): EthPublicKey.Data;
    static fromProto(pubkeyProto: EthPublicKey.Proto): EthPublicKey;
    toProto(): EthPublicKey.Proto;
    packAny(): Any;
    static unpackAny(pubkeyAny: Any): EthPublicKey;
    rawAddress(): Uint8Array;
    address(): string;
}
export declare namespace EthPublicKey {
    interface Amino {
        type: 'initia/PubKeyEthSecp256k1';
        value: string;
    }
    interface Data {
        '@type': '/initia.crypto.v1beta1.ethsecp256k1.PubKey';
        key: string;
    }
    type Proto = EthPubKey_pb;
}
