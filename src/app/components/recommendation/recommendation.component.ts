import { Component, OnInit, Input } from '@angular/core';
import { IRecommendation } from '../../interfaces/iRecommendation';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  /**
   * Recommendation to display
   */
  @Input() recommendation: IRecommendation = <IRecommendation>{};

  constructor() { }

  ngOnInit() {
  }

}
