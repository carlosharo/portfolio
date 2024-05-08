import styles from "../page.module.css";

/* This component could be used to add custom layout to the about Page.  */
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}