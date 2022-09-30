/**
 * -----------------------------------------
 *	Types
 * -----------------------------------------
 */

import { BaseService } from "./baseService";
import { $api } from "./_axios";

export interface IOfferCategory {
    id: number;
    title: string;
    description: string;
}
/**
 * Offer
 */
export interface IOffer {
    id: number;
    price: number;
    image?: string;
    title: string;
    description: string;
    small_description: string;
    active: boolean;
    special: boolean;
    category_id: number;
    category?: IOfferCategory;
}
/**
 * Offer Request Store
 */
export type IOfferRequestStore = Omit<IOffer, "id">;
/**
 * Offer Request Update
 */
export type IOfferRequestUpdate = Partial<Omit<IOffer, "id">>;

/**
 * -----------------------------------------
 *	Service
 * -----------------------------------------
 */

export const OfferService = BaseService<
    IOffer,
    IOfferRequestStore,
    IOfferRequestUpdate
>($api, "offers");
