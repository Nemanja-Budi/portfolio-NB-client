import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map } from 'rxjs';

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

  videoArray: VideoSRC[] = [
    { 
      id: 1, 
      video_src: 'assets/videos/2024-04-24 10-13-07.mkv', 
      video_detail: 'This video demonstrates the steps for logging into the application, adding products to the cart, managing product quantities, removing individual products from the cart, as well as clearing all products from the cart. Additionally, it showcases mechanisms that prevent adding products to the cart if they are currently out of stock or if the entered quantity exceeds the available quantity.'
    },
    { 
      id: 2, 
      video_src: 'assets/videos/2024-04-24 10-15-57.mkv',
      video_detail: '' 
    },
    { 
      id: 3, 
      video_src: 'assets/videos/2024-04-24 10-36-36.mkv',
      video_detail: '' },
    { 
      id: 4, 
      video_src: 'assets/videos/2024-04-24 10-54-33.mkv',
      video_detail: ''
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

  // ngOnInit(): void {
  //   this.activatedRoute.paramMap.pipe(concatMap((param) => {
  //     const id = param.get('id');
  //     return this.videoArray.find((video) => video.id == Number(id))
  //   }));
  // }
}
