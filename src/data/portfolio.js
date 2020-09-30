import * as soicon from '../../public/so-icon.png';
import * as linkedin from '../../public/linkedin.png';
import * as octocat from '../../public/Octocat.png';
import * as image from '../../public/Kamesh.jpg';

export const skillData = [
    { key: 1, label: 'Docker' },
    { key: 2, label: 'Angular' },
    { key: 3, label: 'MS Azure' },
    { key: 4, label: 'MS SQL' },
    { key: 5, label: 'Node.js' },
    { key: 6, label: 'Mocha' },
    { key: 7, label: 'React' },
    { key: 8, label: 'xUnit' },
    { key: 9, label: 'Jest' },
    { key: 10, label: 'C#' }
];

export const socialData = [
    { key: 1, image: soicon.default, altText: 'Stack Overflow', link: 'https://stackoverflow.com/users/4725687/kamesh?tab=profile' },
    { key: 2, image: linkedin.default, altText: 'LinkedIn', link: 'https://www.linkedin.com/in/kamesh-dashora-74381710a/' },
    { key: 3, image: octocat.default, altText: 'GitHub', link: 'https://github.com/kamesh95' }
];

export const personalInfo = {
    name: 'KAMESH DASHORA',
    designation: 'SENIOR PROGRAMMER ANALYST',
    email: 'dashorakamesh95@gmail.com'
};

export const profilePicture = image;

export const statisticsData = [
    { key: 1, label: 'STACK OVERFLOW REACH', value: '42k+' },
    { key: 2, label: 'YEARS OF EXPERIENCE', value: '3+' },
    { key: 3, label: 'WORK ITEMS COMPLETED', value: '700+' },
    { key: 4, label: 'STACK OVERFLOW REPUTATION', value: '797' }
];

export const summaryData = [
    {
        key: 1,
        text: `Firstly, I love coding. It was in high school when I developed my first C++ program and 
            since then I have been obsessed on how we can develop great softwares to transform the lives 
            of people around the world. Software engineering drives me with new challenges and learnings.
            This passion carried me through my education in Computer Science Engineering where I got to know
            truly how much there is yet to learn. I started in the IT industry in 2017 and it has been a great 
            journey so far with developments that paved the way for some critical learnings.
            `
    },
    {
        key: 2,
        text: `My specialization is in various Javascript frameworks across the whole stack. Experienced
            developing complete web applications with frontend, backend and CI/CD in an Agile environment.
            My main focus is on code quality, security and in time deliveries of my tasks. Capable of designing 
            and driving platforms to next level. Even when I leave the office, I like to contribute to stack
            overflow community, open source projects and learn new frameworks. This is what keeps me going with 
            a never ending thirst to create beautiful and powerful things.`
    }
];
