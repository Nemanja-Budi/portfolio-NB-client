import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Contact } from './models/contact.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }
 
  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${environment.appUrl}/contacts/add-new-contact`, contact);
  }
  
}
