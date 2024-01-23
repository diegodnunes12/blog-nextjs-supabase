import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Blog do Diego</h1>

      <div className={styles.post}>
          <h2>Desenvolvimento de sites com Next</h2>
          <p>Hoje vamos desenvolver um site bem legal utlizando o nextjs. Não perca!</p>
          <Link href="/123">Leia Mais</Link>
      </div>
    </main>
  );
}
