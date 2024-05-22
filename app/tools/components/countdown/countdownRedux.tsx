'use client'
import { useEffect, useReducer, useCallback } from "react";
import { getTime, getFormat } from '../../../_utils';
import { icons } from '../../../_commons/_icons';
import { ActionPayload, countdownReducer, CountdownType, initialState } from '../../../_reducers'
import { Settings } from "./settings";
import { Button, CardActions, CardHeader, Typography } from "@mui/material";
import { PTCardContainer, PTCardContent } from "@/app/_components";

export const CountdownRedux = () => {
    const [state, dispatch] = useReducer(countdownReducer, initialState);
    const { counter, seconds, minutes, showSettings } = state;
    const { minutes: currentMinutes, seconds: currentSeconds, isRunning } = getTime(counter);
    const { SettingsIcon } = icons;

    const handleStart = (
        e: { preventDefault: () => void; }
    ): void => {
        e.preventDefault();
        if (isRunning) {
            dispatch({
                type: CountdownType.STOP,
                payload: {}
            });
        } else {
            dispatch({
                type: CountdownType.START,
                payload: { minutes, seconds },
            })
        }
    }

    const handleTime = useCallback((type: CountdownType, payload: ActionPayload): void => {
        dispatch({
            type,
            payload,
        });
    }, [])


    const toggleSettings = (): void => {
        dispatch({
            type: CountdownType.SHOW_SETTINGS,
            payload: {}
        })
    }

    const buttonText = isRunning ? 'STOP' : 'START';

    useEffect(() => {
        const interval = setInterval(() => {
            if (isRunning) {
                dispatch({
                    type: CountdownType.DECREASE,
                    payload: {}
                })
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [counter, isRunning]);

    return (
            <PTCardContainer >
                <CardHeader
                    title='Counter'
                    action={<SettingsIcon onClick={toggleSettings} />}
                >
                </CardHeader>
                <PTCardContent>
                    <Typography sx={{ typography: { xs: 'h3', md: 'h2' } }}>
                        {isRunning ? getFormat(currentMinutes, currentSeconds) : 'TIME IS UP'}
                    </Typography>
                    <Button variant="contained" color="primary" fullWidth onClick={handleStart}>
                        {buttonText}
                    </Button>
                </PTCardContent>
                {showSettings && <CardActions>
                    <Settings minutes={minutes} seconds={seconds} handleTime={handleTime} />
                </CardActions>}
            </PTCardContainer>
    );
}