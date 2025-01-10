import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project{
  title:string;
  technologies:string[];
  description:string;
  githubLink:string;
  imageUrl?:string;
  demoLink?:string;
  liveLink?:string;
  articleLink?:string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  title = "My Projects";
  // selectedProjectIndex: number | null = null;

  technologyImages!: { [key: string]: string };  // Note the ! operator

  ngOnInit() {
    this.technologyImages = {
      'Flask': 'assets/images/flask.png',
      'MySQL': 'assets/images/mysql.png',
      'C':'assets/images/c.png',
      'HTML & CSS':'assets/images/html&css.png',
      'Java':'assets/images/java.png',
      'Netbeans':'assets/images/netbeans.png',
      'Sqlite3':'assets/images/sqlite3.png',
      'tKinter':'assets/images/tkinter.png',
      'Python':'assets/images/python.png',
      'JS':'assets/images/js.png',
      'HTML':'assets/images/html.png',
      'CSS':'assets/images/css.png',
      'WEB':'assets/images/html,css,js.jpg',
      'React':'assets/images/react.png',
      'jspdf':'assets/images/jspdf.png',
      'jdbc':'assets/images/jdbc.png',
      'Angular':'assets/images/angular.png',
      'ts':'assets/images/ts.png',
    };

  }


  projects: Project[] = [
    {
      title: "🎯 DevFolio: Modern Angular Portfolio",
      technologies: ["Angular", "ts", "HTML", "CSS"],
      description: "Built a responsive personal portfolio using Angular 16 to showcase my projects and skills. Features include dynamic component loading, smooth animations, and interactive project cards. Implemented TypeScript for type-safe code and used Angular's built-in features for efficient state management.",
      githubLink: "https://github.com/bestorbust/portfolio",
      liveLink: "https://priyatechspace.netlify.app/",
      imageUrl: "assets/images/portfolio.png",
    },
    {
      title: "🧾 Rent Receipt Generator",
      technologies: ["React","JS","HTML","CSS","jspdf"],
      description: "A React-based web application that generates professional rent receipts for PG/hostel management. Built with modern JavaScript libraries, it features a comprehensive form interface and generates branded PDF receipts with automated formatting and official stamps.",
      githubLink:"https://github.com/bestorbust/pdf-generator",
      liveLink:"https://genpdf.netlify.app/",
      imageUrl: "assets/images/rentrec.png",

    },
    {
      title: "💼 Resume",
      technologies: ["HTML","CSS","JS"],
      description: "A basic resume website created during my first semester of B.Tech to practice HTML and CSS. This project served as an introduction to web development and responsive design.",
      githubLink: "https://github.com/bestorbust/resume",
      liveLink:"https://bestorbust.github.io/Resume/",
      imageUrl: "assets/images/resume.png",
    },
    {
      title: "📊 ShopTrends: The Evolution of Online Shopping in 2019",
      technologies: ["Python"],
      description: "This project explores the dynamic growth of online shopping in 2019 through in-depth data analysis. By leveraging Python libraries such as Pandas and Matplotlib, the analysis uncovers key insights into consumer behavior, sales trends, and the rapid evolution of e-commerce platforms.The project provides a comprehensive view of the digital marketplace, showcasing patterns that have shaped modern online retail experiences.",
      githubLink: "https://github.com/bestorbust/online-shopping-trends-python",
      imageUrl: "assets/images/dap.png",
    },
    {
      title: "🌴 HeyHolidays: Advanced Travel Planning Platform",
      technologies: ["HTML","CSS","JS"],
      description: "A customizable frontend website template for hotel bookings, created using HTML, CSS, and JavaScript. This template comes with four different pages: the home page, booking page, hotel list page, and payment page. It is a solid open source template for a hotel booking site, offering dynamic features and great visuals.",
      githubLink: "https://github.com/bestorbust/HeyHolidays",
      imageUrl: "assets/images/heyholidays.png",
      liveLink:"https://bestorbust.github.io/HeyHolidays/",
    },
    {
      title: "🚗 AutoAccess: Car Accessory Management System",
      technologies: ["HTML & CSS","Flask","Sqlite3"],
      description: "The Car Accessory Management System is a Flask-based full-stack web application developed in my 2nd semester of B.Tech. The system allows users to register, browse car accessories, add items to the cart, place orders, and manage their profiles. It also includes an admin dashboard for managing customers, products, and orders with CRUD functionality. This project helped me gain hands-on experience in web development and backend programming.",
      githubLink: "https://github.com/bestorbust/CarAccessoryManagementSystem-Flask",
      imageUrl: "assets/images/car.png",
    },
    {
      title: "📚 Library Management System",
      technologies: ["Java","MySQL","jdbc","Netbeans"],
      description: "Developed a comprehensive Java-based Library Management System that automates core library operations through an intuitive desktop interface. The system streamlines book management, user authentication, and lending processes while providing real-time statistics and inventory tracking. Implemented robust security measures and role-based access control to ensure data integrity and secure operations.",
      githubLink: "https://github.com/bestorbust/https://github.com/bestorbust/library-management-system",
      imageUrl: "assets/images/lms.png",
    },
   
    {
      title: "⚡CPU Scheduling Simulator",
      technologies: ["C"],
      description: "A simulator developed in my 3rd semester of B.Tech to implement and visualize various CPU scheduling algorithms, including FCFS, SJF (Preemptive & Non-Preemptive), Priority (Preemptive & Non-Preemptive), and Round Robin. This project deepened my understanding of operating systems and scheduling concepts.",
      githubLink:"https://github.com/bestorbust/CPU-Scheduling",
      imageUrl: "assets/images/scheduling.png",

    },
    {
      title: "💰 Tkinter Personal Expenditure Tracker",
      technologies: ["Python","tKinter"],
      description: "A desktop application for tracking personal expenditures, allowing users to add, view, and analyze their daily spending habits. This project improved my knowledge of Python GUI development and database management.",
      githubLink:"https://github.com/bestorbust/tkinter-personal-expenditure",
      imageUrl: "assets/images/personalexpenditure.png",

    },
    {
      title: "🏥 Hospital Management System",
      technologies: ["HTML & CSS","Flask","Sqlite3"],
      description: "A web-based system for managing hospital operations, including patient registration, appointment scheduling, and billing. Admins can manage doctor schedules and patient records. This project provided hands-on experience in web development and Flask-based backend design.",
      githubLink:"https://github.com/bestorbust/hospital-management",
      // imageUrl: "assets/images/rentrec.png",

    },
    

  ];

  // toggleCard(index:number): void {
  //   this.selectedProjectIndex = this.selectedProjectIndex === index ? null : index;
  // }
  handleImageError(event: any) {
    event.target.src = 'assets/images/default-tech.png';
  }
  
}
