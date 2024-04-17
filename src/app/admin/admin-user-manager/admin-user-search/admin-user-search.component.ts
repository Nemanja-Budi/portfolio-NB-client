import { Component, inject } from '@angular/core';

import { AdminService } from '../../admin.service';

export type MemberSelect = {
  searchTerm: string;
  searchValue: string;
}

@Component({
  selector: 'app-admin-user-search',
  templateUrl: './admin-user-search.component.html',
  styleUrls: ['./admin-user-search.component.css']
})
export class AdminUserSearchComponent {

  adminService: AdminService = inject(AdminService);

  isAscending: boolean = true;
  placeHolderValue: string = 'username'
  selectValues: MemberSelect[] = [
    {searchTerm: "User name", searchValue: "username" },
    {searchTerm: "First name", searchValue: "firstname" },
    {searchTerm: "Last name", searchValue: "lastname" }
  ];

  onGetSearchMemberInput(searchMemberInput: string): void {
    this.adminService.memberQuearyParamsSubject.next({
      ...this.adminService.memberQuearyParamsSubject.value,
      filterQuery: searchMemberInput,
    });
  }

  onGetMemberSelect(memberSelect: string): void {
    this.placeHolderValue = memberSelect;
    this.adminService.memberQuearyParamsSubject.next({
      ...this.adminService.memberQuearyParamsSubject.value,
      filterOn: memberSelect,
      sortBy: memberSelect
    });
  }
  
  onChangeSortDirection(): void {
    this.isAscending = !this.isAscending;
    this.adminService.memberQuearyParamsSubject.next({
      ...this.adminService.memberQuearyParamsSubject.value,
      isAscending: this.isAscending
    });
  }
}
