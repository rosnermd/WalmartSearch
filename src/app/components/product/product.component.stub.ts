import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductStubComponent {

  @Input() listMode: boolean = false;
  @Input() product: IProduct = <IProduct>{};
  public loadDetails(): void { }
}
