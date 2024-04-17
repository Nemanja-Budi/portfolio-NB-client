import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './models/contact.model';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CustomQueryParamas } from '../shared/models/custom-queryparams.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

 
  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${environment.appUrl}/contacts/add-new-contact`, contact);
  }

  getContact(contactId: string): Observable<Contact> {
    return this.http.get<Contact>(`${environment.appUrl}/contacts/get-contact/${contactId}`);
  }

  // getContacts(): Observable<Contact[]> {
  //   return this.http.get<Contact[]>(`${environment.appUrl}/contacts/get-contacts`);
  // }

  
}
