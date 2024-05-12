import { CountdownType, ActionPayload } from '../../../_reducers/countdownReducer';
import { memo } from "react";
import { Grid, Typography } from '@mui/material';

interface SettingsProps {
    minutes: number;
    seconds: number;
    handleTime: (type: CountdownType, payload: ActionPayload) => void;
}
// eslint-disable-next-line react/display-name    
export const Settings = memo(({ minutes, seconds, handleTime }: SettingsProps) => {

    return (
        <>
            <Grid xs={6} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Typography sx={{ typography: { sx: 'h3', md: 'h5' } }}>Minutes</Typography>
                <input
                    min={0}
                    max={59}
                    name="minutes" type="number"
                    value={minutes}
                    onChange={(e) => handleTime(CountdownType.UPDATE_MINUTES, { minutes: parseInt(e.target.value) })}
                >
                </input>
            </Grid>
            <Grid xs={6} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Typography sx={{ typography: { sx: 'h3', md: 'h5' } }}>Seconds</Typography>
                <input
                    min={0}
                    max={59}
                    name="seconds"
                    type="number"
                    value={seconds}
                    onChange={(e) => handleTime(CountdownType.UPDATE_SECONDS, { seconds: parseInt(e.target.value) })}
                >
                </input>
            </Grid>
        </>
    );
})