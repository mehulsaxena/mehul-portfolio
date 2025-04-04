import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mehul Saxena | Portfolio</title>
        <meta name="description" content="Senior Python Engineer | DevOps Specialist" />
      </Head>
      <main className={styles.main}>
        <h1>
          <TypeAnimation
            sequence={[
              "Hi, I'm Mehul Saxena", 1000,
              "AWS & DevOps Engineer", 1000,
              "Cloud Security Specialist", 1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p>Welcome to my portfolio website!</p>
      </main>
    </>
  )
}
