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
  memberToDelete: Member | undefined;
  modalDialog: HTMLDialogElement | undefined;
  members: Observable<Member[]> = this.adminService.getMembers().pipe(map((members) => {
    this.membersLength = members.length
    return members;
  }));

  onDeleteUser(editUser: HTMLDialogElement, member_id: string): void {
    editUser.showModal();
    this.findMember(member_id).subscribe({
      next: (member) => {
        if(!member) return;
        this.memberToDelete = member;
        this.modalDialog = editUser;
      }
    });
  }

  onConfirm(): void {
    if(this.memberToDelete) {
      this.adminService.deleteMember(this.memberToDelete.id).subscribe({
        next: () => {
          this.members = this.adminService.getMembers();
          this.modalDialog?.close();
        }
      });
    }
  }

  onCloseModal(): void {
    this.modalDialog?.close();
  }

  onLockMember(member_id: string): void {
    this.adminService.lockMember(member_id).subscribe({
      next: () => this.members = this.adminService.getMembers()
    });
  }

  onUnlockMember(member_id: string): void {
    this.adminService.unlockMember(member_id).subscribe({
      next: () => this.members = this.adminService.getMembers()
    });
  }

  private findMember(id: string): Observable<Member | undefined> {
    return this.members.pipe(
      map((members: Member[]) => {
        const foundMember = members.find((member) => member.id === id);
        return foundMember ? foundMember : undefined;
      })
    );
  }

}
