import { Component, inject } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admin-contact-paganation',
  templateUrl: './admin-contact-paganation.component.html',
  styleUrls: ['./admin-contact-paganation.component.css']
})
export class AdminContactPaganationComponent {

  adminService: AdminService = inject(AdminService);
  currentPage: number = this.adminService.contactQuearyParamsSubject.value.pageNumber;

  visiblePages(): number[] {
    const maxPagesToShow = 3;
    const startPage = Math.max(1, this.adminService.contactQuearyParamsSubject.value.pageNumber - 1);
    const endPage = Math.min(this.adminService.currentSize.value, startPage + maxPagesToShow - 1);
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage);
  }
  
  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePage(this.currentPage);
  }

  goToFirstPage(): void {
    this.currentPage = 1;
    this.updatePage(this.currentPage);
  }

  goToLastPage(): void {
    this.currentPage = this.adminService.currentSize.value
    this.updatePage(this.currentPage);
  }

  goToPreviousPage(): void {
    if (this.adminService.contactQuearyParamsSubject.value.pageNumber > 1) {
      this.adminService.contactQuearyParamsSubject.value.pageNumber--;
      this.updatePage(this.adminService.contactQuearyParamsSubject.value.pageNumber);
    }
  }

  goToNextPage(): void {
    if (this.adminService.contactQuearyParamsSubject.value.pageNumber < this.adminService.currentSize.value) {
      this.adminService.contactQuearyParamsSubject.value.pageNumber++;
      this.updatePage(this.adminService.contactQuearyParamsSubject.value.pageNumber);
    }
  }

  private updatePage(page: number) {
    return this.adminService.contactQuearyParamsSubject.next({
      ...this.adminService.contactQuearyParamsSubject.value,
      pageNumber: page
    });
  }
}
