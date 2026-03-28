import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { grpc } from "@improbable-eng/grpc-web";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AccessConfig, Params } from "./types";
export declare const protobufPackage = "cosmwasm.wasm.v1";
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCode {
    /** Sender is the actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /**
     * InstantiatePermission access control to apply on contract creation,
     * optional
     */
    instantiatePermission?: AccessConfig | undefined;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponse {
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponse {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predictable address.
 */
export interface MsgInstantiateContract2 {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
    /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /**
     * FixMsg include the msg value into the hash for the predictable address.
     * Default is false
     */
    fixMsg: boolean;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2Response {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: Coin[];
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponse {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    codeId: bigint;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponse {
    /**
     * Data contains same raw bytes returned as data from the wasm contract.
     * (May be empty)
     */
    data: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdmin {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** NewAdmin address to be set */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponse {
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdmin {
    /** Sender is the actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponse {
}
/** MsgUpdateInstantiateConfig updates instantiate config for a smart contract */
export interface MsgUpdateInstantiateConfig {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** CodeID references the stored WASM code */
    codeId: bigint;
    /** NewInstantiatePermission is the new access control */
    newInstantiatePermission?: AccessConfig | undefined;
}
/** MsgUpdateInstantiateConfigResponse returns empty data */
export interface MsgUpdateInstantiateConfigResponse {
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * Since: 0.40
 */
export interface MsgUpdateParams {
    /** Authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/wasm parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params | undefined;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.40
 */
export interface MsgUpdateParamsResponse {
}
/**
 * MsgSudoContract is the MsgSudoContract request type.
 *
 * Since: 0.40
 */
export interface MsgSudoContract {
    /** Authority is the address of the governance account. */
    authority: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as sudo */
    msg: Uint8Array;
}
/**
 * MsgSudoContractResponse defines the response structure for executing a
 * MsgSudoContract message.
 *
 * Since: 0.40
 */
export interface MsgSudoContractResponse {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/**
 * MsgPinCodes is the MsgPinCodes request type.
 *
 * Since: 0.40
 */
export interface MsgPinCodes {
    /** Authority is the address of the governance account. */
    authority: string;
    /** CodeIDs references the new WASM codes */
    codeIds: bigint[];
}
/**
 * MsgPinCodesResponse defines the response structure for executing a
 * MsgPinCodes message.
 *
 * Since: 0.40
 */
export interface MsgPinCodesResponse {
}
/**
 * MsgUnpinCodes is the MsgUnpinCodes request type.
 *
 * Since: 0.40
 */
export interface MsgUnpinCodes {
    /** Authority is the address of the governance account. */
    authority: string;
    /** CodeIDs references the WASM codes */
    codeIds: bigint[];
}
/**
 * MsgUnpinCodesResponse defines the response structure for executing a
 * MsgUnpinCodes message.
 *
 * Since: 0.40
 */
export interface MsgUnpinCodesResponse {
}
/**
 * MsgStoreAndInstantiateContract is the MsgStoreAndInstantiateContract
 * request type.
 *
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContract {
    /** Authority is the address of the governance account. */
    authority: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiatePermission?: AccessConfig | undefined;
    /**
     * UnpinCode code on upload, optional. As default the uploaded contract is
     * pinned to cache.
     */
    unpinCode: boolean;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /**
     * Funds coins that are transferred from the authority account to the contract
     * on instantiation
     */
    funds: Coin[];
    /** Source is the URL where the code is hosted */
    source: string;
    /**
     * Builder is the docker image used to build the code deterministically, used
     * for smart contract verification
     */
    builder: string;
    /**
     * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
     * contract verification
     */
    codeHash: Uint8Array;
}
/**
 * MsgStoreAndInstantiateContractResponse defines the response structure
 * for executing a MsgStoreAndInstantiateContract message.
 *
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContractResponse {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/**
 * MsgAddCodeUploadParamsAddresses is the
 * MsgAddCodeUploadParamsAddresses request type.
 */
export interface MsgAddCodeUploadParamsAddresses {
    /** Authority is the address of the governance account. */
    authority: string;
    addresses: string[];
}
/**
 * MsgAddCodeUploadParamsAddressesResponse defines the response
 * structure for executing a MsgAddCodeUploadParamsAddresses message.
 */
export interface MsgAddCodeUploadParamsAddressesResponse {
}
/**
 * MsgRemoveCodeUploadParamsAddresses is the
 * MsgRemoveCodeUploadParamsAddresses request type.
 */
export interface MsgRemoveCodeUploadParamsAddresses {
    /** Authority is the address of the governance account. */
    authority: string;
    addresses: string[];
}
/**
 * MsgRemoveCodeUploadParamsAddressesResponse defines the response
 * structure for executing a MsgRemoveCodeUploadParamsAddresses message.
 */
export interface MsgRemoveCodeUploadParamsAddressesResponse {
}
/**
 * MsgStoreAndMigrateContract is the MsgStoreAndMigrateContract
 * request type.
 *
 * Since: 0.42
 */
export interface MsgStoreAndMigrateContract {
    /** Authority is the address of the governance account. */
    authority: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiatePermission?: AccessConfig | undefined;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
/**
 * MsgStoreAndMigrateContractResponse defines the response structure
 * for executing a MsgStoreAndMigrateContract message.
 *
 * Since: 0.42
 */
export interface MsgStoreAndMigrateContractResponse {
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgUpdateContractLabel sets a new label for a smart contract */
export interface MsgUpdateContractLabel {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** NewLabel string to be set */
    newLabel: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/** MsgUpdateContractLabelResponse returns empty data */
export interface MsgUpdateContractLabelResponse {
}
/**
 * MsgUpdateMaxWasmSize defines a governance operation for updating the
 * max_wasm_size parameter.
 */
export interface MsgUpdateMaxWasmSize {
    /** Authority is the address of the governance account. */
    authority: string;
    /** MaxWasmSize is the maximum size of the wasm bytecode in bytes */
    maxWasmSize: bigint;
}
/**
 * MsgUpdateMaxWasmSizeResponse defines the response structure for executing a
 * MsgUpdateMaxWasmSize message.
 */
export interface MsgUpdateMaxWasmSizeResponse {
}
export declare const MsgStoreCode: MessageFns<MsgStoreCode>;
export declare const MsgStoreCodeResponse: MessageFns<MsgStoreCodeResponse>;
export declare const MsgInstantiateContract: MessageFns<MsgInstantiateContract>;
export declare const MsgInstantiateContractResponse: MessageFns<MsgInstantiateContractResponse>;
export declare const MsgInstantiateContract2: MessageFns<MsgInstantiateContract2>;
export declare const MsgInstantiateContract2Response: MessageFns<MsgInstantiateContract2Response>;
export declare const MsgExecuteContract: MessageFns<MsgExecuteContract>;
export declare const MsgExecuteContractResponse: MessageFns<MsgExecuteContractResponse>;
export declare const MsgMigrateContract: MessageFns<MsgMigrateContract>;
export declare const MsgMigrateContractResponse: MessageFns<MsgMigrateContractResponse>;
export declare const MsgUpdateAdmin: MessageFns<MsgUpdateAdmin>;
export declare const MsgUpdateAdminResponse: MessageFns<MsgUpdateAdminResponse>;
export declare const MsgClearAdmin: MessageFns<MsgClearAdmin>;
export declare const MsgClearAdminResponse: MessageFns<MsgClearAdminResponse>;
export declare const MsgUpdateInstantiateConfig: MessageFns<MsgUpdateInstantiateConfig>;
export declare const MsgUpdateInstantiateConfigResponse: MessageFns<MsgUpdateInstantiateConfigResponse>;
export declare const MsgUpdateParams: MessageFns<MsgUpdateParams>;
export declare const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse>;
export declare const MsgSudoContract: MessageFns<MsgSudoContract>;
export declare const MsgSudoContractResponse: MessageFns<MsgSudoContractResponse>;
export declare const MsgPinCodes: MessageFns<MsgPinCodes>;
export declare const MsgPinCodesResponse: MessageFns<MsgPinCodesResponse>;
export declare const MsgUnpinCodes: MessageFns<MsgUnpinCodes>;
export declare const MsgUnpinCodesResponse: MessageFns<MsgUnpinCodesResponse>;
export declare const MsgStoreAndInstantiateContract: MessageFns<MsgStoreAndInstantiateContract>;
export declare const MsgStoreAndInstantiateContractResponse: MessageFns<MsgStoreAndInstantiateContractResponse>;
export declare const MsgAddCodeUploadParamsAddresses: MessageFns<MsgAddCodeUploadParamsAddresses>;
export declare const MsgAddCodeUploadParamsAddressesResponse: MessageFns<MsgAddCodeUploadParamsAddressesResponse>;
export declare const MsgRemoveCodeUploadParamsAddresses: MessageFns<MsgRemoveCodeUploadParamsAddresses>;
export declare const MsgRemoveCodeUploadParamsAddressesResponse: MessageFns<MsgRemoveCodeUploadParamsAddressesResponse>;
export declare const MsgStoreAndMigrateContract: MessageFns<MsgStoreAndMigrateContract>;
export declare const MsgStoreAndMigrateContractResponse: MessageFns<MsgStoreAndMigrateContractResponse>;
export declare const MsgUpdateContractLabel: MessageFns<MsgUpdateContractLabel>;
export declare const MsgUpdateContractLabelResponse: MessageFns<MsgUpdateContractLabelResponse>;
export declare const MsgUpdateMaxWasmSize: MessageFns<MsgUpdateMaxWasmSize>;
export declare const MsgUpdateMaxWasmSizeResponse: MessageFns<MsgUpdateMaxWasmSizeResponse>;
/** Msg defines the wasm Msg service. */
export interface Msg {
    /** StoreCode to submit Wasm code to the system */
    StoreCode(request: DeepPartial<MsgStoreCode>, metadata?: grpc.Metadata): Promise<MsgStoreCodeResponse>;
    /**
     * InstantiateContract creates a new smart contract instance for the given
     *  code id.
     */
    InstantiateContract(request: DeepPartial<MsgInstantiateContract>, metadata?: grpc.Metadata): Promise<MsgInstantiateContractResponse>;
    /**
     * InstantiateContract2 creates a new smart contract instance for the given
     *  code id with a predictable address
     */
    InstantiateContract2(request: DeepPartial<MsgInstantiateContract2>, metadata?: grpc.Metadata): Promise<MsgInstantiateContract2Response>;
    /** Execute submits the given message data to a smart contract */
    ExecuteContract(request: DeepPartial<MsgExecuteContract>, metadata?: grpc.Metadata): Promise<MsgExecuteContractResponse>;
    /** Migrate runs a code upgrade/ downgrade for a smart contract */
    MigrateContract(request: DeepPartial<MsgMigrateContract>, metadata?: grpc.Metadata): Promise<MsgMigrateContractResponse>;
    /** UpdateAdmin sets a new admin for a smart contract */
    UpdateAdmin(request: DeepPartial<MsgUpdateAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateAdminResponse>;
    /** ClearAdmin removes any admin stored for a smart contract */
    ClearAdmin(request: DeepPartial<MsgClearAdmin>, metadata?: grpc.Metadata): Promise<MsgClearAdminResponse>;
    /** UpdateInstantiateConfig updates instantiate config for a smart contract */
    UpdateInstantiateConfig(request: DeepPartial<MsgUpdateInstantiateConfig>, metadata?: grpc.Metadata): Promise<MsgUpdateInstantiateConfigResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/wasm
     * module parameters. The authority is defined in the keeper.
     *
     * Since: 0.40
     */
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    /**
     * SudoContract defines a governance operation for calling sudo
     * on a contract. The authority is defined in the keeper.
     *
     * Since: 0.40
     */
    SudoContract(request: DeepPartial<MsgSudoContract>, metadata?: grpc.Metadata): Promise<MsgSudoContractResponse>;
    /**
     * PinCodes defines a governance operation for pinning a set of
     * code ids in the wasmvm cache. The authority is defined in the keeper.
     *
     * Since: 0.40
     */
    PinCodes(request: DeepPartial<MsgPinCodes>, metadata?: grpc.Metadata): Promise<MsgPinCodesResponse>;
    /**
     * UnpinCodes defines a governance operation for unpinning a set of
     * code ids in the wasmvm cache. The authority is defined in the keeper.
     *
     * Since: 0.40
     */
    UnpinCodes(request: DeepPartial<MsgUnpinCodes>, metadata?: grpc.Metadata): Promise<MsgUnpinCodesResponse>;
    /**
     * StoreAndInstantiateContract defines a governance operation for storing
     * and instantiating the contract. The authority is defined in the keeper.
     *
     * Since: 0.40
     */
    StoreAndInstantiateContract(request: DeepPartial<MsgStoreAndInstantiateContract>, metadata?: grpc.Metadata): Promise<MsgStoreAndInstantiateContractResponse>;
    /**
     * RemoveCodeUploadParamsAddresses defines a governance operation for
     * removing addresses from code upload params.
     * The authority is defined in the keeper.
     */
    RemoveCodeUploadParamsAddresses(request: DeepPartial<MsgRemoveCodeUploadParamsAddresses>, metadata?: grpc.Metadata): Promise<MsgRemoveCodeUploadParamsAddressesResponse>;
    /**
     * AddCodeUploadParamsAddresses defines a governance operation for
     * adding addresses to code upload params.
     * The authority is defined in the keeper.
     */
    AddCodeUploadParamsAddresses(request: DeepPartial<MsgAddCodeUploadParamsAddresses>, metadata?: grpc.Metadata): Promise<MsgAddCodeUploadParamsAddressesResponse>;
    /**
     * StoreAndMigrateContract defines a governance operation for storing
     * and migrating the contract. The authority is defined in the keeper.
     *
     * Since: 0.42
     */
    StoreAndMigrateContract(request: DeepPartial<MsgStoreAndMigrateContract>, metadata?: grpc.Metadata): Promise<MsgStoreAndMigrateContractResponse>;
    /**
     * UpdateContractLabel sets a new label for a smart contract
     *
     * Since: 0.43
     */
    UpdateContractLabel(request: DeepPartial<MsgUpdateContractLabel>, metadata?: grpc.Metadata): Promise<MsgUpdateContractLabelResponse>;
    /**
     * UpdateMaxWasmSize defines a governance operation for updating the
     * max_wasm_size parameter. The authority is defined in the keeper.
     */
    UpdateMaxWasmSize(request: DeepPartial<MsgUpdateMaxWasmSize>, metadata?: grpc.Metadata): Promise<MsgUpdateMaxWasmSizeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    StoreCode(request: DeepPartial<MsgStoreCode>, metadata?: grpc.Metadata): Promise<MsgStoreCodeResponse>;
    InstantiateContract(request: DeepPartial<MsgInstantiateContract>, metadata?: grpc.Metadata): Promise<MsgInstantiateContractResponse>;
    InstantiateContract2(request: DeepPartial<MsgInstantiateContract2>, metadata?: grpc.Metadata): Promise<MsgInstantiateContract2Response>;
    ExecuteContract(request: DeepPartial<MsgExecuteContract>, metadata?: grpc.Metadata): Promise<MsgExecuteContractResponse>;
    MigrateContract(request: DeepPartial<MsgMigrateContract>, metadata?: grpc.Metadata): Promise<MsgMigrateContractResponse>;
    UpdateAdmin(request: DeepPartial<MsgUpdateAdmin>, metadata?: grpc.Metadata): Promise<MsgUpdateAdminResponse>;
    ClearAdmin(request: DeepPartial<MsgClearAdmin>, metadata?: grpc.Metadata): Promise<MsgClearAdminResponse>;
    UpdateInstantiateConfig(request: DeepPartial<MsgUpdateInstantiateConfig>, metadata?: grpc.Metadata): Promise<MsgUpdateInstantiateConfigResponse>;
    UpdateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
    SudoContract(request: DeepPartial<MsgSudoContract>, metadata?: grpc.Metadata): Promise<MsgSudoContractResponse>;
    PinCodes(request: DeepPartial<MsgPinCodes>, metadata?: grpc.Metadata): Promise<MsgPinCodesResponse>;
    UnpinCodes(request: DeepPartial<MsgUnpinCodes>, metadata?: grpc.Metadata): Promise<MsgUnpinCodesResponse>;
    StoreAndInstantiateContract(request: DeepPartial<MsgStoreAndInstantiateContract>, metadata?: grpc.Metadata): Promise<MsgStoreAndInstantiateContractResponse>;
    RemoveCodeUploadParamsAddresses(request: DeepPartial<MsgRemoveCodeUploadParamsAddresses>, metadata?: grpc.Metadata): Promise<MsgRemoveCodeUploadParamsAddressesResponse>;
    AddCodeUploadParamsAddresses(request: DeepPartial<MsgAddCodeUploadParamsAddresses>, metadata?: grpc.Metadata): Promise<MsgAddCodeUploadParamsAddressesResponse>;
    StoreAndMigrateContract(request: DeepPartial<MsgStoreAndMigrateContract>, metadata?: grpc.Metadata): Promise<MsgStoreAndMigrateContractResponse>;
    UpdateContractLabel(request: DeepPartial<MsgUpdateContractLabel>, metadata?: grpc.Metadata): Promise<MsgUpdateContractLabelResponse>;
    UpdateMaxWasmSize(request: DeepPartial<MsgUpdateMaxWasmSize>, metadata?: grpc.Metadata): Promise<MsgUpdateMaxWasmSizeResponse>;
}
export declare const MsgDesc: {
    serviceName: string;
};
export declare const MsgStoreCodeDesc: UnaryMethodDefinitionish;
export declare const MsgInstantiateContractDesc: UnaryMethodDefinitionish;
export declare const MsgInstantiateContract2Desc: UnaryMethodDefinitionish;
export declare const MsgExecuteContractDesc: UnaryMethodDefinitionish;
export declare const MsgMigrateContractDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateAdminDesc: UnaryMethodDefinitionish;
export declare const MsgClearAdminDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateInstantiateConfigDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateParamsDesc: UnaryMethodDefinitionish;
export declare const MsgSudoContractDesc: UnaryMethodDefinitionish;
export declare const MsgPinCodesDesc: UnaryMethodDefinitionish;
export declare const MsgUnpinCodesDesc: UnaryMethodDefinitionish;
export declare const MsgStoreAndInstantiateContractDesc: UnaryMethodDefinitionish;
export declare const MsgRemoveCodeUploadParamsAddressesDesc: UnaryMethodDefinitionish;
export declare const MsgAddCodeUploadParamsAddressesDesc: UnaryMethodDefinitionish;
export declare const MsgStoreAndMigrateContractDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateContractLabelDesc: UnaryMethodDefinitionish;
export declare const MsgUpdateMaxWasmSizeDesc: UnaryMethodDefinitionish;
interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
    requestStream: any;
    responseStream: any;
}
type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;
interface Rpc {
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export declare class GrpcWebImpl {
    private host;
    private options;
    constructor(host: string, options: {
        transport?: grpc.TransportFactory;
        debug?: boolean;
        metadata?: grpc.Metadata;
        upStreamRetryCodes?: number[];
    });
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
declare const gt: any;
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export declare class GrpcWebError extends gt.Error {
    code: grpc.Code;
    metadata: grpc.Metadata;
    constructor(message: string, code: grpc.Code, metadata: grpc.Metadata);
}
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
