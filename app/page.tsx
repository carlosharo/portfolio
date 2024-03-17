import styles from "./page.module.css";
import Image from 'next/image';
import profilePic from '../public/me.jpeg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p>
          <Image
            className={styles.avatar}
            src={profilePic}
            alt="Picture of the author"
            width={150}
            height={150} />
        </p>
      </div>
      <div className={styles.card}>
        <h2>Carlos Jimenez Haro </h2>
        <p>Frontend Developer in Svitla Systems, Inc. | NextJs, React, JavaScript, GraphQL</p>
      </div>
      <div className={styles.card}>
        <p>
          I am a software engineer with over seven years of experience in front-end development, specializing in React and JavaScript. I am passionate about creating innovative, functional and attractive web solutions that meet the needs of users and clients.
        </p>
      </div>
    </main >
  );
}

