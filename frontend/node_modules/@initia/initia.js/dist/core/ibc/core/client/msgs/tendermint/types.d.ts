import { JSONSerializable } from '../../../../../../util/json';
import { Header as Header_pb, SignedHeader as SignedHeader_pb, BlockID as BlockID_pb, PartSetHeader as PartSetHeader_pb, Commit as Commit_pb, CommitSig as CommitSig_pb } from '@initia/initia.proto/tendermint/types/types';
import { Validator as Validator_pb, ValidatorSet as ValidatorSet_pb, BlockIDFlag } from '@initia/initia.proto/tendermint/types/validator';
import { Consensus } from './version';
import { PublicKey } from './crypto';
export declare class Header extends JSONSerializable<any, Header.Data, Header.Proto> {
    version: Consensus | undefined;
    chain_id: string;
    height: number;
    time: Date | undefined;
    last_block_id: BlockID | undefined;
    last_commit_hash: string;
    data_hash: string;
    validators_hash: string;
    next_validators_hash: string;
    consensus_hash: string;
    app_hash: string;
    last_results_hash: string;
    evidence_hash: string;
    proposer_address: string;
    constructor(version: Consensus | undefined, chain_id: string, height: number, time: Date | undefined, last_block_id: BlockID | undefined, last_commit_hash: string, data_hash: string, validators_hash: string, next_validators_hash: string, consensus_hash: string, app_hash: string, last_results_hash: string, evidence_hash: string, proposer_address: string);
    static fromAmino(_: any): Header;
    toAmino(): any;
    static fromData(data: Header.Data): Header;
    toData(): Header.Data;
    static fromProto(proto: Header.Proto): Header;
    toProto(): Header.Proto;
}
export declare namespace Header {
    interface Data {
        version?: Consensus.Data;
        chain_id: string;
        height: string;
        time?: string;
        last_block_id?: BlockID.Data;
        last_commit_hash: string;
        data_hash: string;
        validators_hash: string;
        next_validators_hash: string;
        consensus_hash: string;
        app_hash: string;
        last_results_hash: string;
        evidence_hash: string;
        proposer_address: string;
    }
    type Proto = Header_pb;
}
export declare class SignedHeader extends JSONSerializable<any, SignedHeader.Data, SignedHeader.Proto> {
    header?: Header | undefined;
    commit?: Commit | undefined;
    constructor(header?: Header | undefined, commit?: Commit | undefined);
    static fromAmino(_: any): SignedHeader;
    toAmino(): any;
    static fromData(data: SignedHeader.Data): SignedHeader;
    toData(): SignedHeader.Data;
    static fromProto(proto: SignedHeader.Proto): SignedHeader;
    toProto(): SignedHeader.Proto;
}
export declare namespace SignedHeader {
    interface Data {
        header?: Header.Data;
        commit?: Commit.Data;
    }
    type Proto = SignedHeader_pb;
}
export declare class BlockID extends JSONSerializable<any, BlockID.Data, BlockID.Proto> {
    hash: string;
    part_set_header?: PartSetHeader | undefined;
    constructor(hash: string, part_set_header?: PartSetHeader | undefined);
    static fromAmino(_: any): BlockID;
    toAmino(): any;
    static fromData(data: BlockID.Data): BlockID;
    toData(): BlockID.Data;
    static fromProto(proto: BlockID.Proto): BlockID;
    toProto(): BlockID.Proto;
}
export declare namespace BlockID {
    interface Data {
        hash: string;
        part_set_header?: PartSetHeader.Data;
    }
    type Proto = BlockID_pb;
}
export declare class PartSetHeader extends JSONSerializable<any, PartSetHeader.Data, PartSetHeader.Proto> {
    total: number;
    hash: string;
    constructor(total: number, hash: string);
    static fromAmino(_: any): PartSetHeader;
    toAmino(): any;
    static fromData(data: PartSetHeader.Data): PartSetHeader;
    toData(): PartSetHeader.Data;
    static fromProto(proto: PartSetHeader.Proto): PartSetHeader;
    toProto(): PartSetHeader.Proto;
}
export declare namespace PartSetHeader {
    interface Data {
        total: string;
        hash: string;
    }
    type Proto = PartSetHeader_pb;
}
export declare class Commit extends JSONSerializable<any, Commit.Data, Commit.Proto> {
    height: number;
    round: number;
    block_id: BlockID | undefined;
    signatures: CommitSig[];
    constructor(height: number, round: number, block_id: BlockID | undefined, signatures: CommitSig[]);
    static fromAmino(_: any): Commit;
    toAmino(): any;
    static fromData(data: Commit.Data): Commit;
    toData(): Commit.Data;
    static fromProto(proto: Commit.Proto): Commit;
    toProto(): Commit.Proto;
}
export declare namespace Commit {
    interface Data {
        height: string;
        round: string;
        block_id?: BlockID.Data;
        signatures: CommitSig.Data[];
    }
    type Proto = Commit_pb;
}
export declare class CommitSig extends JSONSerializable<any, CommitSig.Data, CommitSig.Proto> {
    block_id_flag: BlockIDFlag;
    validator_address?: string | undefined;
    timestamp?: Date | undefined;
    signature?: string | undefined;
    constructor(block_id_flag: BlockIDFlag, validator_address?: string | undefined, timestamp?: Date | undefined, signature?: string | undefined);
    static fromAmino(_: any): CommitSig;
    toAmino(): any;
    static fromData(data: CommitSig.Data): CommitSig;
    toData(): CommitSig.Data;
    static fromProto(proto: CommitSig.Proto): CommitSig;
    toProto(): CommitSig.Proto;
}
export declare namespace CommitSig {
    interface Data {
        block_id_flag: string;
        validator_address?: string;
        timestamp?: string;
        signature?: string;
    }
    type Proto = CommitSig_pb;
}
export declare class ValidatorSet extends JSONSerializable<any, ValidatorSet.Data, ValidatorSet.Proto> {
    validators: Validator[];
    proposer: Validator | undefined;
    total_voting_power: number;
    constructor(validators: Validator[], proposer: Validator | undefined, total_voting_power: number);
    static fromAmino(_: any): ValidatorSet;
    toAmino(): any;
    static fromData(data: ValidatorSet.Data): ValidatorSet;
    toData(): ValidatorSet.Data;
    static fromProto(proto: ValidatorSet.Proto): ValidatorSet;
    toProto(): ValidatorSet.Proto;
}
export declare namespace ValidatorSet {
    interface Data {
        validators: Validator.Data[];
        proposer?: Validator.Data;
        total_voting_power: string;
    }
    type Proto = ValidatorSet_pb;
}
export declare class Validator extends JSONSerializable<any, Validator.Data, Validator.Proto> {
    address: string;
    pub_key: PublicKey | undefined;
    voting_power: number;
    proposer_priority: number;
    constructor(address: string, pub_key: PublicKey | undefined, voting_power: number, proposer_priority: number);
    static fromAmino(_: any): Validator;
    toAmino(): any;
    static fromData(data: Validator.Data): Validator;
    toData(): Validator.Data;
    static fromProto(proto: Validator.Proto): Validator;
    toProto(): Validator.Proto;
}
export declare namespace Validator {
    interface Data {
        address: string;
        pub_key?: PublicKey.Data;
        voting_power: string;
        proposer_priority: string;
    }
    type Proto = Validator_pb;
}
