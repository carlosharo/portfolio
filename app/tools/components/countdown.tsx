'use client'
import { useEffect, useState } from "react";
import styles from "../../page.module.css";
import { getTime } from '../../_utils'

export const Countdown = () => {
    const defaultTime = (45 * 60 * 1000);
    const [counter, setCounter] = useState(defaultTime);
    const { formatTime, minutes } = getTime(counter);

    useEffect(() => {
        setTimeout(() => {
            setCounter(counter - 1000)
        }, 1000)
    }, [counter])

    return (
        <div className={+minutes < 15 ? styles.alert : +minutes < 20 ? styles.warning : ''}>
            <div className={styles.countdown}>{formatTime}</div>
        </div>

    );
}