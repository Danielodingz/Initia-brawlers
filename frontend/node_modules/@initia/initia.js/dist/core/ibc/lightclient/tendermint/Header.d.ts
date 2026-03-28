import { JSONSerializable } from '../../../../util/json';
import { Header as Header_pb } from '@initia/initia.proto/ibc/lightclients/tendermint/v1/tendermint';
import { Height } from '../../core/client/Height';
import { SignedHeader, ValidatorSet } from '../../core/client/msgs/tendermint/types';
import { Any } from '@initia/initia.proto/google/protobuf/any';
export declare class Header extends JSONSerializable<any, Header.Data, Header.Proto> {
    signed_header?: SignedHeader | undefined;
    validator_set?: ValidatorSet | undefined;
    trusted_height?: Height | undefined;
    trusted_validators?: ValidatorSet | undefined;
    constructor(signed_header?: SignedHeader | undefined, validator_set?: ValidatorSet | undefined, trusted_height?: Height | undefined, trusted_validators?: ValidatorSet | undefined);
    static fromAmino(_: any): Header;
    toAmino(): any;
    static fromData(data: Header.Data): Header;
    toData(): Header.Data;
    static fromProto(proto: Header.Proto): Header;
    toProto(): Header.Proto;
    packAny(): Any;
    static unpackAny(msgAny: Any): Header;
}
export declare namespace Header {
    interface Data {
        signed_header?: SignedHeader.Data;
        validator_set?: ValidatorSet.Data;
        trusted_height?: Height.Data;
        trusted_validators?: ValidatorSet.Data;
    }
    type Proto = Header_pb;
}
