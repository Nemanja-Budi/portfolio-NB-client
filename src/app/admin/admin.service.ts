import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Member } from './models/member.model';
import { Contact } from '../main/models/contact.model';
import { CustomQueryParamas } from '../shared/models/custom-queryparams.model';
import { environment } from 'src/environments/environment.development';
import { MemberAddEdit } from './models/member-add-edit';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  contactsQuearyParams: CustomQueryParamas = {
    filterOn: 'NameOfCompany',
    filterQuery: '',
    sortBy: 'NameOfCompany',
    isAscending: true,
    pageNumber: 1,
    pageSize: 5
  }

  memberQuearyParams: CustomQueryParamas = {
    filterOn: 'firstname',
    filterQuery: '',
    sortBy: 'firstname',
    isAscending: true,
    pageNumber: 1,
    pageSize: 5
  }

  contactQuearyParamsSubject: BehaviorSubject<CustomQueryParamas> = new BehaviorSubject<CustomQueryParamas>(this.contactsQuearyParams);
  memberQuearyParamsSubject: BehaviorSubject<CustomQueryParamas> = new BehaviorSubject<CustomQueryParamas>(this.memberQuearyParams);
  
  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.memberQuearyParamsSubject.pipe(
      switchMap(params => {
        const options = {
          params: new HttpParams()
            .set('filterOn', params.filterOn || "")
            .set('filterQuery', params.filterQuery || "")
            .set('sortBy', params.sortBy || "")
            .set('isAscending', params.isAscending)
            .set('pageNumber', params.pageNumber || 1)
            .set('pageSize', params.pageSize || 5) 
        };
        return this.http.get<Member[]>(`${environment.appUrl}/admin/get-members`, options);
      })
    );
  }

  getMember(id: string) {
    return this.http.get<MemberAddEdit>(`${environment.appUrl}/admin/get-member/${id}`);
  }

  addEditMember(memberAddEdit: MemberAddEdit) {
    return this.http.post(`${environment.appUrl}/admin/add-edit-member`, memberAddEdit);
  }

  lockMember(member_id: string) {
    return this.http.put(`${environment.appUrl}/admin/lock-member/${member_id}`, {});
  }

  unlockMember(member_id: string) {
    return this.http.put(`${environment.appUrl}/admin/unlock-member/${member_id}`, {});
  }

  deleteMember(member_id: string) {
    return this.http.delete(`${environment.appUrl}/admin/delete-member/${member_id}`, {});
  }

  getContacts(): Observable<Contact[]> {
    return this.contactQuearyParamsSubject.pipe(
      switchMap(params => {
        const options = {
          params: new HttpParams()
            .set('filterOn', params.filterOn || "")
            .set('filterQuery', params.filterQuery || "")
            .set('sortBy', params.sortBy || "")
            .set('isAscending', params.isAscending)
            .set('pageNumber', params.pageNumber || 1)
            .set('pageSize', params.pageSize || 5) 
        };
        return this.http.get<Contact[]>(`${environment.appUrl}/contacts/get-contacts`, options);
      })
    );
  }

  deleteContact(contactId: string): Observable<Contact> {
    return this.http.delete<Contact>(`${environment.appUrl}/contacts/delete-contact/${contactId}`);
  }

  getContact(contactId: string): Observable<Contact> {
    return this.http.get<Contact>(`${environment.appUrl}/contacts/get-contact/${contactId}`);
  }

  getRoles(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.appUrl}/admin/get-application-roles`);
  }

}
