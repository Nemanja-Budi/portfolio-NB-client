import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';



@NgModule({
  declarations: [ValidationMessagesComponent],
  imports: [
    CommonModule,
  ],
  exports: [ValidationMessagesComponent]
})
export class SharedModule { }
