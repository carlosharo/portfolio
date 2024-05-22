import { icons } from '../_icons';

const { JavaScript, NextJs, Reactjs, Typescript, MateriaulUI, GithubCopilot } = icons;

export const layout = {
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
};