import styles from "../../page.module.css";
import { CountdownType, ActionPayload } from '../../_reducers/countdownReducer';
import { memo } from "react";

interface SettingsProps {
    minutes: number;
    seconds: number;
    handleTime: (type: CountdownType, payload: ActionPayload) => void;
}

export const Settings = memo(({ minutes, seconds, handleTime }: SettingsProps) => {
    
    return (
        <div className={styles.countdown_controls}>
            <label htmlFor="minutes">Minutes</label>
            <input
                min={0}
                max={59}
                className={styles.countdow_input}
                name="minutes" type="number"
                value={minutes}
                onChange={(e) => handleTime(CountdownType.UPDATE_MINUTES, { minutes: parseInt(e.target.value) })}
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
                onChange={(e) => handleTime(CountdownType.UPDATE_SECONDS, { seconds: parseInt(e.target.value) })}
            >
            </input>
        </div>
    );
})