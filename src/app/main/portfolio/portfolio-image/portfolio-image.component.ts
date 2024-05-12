import { Component } from '@angular/core';

export type CustomImage = {
  id:number;
  name: string;
  img_src: string;
}


@Component({
  selector: 'app-portfolio-image',
  templateUrl: './portfolio-image.component.html',
  styleUrls: ['./portfolio-image.component.css']
})
export class PortfolioImageComponent {

  imageArray: CustomImage[] = [
    { id: 1, name: 'Login and All products page', img_src: 'assets/images/prva.png' },
    { id: 2, name: 'Warehouse page for browsing all products', img_src: 'assets/images/druga.png' },
    { id: 3, name: 'Admin page with CRUD operations', img_src: 'assets/images/treca.png' },
    { id: 4, name: 'Calculations page with updating warehouse inventory', img_src: 'assets/images/cetvrta.png' },
  ];
}
