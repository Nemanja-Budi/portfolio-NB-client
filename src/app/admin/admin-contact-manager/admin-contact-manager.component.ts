import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/main/main.service';
import { Contact } from 'src/app/main/models/contact.model';

@Component({
  selector: 'app-admin-contact-manager',
  templateUrl: './admin-contact-manager.component.html',
  styleUrls: ['./admin-contact-manager.component.css']
})
export class AdminContactManagerComponent {

  mainService: MainService = inject(MainService);
  contacts: Observable<Contact[]> = this.mainService.getContacts();
}
