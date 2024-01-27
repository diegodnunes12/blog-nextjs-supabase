import { useRouter } from "next/router";
import styles from "../page.module.css";
import { getPostId } from "../services/get-post-id";
import { IPost } from "../types/post";

export default async function Post({params}: {params: {postId: number}}) {
  const post = await getPostId(params.postId);

  return (
    <main className={styles.main}>
      {post.map((post: IPost) =>  <section key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
        </section>)}
    </main>
  );
}
