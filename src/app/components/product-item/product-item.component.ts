import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/product.service';

@Component({
  selector: 'nga-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;
}
