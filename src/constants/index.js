import {
  // mobile,
  backend,
  // creator,
  web,
  javascript,
  typescript,
  // html,
  // css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  // git,
  // figma,
  // docker,
  meta,
  // starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  // threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "projects",
  //   title: "Projects.",
  // },
];

const services = [
  {
    title: "Web Frontend Engineer",
    icon: web,
  },
  {
    title: "Web Fullstack Engineer",
    icon: backend,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    // icon: starbucks,
    // iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "React admin dashboard",
    description:
      "The React Admin Dashboard was developed to meet the client's goal of creating a comprehensive data management platform with dynamic Charts and Tables. As a React developer, my contributions included designing and implementing the user interface, integrating interactive Charts for insightful data visualization, and creating responsive Tables for efficient data representation. Leveraging React's capabilities, I ensured a seamless user experience and efficient data handling. The project's success is evident in improved data analysis, streamlined workflows, and positive user feedback, showcasing the React Admin Dashboard as a powerful tool for data-driven decision-making.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AndriiPetryk/react-admin-dashboard",
  },
  {
    name: "E-shop",
    description:
      "The Internet Shop was crafted to fulfill the client's objective of creating a seamless e-commerce experience for different products.\n" +
        "As a React developer, I played a pivotal role in designing and implementing a user-friendly interface, ensuring a smooth shopping journey from product selection to checkout.\n" +
        "Leveraging React's state management, I optimized the application for high performance and responsiveness.\n" +
        "The project's success is evident in increased sales, positive user reviews, and enhanced user engagement.\n" +
        "The Internet Shop stands as a sophisticated, visually appealing platform that successfully meets the client's goals and customer expectations\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n"
    ,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AndriiPetryk/proshop-e-market",
  },
  {
    name: "Modern fitness guide",
    description:
      "The React Fitness Application was developed to meet the client's goal of creating a dynamic and user-friendly platform for fitness enthusiasts.\n" +
        "As a React developer, my contributions focused on crafting an intuitive user interface, ensuring seamless navigation, and integrating responsive design elements.\n" +
        "Leveraging React's component-based architecture, I implemented different features to this application such as a search, and functionality of choosing training.\n" +
        "The project's success is reflected in its positive user feedback, increased user engagement, and a growing community of fitness enthusiasts.\n" +
        "The React Fitness Application stands as a testament to the effective collaboration and innovative solutions brought to life by the development team.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AndriiPetryk/fitness-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
