import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { IProduct } from '../../interfaces/iProduct';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges {

  /**
   * Used to change display if products are to be displayed
   */
  public hasProducts: boolean = false;
  /**
   * Products to display
   */
  @Input() products: IProduct[] = [];
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
    this.hasProducts = !isNullOrUndefined(this.products) && this.products.length > 0;
  }

}
