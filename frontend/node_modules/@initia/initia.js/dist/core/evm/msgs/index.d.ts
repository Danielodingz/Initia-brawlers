import { MsgCreate } from './MsgCreate';
import { MsgCreate2 } from './MsgCreate2';
import { MsgCall } from './MsgCall';
import { MsgUpdateEvmParams } from './MsgUpdateEvmParams';
export * from './MsgCreate';
export * from './MsgCreate2';
export * from './MsgCall';
export * from './MsgUpdateEvmParams';
export type EvmMsg = MsgCreate | MsgCreate2 | MsgCall | MsgUpdateEvmParams;
export declare namespace EvmMsg {
    type Amino = MsgCreate.Amino | MsgCreate2.Amino | MsgCall.Amino | MsgUpdateEvmParams.Amino;
    type Data = MsgCreate.Data | MsgCreate2.Data | MsgCall.Data | MsgUpdateEvmParams.Data;
    type Proto = MsgCreate.Proto | MsgCreate2.Proto | MsgCall.Proto | MsgUpdateEvmParams.Proto;
}
