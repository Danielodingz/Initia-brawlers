import { JSONSerializable } from '../../util/json';
import { BridgeInfo as BridgeInfo_pb } from '@initia/opinit.proto/opinit/opchild/v1/types';
import { BridgeConfig } from '../ophost';
export declare class BridgeInfo extends JSONSerializable<BridgeInfo.Amino, BridgeInfo.Data, BridgeInfo.Proto> {
    bridge_id: number;
    bridge_addr: string;
    l1_chain_id: string;
    l1_client_id: string;
    bridge_config: BridgeConfig;
    constructor(bridge_id: number, bridge_addr: string, l1_chain_id: string, l1_client_id: string, bridge_config: BridgeConfig);
    static fromAmino(data: BridgeInfo.Amino): BridgeInfo;
    toAmino(): BridgeInfo.Amino;
    static fromData(data: BridgeInfo.Data): BridgeInfo;
    toData(): BridgeInfo.Data;
    static fromProto(data: BridgeInfo.Proto): BridgeInfo;
    toProto(): BridgeInfo.Proto;
}
export declare namespace BridgeInfo {
    interface Amino {
        bridge_id: string;
        bridge_addr: string;
        l1_chain_id: string;
        l1_client_id: string;
        bridge_config: BridgeConfig.Amino;
    }
    interface Data {
        bridge_id: string;
        bridge_addr: string;
        l1_chain_id: string;
        l1_client_id: string;
        bridge_config: BridgeConfig.Data;
    }
    type Proto = BridgeInfo_pb;
}
