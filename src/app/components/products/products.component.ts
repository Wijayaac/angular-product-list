import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(() => {
      alert(`Product ${product.title} has been deleted`);
      this.products = this.products.filter((p) => p.id !== product.id);
    });
  }
}
