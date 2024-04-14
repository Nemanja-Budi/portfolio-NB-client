import { Component, inject } from '@angular/core';
import { MainService } from '../main.service';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  mainService: MainService = inject(MainService);

  contacts: Observable<Contact[]> = this.mainService.getContacts();

  onGetContact(contact_id: string): void {
    this.mainService.getContact(contact_id).subscribe({
      next: (response) => console.log(response)
    });
  }
}
