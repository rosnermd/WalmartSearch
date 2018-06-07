import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iProduct';


@Component({
  selector: 'app-recommendation-list',
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.scss']
})
export class RecommendationListStubComponent {

  public hasRecommendations: boolean = false;
  @Input() productRecommendations: IProduct[];

}
