import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/components/home/home.component';
import { CategoryComponent } from './pages/components/category/category.component';
import { AboutComponent } from './pages/components/about/about.component';
import { CartComponent } from './pages/components/cart/cart.component';
import { OfferComponent } from './pages/components/offer/offer.component';
import { SignupComponent } from './components/login/login.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavBarComponent,
        FooterComponent,
        HomeComponent,
        CategoryComponent,
        AboutComponent,
        CartComponent,
        OfferComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
