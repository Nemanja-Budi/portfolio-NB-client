import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  accountService: AccountService = inject(AccountService);
  
  isOpen: boolean = false;

  constructor(private router: Router,private elementRef: ElementRef) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isOpen = false;
      }
    });
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target as Node);
    if (!clickedInside && this.isOpen) {
      this.isOpen = false;
    }
  }

  onLogout(): void {
    this.accountService.logout();
  }

  onToggleNavBar(): void {
    this.isOpen = !this.isOpen;
  }
}
