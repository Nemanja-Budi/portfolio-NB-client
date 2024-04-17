import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  onDownloadCV(): void {
    const cvUrl = `https://drive.google.com/file/d/1OfuH35E_EHfBS3lXE5uX-7FHUhdkNFNx/view?usp=drive_link`;
    window.open(cvUrl, '_blank');
  }
}
