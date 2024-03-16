import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.home}>Home</div>
          <ul>
            <li>About</li>
            <li>Book</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <div className={styles.social}>social</div>
        </nav>
      </header>
      <main className={styles.main}>
        main contect
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}

