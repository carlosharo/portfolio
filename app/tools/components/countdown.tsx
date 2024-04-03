'use client'
import { useEffect, useState } from "react";
import styles from "../../page.module.css";
import { getTime, getFormat } from '../../_utils'

export const Countdown = () => {
    const defaultTime = (45 * 60 * 1000);
    const [counter, setCounter] = useState(0);
    const { minutes, seconds, isRunning } = getTime(counter);

    useEffect(() => {
        if (isRunning) {
            setTimeout(() => {
                setCounter(counter - 1000)
            }, 1000);
        }
    }, [minutes, seconds]);


    return (
        <div key='countdown' className={+minutes === 0 ? '' : +minutes < 15 ? styles.alert : +minutes < 20 ? styles.warning : ''}>
            <div key='countdow-time' className={styles.countdown}>{isRunning ? getFormat(minutes, seconds) : 'TIME IS UP'}</div>
            <button disabled={isRunning} className={styles.startbutton} onClick={(e) => {
                e.preventDefault();
                setCounter(defaultTime);
            }}>START</button>
        </div>

    );
}