export interface ShopResult {
    price: string;
    url: string;
    description: string;
    photos: string[];
}

export type shopApiFunc = (search: string) => Promise<ShopResult[]>;