import { Component, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Contact } from 'src/app/main/models/contact.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admin-contact-table',
  templateUrl: './admin-contact-table.component.html',
  styleUrls: ['./admin-contact-table.component.css']
})
export class AdminContactTableComponent {

    adminService: AdminService = inject(AdminService);

    contactToDelete: Contact | undefined;
    deleteModalDialog: HTMLDialogElement | undefined;
    contactToShow: Contact = new Contact();
    contactsLength!: number;
    isAscending: boolean = this.adminService.contactQuearyParamsSubject.value.isAscending;
  
    contacts: Observable<Contact[]> = this.adminService.getContacts().pipe(map((contacts) => {
      this.contactsLength = contacts.totalCount
      return contacts.contacts;
    }));
  
    onChangeSortDirection(): void {
      this.isAscending = !this.isAscending;
      this.adminService.contactQuearyParamsSubject.next({
        ...this.adminService.contactQuearyParamsSubject.value,
        isAscending: this.isAscending
      });
    }
  
    onConfirm(): void {
      if(this.contactToDelete) {
        this.adminService.deleteContact(this.contactToDelete.id).subscribe({
          next: () => {
            this.contacts = this.adminService.getContacts().pipe(map((contacts) => contacts.contacts));
            this.adminService.contactQuearyParamsSubject.next({
              ...this.adminService.contactQuearyParamsSubject.value,
              pageNumber: 1
            });
            this.deleteModalDialog?.close();
          }
        });
      }
    }
  
    onCloseDeleteModal(): void {
      this.deleteModalDialog?.close();
    }

    onCloseMessageModal(messageModal: HTMLDialogElement): void {
      messageModal?.close();
    }
  
    onDeleteContact(deletedContact: HTMLDialogElement, contact_id: string): void {
      deletedContact.showModal();
      this.findContact(contact_id).subscribe({
        next: (contact) => {
          if(!contact) return;
          this.contactToDelete = contact;
          this.deleteModalDialog = deletedContact;
        }
      });
    }

    openMessageModal(messageModal:HTMLDialogElement, id: string ): void {
      messageModal.showModal();
      this.findContact(id).subscribe({
        next:(response) => {
          if(!response) return undefined;
          this.contactToShow = response;
        }
      });
    }
  
    private findContact(id: string): Observable<Contact | undefined> {
      return this.contacts.pipe(
        map((contacts: Contact[]) => {
          const foundContact = contacts.find((contact) => contact.id === id);
          return foundContact ? foundContact : undefined;
        })
      );
    }
}
