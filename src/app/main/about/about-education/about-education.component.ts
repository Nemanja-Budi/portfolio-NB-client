import { Component } from '@angular/core';

type CustomEducation = {
  name: string;
  studyProgram: string;
}

@Component({
  selector: 'app-about-education',
  templateUrl: './about-education.component.html',
  styleUrls: ['./about-education.component.css']
})
export class AboutEducationComponent {

  educationArray: CustomEducation[] = [
    { name: 'Srednja tehnička škola Nikola Tesla', studyProgram: 'Elektrotehničar računara 2011 - 2015' },
    { name: 'Fakultet tehničkih nauka u Novom Sadu', studyProgram: 'Energetika elektronika i telekomunikacije 2015 -' },
  ];
}
