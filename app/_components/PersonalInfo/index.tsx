'use client'
import { Grid, Typography } from "@mui/material";
import { PTCardContainer, PTGridContainer, PTImage } from "..";
import { theme } from "@/app/theme";

export const PersonalInfo = () => {
    return (
        <PTCardContainer >
            <PTGridContainer>
                <Grid md={6}>
                    <Typography variant='h4'>I am Carlos </Typography>
                    <Typography variant='h3' sx={{
                        backgroundImage: `linear-gradient(90deg, ${theme.palette.secondary.light}, ${theme.palette.primary.contrastText})`,
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>Frontend Developer  NextJs, React, JavaScript, GraphQL</Typography>
                    <Typography paragraph>
                        I am a software engineer with over nine years of experience on web development and seven years of experience in front-end development, specializing in React and JavaScript. 
                        I am passionate about creating innovative, functional, attractive web solutions and deploy high-quality, high-performance Saas application. 
                    </Typography>
                </Grid>
                <Grid md={6}>
                    <PTImage src='./me.jpeg' alt='avatar' style={{ borderRadius: '25%', maxWidth: 200, minWidth: 200 }} />
                </Grid>
            </PTGridContainer>
        </PTCardContainer>
    );
}