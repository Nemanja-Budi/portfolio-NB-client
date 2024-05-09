import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from 'src/app/account/account.service';
import { jwtDecode } from 'jwt-decode';
import { Observable, map, take, tap } from 'rxjs';
import { User } from 'src/app/account/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.accountService.user$.pipe(
      take(1),
      map(user => {
        if (user) {
          const decodedToken: any = jwtDecode(user.jwt);
          console.log('Decoded token:', decodedToken);
          // Provera da li korisnik ima ulogu admina
          if (decodedToken && decodedToken.role && Array.isArray(decodedToken.role)) {
            const isAdmin = decodedToken.role.some((role:string) => role.toLowerCase() === 'admin');
            if (isAdmin) {
              console.log('Admin authenticated.');
              return true; // Dozvoli pristup ako korisnik ima ulogu admina
            } else {
              console.log('Unauthorized access: not an admin.');
              this.router.navigate(['/admin']); // Preusmeri korisnika na stranicu zabranjenog pristupa ako nema odgovarajuću ulogu
              return false; // Zabrani pristup
            }
          } else {
            console.log('Unauthorized access: no role found.');
            this.router.navigate(['/admin']); // Preusmeri korisnika na stranicu zabranjenog pristupa ako nema odgovarajuću ulogu
            return false; // Zabrani pristup
          }
        } else {
          console.log('User not authenticated. Redirecting to login page.');
          this.router.navigate(['/account/login']); // Preusmeri korisnika na stranicu za prijavu ako nije prijavljen
          return false; // Zabrani pristup
        }
      })
    );
  }
}
