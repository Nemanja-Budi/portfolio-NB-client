import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContactManagerComponent } from './admin-contact-manager/admin-contact-manager.component';
import { AdminUserManagerComponent } from './admin-user-manager/admin-user-manager.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserHasRoleDirective } from '../shared/directives/user-has-role.directive';
import { AdminContactSearchComponent } from './admin-contact-manager/admin-contact-search/admin-contact-search.component';
import { AdminUserSearchComponent } from './admin-user-manager/admin-user-search/admin-user-search.component';
import { AdminEditMemberComponent } from './admin-user-manager/admin-edit-member/admin-edit-member.component';
import { AccountModule } from '../account/account.module';
import { AdminContactPaganationComponent } from './admin-contact-manager/admin-contact-paganation/admin-contact-paganation.component';




@NgModule({
  declarations: [
    AdminComponent,
    AdminUserManagerComponent,
    AdminContactManagerComponent,
    UserHasRoleDirective,
    AdminContactSearchComponent,
    AdminUserSearchComponent,
    AdminEditMemberComponent,
    AdminContactPaganationComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AccountModule
  ],
  exports: [UserHasRoleDirective]
})
export class AdminModule { }
