import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/components/home/home.component';
import { CategoryComponent } from './pages/components/category/category.component';
import { CartComponent } from './pages/components/cart/cart.component';
import { OfferComponent } from './pages/components/offer/offer.component';
import { SignupComponent } from './components/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';




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
        SignupComponent,
        LogoutComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        MatIconModule

    ],
    providers: [CookieService],
    bootstrap: [AppComponent],
})
export class AppModule { }
//git push cmds

// git add .
// git commit -m""
// git push -u origin main
//-------------json initial
//json-server --watch db.json
