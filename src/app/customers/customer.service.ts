import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { catchError, map, tap } from 'rxjs/operators';
import { Products } from './product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  vegies: Products[] = [
    {productName: 'Brinjal', productQuantity: 0, category: 'Vegetables', imgUrl: 'assets/Brinjal.jpeg'},
    {productName: 'Ridge Gourd', productQuantity: 0,  category: 'Vegetables'},
    {productName: 'Snake Gourd', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Raddish', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Ladies Finger', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Drum Stick', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Cucumber', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Beans', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Tomato', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Potato', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Garlic', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Onion', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Lemon', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Peas', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Green', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Carrot', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Cauliflower', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Cabbage', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Capsicum', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Grapes', productQuantity: 0, category: 'Fruits'},
    {productName: 'Mango', productQuantity: 0, category: 'Fruits'},
    {productName: 'Guava', productQuantity: 0, category: 'Fruits'},
    {productName: 'Apple', productQuantity: 0, category: 'Fruits'},
    {productName: 'Dates', productQuantity: 0, category: 'Fruits'},
    {productName: 'Orange', productQuantity: 0, category: 'Fruits'},
    {productName: 'Papaya', productQuantity: 0, category: 'Fruits'},
    {productName: 'Field Beans', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Bottle Gourd', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Ash Gourd', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Green Chilli', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Banana', productQuantity: 0, category: 'Fruits'},
    {productName: 'Beetroot', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Pumpkin', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Pomegranate', productQuantity: 0, category: 'Fruits'},
    {productName: 'Bitter Gourd', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Banana-raw', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Pumpkin', productQuantity: 0, category: 'Vegetables'},
    {productName: 'Water Melon', productQuantity: 0, category: 'Fruits'},
    {productName: 'Musk Melon', productQuantity: 0, category: 'Fruits'},

  ];
  productsSelected: Products[] = [];

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('https://localhost:44308/api/Cart');
  }

  public addProductsSelected(prods: Products[]) {
    this.productsSelected = [...prods];
    console.log(this.productsSelected);
  }

  public getProductsSelected() {
    return [...this.productsSelected];
  }
}
