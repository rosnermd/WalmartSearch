import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { MainLandingComponent } from './components/main-landing/main-landing.component';
import { ProductLandingComponent } from './components/product-landing/product-landing.component';
import { SearchLandingComponent } from './components/search-landing/search-landing.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { ProductService } from 'src/app/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductResolverService } from 'src/app/routing/resolvers/product-resolver.service';
import { ToastrModule } from 'ngx-toastr';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { RecommendationListComponent } from './components/recommendation-list/recommendation-list.component';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLandingComponent,
    ProductLandingComponent,
    SearchLandingComponent,
    NavbarComponent,
    ProductListComponent,
    ProductComponent,
    RecommendationComponent,
    RecommendationListComponent
  ],
  imports: [
    CoreModule
  ],
  providers: [
    ProductService,
    ProductResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
