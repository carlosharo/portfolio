import styles from "../page.module.css";
import Image from 'next/image';

export const FooterLayout = () => {
    return (
        <footer className={styles.footer}>
            <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
        </footer>);
}