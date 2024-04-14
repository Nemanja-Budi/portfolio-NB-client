import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AuthorizationGuard } from './shared/guards/authorization.guard';
import { AdminComponent } from './main/admin/admin.component';

const routes: Routes = [
  { path: 'main/home', component: HomeComponent },
  { path: 'main', loadChildren: () => import('./main/main.module').then(module => module.MainModule)},
  { path: 'account', loadChildren: () => import('./account/account.module').then(module => module.AccountModule)},
  { path: 'admin', component: AdminComponent, canActivate: [AuthorizationGuard] },
  // {
  //   path: '',
  //   runGuardsAndResolvers: 'always',
  //   canActivate: [AuthorizationGuard],
  //   children: [
  //     { path: 'admin', component: AdminComponent }
  //   ]
  // },
  { path: '', redirectTo: 'main/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'main/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
