import { Box, Grid } from '@mui/material';
import { PTGrid } from '../_commons/_components';
import { CountdownRedux } from './components/countdown/countdownRedux';

export default function About() {
    return (
        <PTGrid>
            <Grid xs={2} />
            <Grid xs={8}>
                <CountdownRedux />
            </Grid>
            <Grid xs={2} />
        </PTGrid>
    )
}