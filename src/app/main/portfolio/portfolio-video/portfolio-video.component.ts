import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export type VideoSRC = {
  id: number;
  video_src: string;
  video_detail: string;
}

@Component({
  selector: 'app-portfolio-video',
  templateUrl: './portfolio-video.component.html',
  styleUrls: ['./portfolio-video.component.css']
})
export class PortfolioVideoComponent implements OnInit {

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  videoArray: VideoSRC[] = [
    { 
      id: 1, 
      video_src: 'assets/videos/2024-04-24 10-13-07.mkv', 
      video_detail: 'This video demonstrates the steps for logging, adding products to the cart, managing product quantities, removing individual products from the cart, as well as clearing all products from the cart. Additionally, it showcases mechanisms that prevent adding products to the cart if they are currently out of stock or if the entered quantity exceeds the available quantity.'
    },
    { 
      id: 2, 
      video_src: 'assets/videos/2024-04-24 10-15-57.mkv',
      video_detail: 'In this video, you can see how products can be filtered by name, as well as how you can navigate from one page to another. Additionally, the red-colored row indicates that the product is currently out of stock.' 
    },
    { 
      id: 3, 
      video_src: 'assets/videos/2024-04-24 10-36-36.mkv',
      video_detail: 'This video showcases the admin page, where all products can be viewed. Additionally, on this page, you can create new products, remove or edit existing ones. Furthermore, you can observe how, after any CRUD operation, the user interface automatically updates to reflect the latest state' },
    { 
      id: 4, 
      video_src: 'assets/videos/2024-04-24 10-54-33.mkv',
      video_detail: 'This video demonstrates how, upon the arrival of new inventory, calculations can be performed, automatically updating the existing quantities for each item as they are added'
    }
  ];

  video: VideoSRC | undefined;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (param) => {
        const id = param.get('id');
        this.video = this.videoArray.find((video) => video.id == Number(id));
      }
    });
  }

  onGetKlik(video_id: number): void {
    if(video_id >= 1 && video_id < 4) {
      video_id++;
    }
    else if(video_id == 4) {
      video_id = 1;
    }
    this.video = this.videoArray.find((video) => video.id == video_id);
    this.router.navigate([`/main/portfolio/video/${video_id}`]);
  }

}
