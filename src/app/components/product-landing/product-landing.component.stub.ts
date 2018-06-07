import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { RecommendationListStubComponent } from 'src/app/components/recommendation-list/recommendation-list.component.stub';
import { IProduct } from 'src/app/interfaces/iProduct';
import { IRecommendation } from 'src/app/interfaces/iRecommendation';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-product-landing',
  templateUrl: './product-landing.component.html',
  styleUrls: ['./product-landing.component.scss']
})
export class ProductLandingStubComponent {

  @ViewChild('productRecommendationList') productRecommendationList: RecommendationListStubComponent;

  public product: IProduct;
  public products: IProduct[] = [];
  public productRecommendations: IRecommendation[] = [];
  public errorMessage: string;

  private prodSubscriptions: Subscription[] = [];

  public loadData(): void {
  }

}
