import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { ErrorPageComponent } from './pages/components/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((p) => p.PagesModule),
  },
  {
    path: 'login',
    component: LoginComponent,canActivate: [LoginGuard],
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
