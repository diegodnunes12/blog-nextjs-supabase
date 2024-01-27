import styles from "../page.module.css";
import "./styles.css";

export default function Add() {
    /* function handleSubmit(e: any) {
      e.preventDefault();
      console.log('You clicked submit.');
    } */

    return (
      <main className={styles.main}>
        <h1>Adicionar novo post</h1>
  
        <section>
          <form /* onSubmit={handleSubmit} */>
            <div>
              <input type="text" placeholder="Título" />
            </div>
            <div>
              <input type="text" placeholder="Descrição" />
            </div>
            <div>
              <textarea placeholder="texto"></textarea>
            </div>
            <div>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </section>
      </main>
    )
  }
  