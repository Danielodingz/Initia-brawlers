import { JSONSerializable } from '../../util/json';
import { Params as Params_pb } from '@initia/initia.proto/cosmwasm/wasm/v1/types';
import { AccessConfig } from './AccessConfig';
export declare class WasmParams extends JSONSerializable<WasmParams.Amino, WasmParams.Data, WasmParams.Proto> {
    code_upload_access: AccessConfig;
    instantiate_default_permission: AccessConfig.Type;
    max_wasm_size: number;
    constructor(code_upload_access: AccessConfig, instantiate_default_permission: AccessConfig.Type, max_wasm_size: number);
    static fromAmino(data: WasmParams.Amino): WasmParams;
    toAmino(): WasmParams.Amino;
    static fromData(data: WasmParams.Data): WasmParams;
    toData(): WasmParams.Data;
    static fromProto(data: WasmParams.Proto): WasmParams;
    toProto(): WasmParams.Proto;
}
export declare namespace WasmParams {
    interface Amino {
        type: 'wasm/Params';
        value: {
            code_upload_access: AccessConfig.Amino;
            instantiate_default_permission: string;
            max_wasm_size: string;
        };
    }
    interface Data {
        '@type': '/cosmwasm.wasm.v1.Params';
        code_upload_access: AccessConfig.Data;
        instantiate_default_permission: string;
        max_wasm_size: string;
    }
    type Proto = Params_pb;
}
