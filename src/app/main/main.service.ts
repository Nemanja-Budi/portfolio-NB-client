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

  quearyParams: CustomQueryParamas = {
    filterOn: '',
    filterQuery: '',
    sortBy: '',
    isAscending: false,
    pageNumber: 1,
    pageSize: 3
  }

  quearyParamsSubject: BehaviorSubject<CustomQueryParamas> = new BehaviorSubject<CustomQueryParamas>(this.quearyParams);

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.quearyParamsSubject.pipe(
      switchMap(params => {
        console.log(params.isAscending);
        const options = {
          params: new HttpParams()
            .set('filterOn', params.filterOn || "")
            .set('filterQuery', params.filterQuery || "")
            .set('isAscending', params.isAscending)
            .set('pageNumber', params.pageNumber || 1)
            .set('pageSize', params.pageSize || 1) 
        };
        return this.http.get<Contact[]>(`${environment.appUrl}/contacts/get-contacts`, options);
      })
    );
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${environment.appUrl}/contacts/add-new-contact`, contact);
  }

  getContact(contactId: string): Observable<Contact> {
    return this.http.get<Contact>(`${environment.appUrl}/contacts/get-contact/${contactId}`);
  }

  // getContacts(): Observable<Contact[]> {
  //   return this.http.get<Contact[]>(`${environment.appUrl}/contacts/get-contacts`);
  // }

  deleteContact(contactId: string): Observable<Contact> {
    return this.http.delete<Contact>(`${environment.appUrl}/contacts/delete-contact/${contactId}`);
  }
}
