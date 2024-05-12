import { Grid, Typography } from "@mui/material";
import { PTCard, PTCardContent } from "..";
import { ReactNode } from "react";

interface PTSkillsProps {
    name: string;
    icon?: ReactNode;
}

export const PTSkill = ({ name, icon }: PTSkillsProps) => {
    return (
        <PTCard>
            <PTCardContent>
                {icon}
                <Typography>{name}</Typography>
            </PTCardContent>
        </PTCard>
    );
}