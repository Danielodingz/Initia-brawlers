import { EventEmitter } from 'events';
type Callback = (data: TendermintSubscriptionResponse) => void;
export interface TendermintSubscriptionResponse {
    type: string;
    value: Record<string, any>;
}
export type TendermintEventType = 'NewBlock' | 'NewBlockHeader' | 'Evidence' | 'Tx' | 'ValidatorSetUpdates' | 'CompleteProposal' | 'Lock' | 'NewRound' | 'NewRoundStep' | 'Polka' | 'Relock' | 'TimeoutPropose' | 'TimeoutWait' | 'Unlock' | 'ValidBlock' | 'Vote';
type TendermintQueryOperand = string | number | Date;
export type TendermintQuery = Record<string, TendermintQueryOperand | ['>', number | Date] | ['<', number | Date] | ['<=', number | Date] | ['>=', number | Date] | ['CONTAINS', string] | ['EXISTS']>;
export declare class WebSocketClient extends EventEmitter {
    private URL;
    private reconnectCount;
    private reconnectInterval;
    isConnected: boolean;
    private reconnectTimeoutId?;
    private queryParams?;
    private callback?;
    private shouldAttemptReconnect;
    private socket;
    private _reconnectCount;
    constructor(URL: string, reconnectCount?: number, reconnectInterval?: number);
    destroy(): void;
    start(): void;
    private onOpen;
    private onMessage;
    private onClose;
    subscribe(event: TendermintEventType, query: TendermintQuery, callback: Callback): void;
    subscribeTx(query: TendermintQuery, callback: Callback): void;
}
export {};
