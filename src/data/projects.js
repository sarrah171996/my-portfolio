import pro1 from '../assets/sequlize project.png'
import pro2 from '../assets/social.jpg'
import pro3 from '../assets/e-commerce.avif'

const data = [
  {
    id: '1',
    title: 'seqliz-project',
    description:
      'seqliz-project is a simple project utilizing Sequelize, a popular Object-Relational Mapping (ORM) library for Node.js. This project demonstrates my ability to work with databases and perform CRUD (Create, Read, Update, Delete) operations effectively. ',
    image: {
      src: pro1,
    },
    links: {
      repo: 'https://github.com/sarrah171996/seqliz-project.git',
    },
    technologies: [
      '#Node.js',
      '#Express.js',
      '#MySQL',
    ],
  },


  {
    id: '2',
    title: 'social media ',
    description:
      'The social media project involved creating a feature-rich backend system that enables users to connect, share content, and interact with each other. Leveraging the power of Node.js, I implemented the core functionalities, data management, and real-time communication, while MongoDB served as the database to store user profiles, posts, comments, and other related data.',
    image: {
      src : pro2,
    },
    links: {
      repo: 'https://github.com/sarrah171996/Social-Media-Project.git',
    },
    technologies: [
      '#Express.js',
      '#Mongoose',
      '#Authentication',
      '#Authorization',
      '#Real-time Communication',
      '#Data Validation',
    ],
  },
  {
    id: '3',
    title: 'E-commerce',
    description:
      'The e-commerce project involved creating a robust backend system that handles various functionalities required for an online store. Leveraging the power of Node.js, I implemented the business logic, routing, and data management, while MongoDB served as the database to store product information, user data, and order details.',
    image: {
      src: pro3,
      // placeholderSrc:
      //   'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://e-commerce-khgo.onrender.com/',
      repo: 'https://github.com/sarrah171996/e-commerce-.git',
    },
    technologies: [
      '#Node.js',
      '#Express.js',
      '#MongoDB',
      '#Mongoose',
      '#Authentication',
      '#Authorization',
      '#Data Validation',
      // '#Payment Integration'
    ],
  },
];

export default data;
