import { MsgRegisterForwardingAccount } from './MsgRegisterForwardingAccount';
import { MsgClearForwardingAccount } from './MsgClearForwardingAccount';
import { MsgSetAllowedDenoms } from './MsgSetAllowedDenoms';
import { MsgSetMemo } from './MsgSetMemo';
export * from './MsgRegisterForwardingAccount';
export * from './MsgClearForwardingAccount';
export * from './MsgSetAllowedDenoms';
export * from './MsgSetMemo';
export type ForwardingMsg = MsgRegisterForwardingAccount | MsgClearForwardingAccount | MsgSetAllowedDenoms | MsgSetMemo;
export declare namespace ForwardingMsg {
    type Amino = MsgRegisterForwardingAccount.Amino | MsgClearForwardingAccount.Amino | MsgSetAllowedDenoms.Amino | MsgSetMemo.Amino;
    type Data = MsgRegisterForwardingAccount.Data | MsgClearForwardingAccount.Data | MsgSetAllowedDenoms.Data | MsgSetMemo.Data;
    type Proto = MsgRegisterForwardingAccount.Proto | MsgClearForwardingAccount.Proto | MsgSetAllowedDenoms.Proto | MsgSetMemo.Proto;
}
