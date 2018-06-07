import { IProduct } from './iProduct';
import { IError } from './iError';

/**
 * Defines the Search Response object
 */
export interface ISearchResponse {
    query: string;
    numItems: number;
    facets: any[];
    responseGroup: string;
    sort: string;
    start: number;
    totalResults: number;
    items: IProduct[];
    errors: IError[];
}
