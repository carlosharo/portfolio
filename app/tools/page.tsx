import styles from "../page.module.css";
import { Countdown } from './components/countdown';

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.leftbar}>
                <div></div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.card}>
                    <h2>Counter</h2>
                    <div className={styles.description}>
                        <h5> Countdown time set to 45 minutes</h5>
                    </div>
                    <div className={styles.card}>
                        <Countdown />
                    </div>
                </div>
            </div>
        </div>
    );
}