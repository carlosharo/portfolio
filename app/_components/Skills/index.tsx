'use client'
import { Grid, Stack, Typography, useTheme } from "@mui/material";
import { PTCard, PTCardContainer, PTCardContent, PTGridContainer } from "..";
import { BaseSkillsProps, SkillProps } from "@/app/_commons/_types";

export const Skill = ({ name, icon }: SkillProps) => {
    const theme = useTheme();
    return (
        <PTCard sx={{ '&:hover': {
            background: theme.palette.action.hover,
        }}}>
            <PTCardContent sx={{
                width: { xs: 'auto', md: '100px' },
                padding: { xs: '5px', sm: '10px', md: '15px' },
                '&:last-child': { 
                    paddingBottom: { xs: '5px', sm: '10px', md: '15px'},
                }
            }}>
                {icon}
                <Typography align='center' sx={{ fontSize: { xs: 'x-small', sm: 'small', md: 'medium' } }}>{name}</Typography>
            </PTCardContent>
        </PTCard>
    );
}

export const Skills = ({ title, values }: BaseSkillsProps) => {
    const theme = useTheme();
    return (
        <PTCardContainer sx={{background: theme.palette.background.paper}}>
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