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
  title: "Hello everyone, my name is Gabriel!",
  subTitle: emoji(
    "Since my childhood, my fascination with technology has been shaped by inspiring examples of family members immersed in this universe. Currently, I am pursuing my path in the Computer Science course, constantly nurturing my passion for innovation and learning. I am in constant pursuit of challenges that allow me to enhance my skills and contribute to technological progress. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GabrielMoreiradeSouza",
  linkedin: "https://www.linkedin.com/in/gabriel-moreira-de-souza-bb4289240/",
  gmail: "gmoreiradesouza19@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technologies",
  subTitle: "Main technologies:",
  skills: [
    emoji(
      "⚡ Front-End Developer"
    ),
    emoji("⚡ My-SQL"),
    emoji(
      "⚡ Java Scrypt"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "My-SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "UI Designer",
      fontAwesomeClassname: "fas fa-pen"
    },
    {
      skillName: "UX Designer",
      fontAwesomeClassname: "fas fa-pen-nib"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Colégio Fractal",
      logo: require("./assets/images/Fractal.png"),
      subHeader: "Ensino Médio",
      duration: "Janeiro 2017 - Dezembro 2020",
    },
    {
      schoolName: "PUC-GO",
      logo: require("./assets/images/Puc.png"),
      subHeader: "Ciências da Computação",
      duration: "Agosto 2022 - Presente",
}
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Front-End", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Back-End",
      progressPercentage: "65%"
    },
    {
      Stack: "Full-Stack",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Suporte e Desenvolvimento",
      company: "Futurium",
      companylogo: require("./assets/images/Fut.png"),
      date: "June 2020 – Presente",
      desc: "Trabalhei no servidor brasileiro de jogos Futurium, desempenhando diversas funções, incluindo suporte a jogadores, auxílio em compras na loja oficial, esclarecimento de dúvidas sobre o servidor e contribuições para o desenvolvimento do mesmo",
      descBullets: [
        "Suporte via chat e chamadas de voz",
        "Desenvolvimento da WIKI do servidor",
        "Correção de problemas diversos",
        "Administração da rede"
      ]
    },
    {
      role: "Estágiario em TI",
      company: "Job investimentos",
      companylogo: require("./assets/images/Job.jpeg"),
      date: "Novembro 2023 – Presente",
      desc: "Um grupo forte que é capaz de gerir e trazer resultados em tempo hábil para o mercado interno e externo.",
      descBullets: [
        "Atualizar e manter sistemas operacionais e programas.",
        "Manter a documentação técnica atualizada.",
        "Colaborar com a equipe em projetos.",
        "Ajudar usuários com problemas de hardware e software.",
        "Participar em projetos, escrever e testar código"
      ]
    },
    {
      role: "Atendente",
      company: "Açaí ao toque",
      companylogo: require("./assets/images/Acai.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
      image: require("./assets/images/futurium.png"),
      projectName: "Futurium WIKI",
      projectDesc: "Desenvolvimento da WIKI para o servidor Futurium",
      footerLink: [
        {
          name: "VER MAIS",
          url: "https://wiki.futurium.com.br/docs/Wiki"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "ChatGPT Style",
      projectDesc: "Contribuição para criação de temas para o ChatGPT",
      footerLink: [
        {
          name: "VER MAIS",
          url: "https://chrome.google.com/webstore/detail/chatgpt-style/ooefjbdchgdlfeigfhigjpffppdklnef"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certificações 🏆 "),
  subtitle:
    "Conquistas e Certificações",

  achievementsCards: [
    {
      title: "Microsoft Exel 2010",
      subtitle:
        "Curso de Exel 2010 Básico.",
      image: require("./assets/images/ciee.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Ver Certificado",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
      ]
    },
    {
      title: "Front-end ORIGAMID",
      subtitle:
        "Curso completo de desenvolvimento front-end",
      image: require("./assets/images/origamid.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Ver Certificados",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Banco de Dados",
      subtitle: "Curso Completo de Banco de Dados",
      image: require("./assets/images/Udemy_logo.svg.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Ver Certificado",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+55(62)98159-0233",
  email_address: "gmoreiradesouza19@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
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
  isHireable
};
