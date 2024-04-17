import { Component, inject } from '@angular/core';

import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  accountService: AccountService = inject(AccountService);

  onLogout(): void {
    this.accountService.logout();
  }
}
