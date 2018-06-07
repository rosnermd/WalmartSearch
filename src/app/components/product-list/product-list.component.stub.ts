import { Component, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/iProduct';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListStubComponent {

  public hasProducts: boolean = false;
  @Input() products: IProduct[] = [];
  constructor() { }

  ngOnChanges(data: any) {

  }

  private _checkProducts(): void {
  }

}
