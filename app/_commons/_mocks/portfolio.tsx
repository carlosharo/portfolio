import { JavaScript, NextJs, Reactjs, Typescript, MateriaulUI } from '../_icons';
import { GithubCopilot } from '../_icons/githubcopilot';
import { NodeJs } from '../_icons/nodejs';

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
            icon: JSX.Element;
            progress: null;
        }[];
    };
    layout: {
        menu: {
            title: string;
            options: string[];
        };
        footer: {
            title: string;
            logos: JSX.Element[];
        };
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
            { name: 'ReactJs', icon: <Reactjs />, progress: null },
            { name: '', icon: <NextJs />, progress: null },
            { name: 'Typescript', icon: <Typescript />, progress: null },
            { name: 'NodeJs', icon: <NodeJs />, progress: null },
        ]
    },
    layout: {
        menu: {
            title: 'Portfolio',
            options: ["Tools", "Algorithms", "Articles", "Review"],
        },
        footer: {
            title: 'Developed with',
            logos: [
                <NextJs key='nextjs' />,
                <JavaScript key='javascript' />,
                <Reactjs key='reactjs' />,
                <MateriaulUI key='materialui' />,
                <Typescript key='typescript' />,
                <GithubCopilot key='githubcopilot' />,
            ],
        }
    }
}