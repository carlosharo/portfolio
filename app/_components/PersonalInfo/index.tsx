'use client'
import { Container, Grid, Typography, useTheme } from "@mui/material";
import { PTCardContainer, PTGridContainer, PTImage } from "..";
import { useContext } from "react";
import { PortfolioContext } from "@/app/_context/ContextProvider";


export const PersonalInfo = () => {
    const theme = useTheme();
    const portfolio = useContext(PortfolioContext);
    const { intro, name, teach, description } = portfolio?.personalInfo;
    return (
        <Container>
        <PTCardContainer >
            <PTGridContainer>
                <Grid md={6} item>
                    <Typography variant='h4'>{`${intro} ${name}`}</Typography>
                    <Typography variant='h3' sx={{
                        backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>{teach}</Typography>
                    <Typography paragraph>
                        {description}
                    </Typography>
                </Grid>
                <Grid md={6} item>
                    <PTImage src='./me.jpeg' alt='avatar' style={{ borderRadius: '25%', maxWidth: 200, minWidth: 200 }} />
                </Grid>
            </PTGridContainer>
        </PTCardContainer>
        </Container>
    );
}