import { Component } from '@angular/core';

type CustomSkills = {
  name: string;
  progressValue: number;
}

@Component({
  selector: 'app-about-skils',
  templateUrl: './about-skils.component.html',
  styleUrls: ['./about-skils.component.css']
})
export class AboutSkilsComponent {

  maxProgressValue: number = 10;

  frontEndSkills: CustomSkills[] = [
    { name: 'HTML 5', progressValue: 10 },
    { name: 'CSS 3', progressValue: 7 },
    { name: 'Sass', progressValue: 7 },
    { name: 'Tailwind', progressValue: 9 },
    { name: 'Javascript', progressValue: 7 },
    { name: 'Typescript', progressValue: 8 },
    { name: 'Angular', progressValue: 8 },
    { name: 'Rxjs', progressValue: 7 },
  ];

  backEndSkills: CustomSkills[] = [
    { name: 'C#', progressValue: 6 },
    { name: 'SQL Server', progressValue: 7 },
    { name: 'Firebase', progressValue: 7 },
    { name: 'Entity Framework Core', progressValue: 6 },
    { name: 'ASP.NET Core Web API', progressValue: 6 },
  ];

}
