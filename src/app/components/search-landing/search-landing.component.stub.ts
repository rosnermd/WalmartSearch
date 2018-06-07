import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/iProduct';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-search-landing',
  templateUrl: './search-landing.component.html',
  styleUrls: ['./search-landing.component.scss']
})
export class SearchLandingStubComponent {

  public searchTerm: string;
  public products: IProduct[];
  public statusMessage: string = '';
  constructor() { }

  public search(term: string): void {
  }

}
