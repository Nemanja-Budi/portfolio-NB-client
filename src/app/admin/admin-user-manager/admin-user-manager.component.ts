import { Component, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { AdminService } from '../admin.service';
import { Member } from '../models/member.model';

@Component({
  selector: 'app-admin-user-manager',
  templateUrl: './admin-user-manager.component.html',
  styleUrls: ['./admin-user-manager.component.css']
})
export class AdminUserManagerComponent {

  membersLength!: number;
  adminService: AdminService = inject(AdminService);
  members: Observable<Member[]> = this.adminService.getMembers().pipe(map((members) => {
    this.membersLength = members.length
    return members;
  }));

}
