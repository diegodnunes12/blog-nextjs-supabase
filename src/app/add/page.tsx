"use client";
import styles from "../page.module.css";
import { addPost } from "../services/add-post";
import { IPost } from "../types/post";
import "./styles.css";

export default function Add() {
    function handleSubmit(e: any) {
      e.preventDefault();
      
      const post: IPost = {
        title: e.target.title.value,
        description: e.target.description.value,
        text: e.target.text.value,
      }

      addPost(post);
    }

    return (
      <main className={styles.main}>
        <h1>Adicionar novo post</h1>
  
        <section>
          <form onSubmit={handleSubmit}>
            <div>
              <input name="title" type="text" placeholder="Título" />
            </div>
            <div>
              <input name="description" type="text" placeholder="Descrição" />
            </div>
            <div>
              <textarea name="text" placeholder="texto"></textarea>
            </div>
            <div>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </section>
      </main>
    )
  }
  