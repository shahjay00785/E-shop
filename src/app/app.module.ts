import { CategoriesService } from './shared/categories.service';
import { AuthGuardService } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddProductsComponent } from './add-products/add-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductsComponent,
    LoginComponent,
    CheckoutComponent,
    AddProductsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firbase),
    NgbModule.forRoot(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'check-out',
        component: CheckoutComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'add-products',
        component: AddProductsComponent
      }
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
