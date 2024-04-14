import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './account/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client-portfolio';

  accountService: AccountService = inject(AccountService);

  private refreshUser(): void {
    const jwt = this.accountService.getJWT();
    if(jwt) {
      this.accountService.refreshUser(jwt).subscribe({
        next: _ => {},
        error: _ => {
          this.accountService.logout()
        }
      });
    } else {
      this.accountService.refreshUser(null).subscribe();
    }
  }

  ngOnInit(): void {
    this.refreshUser();
  }
 
}