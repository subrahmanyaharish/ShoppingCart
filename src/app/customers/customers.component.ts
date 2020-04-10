import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Products } from './product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  vegiesSelected: Products[] = [];
  vegiesService: Products[] = [];
  searchVegies: Products[] = [];
  filterVegies: Products[] = [];
  categories: string[] = ['All', 'Vegetables', 'Fruits'];
  count = 0;

  constructor(private customerService: CustomerService, private route: Router) { }

  ngOnInit() {
    this.vegiesService = this.customerService.vegies;
    // this.searchVegies = this.customerService.vegies;
    this.filterCategories('All');
  }

  addToCart() {
    this.customerService.addProductsSelected(this.vegiesSelected);
    this.route.navigate(['/shoppingBasket']);
  }

  addProducts(product: Products, pqty: any) {
    let productIndex = -1;

    if (pqty === '1') { product.productQuantity = 1 + +product.productQuantity; }
    if (pqty === '-1') {
      product.productQuantity = +product.productQuantity - 1;
    }

    if (this.vegiesSelected.length !== 0 ) {
      this.vegiesSelected.forEach((value, index) => {
        if (product.productName === value.productName) {
          productIndex = index;
        }
      });
      if (productIndex === -1) {
        this.vegiesSelected.push(product);
      }
    }  else {
      this.vegiesSelected.push(product);
    }
    if (product.productQuantity <= 0) {
      product.productQuantity = 0;
      this.vegiesSelected.splice(productIndex, 1);
    }
    this.count = this.vegiesSelected.length;
  }

  SearchingProducts(ser: string) {
    if (ser === '') {
      this.vegiesService = this.customerService.vegies;
    } else {
      // tslint:disable-next-line: arrow-return-shorthand
      this.vegiesService = this.filterVegies.filter( prods => { return prods.productName.toLowerCase().includes(ser.toLowerCase()); });
    }
  }

  filterCategories(event: string) {
    const category = event;
    this.searchVegies = this.customerService.vegies;
    if (category === 'Vegetables') {
      this.vegiesService = this.searchVegies.filter(product => {
        return product.category === 'Vegetables';
      });
      this.filterVegies = this.vegiesService;
    } else if (category === 'Fruits') {
      this.vegiesService = this.searchVegies.filter(product => {
        return product.category === 'Fruits';
      });
      this.filterVegies = this.vegiesService;
    } else  {
      this.vegiesService = this.searchVegies;
      this.filterVegies = this.vegiesService;
    }
  }


}
