import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  isShowen: boolean = false;

  aboutMeText: string = `The possibilities offered by web development inspire me, driving my active pursuit of a career in this dynamic field. I am dedicated to continuous improvement, expanding my skills to deliver innovative and efficient solutions.
    My commitment to advancing as a web developer is profound. Recognizing the demand for ongoing learning in the technology industry, I focus on acquiring the knowledge and experience essential for success in this dynamic environment.
    I relish the challenges inherent in web development, eagerly anticipating opportunities for growth and advancement. I am motivated by my aspiration to create intuitive, inspiring web applications that enhance user experiences and contribute to business success.
    My passion for programming fuels my visionary approach to web application development. I am dedicated to continuously improving my skills and actively seek opportunities to contribute to innovative projects and teams.`;

  expirianceText: string = `I do not have professional experience as a web developer yet, 
    but I am dedicated to learning and improving every day. 
    I am actively studying front-end and back-end technologies, 
    building projects, and expanding my skills to achieve my goal of becoming a proficient web developer`;

  onChangeShow(): void {
    this.isShowen = !this.isShowen;
  }

}
