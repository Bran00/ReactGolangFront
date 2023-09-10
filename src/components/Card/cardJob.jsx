import React from "react"
import styles from "./cardJob.module.css"

const VagaCard = ({ vaga }) => {
  return (
    <div className={styles.vagaCard}>
      <h1 className={styles.titulo}>{vaga.jobname}</h1>
      <p className={styles.descricao}>{vaga.description}</p>
      <ul className={styles.tags}>
        {vaga.tags.map((tag, index) => (
          <li key={index} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
      <a href={vaga.link} target="_blank">Ver Detalhes</a>
    </div>
  )
}

export default VagaCard
