import { Component, inject } from '@angular/core';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';
import { Member } from '../models/member.model';

@Component({
  selector: 'app-admin-user-manager',
  templateUrl: './admin-user-manager.component.html',
  styleUrls: ['./admin-user-manager.component.css']
})
export class AdminUserManagerComponent {

  adminService: AdminService = inject(AdminService);
  members: Observable<Member[]> = this.adminService.getMembers();

}
