import React, { useEffect, useState } from "react"

export function Home() {
  const [vagas, setVagas] = useState([]) 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/vagas") // Use os endpoints da sua API aqui
        setVagas(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="home">
      <h1>Vagas disponíveis</h1>
      <div className="grid">
        {vagas.map((vaga) => (
          <div key={vaga.id} className="grid-item">
            {/* Aqui você renderiza cada card com base nos dados da vaga */}
            <h3>{vaga.titulo}</h3>
            <p>{vaga.empresa}</p>
            <p>{vaga.localizacao}</p>
            {/* Adicione mais informações conforme necessário */}
          </div>
        ))}
      </div>
    </div>
  )
}
