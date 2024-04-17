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
    this.adminService.quearyParamsSubject.next({
      ...this.adminService.quearyParamsSubject.value,
      filterQuery: searchContactInput,
    });
  }
}
