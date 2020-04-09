import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/customers/customer.service';
import { Products } from 'src/app/customers/product';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {
  panelOpenState = false;
  products: Products[] = [];
  fruits: Products[] = [];
  vegetables: Products[] = [];

  constructor(private custSer: CustomerService) { }

  vegies: any[];

  ngOnInit() {
    this.products = this.custSer.getProductsSelected();
    // tslint:disable-next-line: arrow-return-shorthand
    this.fruits = this.products.filter(val => { return val.category === 'Fruits'; });
    // tslint:disable-next-line: arrow-return-shorthand
    this.vegetables = this.products.filter(val => { return val.category === 'Vegetables'; });
  }

  AddVegies(vegies: NgForm) {
    console.log(vegies);
  }



}
