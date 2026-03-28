export type AccAddress = string;
export type ValAddress = string;
export type ValConsAddress = string;
export type AccPubKey = string;
export type ValPubKey = string;
export declare namespace AccAddress {
    function validate(data: string): boolean;
    function fromValAddress(address: ValAddress): AccAddress;
    function toHex(address: AccAddress): string;
    function fromHex(hexAddress: string): AccAddress;
    function toBuffer(address: AccAddress): Buffer;
}
export declare namespace AccPubKey {
    function validate(data: string): boolean;
    function fromAccAddress(address: AccAddress): AccPubKey;
}
export declare namespace ValAddress {
    function validate(data: string): boolean;
    function fromAccAddress(address: AccAddress): ValAddress;
}
export declare namespace ValPubKey {
    function validate(data: string): boolean;
    function fromValAddress(valAddress: ValAddress): ValPubKey;
}
export declare namespace ValConsAddress {
    function validate(data: string): boolean;
}
