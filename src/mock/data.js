import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Stacey Graham',
  subtitle: 'A Software Engineer in Atlanta, GA',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'ckprofilepic.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://bit.ly/3RUgCZb', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Tunebuzz_Homepage.jpg',
    title: 'Tunebuzz',
    info: 'An app that allows a user to create a new awesome playlist after selecting 3 music genres.  Once the user selects their genres they will see a new playlist displayed with 15 new songs to dance to.',
    info2: 'Built using HTML, CSS, JavaScript,Node.js, Express.js, Passport.js, PostgreSQL, Sequelize, and Spotify API.',
    url: 'https://dry-beach-63193.herokuapp.com/',
    repo: 'https://github.com/StashaG/tunebuzz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Pantry chef 1 of 9.jpg',
    title: 'Pantry Chef',
    info: 'A recipe app that allows users to search for meal recipes using the ingredients they have on hand.',
    info2: 'Built using HTML, CSS, JavaScript, Bootstrap, jQuery UI, Spoonacular API, and MealDB API',
    url: 'https://pantry-chef.surge.sh/',
    repo: 'https://github.com/StashaG/final-phase-1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Success_Quote.jpg',
    title: 'Random Quote Generator',
    info: 'An app that displays random famous quotes each time a button is clicked. This app utilizes DOM manipulation and arrays.',
    info2: 'Built using HTML, CSS, and JavaScript.',
    url: 'https://stashag.github.io/Random-Quote-Generator/',
    repo: 'https://github.com/StashaG/Random-Quote-Generator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'stacey.graham1106@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/staceyluvstech',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/staceygraham1106/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'http://github.com/stashag',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
