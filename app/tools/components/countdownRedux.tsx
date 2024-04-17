'use client'
import { useEffect, useReducer, useCallback } from "react";
import styles from "../../page.module.css";
import { getTime, getFormat } from '../../_utils';
import { SettingsIcon } from '../../_commons/_icons';
import { ActionPayload, countdownReducer, CountdownType, initialState } from '../../_reducers'
import { Settings } from "./settings";

export const CountdownRedux = () => {
    const [state, dispatch] = useReducer(countdownReducer, initialState);
    const { counter, seconds, minutes, showSettings } = state;
    const { minutes: currentMinutes, seconds: currentSeconds, isRunning } = getTime(counter);

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
    }, [counter]);

    return (
        <>
            <div className={styles.countdown_header}>
                <h2>Counter</h2>
                <SettingsIcon onClick={toggleSettings} />
            </div>
            <div className={styles.card}>
                <div
                    key='countdown'
                    className={+currentMinutes <= 0 && +currentSeconds <= 0 ? '' : +currentMinutes < 15 ? styles.alert : +currentMinutes < 20 ? styles.warning : ''}
                >
                    <div
                        key='countdow-time'
                        className={styles.countdown}
                    >
                        {isRunning ? getFormat(currentMinutes, currentSeconds) : 'TIME IS UP'}
                    </div>
                    <button
                        className={styles.startbutton}
                        onClick={handleStart}
                    >
                        {buttonText}
                    </button>
                </div>
                {
                    showSettings && <Settings minutes={minutes} seconds={seconds} handleTime={handleTime} />
                }
            </div></>

    );
}