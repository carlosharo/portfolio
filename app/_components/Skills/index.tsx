'use client'
import { Grid, Stack, Typography } from "@mui/material";
import { PTCard, PTCardContainer, PTCardContent, PTGridContainer } from "..";
import { BaseSkillsProps, SkillProps, SkillsProps } from "@/app/_commons/_types";

export const Skill = ({ name, icon }: SkillProps) => {
    return (
        <PTCard>
            <PTCardContent sx={{ width: { xs: 'auto', md: '100px' }, padding: { xs: '5px', sm: '10px', md: '15px' } }}>
                {icon}
                <Typography align='center' sx={{ fontSize: { xs: 'x-small', sm: 'small', md: 'medium' } }}>{name}</Typography>
            </PTCardContent>
        </PTCard>
    );
}

export const Skills = ({ title, values }: BaseSkillsProps) => {
    return (
        <PTCardContainer>
            <PTGridContainer>
                <Grid xs={12}>
                    <Typography variant='h5' align="center">{title}</Typography>
                </Grid>
                <Stack

                    direction='row'
                    justifyContent='center'
                    spacing={{ xs: 0.2, sm: 2, md: 4 }}
                >
                    {values.map((skill, i) => <Skill key={i} {...skill} />)}
                </Stack>
            </PTGridContainer>
        </PTCardContainer>
    );
}