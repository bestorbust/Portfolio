import { Component } from '@angular/core';


interface Education {
  logo:string;
  degree: string;
  university: string;
  duration: string;
  gpa: string;
  coursework: string[];
  minor: string;
}

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  title="Education";
  education: Education = {
    logo:'assets/images/rvu-logo.png',
    degree: 'Bachelor of Technology (Hons) in Computer Science',
    university: 'RV University',
    duration: '2024 - 2027',
    gpa: '9.2',
    coursework: ['DSA', 'OS', 'DBMS','DAA', 'Web Dev'],
    minor: 'Fintech'
  };
}
