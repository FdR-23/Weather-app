import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useSelector } from 'react-redux'

import Card from '../components/Card';

export default function Home() {

  const { list } = useSelector((state) => state.cards);
  return (
    <div className={styles.container}>
      <Head>
        <title>Proyect Weather-App</title>
        <meta name="description" content="Proyect Weather-App" />
        <link rel="icon" href="/FdR-Ico2.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.title}>Weather</p>
      </main>
      <div className={styles.grid}>

        {list && list.map(e => {
          return (
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              country={e.country}
              img={e.img}
              temp={e.temp}
            />)
        })}



      </div>




      <footer className={styles.footer}>
        <div>
          <p>Powered by {'FdR-23'} </p>
          <div className={styles.logo}>
            <a
              href="https://github.com/FdR-23/"
              target="_blank"
              rel="noreferrer">
              <Image src="/FdR-logo.png" alt="Logo" width={52} height={52} />
            </a>
          </div>

        </div>
      </footer>
    </div>
  )
}
