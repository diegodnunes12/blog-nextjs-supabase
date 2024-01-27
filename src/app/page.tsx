import Link from "next/link";
import styles from "./page.module.css";
import { getPosts } from "./services/get-posts";
import { IPost } from "./types/post";

export default async function Home() {
  const posts = await getPosts();
   
  return (
    <main className={styles.main}>
      <h1>Blog do Diego</h1>

      <section className={styles.section}>
        {posts.map((post: IPost) => <article key={post.id} className={styles.post}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <Link href={`/${post.id}`}>Leia Mais</Link>
        </article>)}
      </section>
    </main>
  )
}
