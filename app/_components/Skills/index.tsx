'use client'
import { Grid, Stack, Typography } from "@mui/material";
import { PTCard, PTCardContainer, PTCardContent, PTGridContainer } from "..";
import { ReactNode, useContext } from "react";
import { PortfolioContext } from "@/app/_context/ContextProvider";

interface PTSkillsProps {
    name: string;
    icon?: ReactNode;
}

export const Skill = ({ name, icon }: PTSkillsProps) => {
    return (
        <PTCard>
            <PTCardContent sx={{ width: { xs: 'auto', md: '100px' } }}>
                {icon}
                <Typography align='center' sx={{ fontSize: { xs: 'small', md: 'medium' } }}>{name}</Typography>
            </PTCardContent>
        </PTCard>
    );
}

export const Skills = () => {
    const portfolio = useContext(PortfolioContext);
    const { skills: { title, primary } } = portfolio;
    return (
        <PTCardContainer>
            <PTGridContainer>
                <Grid xs={12}>
                    <Typography variant='h4' align="center">{ title }</Typography>
                </Grid>
                <Stack

                    direction='row'
                    justifyContent='center'
                    spacing={{ xs: 1, md: 4 }}
                >
                    {primary.map((skill, i) => <Skill key={i} {...skill} />)}
                </Stack>
            </PTGridContainer>
        </PTCardContainer>
    );
}