import { JSONSerializable } from '../../util/json';
import { Coin } from '../Coin';
import { Params as Params_pb } from '@initia/initia.proto/sdk/auction/v1/genesis';
export declare class AuctionParams extends JSONSerializable<AuctionParams.Amino, AuctionParams.Data, AuctionParams.Proto> {
    max_bundle_size: number;
    escrow_account_address: string;
    reserve_fee: Coin;
    min_bid_increment: Coin;
    front_running_protection: boolean;
    proposer_fee: string;
    constructor(max_bundle_size: number, escrow_account_address: string, reserve_fee: Coin, min_bid_increment: Coin, front_running_protection: boolean, proposer_fee: string);
    static fromAmino(data: AuctionParams.Amino): AuctionParams;
    toAmino(): AuctionParams.Amino;
    static fromData(data: AuctionParams.Data): AuctionParams;
    toData(): AuctionParams.Data;
    static fromProto(data: AuctionParams.Proto): AuctionParams;
    toProto(): AuctionParams.Proto;
}
export declare namespace AuctionParams {
    interface Amino {
        type: 'block-sdk/x/auction/Params';
        value: {
            max_bundle_size: string;
            escrow_account_address: string;
            reserve_fee: Coin.Amino;
            min_bid_increment: Coin.Amino;
            front_running_protection: boolean;
            proposer_fee: string;
        };
    }
    interface Data {
        '@type': '/sdk.auction.v1.Params';
        max_bundle_size: string;
        escrow_account_address: string;
        reserve_fee: Coin.Data;
        min_bid_increment: Coin.Data;
        front_running_protection: boolean;
        proposer_fee: string;
    }
    type Proto = Params_pb;
}
