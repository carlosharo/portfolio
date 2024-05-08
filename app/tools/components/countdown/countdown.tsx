'use client'
import { useEffect, useState } from "react";
import { getTime, getFormat } from '../../../_utils';
import { SettingsIcon } from '../../../_commons/_icons';

export const Countdown = () => {
    const [counter, setCounter] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(45);
    const [showControls, setShowControls] = useState<boolean>(false);
    const { minutes: currentMinutes, seconds: currentSeconds, isRunning } = getTime(counter);

    const handleStart = (
        e: { preventDefault: () => void; }
    ): void => {
        e.preventDefault();
        if (isRunning) {
            setCounter(0);
        } else {
            setCounter((minutes * 60 * 1000) + (seconds * 1000));
        }
    }

    const handleTime = (
        e: { target: { value: string; }; },
        callFunction: (arg0: number) => void
    ): void => {
        callFunction(parseInt(e.target.value));
    }

    const toggleControls = (): void => {
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
    }, [counter, isRunning]);


    return (
        <>
            <div>
                <h2>Counter</h2>
                <SettingsIcon onClick={toggleControls} />
            </div>
            <div>
                <div
                    key='countdown'
                >
                    <div
                        key='countdow-time'
                    >
                        {isRunning ? getFormat(currentMinutes, currentSeconds) : 'TIME IS UP'}
                    </div>
                    <button
                        onClick={handleStart}
                    >
                        {buttonText}
                    </button>
                </div>
                {
                    showControls &&
                    <div >
                        <label htmlFor="minutes">Minutes</label>
                        <input
                            min={0}
                            max={59}
                            name="minutes" type="number"
                            value={minutes} onChange={(e) => handleTime(e, setMinutes)}
                        >
                        </input>
                        <label htmlFor="seconds">Seconds</label>
                        <input
                            min={0}
                            max={59}
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