import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MainService } from '../../main.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactForm: FormGroup;
  submited: boolean = false;
  errorMessages: string[] = [];
  name: string = '';
  mainService: MainService = inject(MainService);
  router: Router = inject(Router);

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nameOfCompany: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')]],
      message: ['', Validators.required]
    });

  }

  onContact(sucessModal: HTMLDialogElement): void {
    if(!this.contactForm.valid) return;
    const newContact = new Contact(this.contactForm.value);
    this.mainService.createContact(newContact).subscribe({
      next: (response) => {
        console.log(response);
        sucessModal?.showModal();
        this.name = response.nameOfCompany;
        this.contactForm.reset();
        setTimeout(() => {
          sucessModal?.close();
        }, 5000);
      }
    });
    console.log(newContact);
  }

  onCloseModal(sucessModal: HTMLDialogElement): void {
    sucessModal?.close();
  }

  
}
