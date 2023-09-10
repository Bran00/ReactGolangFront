import PropTypes from "prop-types"
import styles from './CardJob.module.css'

const VagaCard = ({ vaga }) => {
  // ... Seu código atual ...

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
      <a href={vaga.link} target="_blank" rel="noopener noreferrer">
        Ver Detalhes
      </a>
    </div>
  )
}

VagaCard.propTypes = {
  vaga: PropTypes.shape({
    jobname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
}

export default VagaCard
