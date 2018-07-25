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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductsComponent,
    LoginComponent,
    CheckoutComponent
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
        canActivate: [AdminAuthGuardService]
      }
    ])
  ],
  providers: [AuthService, AdminAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
