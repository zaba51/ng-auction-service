import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {}

  ngOnInit() {
    const prodId: number = parseInt(this.route.snapshot.params['productId']);
    const product = this.productService.getProductById(prodId);
    if (product) {
      this.product = product;
    }
  }
}
