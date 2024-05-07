import { Component, inject } from '@angular/core';
import { MainService } from '../main.service';

export type CustomVideo = {
  name: string;
  img_src: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  mainService: MainService = inject(MainService);

  // videoArray: string[] = [
  //   'assets/videos/2024-04-24 10-13-07.mkv',
  //   'assets/videos/2024-04-24 10-15-57.mkv',
  //   'assets/videos/2024-04-24 10-36-36.mkv',
  //   'assets/videos/2024-04-24 10-54-33.mkv'
  // ];

  videoArray: CustomVideo[] = [
    { name: 'Login and All products page', img_src: 'assets/images/prva.png' },
    { name: 'Warehouse page for browsing all products', img_src: 'assets/images/druga.png' },
    { name: 'Admin page with CRUD operations', img_src: 'assets/images/treca.png' },
    { name: 'Calculations page with updating warehouse inventory', img_src: 'assets/images/cetvrta.png' },
  ];

  isShowen: boolean = false;
  isOpen: boolean = false;

  aboutProject: string = `
    This project has been created for demonstration purposes to showcase my abilities and provide practical insight into my work.
    It is designed for use via web browsers, and I have used Angular 16 to create the user interface. 
    For the complete backend solution, I opted for Firebase, implementing authentication, real-time database, and Firestore. 
    This project represents just the beginning, given my ambition to continue learning and expanding my skills in the future. 
    I plan to further refine and develop more advanced projects that reflect my professional growth.
  `;

  onChangeShow(): void {
    this.isShowen = !this.isShowen;
  }

  onShowMore(): void {
    this.isOpen = !this.isOpen
  }

  
  
}
