
/**
 * Represents the props for the PersonalInfo component.
 */
export type PersonalInfoProps = {
    intro: string;
    name: string;
    teach: string;
    description: string;
}

/**
 * Represents the props for the Skill component.
 */
export type SkillProps = {
    name: string;
    icon: JSX.Element;
    progress?: null;
}

/**
 * Represents the props for the BaseSkills component.
 */
export type BaseSkillsProps = {
    title: string;
    tags: SkillProps[];
}

/**
 * Represents the props for the Skills component.
 */
export type SkillsProps = {
    primary: BaseSkillsProps;
    secondary: BaseSkillsProps;
}

/**
 * Represents the props for the Layout component.
 */
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

/**
 * Represents the props for the Hability component.
 */
export type HabilityProps = {
    title: string;
    description: string;
    tags: string[];
}

/**
 * Represents the props for the Habilities component.
 */
export type HabilitiesProps = {
    main: HabilityProps[];
    secondary: HabilityProps[];
}

/**
 * Represents the props for the Algorithms component.
 */
export type AlgorithmsProps = {
    title: string;
    href: string;
    description: string;
    example: {
        title: string;
        description: string;
        code: (...props: any) => Array<any> | string | number | void;
    };
    media: {
        href: string;
        alt: string;
    };
}

/**
 * Represents the props for the Portfolio component.
 */
export interface PortfolioProps {
    personalInfo: PersonalInfoProps;
    skills: SkillsProps;
    layout: LayoutProps;
    habilities: HabilitiesProps;
    algorithms: AlgorithmsProps[];
}