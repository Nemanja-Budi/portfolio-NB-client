import { Component, inject } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mainService: MainService = inject(MainService);
  homeAboutMe: string = `, with a strong desire for continuous improvement. I am working on enhancing my technical skills to deliver efficient and innovative solutions.`;

  onDownloadCV(): void {
    const cvUrl = `https://drive.google.com/file/d/1OfuH35E_EHfBS3lXE5uX-7FHUhdkNFNx/view?usp=drive_link`;
    window.open(cvUrl, '_blank');
  }


}
