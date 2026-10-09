export interface Project {
  id: number;
  pName: string;
  pImg?: string;
  category: 'company' | 'personal';
  gLink?: string;
  vLink?: string;
  description?: string;
  techStack?: string[];
}

export interface Education {
  id: number;
  degree: string;
  year: string;
  school: string;
  score?: string;
  description: string;
}

export interface Experience {
  id: number;
  company: string;
  role?: string;
  duration: string;
  location: string;
  description: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface HobbyItem {
  id: number;
  name: string;
  img: string;
  type: string;
  ratePoint: number;
  description?: string;
}

export const PERSONAL_INFO = {
  name: 'Ramanand Dubey',
  role: 'Full Stack Developer',
  email: 'ramanandubey@gmail.com',
  birth: '21 June, 2001',
  phone1: '+91 8005633372',
  phone2: '+91 8302491984',
  whatsapp: '+91 8302491984',
  address: 'Sector-59, Noida, Uttar Pradesh, 201301',
  hometown: 'Kaptanganj, Azamgarh, U.P.',
  bio: 'A dedicated Full Stack Developer with hands-on experience in designing and developing responsive, user-friendly websites and full-stack web architectures. Strong understanding of modern web technologies, programming fundamentals, and project structuring. Fluent in English, Hindi, and Nepali, supporting clear communication and teamwork. Known for strong problem-solving abilities, attention to detail, and a passion for creating innovative web solutions through continuous learning and experimentation.',
  socials: {
    facebook: 'https://www.facebook.com/ramanand.dubey.988/',
    instagram: 'https://www.instagram.com/rd.x_69er/',
    linkedin: 'https://www.linkedin.com/in/ramanand-dubey-985b9025a/',
    whatsapp: 'https://wa.me/918302491984?text=Hello%20Ramanand%20Dubey%20!%20Are%20you%20available%20to%20work%20with%20us%20?'
  },
  softSkills: [
    'Communication Skills',
    'Time Management',
    'Problem Solving',
    'Team Project Collaboration',
    'Adaptability & Fast Learner',
    'Leadership & Ownership'
  ]
};

export const TECH_STACK = [
  { id: 1, name: 'HTML5', imgLink: '/images/html.webp', aLink: 'https://www.html.com' },
  { id: 2, name: 'CSS3', imgLink: '/images/css.webp', aLink: 'https://www.w3schools.com/cssref/index.php' },
  { id: 3, name: 'JavaScript', imgLink: '/images/js.webp', aLink: 'https://www.w3schools.com/jsrEF/default.asp' },
  { id: 4, name: 'Tailwind CSS', imgLink: '/images/tailwind.webp', aLink: 'https://tailwindcss.com' },
  { id: 5, name: 'React.js', imgLink: '/images/react.webp', aLink: 'https://react.dev' },
  { id: 6, name: 'Next.js', imgLink: '/images/nextjs.webp', aLink: 'https://nextjs.org' },
  { id: 7, name: 'Node.js', imgLink: '/images/node.webp', aLink: 'https://nodejs.org' },
  { id: 8, name: 'MongoDB', imgLink: '/images/mongo.webp', aLink: 'https://www.mongodb.com' },
  { id: 9, name: 'Java', imgLink: '/images/java.webp', aLink: 'https://www.java.com' },
];

export const COMPANY_PROJECTS: Project[] = [
  {
    id: 1,
    pName: 'myMschool',
    category: 'company',
    vLink: 'https://mymschool.com/',
    description: 'Comprehensive digital school management and education portal engineered for modern parent, teacher, and student workflows.',
    techStack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    id: 2,
    pName: 'Mount Litera School, Lucknow',
    category: 'company',
    vLink: 'https://web.edunexttechnologies.com/theme/mlzs-landingpage/',
    description: 'School portal landing page developed for Mount Litera Zee School.',
    techStack: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript']
  },
  {
    id: 3,
    pName: 'Prince Public School, Rohini',
    category: 'company',
    vLink: 'https://princepublicschool.com/',
    description: 'Comprehensive institutional web platform with active admissions & parent resources.',
    techStack: ['HTML5', 'CSS3', 'JavaScript']
  },
  {
    id: 4,
    pName: 'Agarwal Vidya Vihar, Surat',
    category: 'company',
    vLink: 'https://avv.ac.in',
    description: 'Official school website showcasing academic curriculum, campus activities, and announcements.',
    techStack: ['HTML5', 'JavaScript']
  },
  {
    id: 5,
    pName: 'Tapti Valley International School, Surat',
    category: 'company',
    vLink: 'https://tvis.edu.in/',
    description: 'International school portal featuring modern responsive layout and gallery highlights.',
    techStack: ['HTML5', 'CSS3', 'Responsive Design']
  },
  {
    id: 6,
    pName: 'Agape Mission School, Rishikesh',
    category: 'company',
    vLink: 'https://web.edunexttechnologies.com/theme/agape-mission/',
    description: 'Responsive educational theme crafted for seamless cross-device communication.',
    techStack: ['HTML5', 'CSS3', 'JavaScript']
  },
  {
    id: 7,
    pName: 'Shambhu Dayal Global School, Ghaziabad',
    category: 'company',
    vLink: 'https://sdglobalschool.com/',
    description: 'Global school web presence with responsive layout and SEO optimization.',
    techStack: ['HTML5', 'Bootstrap', 'JavaScript']
  },
];

export const PERSONAL_PROJECTS: Project[] = [
  {
    id: 1,
    pName: 'Personal Website | Equilaw',
    pImg: '/images/project_personal.svg',
    category: 'personal',
    gLink: 'https://github.com/Ramanand-Dubey',
    vLink: 'https://portfolio-zeta-livid-16.vercel.app/',
    description: "Led frontend development in creating a highly responsive website for 'Equilaw Associates', enhancing user engagement and achieving fast page load speeds.",
    techStack: ['React', 'Tailwind CSS', 'JavaScript']
  },
  {
    id: 2,
    pName: 'SpyOnSecurity.com',
    pImg: '/images/project_bot.svg',
    category: 'personal',
    gLink: 'https://github.com/Ramanand-Dubey',
    vLink: 'https://spyonsecurity.com/',
    description: 'Cybersecurity platform and vulnerability assessment initiative offering digital safety intelligence, guides, and secure developer resources.',
    techStack: ['PHP', 'CSS', 'JavaScript']
  },
  {
    id: 3,
    pName: 'Form Filling Website',
    pImg: '/images/project_form.svg',
    category: 'personal',
    gLink: 'https://github.com/Ramanand-Dubey',
    vLink: 'https://portfolio-zeta-livid-16.vercel.app/',
    description: 'Secure, modern platform enabling users to complete and submit multi-step application forms with client-side validation and storage.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Node.js']
  },
  {
    id: 4,
    pName: 'Chatbot UI Integration',
    pImg: '/images/project_bot.svg',
    category: 'personal',
    gLink: 'https://github.com/Ramanand-Dubey',
    vLink: 'https://portfolio-zeta-livid-16.vercel.app/',
    description: "Interactive UI platform for embedding chat-bot assistants on websites, enabling clients to test AI messaging widgets seamlessly on their web pages.",
    techStack: ['React', 'CSS3', 'REST API']
  },
  {
    id: 5,
    pName: 'Personal Developer Portfolio',
    pImg: '/images/project_portfolio.svg',
    category: 'personal',
    gLink: 'https://github.com/Ramanand-Dubey',
    vLink: 'https://portfolio-zeta-livid-16.vercel.app/',
    description: 'Modern portfolio demonstrating full-stack mastery, component design, responsive grid systems, and subtle interactive transitions.',
    techStack: ['React 19', 'Tailwind CSS', 'Node.js']
  },
  {
    id: 6,
    pName: 'Crop Recommendation System',
    pImg: '/images/project_crop.svg',
    category: 'personal',
    gLink: 'https://github.com/Ramanand-Dubey',
    vLink: 'https://portfolio-zeta-livid-16.vercel.app/',
    description: 'Web application employing machine learning predictions to forecast optimal agricultural cultivation based on soil nutrient and climate data.',
    techStack: ['Python', 'HTML5', 'Flask', 'Tailwind CSS']
  },
  {
    id: 7,
    pName: 'Figma Replication Project',
    pImg: '/images/project_figma.svg',
    category: 'personal',
    gLink: 'https://github.com/Ramanand-Dubey',
    vLink: 'https://portfolio-zeta-livid-16.vercel.app/',
    description: 'Pixel-perfect replica of modern corporate Figma design guidelines, demonstrating high fidelity and strict attention to spacing math.',
    techStack: ['HTML5', 'CSS3', 'Flexbox', 'Responsive Design']
  },
];

export const EDUCATION_DETAILS: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology in Information Technology',
    year: '2020 - 2024',
    school: 'Veer Bahadur Singh Purvanchal University, Jaunpur, Uttar Pradesh',
    score: '70.69%',
    description: 'Graduated with a Bachelor degree in Information Technology, focusing on software engineering, database systems, web development, and algorithms.'
  },
  {
    id: 2,
    degree: 'Intermediate Education (PCM)',
    year: '2019 - 2020',
    school: 'Swami Teonram Alok Sr. Sec. School, Kota, Rajasthan',
    score: '65.00%',
    description: 'Successfully completed intermediate science education with Physics, Chemistry, and Mathematics from the RBSE board.'
  },
  {
    id: 3,
    degree: 'High School Secondary Education',
    year: '2016 - 2017',
    school: 'Maharaja Public Sr. Sec. School, Ajmer, Rajasthan',
    score: '63.00%',
    description: 'Successfully completed secondary schooling with strong foundational scores under the RBSE board.'
  }
];

export const JOB_EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: 'Innovilla Private Ltd.',
    role: 'Frontend Developer Intern',
    duration: '02 June, 2023 - 02 July, 2023',
    location: 'CDC Building, BHU, Varanasi',
    description: "Developed a search engine optimized (SEO) web application for local businesses within the city, engineered using HTML, CSS, JavaScript, and Bootstrap."
  },
  {
    id: 2,
    company: 'Edunext Technologies Pvt. Ltd.',
    role: 'Full Stack Developer',
    duration: '06 March, 2025 - Present',
    location: '7th Floor, A-8, Block A, Sector 68, Noida',
    description: "Contributing to ERP and modern school management software platforms used by premier educational institutions across India."
  }
];

export const FRONTEND_SKILLS: SkillItem[] = [
  { name: 'HTML5', level: 100 },
  { name: 'CSS3', level: 100 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'React.js', level: 88 },
  { name: 'Next.js', level: 85 },
  { name: 'JavaScript (ES6+)', level: 88 },
];

export const BACKEND_SKILLS: SkillItem[] = [
  { name: 'Node.js', level: 75 },
  { name: 'Express.js', level: 75 },
  { name: 'MongoDB (Mongoose)', level: 60 },
  { name: 'Java (Core & OOP)', level: 20 },
];

export const SPORTS_HOBBIES: HobbyItem[] = [
  { id: 1, name: 'Football', img: '/images/sports.webp', type: 'Outdoor', ratePoint: 4 },
  { id: 2, name: 'Kabaddi', img: '/images/sports.webp', type: 'Outdoor', ratePoint: 4 },
  { id: 3, name: 'Chess', img: '/images/sports.webp', type: 'Indoor Strategy', ratePoint: 4 },
  { id: 4, name: 'Badminton', img: '/images/sports.webp', type: 'Outdoor', ratePoint: 4 },
  { id: 5, name: 'Volleyball', img: '/images/sports.webp', type: 'Outdoor', ratePoint: 3 },
  { id: 6, name: 'Cricket', img: '/images/sports.webp', type: 'Outdoor', ratePoint: 4 },
];

export const COOKING_HOBBIES: HobbyItem[] = [
  { id: 1, name: 'Hyderabadi Biryani', img: '/images/cooking.webp', type: 'Veg & Rice', ratePoint: 4 },
  { id: 2, name: 'Paneer Kabab', img: '/images/cooking.webp', type: 'Veg Starter', ratePoint: 4 },
  { id: 3, name: 'Matar Paneer', img: '/images/cooking.webp', type: 'Veg Main Course', ratePoint: 5 },
  { id: 4, name: 'Shimla Mirch Pyaz Masala', img: '/images/cooking.webp', type: 'Veg Special', ratePoint: 4 },
  { id: 5, name: 'Fish Curry', img: '/images/cooking.webp', type: 'Non-Veg', ratePoint: 4 },
  { id: 6, name: 'Chicken Curry', img: '/images/cooking.webp', type: 'Non-Veg', ratePoint: 5 },
];

export const BOOKS_HOBBIES: HobbyItem[] = [
  { id: 1, name: 'The Secret Annex (Anne Frank)', img: '/images/books.webp', type: 'Autobiography', ratePoint: 5 },
  { id: 2, name: 'Train to Pakistan (Khushwant Singh)', img: '/images/books.webp', type: 'Historical Fiction', ratePoint: 4 },
  { id: 3, name: 'Half Girlfriend (Chetan Bhagat)', img: '/images/books.webp', type: 'Contemporary Fiction', ratePoint: 4 },
  { id: 4, name: 'The Girl in Room 105', img: '/images/books.webp', type: 'Mystery / Thriller', ratePoint: 4 },
  { id: 5, name: 'You Are The Best Wife (Ajay K Pandey)', img: '/images/books.webp', type: 'Memoir / Romance', ratePoint: 5 },
  { id: 6, name: 'Revolution 2020 (Chetan Bhagat)', img: '/images/books.webp', type: 'Fiction / Drama', ratePoint: 4 },
];

export const TRAVEL_HOBBIES: HobbyItem[] = [
  { id: 1, name: 'Varanasi', img: '/images/travel.webp', type: 'Spiritual Ghats · ₹650/-', ratePoint: 5 },
  { id: 2, name: 'Agra', img: '/images/travel.webp', type: 'Heritage Wonder · ₹750/-', ratePoint: 4 },
  { id: 3, name: 'Uttarakhand', img: '/images/travel.webp', type: 'Himalayan Escapes · ₹5,500/-', ratePoint: 5 },
  { id: 4, name: 'Lucknow', img: '/images/travel.webp', type: 'City of Nawabs · ₹750/-', ratePoint: 4 },
  { id: 5, name: 'Prayagraj', img: '/images/travel.webp', type: 'Sangam City · ₹350/-', ratePoint: 4 },
  { id: 6, name: 'Mathura & Vrindavan', img: '/images/travel.webp', type: 'Cultural Heritage · ₹2,500/-', ratePoint: 5 },
];

export const SPOTIFY_PLAYLISTS = [
  { id: 1, title: 'Lo-Fi Coding Sessions', src: 'https://open.spotify.com/embed/playlist/3rW2zfWIx59iMS0BS4OJSO?utm_source=generator' },
  { id: 2, title: 'Deep Focus Chill', src: 'https://open.spotify.com/embed/playlist/5SS4gw1XqCWWBgpOA13k7m?utm_source=generator' },
  { id: 3, title: 'Bollywood Acoustic Hits', src: 'https://open.spotify.com/embed/playlist/0JN9k6LYnMqN5GuR29nzG5?utm_source=generator' },
  { id: 4, title: 'Evening Acoustic Vibe', src: 'https://open.spotify.com/embed/playlist/14Xxz3sCe85a9ofYKlpShv?utm_source=generator' },
  { id: 5, title: 'High Energy Indie', src: 'https://open.spotify.com/embed/playlist/15xeSkxbwQ0WoIuaVX07z9?utm_source=generator' },
  { id: 6, title: 'Retro Classics', src: 'https://open.spotify.com/embed/playlist/4A3GvVR6i8AqUFTvEIJAjj?utm_source=generator' },
];
