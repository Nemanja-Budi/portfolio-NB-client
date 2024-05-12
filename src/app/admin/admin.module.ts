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
import { AdminUserPaganationComponent } from './admin-user-manager/admin-user-paganation/admin-user-paganation.component';
import { AdminShowItemsPerPageComponent } from './admin-show-items-per-page/admin-show-items-per-page.component';
import { SharedModule } from "../shared/shared.module";
import { AdminContactTableComponent } from './admin-contact-manager/admin-contact-table/admin-contact-table.component';
import { AdminUserTableComponent } from './admin-user-manager/admin-user-table/admin-user-table.component';


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
        AdminUserPaganationComponent,
        AdminShowItemsPerPageComponent,
        AdminContactTableComponent,
        AdminUserTableComponent,
    ],
    exports: [UserHasRoleDirective],
    imports: [
        CommonModule,
        AdminRoutingModule,
        AccountModule,
        SharedModule
    ]
})
export class AdminModule { }
