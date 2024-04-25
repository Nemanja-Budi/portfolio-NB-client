import { Component, inject } from '@angular/core';

import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admin-contact-search',
  templateUrl: './admin-contact-search.component.html',
  styleUrls: ['./admin-contact-search.component.css']
})
export class AdminContactSearchComponent {

  adminService: AdminService = inject(AdminService);  

  onGetSearchContactInput(searchContactInput: string): void {

    this.adminService.isSearchContactChange.next(true);
    if(searchContactInput == '') {
      this.adminService.isSearchContactChange.next(false);
    }

    this.adminService.contactQuearyParamsSubject.next({
      ...this.adminService.contactQuearyParamsSubject.value,
      filterQuery: searchContactInput,
      pageNumber: 1
    });
  }
}
