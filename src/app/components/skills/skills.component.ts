import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// import image from '../../../'
interface Technology {
  name:string;
  logo:string;
}
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})


export class SkillsComponent implements OnInit {
  title:string="SKILLS";
  technologies: Technology[] = [
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'TypeScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },

    {
      name: 'Java',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
      name: 'HTML',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'MySQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      name: 'Linux',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
    },
    ];
    constructor() { }
    ngOnInit(): void {
        console.log('ngOnInit called');
    }
}
