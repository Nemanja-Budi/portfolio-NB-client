import { Component } from '@angular/core';

@Component({
  selector: 'app-about-additional-skills',
  templateUrl: './about-additional-skills.component.html',
  styleUrls: ['./about-additional-skills.component.css']
})
export class AboutAdditionalSkillsComponent {

  additionalSkills: string [] = ['Git', 'Github', 'Angular CLI', 'Windows CMD', 'Linux Bash', 'Visual Studio Code', 'Visual Studio','Postman'];

}
