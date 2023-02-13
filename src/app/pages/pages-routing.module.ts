import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';
import { OfferComponent } from './components/offer/offer.component';
import { LogoutComponent } from '../components/logout/logout.component';
import { SignupComponent } from '../components/signup/signup.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'cart', component: CartComponent, canActivate: [AuthGuardGuard] },
      { path: 'offer', component: OfferComponent },
      { path: 'items/:name', component: ItemListComponent },
      { path: 'item', component: ItemComponent ,canActivate:[AuthGuardGuard]},
      {path:'logout' , component : LogoutComponent},
      {path:'signup', component: SignupComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
