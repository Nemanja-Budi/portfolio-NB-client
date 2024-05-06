import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-contact-social-media',
  templateUrl: './contact-social-media.component.html',
  styleUrls: ['./contact-social-media.component.css']
})
export class ContactSocialMediaComponent {

  mainService: MainService = inject(MainService);
}
