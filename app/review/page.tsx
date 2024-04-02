import styles from "../page.module.css";

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.leftbar}>
                <div>Javascript</div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.card}>
                    <h2>let declaration</h2>
                    <div className={styles.description}>
                        {`The let statement declares a block scope local variable, optionally initializing it to a value.`}
                    </div>
                    <div className={styles.card}>
                        {`{
                                let x = 1;

                                if (x === 1) {
                                    let x = 2;
                                    console.log(x);   // expected output: 2
                                }
                                console.log(x);   // expected output: 1
                            }`}
                    </div>
                </div>
            </div>
        </div>
    );
}