import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './models/member.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`http://localhost:5257/api/admin/get-members`);
  }

  getRoles(): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:5257/api/admin/get-application-roles`);
  }
}
