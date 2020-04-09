import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingBasketComponent } from './shopping/shopping-basket/shopping-basket.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { CustomersComponent } from './customers/customers.component';
import { LearningServicesComponent } from './learning-services/learning-services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material-module/material.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingBasketComponent,
    LoginComponent,
    HeaderComponent,
    CustomersComponent,
    LearningServicesComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
