import { IError } from './iError';
/**
 * Defines the Recommendation object
 */
export interface IRecommendation {
    itemId: number;
    parentItemId: number;
    name: string;
    msrp: number;
    salePrice: number;
    upc: string;
    categoryPath: string;
    shortDescription: string;
    longDescription: string;
    brandName: string;
    thumbnailImage: string;
    mediumImage: string;
    largeImage: string;
    productTrackingUrl: string;
    ninetySevenCentShipping: boolean;
    standardShipRate: number;
    size: string;
    color: string;
    shipToStore: boolean;
    freeShipToStore: boolean;
    modelNumber: string;
    productUrl: string;
    customerRating: string;
    numReviews: number;
    customerRatingImage: string;
    bestMarketplacePrice: {
        price: number;
        sellerInfo: string;
        standardShipRate: number;
        twoThreeDayShippingRate: number;
        availableOnline: boolean;
        clearance: boolean;
        offerType: string;
    };
    categoryNode: string;
    rhid: string;
    bundle: boolean;
    clearance: boolean;
    preOrder: boolean;
    stock: string;
    attributes: {
        color: string;
        size: string;
        uniqueProductId: string;
    };
    addToCartUrl: string;
    affiliateAddToCartUrl: string;
    freeShippingOver35Dollars: boolean;
    offerType: string;
    isTwoDayShippingEligible: boolean;
    availableOnline: boolean;
}
