import { Component } from '@angular/core';

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
  selector: 'app-about-courses',
  templateUrl: './about-courses.component.html',
  styleUrls: ['./about-courses.component.css']
})
export class AboutCoursesComponent {

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
}
