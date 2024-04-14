import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { take } from 'rxjs';

import { AccountService } from '../account.service';
import { User } from '../models/user.model';
import { Register } from '../models/register.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submited: boolean = false;
  errorMessages: string[] = [];

  accountService: AccountService = inject(AccountService);
  router: Router = inject(Router);

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    });
    this.accountService.user$.pipe(take(1)).subscribe({
      next: (user: User | null) => {
        if(user) {
          this.router.navigateByUrl('/');
        }
      }
    });
  }

  onRegister(): void {
    this.submited = true;
    this.errorMessages = [];

    if(!this.registerForm.valid) return;
    const newRegister = new Register(this.registerForm.value);

    this.accountService.register(newRegister).subscribe({
      next: (response: any) => {
        this.router.navigateByUrl('/account/login');
      },
      error: (error) => {
        if(error.error.errors) {
          this.errorMessages = error.error.errors;
        }
        else {
          this.errorMessages.push(error.error);
        }
      }
    });
  }
}
