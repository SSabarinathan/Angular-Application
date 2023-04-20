import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './pages/components/category/category.component';
import { CartComponent } from './pages/components/cart/cart.component';
import { OfferComponent } from './pages/components/offer/offer.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { BuyComponent } from './components/buy/buy.component';
import { SignupComponent } from './components/signup/signup.component';
import { RemoveCartComponent } from './components/remove-cart/remove-cart.component';
import { AuthInterceptor } from './auth.interceptor';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavBarComponent,
        FooterComponent,
        HomeComponent,
        CategoryComponent,
        CartComponent,
        OfferComponent,
        LoginComponent,
        LogoutComponent,
        BuyComponent,
        SignupComponent,
        RemoveCartComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule

    ],
    // providers: [AuthInterceptor ],

    // providers:[    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],


    bootstrap: [AppComponent],
})
export class AppModule { }


//git push cmds

// git add .
// git commit -m""
// git push -u origin main
//-------------json initial
//json-server --watch db.json
//-------------code coverage
//ng test --no-watch --code-coverage
//ng test
