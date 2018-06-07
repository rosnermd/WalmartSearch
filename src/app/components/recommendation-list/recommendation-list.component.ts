import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct } from '../../interfaces/iProduct';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-recommendation-list',
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.scss']
})
export class RecommendationListComponent implements OnInit, OnChanges {

  /**
   * Controls if the list should be displayed
   */
  public hasRecommendations: boolean = false;

  /**
   * Product recommendations to display
   */
  @Input() productRecommendations: IProduct[];

  constructor() { }

  ngOnInit() {
    this._checkProducts();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this._checkProducts();
  }

  /**
   * Method used to update the display flag
   */
  private _checkProducts(): void {
    this.hasRecommendations = !isNullOrUndefined(this.productRecommendations) && this.productRecommendations.length > 0;
  }

}
