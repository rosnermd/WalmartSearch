import { Component, OnInit, Input } from '@angular/core';
import { IRecommendation } from '../../interfaces/iRecommendation';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationStubComponent implements OnInit {

  @Input() recommendation: IRecommendation;

  constructor() { }

  ngOnInit() {
  }

}
