import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  texts: string[] = ['Priya Darshini', 'Web Developer'];
  // displayedText: string = 'Priya Darshini';
  displayedText: string = this.texts[0];
  currentIndex: number = 0;

  ngOnInit(): void {
    this.startTextLoop();
  }

  startTextLoop(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      this.displayedText = this.texts[this.currentIndex];
    }, 2000); 
  }
  profilePath:string ='assets/images/profile.jpg';
  displayedText: string = 'Priyadarshini P';
  isPriyadarshini: boolean = true;
  ngOnInit() {
    setInterval(() => {
      this.isPriyadarshini = !this.isPriyadarshini;
      this.displayedText = this.isPriyadarshini
        ? 'Priyadarshini P'
        : 'Web Developer';
    }, 5000);
  }

  // ngOnInit() {
  //   setInterval(() => {
  //     this.isPriyadarshini = !this.isPriyadarshini;
  //     this.displayedText = this.isPriyadarshini
  //       ? 'Priyadarshini P'
  //       : 'Web Developer';
  //   }, 2000);
  // }

}
