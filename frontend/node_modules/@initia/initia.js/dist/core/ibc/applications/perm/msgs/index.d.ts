import { MsgUpdateIbcPermAdmin } from './MsgUpdateIbcPermAdmin';
import { MsgUpdatePermissionedRelayers } from './MsgUpdatePermissionedRelayers';
export * from './MsgUpdateIbcPermAdmin';
export * from './MsgUpdatePermissionedRelayers';
export type IbcPermMsg = MsgUpdateIbcPermAdmin | MsgUpdatePermissionedRelayers;
export declare namespace IbcPermMsg {
    type Amino = MsgUpdateIbcPermAdmin.Amino | MsgUpdatePermissionedRelayers.Amino;
    type Data = MsgUpdateIbcPermAdmin.Data | MsgUpdatePermissionedRelayers.Data;
    type Proto = MsgUpdateIbcPermAdmin.Proto | MsgUpdatePermissionedRelayers.Proto;
}
