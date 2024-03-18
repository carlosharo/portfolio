import ArticlesList from '../components/ArticlesList';
import styles from '../page.module.css';

export default function About() {

    return (
        <div>
            <h2 className={styles.card}>Articles list</h2>
            <ArticlesList />
        </div>

    );
}