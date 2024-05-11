import { Grid, Typography } from "@mui/material";
import { PTCard, PTCardContent } from "..";
import { ReactNode } from "react";

interface PTSkillsProps {
    name: string;
    progress?: number | null;
    icon?: ReactNode;
    grid?: number;
}

export const PTSkills = ({ name, progress, icon, grid = 2 }: PTSkillsProps) => {
    const formattedProgress = progress ? `${progress}%` : null;
    return (
        <Grid md={grid}>
            <PTCard styled secondary >
                <PTCardContent>
                    {icon}
                    <Typography>{name}</Typography>
                </PTCardContent>
            </PTCard>
            <Typography align="center">{formattedProgress}</Typography>
        </Grid>
    );
}