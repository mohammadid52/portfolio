import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import CV from "./assets/cv.pdf";
import PLACEHOLDER from "./assets/avatar.png";
import ME_ABOUT from "./assets/me-about.jpeg";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

import PORTFOLIO1 from "./assets/portfolio1.png";
import PORTFOLIO2 from "./assets/portfolio2.png";
import PORTFOLIO3 from "./assets/portfolio3.png";
import PORTFOLIO4 from "./assets/portfolio4.png";
import PORTFOLIO5 from "./assets/portfolio5.png";

export const socialLinks = [
  {
    id: 1,
    type: "linkedin",
    url: "https://www.linkedin.com/in/mohammad-dehgamwala-23516420a/",
    Icon: BsLinkedin,
  },

  {
    type: "github",
    url: "https://github.com/mohammadid52",
    Icon: FaGithub,
    id: 2,
  },
  {
    type: "instagra,",
    url: "https://www.instagram.com/mohammad.dehgamwala/",
    Icon: FiInstagram,
    id: 3,
  },
];

export const about = {
  photo: ME_ABOUT,
  about_me:
    "Experienced Frontend Developer with a demonstrated history of working in the information technology and services industry. Skilled in Next.js, JavaScript, React.js, Node.js, and React Native. Strong engineering professional with a Bachelor's degree focused in BCA.",
  cards: [
    {
      name: "Experience",
      value: "1.5+ Year Working",
      Icon: FaAward,
      id: 4,
    },
    {
      name: "Clients",
      value: "10+ Worldwide",
      Icon: FiUsers,
      id: 5,
    },
    {
      name: "Projects",
      value: "20+ Completed",
      Icon: VscFolderLibrary,
      id: 6,
    },
  ],
};

export const skills = {
  frontend: [
    {
      id: 1,
      name: "HTML5",
      level: "Expert",
    },
    {
      id: 2,
      name: "JavaScript",
      level: "Expert",
    },
    {
      id: 3,
      name: "React",
      level: "Intermediate",
    },
    {
      id: 4,
      name: "CSS",
      level: "Expert",
    },
    {
      id: 5,
      name: "Tailwind",
      level: "Expert",
    },
    {
      id: 6,
      name: "GSAP",
      level: "Intermediate",
    },
  ],
  backend: [
    {
      id: 1,
      name: "Node Js",
      level: "Intermediate",
    },
    {
      id: 2,
      name: "MongoDB",
      level: "Intermediate",
    },
    {
      id: 3,
      name: "Graphql",
      level: "Intermediate",
    },
    {
      id: 4,
      name: "Django",
      level: "Basic",
    },
    {
      id: 5,
      name: "Python",
      level: "Basic",
    },
  ],
};

export const testimonials = [
  {
    id: 1,
    avatar: PLACEHOLDER,
    name: "Michael Russel",
    review:
      "Mohammad was assigned to our project at a critical time where the success of the front-end developer required someone who was technically strong but also someone who was creative by nature, was driven to learn new skills, and someone who spent their free time looking for inspiration from others in the field because they enjoy what they do and work and passion seems to be an extension of each other. When he started, he wasn't the strongest React developer on the team but he had all the other qualities so we established ground rules to working together and he followed them all and I've watched him turn into one of the strongest developers on the team given his curiosity and drive to wake up every day wanting to be a better developer than he was the day before. He also has great communication skills; his English is very good and he has a good sense of humor so it has been great having him on the team. Highly recommended.",
  },
  {
    id: 2,
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4E03AQHFJBw7Qfij-Q/profile-displayphoto-shrink_400_400/0/1617737695731?e=1652313600&v=beta&t=ooQ9tYVZ7qOdqGAjlMHX4Rg6NTcOCxdZWMgpqvl5TDs",
    name: "Jasper Verbon",
    review:
      "Mohammad is a skilled front-end (React) developer who I've had the pleasure of working with for the past months.I'm currently overseeing the deployment of a major feature for our education app, and Mohammad has been the valuable addition we needed to get large parts of the front-end UI / functionality completed. He works well within our team, accurately meeting the set specifications and going above and beyond to deliver a consistently high quality each time.",
  },
];

export const contact = [
  {
    id: 1,
    type: "email",
    Icon: MdOutlineEmail,
    text: "Email",
    value: "mohammadidehgamwala5@gmail.com",
    href: "mailto:mohammadidehgamwala5@gmail.com",
    buttonText: "Send email",
  },
  {
    id: 2,
    type: "message",
    Icon: RiMessengerLine,
    text: "Message",
    value: "Mohammad Dehgamwala",
    href: "https://m.me/mohammad.dehgamwala",
    buttonText: "Send a message",
  },
  {
    id: 3,
    type: "whatsapp",
    Icon: BsWhatsapp,
    text: "Whatsapp",
    value: "+91 6351522373",
    href: "https://wa.me/916351522373/?text=Hello%20Mohamamd",
    buttonText: "Message me",
  },
];

export const projects = [
  {
    id: 1,
    url: "https://clever-tesla-f83d74.netlify.app",
    github: "https://github.com/mohammadid52/portfolio",
    name: "My previous portfolio",
    img: PORTFOLIO1,
  },
  {
    id: 2,
    url: "https://adoring-heyrovsky-15ffdd.netlify.app",
    github: "https://github.com/mohammadid52/Expager",
    name: "Expense manager",
    img: PORTFOLIO2,
  },

  {
    id: 3,
    url: "https://gifted-blackwell-a3dad8.netlify.app/",
    github: "https://github.com/mohammadid52/react-search-github-users",
    name: "Search github users",
    img: PORTFOLIO3,
  },

  {
    id: 4,
    url: "https://elegant-shannon-a33fb2.netlify.app/",
    github: "https://github.com/mohammadid52/cakes",
    name: "Test Cakes",
    img: PORTFOLIO4,
  },

  {
    id: 5,
    url: "https://laughing-poitras-8586b3.netlify.app/",
    github: "https://github.com/mohammadid52/keepItShort",
    name: "Keep it short",
    img: PORTFOLIO5,
  },
];

export { CV };
