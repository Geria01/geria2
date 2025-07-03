import placholderAvatar1 from '@/public/images/placholder_avatar1.jpg';
import placholderAvatar2 from '@/public/images/placholder_avatar2.jpg';
import placholderAvatar3 from '@/public/images/placholder_avatar3.jpg';
import PrincingImg1 from '@/public/images/pricing_img_1.png';
import PrincingImg2 from '@/public/images/pricing_img_2.png';
import PrincingImg3 from '@/public/images/pricing_img_3.png';

const DUMMY_DEVS = [{
  'id': 1,
  'avatarUrl': placholderAvatar1,
  'name': 'Lerato Gregory',
  'experience': '4 years +',
  'location': 'Johannesburg, South Africa',
  'skills': ['html', 'css', 'react.js', 'jQuery'],
  'timeZone': 'GMT +02:00',
},
{
  'id': 2,
  'avatarUrl': placholderAvatar2,
  'name': 'Kamaria Smith',
  'location': 'Nairobi, Kenya',
  'skills': ['python', 'laravel', 'react.js', 'linux'],
  'experience': '3 years +',
  'timeZone': 'GMT +03:00',
},
{
  'id': 2,
  'avatarUrl': placholderAvatar3,
  'name': 'Kennedy Jackson',
  'location': 'Lagos, Nigeria',
  'skills': ['django', 'ai/ml', 'react.js', 'css'],
  'experience': '9 years +',
  'timeZone': 'GMT +02:00',
}];

const ROLE_OPTIONS = [
  'Frontend Developer',
  'Backend Developer',
  'Fullstack Developer',
  'DevOps Engineer',
  'Data Analyst',
  'Data Engineer',
  'Software QA Engineer',
  'UI UX Designer',
  'Business Analysts',
  'Project Manager',
  'Digital Marketer',
  'Others',
];

const EXPERIENCE_OPTIONS = [
  '2 - 3yrs (Junior)',
  '4 - 6yrs (Mid)',
  '7 - 10yrs (Experienced)',
  '10+yrs (Senior)',
];

const FIELDS = [
  {
    'name': 'firstname',
    'label': 'First name',
  },
  {
    'name': 'lastname',
    'label': 'Last name',
  },
  {
    'name': 'email',
    'label': 'Email',
  },
  {
    'name': 'address',
    'label': 'Residential address',
  },
  {
    'name': 'phone',
    'label': 'Phone',
  },
  {
    'name': 'password',
    'label': 'Password',
  },
  {
    'name': 'gender',
    'label': 'Gender',
  },
  {
    'name': 'dob',
    'label': 'Date of birth',
  }
];

const GENDER_OPTIONS = [
  {
    label: 'Choose one',
    value: 'choose one',
  },
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  }
];

const MENU_LIST = [
  {
    text: 'About Us',
    href: '/about-us',
  },
  {
    text: 'Our Process',
    href: '/our-process',
  },
  {
    text: 'Pricing',
    href: '/pricing',
  },
  {
    text: 'Blog',
    href: '/blog',
  },
  // {
  //   text: 'Jobs',
  //   href: '/jobs',
  // },
  {
    text: 'Web Development',
    href: '/web-development'
  }
];

const WELCOME_TYPES = ['Good morning', 'Good afternoon', 'Good evening'];

const ENGR_LEVELS = [
  {
    title: 'Mid-Level Software Engineer',
    items: ['Vetted by Geria', '4+ years of experience', 'Experience In Shipping Software', 'Experience In Working Remotely', 'English Language Profeciency'],
    image: PrincingImg1,
  },
  {
    title: 'Senior Software Engineer',
    items: ['Vetted by Geria', '6+ years of experience', 'Experience In Shipping Software', 'Multiple Domain Expert', 'Experience In Working Remotely', 'English Language', 'Profeciency'],
    image: PrincingImg2,
  },
  {
    title: 'Principal Software Engineer',
    items: ['Vetted by Geria', '8+ years of experience', 'Experience In Shipping Software', 'Expert In Multiple Domains', 'Technical Leadership Experience', 'Experience In Working Remotely', 'English Language Profeciency'],
    image: PrincingImg3,
  },
]

const KEY_CODES = {
  enter: 13,
  backspace: 8,
  space: 32,
};

const INPUTS = {
  avatar: 'avatar',
  header: 'header',
};

export {
  DUMMY_DEVS,
  ROLE_OPTIONS,
  EXPERIENCE_OPTIONS,
  GENDER_OPTIONS,
  FIELDS,
  WELCOME_TYPES,
  MENU_LIST,
  ENGR_LEVELS,
  KEY_CODES,
  INPUTS,
}
