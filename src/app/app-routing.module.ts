import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './main/home/home.component';
import { AuthorizationGuard } from './shared/guards/authorization.guard';

const routes: Routes = [
  { path: 'main/home', component: HomeComponent },
  { path: 'main', loadChildren: () => import('./main/main.module').then(module => module.MainModule) },
  { path: 'account', loadChildren: () => import('./account/account.module').then(module => module.AccountModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule), canActivate: [AuthorizationGuard] },
  { path: '', redirectTo: 'main/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'main/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
