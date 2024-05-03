import styles from '../../page.module.css';
import Image from 'next/image';
import getArticles from '../../data/getArticles';

export default async function ArticlesList() {

    const articles = await getArticles();

    return (
        <div>{articles.map((articles: any) => (
            <div key={articles.id} className={`${styles.card} ${styles.row}`}>
                <Image
                    className={styles.avatar}
                    src={articles.avatar}
                    alt="avatar pic"
                    width={150}
                    height={150} />
                <div>
                    <div><h3>{articles.name}</h3></div>
                    <div><h5>{articles.comments}</h5></div>
                </div>

            </div>
        ))}</div>
    )
}