import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  disabled = false;
  max = 10;
  min = 0;
  value = 0;
  name: string;
  products: Product[] = [];

  constructor() { }

  ngOnInit() {
  }

  addProducts() {
    const newProduct = new Product();
    console.log(this.name, this.value);

    newProduct.product = this.name;
    newProduct.quantity = this.value;
    this.products.push(newProduct);
    console.log(this.products);

  }

}
