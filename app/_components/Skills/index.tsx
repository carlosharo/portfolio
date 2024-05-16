import { Grid, Stack, Typography } from "@mui/material";
import { portfolio } from "../../_commons/_mocks";
import { PTCard, PTCardContainer, PTCardContent, PTGridContainer } from "..";
import { ReactNode } from "react";

interface PTSkillsProps {
    name: string;
    icon?: ReactNode;
}

export const Skill = ({ name, icon }: PTSkillsProps) => {
    return (
        <PTCard>
            <PTCardContent sx={{ width: '100px' }}>
                {icon}
                <Typography align='center'>{name}</Typography>
            </PTCardContent>
        </PTCard>
    );
}

export const Skills = () => {
    return (
        <PTCardContainer>
            <PTGridContainer>
                <Grid xs={12}>
                    <Typography variant='h4' align="center">Main Skills</Typography>
                </Grid>
                <Stack
                    direction='row'
                    justifyContent='center'
                    spacing={{ xs: 1, md: 4 }}
                >
                    {portfolio.mainSkills.map((skill, i) => <Skill key={i} {...skill} />)}
                </Stack>
            </PTGridContainer>
        </PTCardContainer>
    );
}