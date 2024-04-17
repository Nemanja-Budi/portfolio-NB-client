import { Component, OnInit, inject } from '@angular/core';
import { MainService } from '../main/main.service';
import { Observable } from 'rxjs';
import { Contact } from '../main/models/contact.model';
import { AdminService } from './admin.service';
import { Member } from './models/member.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  proba: boolean = false;

}
