import { Box, Card, Grid, Typography } from '@mui/material';
import { ImageBase } from './_commons/_components/ImageBase';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={2} />
        <Grid xs={5}>
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
        <Grid xs={1}/>
        <Grid xs={2}>
          <Card sx={{ maxWidth: 150 }}>
            <ImageBase src={'./me.jpeg'} alt={'avatar'} />
          </Card>
        </Grid>
        <Grid xs={2}/>
      </Grid>
    </Box>
  );
}

