import { Component, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Contact } from 'src/app/main/models/contact.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-contact-manager',
  templateUrl: './admin-contact-manager.component.html',
  styleUrls: ['./admin-contact-manager.component.css']
})
export class AdminContactManagerComponent {

  adminService: AdminService = inject(AdminService);
  contactsLength!: number;
  contacts: Observable<Contact[]> = this.adminService.getContacts().pipe(map((contacts) => {
    this.contactsLength = contacts.length
    return contacts;
  }));
  isAscending: boolean = this.adminService.contactQuearyParamsSubject.value.isAscending;

  onChangeSortDirection(): void {
    this.isAscending = !this.isAscending;
    this.adminService.contactQuearyParamsSubject.next({
      ...this.adminService.contactQuearyParamsSubject.value,
      isAscending: this.isAscending
    });
  }

  onDeleteContact(contact_id: string): void {
    this.adminService.deleteContact(contact_id).subscribe({
      next: () => this.contacts = this.adminService.getContacts()
    });
  }
}
