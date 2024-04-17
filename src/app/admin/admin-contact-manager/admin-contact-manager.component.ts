import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/main/models/contact.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-contact-manager',
  templateUrl: './admin-contact-manager.component.html',
  styleUrls: ['./admin-contact-manager.component.css']
})
export class AdminContactManagerComponent {

  adminService: AdminService = inject(AdminService);
  contacts: Observable<Contact[]> = this.adminService.getContacts();
  isAscending: boolean = this.adminService.quearyParamsSubject.value.isAscending;

  onChangeSortDirection(): void {
    this.isAscending = !this.isAscending;
    this.adminService.quearyParamsSubject.next({
      ...this.adminService.quearyParamsSubject.value,
      isAscending: this.isAscending
    });
  }

  onDeleteContact(contact_id: string): void {
    this.adminService.deleteContact(contact_id).subscribe({
      next: () => this.contacts = this.adminService.getContacts()
    });
  }
}
