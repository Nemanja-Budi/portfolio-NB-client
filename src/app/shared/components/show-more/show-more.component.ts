import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent {

  isShowen: boolean = false;

  @Input() showText: string = '';
  @Input() showTextLength: number = 0;
  
  onChangeShow(): void {
    this.isShowen = !this.isShowen;
  }

}
