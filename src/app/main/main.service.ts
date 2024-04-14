import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './models/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`http://localhost:5267/api/contact/add-new-contact`, contact);
  }

  getContact(contactId: string): Observable<Contact> {
    return this.http.get<Contact>(`http://localhost:5267/api/contact/get-contact/${contactId}`);
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`http://localhost:5267/api/contact/get-contacts`);
  }
}
