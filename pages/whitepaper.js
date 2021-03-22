import Head from 'next/head'
import styles from '../styles/whitepaper.module.css'

export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Perpetualism - modern digital art.</title>
          <meta name="description" content="Avant-garde crypto art that uses Artificial Intelligence (AI), blockchain (NFT), XR technologies (AR/VR) and physical mediums to create evolving stories." />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            <a href="/" className={styles.title}>Perpetualism Art</a>
          </h1>
  
          <p className={styles.description}>
            The white paper will be released shortly.
          </p>
  
          <p className={styles.description}>
            Provide us with <a href="https://share.hsforms.com/11N6fP4w-SYqqS_t00oS7Tgbn4t9" target="_blank"><u>your email</u></a> and we will let you know when we release the white paper.
          </p>
  
          <p className={styles.description}>
          <code className={styles.code}>Blockchain</code>{'  '}
          <code className={styles.code}>Artificial Intelligence</code>{'  '}
          <code className={styles.code}>XR</code>{'  '}
          <code className={styles.code}>Physical Medium</code> 
          </p>
  
        </main>
  
        <footer className={styles.footer}>
          <a
            href="https://superpose.art/"
            target="_blank"
          >
            Powered by superpose&trade;
          </a>
        </footer>
      </div>
    )
  }

  