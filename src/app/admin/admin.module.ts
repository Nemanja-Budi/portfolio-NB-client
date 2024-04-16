import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContactManagerComponent } from './admin-contact-manager/admin-contact-manager.component';
import { AdminUserManagerComponent } from './admin-user-manager/admin-user-manager.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminUserManagerComponent,
    AdminContactManagerComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
