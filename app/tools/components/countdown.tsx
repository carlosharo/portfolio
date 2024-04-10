'use client'
import { useEffect, useState } from "react";
import styles from "../../page.module.css";
import { getTime, getFormat } from '../../_utils';
import { Settings } from '../../_commons/_icons';

export const Countdown = () => {
    const [counter, setCounter] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(45);
    const [showControls, setShowControls] = useState(false);
    const { minutes: currentMinutes, seconds: currentSeconds, isRunning } = getTime(counter);

    const handleStart = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (isRunning) {
            setCounter(0);
        } else {
            setCounter((minutes * 60 * 1000) + (seconds * 1000));
        }
    }

    const handleTime = (e: { target: { value: string; }; }, callFunction: (arg0: number) => void) => {
        callFunction(parseInt(e.target.value));
    }

    const toggleControls = () => {
        setShowControls(!showControls);
    }

    const buttonText = isRunning ? 'STOP' : 'START';

    useEffect(() => {
        const interval = setInterval(() => {
            if (isRunning) {
                setCounter(counter - 1000)
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [counter]);


    return (
        <>
            <div className={styles.countdown_header}>
                <h2>Counter</h2>
                <Settings onClick={toggleControls} />
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
                    showControls &&
                    <div className={styles.countdown_controls}>
                        <label htmlFor="minutes">Minutes</label>
                        <input
                            min={0}
                            max={59}
                            className={styles.countdow_input}
                            name="minutes" type="number"
                            value={minutes} onChange={(e) => handleTime(e, setMinutes)}
                        >
                        </input>
                        <label htmlFor="seconds">Seconds</label>
                        <input
                            min={0}
                            max={59}
                            className={styles.countdow_input}
                            name="seconds"
                            type="number"
                            value={seconds}
                            onChange={(e) => handleTime(e, setSeconds)}
                        >
                        </input>
                    </div>
                }

            </div></>

    );
}