import { icons } from '../_icons';
import { Mysql } from '../_icons/mysql';

const { JavaScript, NextJs, Reactjs, Typescript, MateriaulUI, NodeJs, Redux, GithubCopilot, Html5, Css3, Graphql, Git } = icons;

export const portfolio = {
    personalInfo: {
        intro: 'I am',
        name: 'Carlos Haro',
        teach: 'Software Engineer, Next.js, ReactJs, Typescript, Javascript, GraphQL, NodeJs',
        description: 'I am a software engineer with over nine years of experience in web development specializing in React, JavaScript, NextJs and NodeJs. I am passionate about creating innovative, functional, attractive web solutions to deploy high-quality and high-performance Saas applications.'
    },
    skills: {
        primary: {
            title: 'Main Skills',
            values: [
                { name: 'Javascript', icon: <JavaScript />, progress: null },
                { name: 'ReactJs', icon: <Reactjs />, progress: null },
                { name: '', icon: <NextJs />, progress: null },
                { name: 'Typescript', icon: <Typescript />, progress: null },
                { name: 'NodeJs', icon: <NodeJs />, progress: null },
                { name: 'GraphQL', icon: <Graphql />, progress: null },
            ]
        },
        secondary: {
            title: 'Secondary Skills',
            values: [
                { name: 'Redux', icon: <Redux />, progress: null },
                { name: '', icon: <Html5 />, progress: null },
                { name: 'Css', icon: <Css3 />, progress: null },
                { name: 'Git/GitHub', icon: <Git />, progress: null },
                { name: '', icon: <Mysql />, progress: null },
            ]
        }
       
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