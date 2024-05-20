import { JavaScript, NextJs, Reactjs, Typescript } from '../_icons';

export interface portfolioProps {
    personalInfo: {
        intro: string;
        name: string;
        teach: string;
        description: string;
    };
    skills: {
        title: string;
        primary: {
            name: string;
            icon: any;
            progress: any;
        }[];
    };
}

export const portfolio = {
    personalInfo: {
        intro: 'I am',
        name: 'Carlos Haro',
        teach: 'Frontend Developer, Next.js, ReactJs, Typescript, Javascript, Graphql, NodeJs',
        description: 'I am a software engineer with over nine years of experience in web development specializing in React, JavaScript, NextJs and NodeJs. I am passionate about creating innovative, functional, attractive web solutions to deploy high-quality and high-performance Saas applications.'
    },
    skills: {
        title: 'Main Skills',
        primary: [
            { name: 'Javascript', icon: <JavaScript />, progress: null },
            { name: 'React', icon:<Reactjs/>, progress: null },
            { name: '', icon: <NextJs />, progress: null },
            { name: 'Typescript', icon: <Typescript />, progress: null },
        ]
    },
   
}