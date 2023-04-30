import { Component } from '@angular/core';
import { Product, ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = []

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts()
  }
}
