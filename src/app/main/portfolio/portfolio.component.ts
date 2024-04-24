import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  isShowen: boolean = false;
  isOpen: boolean = false;

  aboutProject: string = `
  This project has been created for demonstration purposes to showcase my abilities and provide practical insight into my work. It is designed for use via web browsers, and I have used Angular 16 to create the user interface. For the complete backend solution, I opted for Firebase, implementing authentication, real-time database, and Firestore. This project represents just the beginning, given my ambition to continue learning and expanding my skills in the future. I plan to further refine and develop more advanced projects that reflect my professional growth.`;

  onChangeShow(): void {
    this.isShowen = !this.isShowen;
  }

  onShowMore(): void {
    this.isOpen = !this.isOpen
  }

  
}
