import styles from "../page.module.css";
import { CountdownRedux } from './components/countdownRedux';

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.leftbar}>
                <div></div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.card}>
                    <CountdownRedux />
                </div>
            </div>
        </div>
    );
}