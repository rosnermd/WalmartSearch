
import { Routes } from '@angular/router';
import { MainLandingComponent } from 'src/app/components/main-landing/main-landing.component';
import { SearchLandingComponent } from 'src/app/components/search-landing/search-landing.component';
import { ProductLandingComponent } from 'src/app/components/product-landing/product-landing.component';
import { ProductResolverService } from './resolvers/product-resolver.service';

/**
 * Defines the routes in the application
 */
export const routes: Routes = [
    {
        path: 'home',
        component: MainLandingComponent,
        resolve: {
        },
        data: {
        }
    },
    {
        path: 'search',
        component: SearchLandingComponent,
        data: {
        },
        resolve: {
        }
    },
    {
        path: 'search/:productNumber',
        component: ProductLandingComponent,
        resolve: {
            product: ProductResolverService
        },
        data: {
        }
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
