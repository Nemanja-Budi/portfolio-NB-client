import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserManagerComponent } from './admin-user-manager/admin-user-manager.component';
import { AdminContactManagerComponent } from './admin-contact-manager/admin-contact-manager.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent},
  { path: 'user-manager', component: AdminUserManagerComponent },
  { path: 'contact-manager', component: AdminContactManagerComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
