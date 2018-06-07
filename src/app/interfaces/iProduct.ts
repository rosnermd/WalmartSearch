import { IGiftOption } from './iGiftOption';
import { IImage } from './iImage';
import { IError } from './iError';
/**
 * Defines the Product object
 */
export interface IProduct {
    errors: IError[];
    addToCartUrl: string;
    affiliateAddToCartUrl: string;
    availableOnline: boolean;
    bundle: boolean;
    categoryNode: string;
    categoryPath: string;
    customerRating: string;
    customerRatingImage: string;
    giftOptions: IGiftOption;
    imageEntities: IImage[];
    isTwoDayShippingEligible: boolean;
    itemId: number;
    largeImage: string;
    longDescription: string;
    mediumImage: string;
    modelNumber: string;
    msrp: number;
    name: string;
    numReviews: number;
    offerType: string;
    parentItemId: number;
    productTrackingUrl: string;
    productUrl: string;
    rhid: string;
    salePrice: number;
    shortDescription: string;
    standardShipRate: number;
    stock: string;
    thumbnailImage: string;
    upc: string;
}
