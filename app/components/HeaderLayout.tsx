import styles from "../page.module.css";
import Link from 'next/link'

export const HeaderLayout = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.home}>
                    <Link href="/">Home</Link>
                </div>
                <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/articles">Articles</Link>
                    </li>
                    <li>
                        <Link href="/review">Review</Link>
                    </li>
                    <li>
                        <Link href="/settings">Settings</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <div className={styles.social}>
                    <Link href="/social">Social</Link>
                </div>
            </nav>
        </header>
    );
}