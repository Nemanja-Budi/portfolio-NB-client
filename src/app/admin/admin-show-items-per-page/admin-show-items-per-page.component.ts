import { Component, Input, inject } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-show-items-per-page',
  templateUrl: './admin-show-items-per-page.component.html',
  styleUrls: ['./admin-show-items-per-page.component.css']
})
export class AdminShowItemsPerPageComponent {

  @Input() isUser: boolean = false;
  adminService: AdminService = inject(AdminService);
  itemsPerPage: number[] = [5,10,15];

  onChangeItemPerPage(item: number): void {
    if(!this.isUser) {
      this.adminService.memberQuearyParamsSubject.next({
        ...this.adminService.memberQuearyParamsSubject.value,
        pageNumber: 1,
        pageSize: item
      });
    } else {
      this.adminService.contactQuearyParamsSubject.next({
        ...this.adminService.contactQuearyParamsSubject.value,
        pageNumber: 1,
        pageSize: item
      });
    }
  }

  showItemsPerPage(itemsPerPage: string): void {
    if(this.isUser) return;
    if(itemsPerPage == '') {
      this.adminService.memberQuearyParamsSubject.next({
        ...this.adminService.memberQuearyParamsSubject.value,
        pageNumber: 1,
        pageSize: this.itemsPerPage[1]
      });
    } else {
      this.adminService.memberQuearyParamsSubject.next({
        ...this.adminService.memberQuearyParamsSubject.value,
        pageNumber: 1,
        pageSize: Number(itemsPerPage)
      });
    }
  }
}
