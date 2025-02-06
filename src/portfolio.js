/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gabriel Moreira",
  title: "Hey, I'm Gabriel Moreira!",
  subTitle: emoji(
    "Developer specializing in system optimization and plugin development in Java, with experience in game servers and web platforms. Skilled in Docker, MySQL, WordPress, and SSH, delivering secure and scalable solutions. Currently in the 4th semester of Computer Science, focused on innovation and efficiency in projects."
  ),
  resumeLink:
    "https://drive.google.com/file/d/15z7DR-eHfTeIj1Gj3Z0avJLdzDZYm4IN/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GabrielMoreiradeSouza",
  linkedin: "https://www.linkedin.com/in/gabriel-moreira-de-souza-bb4289240/",
  gmail: "gmoreiradesouza19@gmail.com",
  gitlab: "https://gitlab.com/GabrielMoreiraS",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DEVELOPER FOCUSED ON CREATING INNOVATIVE AND SCALABLE SOLUTIONS",
  skills: [
    emoji(
      "⚡ Development of efficient and scalable plugins for Minecraft servers and other gaming platforms"
    ),
    emoji("⚡ Full-stack development with expertise in Node.js, React, and MySQL"),
    emoji(
      "⚡ Implementation and management of Dockerized environments and CI/CD pipelines using Jenkins"
    ),
    emoji(
      "⚡ Integration of third-party services like Redis, Firebase, AWS, and WordPress"
    ),
    emoji(
      "⚡ Design and optimization of user interfaces and experiences (UI/UX) using Figma and modern web technologies"
    )
  ],



  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
      {
        skillName: "docker",
        fontAwesomeClassname: "fab fa-docker"
      },
      {
        skillName: "git",
        fontAwesomeClassname: "fab fa-git"
      },
      {
        skillName: "nodejs",
        fontAwesomeClassname: "fab fa-node"
      },
      {
        skillName: "java",
        fontAwesomeClassname: "fab fa-java"
      },
      {
        skillName: "javascript",
        fontAwesomeClassname: "fab fa-js"
      },
      {
        skillName: "react",
        fontAwesomeClassname: "fab fa-react"
      },
      {
        skillName: "jenkins",
        fontAwesomeClassname: "fas fa-cogs"
      },
      {
        skillName: "redis",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "wordpress",
        fontAwesomeClassname: "fab fa-wordpress"
      },
      {
        skillName: "ui-ux-design",
        fontAwesomeClassname: "fas fa-pencil-ruler"
      },
      {
        skillName: "mysql",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "html",
        fontAwesomeClassname: "fab fa-html5"
      },
      {
        skillName: "css",
        fontAwesomeClassname: "fab fa-css3-alt"
      },
      {
        skillName: "figma",
        fontAwesomeClassname: "fab fa-figma"
      }
    ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Fractal",
      logo: require("./assets/images/Fractal.png"),
      subHeader: "High school",
      duration: "January 2017 - December 2020",
      desc: "Fractal is a distinguished private school, recognized for its high approval rates in entrance exams and an exceptional teaching staff. We offer quality education, focusing on the integral development of students, preparing them for academic and professional challenges.",
    },
    {
      schoolName: "PUC-GO",
      logo: require("./assets/images/PUC.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2022 - Current",
      desc: "PUC-GO is a higher education institution recognized as a reference in Computer Science, both in the state and throughout Brazil. With an updated curriculum and highly qualified professors, the university provides a solid and innovative education, preparing students for the challenges of the job market and the constant evolution of technology.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Proactive", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Communicative",
      progressPercentage: "90%"
    },
    {
      Stack: "Empathy",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Systems Analyst",
      company: "Job investimentos",
      companylogo: require("./assets/images/JOB.jpeg"),
      date: "November 2023 – November 2024",
      desc: "Experienced in Sênior ERP and Active Directory, managing user access, optimizing processes, and providing strategic support through tailored reports and communication enhancements.",
      descBullets: [
        "Managed user access and security using Active Directory",
        "Optimized internal processes and created custom rules in Sênior ERP",
        "Provided technical support and resolved enterprise communication issues",
        "Oversaw telecom management and delivered strategic insights through reports"
      ]
    },
    {
      role: "Software Engineer",
      company: "Futurium LTDA",
      companylogo: require("./assets/images/Futurium.png"),
      date: "Feb 2023 – Current",
      desc: "I work as a freelancer in the development and configuration of plugins in Java, focusing on solutions for game servers and websites. My skills include the use of technologies such as Docker for containerization, MySQL for data management, Redis for caching and data storage, and WordPress for website creation and configuration. I also perform server network analysis and use SSH for secure server management and maintenance.",
      descBullets: [
        "Development of plugins in Java",
        "Keeping Linux applications running and up to date",
        "Deployment of systems"
      ]
    },
    {
      role: "Attendant",
      company: "Açaí ao toque",
      companylogo: require("./assets/images/Acai.png"),
      date: "Jan 2020 – Nov 2020",
      desc: "Experience in customer service in a snack bar environment, where I developed essential skills in communication and interpersonal relationships. Responsible for welcoming and serving customers, taking orders, and ensuring their satisfaction. I enhanced my ability to interact with diverse personalities, providing quick and friendly service. This experience was crucial in strengthening my capability to work under pressure and as part of a team, always focusing on delivering excellent service."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ChatGPT.jpg"),
      projectName: "Chat GPT Style",
      projectDesc: "For now we only have a few themes, we count on the help of the community to facilitate the maintenance of the code and make our theme gallery more and more crowded.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/GabrielMoreiradeSouza/chatgpt-style"
        },
        {
          name: "Site",
          url: "https://chromewebstore.google.com/detail/chatgpt-style/ooefjbdchgdlfeigfhigjpffppdklnef?pli=1"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Sonic.jpg"),
      projectName: "Sonic Jump",
      projectDesc: "Basic game created using HTML, CSS, and JavaScript.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/GabrielMoreiradeSouza/Sonic-Jump.git"
        },
        {
          name: "Site",
          url: "https://gabrielmoreiradesouza.github.io/Sonic-Jump/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "JAVA Developer",
      subtitle:
        "Comprehensive and instructional course on Java and Object-Oriented Programming (OOP), covering UML, JDBC, JavaFX, Spring Boot, JPA, Hibernate, MySQL, and MongoDB. Ideal for those seeking a solid foundation in software development, combining theory and practice.",
      image: require("./assets/images/JAVA.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Final Project",
          url: ""
        }
      ]
    },
    {
      title: "Front End Developer",
      subtitle:
        "Origamid offers specialized courses for those looking to deepen their knowledge in Web Development and Interface Design. With a practical focus and updated content, the courses are structured to cater to everyone from beginners to professionals seeking to specialize in Front End and UX/UI Design.",
      image: require("./assets/images/Origamid.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Final Project",
          url: ""
        }
      ]
    },

    {
      title: "Spigot Developer",
      subtitle: "Course focused on creating plugins for Minecraft using Java. Covers events, commands, custom configuration, data storage in MySQL, coding best practices, and using GitHub for version control. It also reinforces Object-Oriented Programming concepts and features of Java 8.",
      image: require("./assets/images/SpigotMC.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1xEYKQLtEImeEc-gZjLlGPAHQ60HN2dRJ/view?usp=drive_link"},
        {
          name: "Final Project",
          url: "https://github.com/GabrielMoreiradeSouza/LandShield"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With a love for developing cool stuff, I enjoy always staying updated on the latest technologies and their changes.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://openai.com/news/",
      title: "The Future of AI: Innovations and Challenges",
      description:
        "Discover how AI is revolutionizing industries, enhancing human potential, and shaping the future of technology."
    },
    {
      url: "https://dev.to/",
      title: "Empowering Developers: Tips, Tools, and Trends",
      description:
        "Stay ahead in the dev world with the latest insights, best practices, and cutting-edge tools for modern software development."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Class conducted on Azure databases.",
      subtitle: "Class conducted in November 2024.",
      slides_url: "https://drive.google.com/file/d/1zaekHc9-IHOHfQjaDi_bqZKwdO0gtHo9/view?usp=drive_link",
      event_url: "https://www.pucgoias.edu.br/cursos/graduacao/ciencia-da-computacao/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Podcasts that I found interesting:",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/episode/7fM9SiNmZJgMNkfNuLYClk"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+55 (62) 98150-0233",
  email_address: "gmoreiradesouza19@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Gabriel41216870", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
