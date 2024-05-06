import { Box, Card, Grid, Typography } from '@mui/material';
import { PTGrid } from './_commons/_components/PTGrid';
import { PTImage } from './_commons/_components/PTImage';

export default function Home() {
  return (
    <Box >
      <PTGrid>
        <Grid md={2} />
        <Grid md={5}>
          <Card sx={{ bgcolor: '#000', color: '#fff' }}>
            <div>
              <div>
                <Typography variant='h4'>I am Carlos </Typography>
                <Typography variant='h3' sx={{
                  backgroundImage: 'linear-gradient(90deg, blue, white)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Frontend Developer  NextJs, React, JavaScript, GraphQL</Typography>
              </div>
              <div>
                <Typography paragraph>
                  I am a software engineer with over seven years of experience in front-end development, specializing in React and JavaScript. I am passionate about creating innovative, functional and attractive web solutions that meet the needs of users and clients.
                </Typography>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid md={1}/>
        <Grid md={2}>
          <Card sx={{ maxWidth: 150, backgroundColor: 'transparent' }} >
            <PTImage src={'./me.jpeg'} alt={'avatar'} />
          </Card>
        </Grid>
        <Grid md={2}/>
      </PTGrid>
    </Box>
  );
}

