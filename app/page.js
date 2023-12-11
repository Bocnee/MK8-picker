import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Work in Progress</p>
      </div>
      <div className={styles.center}>
        <h1>Page en construction</h1>
      </div>
      <div className={styles.center}>
        Je suis actuellement en train de travailler sur des fichiers JSON et la
        structure de mes fichiers.
      </div>
      <div className={styles.grid}>
        <a
          href="https://mk8-random-picker-mu.vercel.app/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Le site <span>-&gt;</span>
          </h2>
          <p>
            Cliquez ici pour aller sur l&apos;ancien site encore fonctionnel.
          </p>
        </a>
        <a
          href="./datas/courses.json"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            courses.json <span>-&gt;</span>
          </h2>
          <p>Un JSON avec toutes les courses, DLCs compris.</p>
        </a>
        <a
          href="./datas/drivers.json"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            drivers.json <span>-&gt;</span>
          </h2>
          <p>Un JSON avec tous les personnages jouables, DLCs compris.</p>
        </a>
      </div>
    </main>
  );
}
