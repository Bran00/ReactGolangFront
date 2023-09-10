import React, { useEffect, useState } from "react"
import { apiService } from "../../services/api"
import VagaCard from "../../components/Card/cardJob"
import styles from "./Home.module.css"

export function Home() {
  const [vagas, setVagas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiService.get("/openings")
        const data = response.data.Data // Acesso aos dados corretamente

        setVagas(data)
        setIsLoading(false)
      } catch (error) {
        console.error("Erro ao buscar vagas:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={styles.home}>
      <h1 className={styles.titulo}>Vagas Disponíveis</h1>
      <a href="/new">Adicione uma vaga</a>

      {isLoading ? (
        <p className={styles.carregando}>Carregando...</p>
      ) : (
        <div className={isLoading ? styles.hidden : styles.grid}>
          {vagas.map((vaga) => (
            <VagaCard key={vaga._id} vaga={vaga} />
          ))}
        </div>
      )}
    </div>
  )
}
