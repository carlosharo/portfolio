import { Box, Card, Grid, Typography } from '@mui/material';
import { PTImage, PTGrid, PTCard } from './_commons/_components';

export default function Home() {
  return (
    <Box >
      <PTGrid>
        <Grid md={3}>
          <PTCard>
            <PTImage src='./mac_under_construction.jpeg' alt='avatar' />
          </PTCard>
        </Grid>
        <Grid md={1} />
        <Grid md={4}>
          <PTCard>
            <Typography variant='h5'>Portfolio Under Construction</Typography>
          </PTCard>
        </Grid>
      </PTGrid>
      <PTGrid>
        <Grid md={5}>
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
        <Grid md={1} />
        <Grid md={2}>
          <Card sx={{ maxWidth: 150, backgroundColor: 'transparent' }} >
            <PTImage src='./me.jpeg' alt='avatar' style={{ borderRadius: '50%' }} />
          </Card>
        </Grid>
      </PTGrid>

    </Box>
  );
}

