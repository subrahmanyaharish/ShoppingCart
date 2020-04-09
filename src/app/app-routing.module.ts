import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingBasketComponent } from './shopping/shopping-basket/shopping-basket.component';
import { CustomersComponent } from './customers/customers.component';


const routes: Routes = [
  {path: '', component: CustomersComponent, pathMatch: 'full'},
  {path: 'shoppingBasket', component: ShoppingBasketComponent},
  {path: 'custCart', component: CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
