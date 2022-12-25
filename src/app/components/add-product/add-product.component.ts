import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  title: string;
  price: number;
  description: string;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.title || !this.price) {
      alert('Product Title & Product price must be filled');
      return;
    }

    const newProduct = {
      title: this.title,
      price: this.price,
      description: this.description,
    };

    this.productService.addProduct(newProduct).subscribe();

    this.title = '';
    this.price = 0;
    this.description = '';

    alert('Product successfully added');
    this.router.navigate(['/']);
  }
}
