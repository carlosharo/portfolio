export type PersonalInfoProps = {
    intro: string;
    name: string;
    teach: string;
    description: string;
}

export type SkillProps = {
    name: string;
    icon: JSX.Element;
    progress?: null;
}

export type BaseSkillsProps = {
    title: string;
    values: SkillProps[];
}

export type SkillsProps = {
   primary: BaseSkillsProps;
   secondary: BaseSkillsProps;
}

export type LayoutProps = {
    menu: {
        title: string;
        options: string[];
    };
    footer: {
        title: string;
        logos: JSX.Element[];
    };
}

export interface PortfolioProps {
    personalInfo: PersonalInfoProps;
    skills: SkillsProps;
    layout: LayoutProps;
}