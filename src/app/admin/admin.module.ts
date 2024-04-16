import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContactManagerComponent } from './admin-contact-manager/admin-contact-manager.component';
import { AdminUserManagerComponent } from './admin-user-manager/admin-user-manager.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserHasRoleDirective } from '../shared/directives/user-has-role.directive';



@NgModule({
  declarations: [
    AdminComponent,
    AdminUserManagerComponent,
    AdminContactManagerComponent,
    UserHasRoleDirective,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    
  ]
})
export class AdminModule { }
