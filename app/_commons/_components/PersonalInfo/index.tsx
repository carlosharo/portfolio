import { Grid, Typography } from "@mui/material";
import { PTCard, PTGrid, PTImage } from "..";

export const PersonalInfo = () => {
    return (
        <PTCard styled>
            <PTGrid>
                <Grid md={8}>
                    <PTCard>
                        <Typography variant='h4'>I am Carlos </Typography>
                        <Typography variant='h3' sx={{
                            backgroundImage: 'linear-gradient(90deg, blue, white)',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>Frontend Developer  NextJs, React, JavaScript, GraphQL</Typography>
                        <Typography paragraph>
                            I am a software engineer with over seven years of experience in front-end development, specializing in React and JavaScript. I am passionate about creating innovative, functional and attractive web solutions that meet the needs of users and clients.
                        </Typography>
                    </PTCard>
                </Grid>
                <Grid md={3}>
                    <PTCard>
                        <PTImage src='./me.jpeg' alt='avatar' style={{ borderRadius: '50%', maxWidth: 200, minWidth: 200 }} />
                    </PTCard>
                </Grid>
            </PTGrid>
        </PTCard>
    );
}