import { icons } from '../_icons';
const { JavaScript, NextJs, Reactjs, Typescript, NodeJs, Redux, Html5, Css3, Graphql, Git, Mysql } = icons;

export const skills = {
    primary: {
        title: 'Main Skills',
        tags: [
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
        tags: [
            { name: 'Redux', icon: <Redux />, progress: null },
            { name: '', icon: <Html5 />, progress: null },
            { name: 'Css', icon: <Css3 />, progress: null },
            { name: 'Git/GitHub', icon: <Git />, progress: null },
            { name: '', icon: <Mysql />, progress: null },
        ]
    }
};