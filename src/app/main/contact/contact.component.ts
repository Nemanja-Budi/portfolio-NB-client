import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/account.service';
import { MainService } from '../main.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;
  submited: boolean = false;
  errorMessages: string[] = [];

  mainService: MainService = inject(MainService);
  router: Router = inject(Router);

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')]],
      message: ['', Validators.required]
    });

  }

  onContact(): void {
    if(!this.contactForm.valid) return;
    const newContact = new Contact(this.contactForm.value);
    this.mainService.createContact(newContact).subscribe({
      next: (response) => console.log(response)
    });
    console.log(newContact);
  }
}
