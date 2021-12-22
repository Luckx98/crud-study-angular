export interface Product extends BaseProduct {
    _id: string;
}


export interface BaseProduct {
    product: string;
    value: number;
    type: string;
    code: number;
    quantity: number;
}