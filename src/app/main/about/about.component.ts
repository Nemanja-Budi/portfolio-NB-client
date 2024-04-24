import { Component } from '@angular/core';

type CustomSkills = {
  name: string;
  progressValue: number;
}

type CustomUdemyCourses = {
  name: string;
  link: string;
}

type CustomOtherCourses = {
  headline: string;
  name: string;
  link: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  maxProgressValue: number = 10;
  isShowen: boolean = false;

  additionalSkills: string [] = ['Git', 'Github', 'Angular CLI', 'Windows CMD', 'Linux Bash', 'Visual Studio Code', 'Visual Studio','Postman'];
  
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

  udemyCourses: CustomUdemyCourses[] = [
    { name: 'Javascript', link: 'https://www.udemy.com/course/the-complete-javascript-course'},
    { name: 'Angular', link: 'https://www.udemy.com/course/the-complete-guide-to-angular-2'},
    { name: '.NET', link: 'https://www.udemy.com/course/build-rest-apis-with-aspnet-core-web-api-entity-framework'},
    { name: 'Angular and .NET', link: 'https://www.udemy.com/course/aspnet-core-identity-with-angular-jwt-email-confirmation'},
  ];

  otherCourses: CustomOtherCourses[] = [
    { headline: 'FTN - Informatika', name: 'Frontend Web Development', link: 'https://ftninformatika.com/kursevi/front-end-development'},
    { headline: 'Codecademy', name: 'C#', link: 'https://www.codecademy.com/enrolled/courses/learn-c-sharp'},
    { headline: 'freeCodeCamp', name: 'Responsive Web Design', link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design'},
  ];

  aboutMeText: string = `The possibilities offered by web development inspire me, driving my active pursuit of a career in this dynamic field. I am dedicated to continuous improvement, expanding my skills to deliver innovative and efficient solutions.
    My commitment to advancing as a web developer is profound. Recognizing the demand for ongoing learning in the technology industry, I focus on acquiring the knowledge and experience essential for success in this dynamic environment.
    I relish the challenges inherent in web development, eagerly anticipating opportunities for growth and advancement. I am motivated by my aspiration to create intuitive, inspiring web applications that enhance user experiences and contribute to business success.
    My passion for programming fuels my visionary approach to web application development. I am dedicated to continuously improving my skills and actively seek opportunities to contribute to innovative projects and teams.`;

  onChangeShow(): void {
    this.isShowen = !this.isShowen;
  }

}
