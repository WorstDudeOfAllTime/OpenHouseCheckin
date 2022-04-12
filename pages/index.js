import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import elfantLogo from '/public/img/elfantlogo.gif'
export let name = "";
const getName = () => {
    if(process.browser){
        name = document.getElementById("nameBox").value;
    }
}

export default function Home() {
  return (
    <div className={styles.pageBox}>
      <Head>
        <title>Open House Check-in</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.page}>
      <section className={styles.container}>
        <div className={styles.formBox}>
            <div className={styles.logo}>
                <Image className={styles.compLogo} src={elfantLogo} width={527} height={233}/>
            </div>
            <div className={styles.checkIn}>
                <form className={styles.checkInForm}>
                    <label className={styles.labels}> Name: 
                        <input id="nameBox" className={styles.input} type="text" placeholder="Enter your name"/>
                    </label>
                    <label className={styles.labels}> Phone: 
                        <input className={styles.input} type="text" placeholder="Enter your phone number"/>
                    </label>
                    <label className={styles.labels}> Email: 
                        <input className={styles.input} type="text" placeholder="Enter your email"/>
                    </label>
                    <Link href="/posts/thankyou">
                   <a>
                   <input onClick={getName} className={styles.submitBtn} type="submit"/>
                   </a>
                    </Link>
                </form>
            </div>
        </div>
    </section>
    </main>
    </div>
  )
}
