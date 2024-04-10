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
                    <Countdown />
                </div>
            </div>
        </div>
    );
}