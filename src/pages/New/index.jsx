import React, { useState } from "react"
import { apiService } from "../../services/api"
import styles from "./New.module.css" 

export function New() {
  const [jobName, setJobName] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState("")
  const [link, setLink] = useState("")
  const [location, setLocation] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleTagInputChange = (e) => {
    setTags(e.target.value)
  }

  const handleCreateVaga = async () => {
    try {
      if (!jobName || !description || !tags || !link || !location) {
        setErrorMessage("Por favor, preencha todos os campos.")
        return
      }

      const tagsArray = tags.split(",").map((tag) => tag.trim())

      const novaVaga = {
        jobName,
        description,
        tags: tagsArray,
        link,
        location,
      }

      await apiService.post("/opening", novaVaga)

      alert("Vaga anunciada com sucesso!")
      window.location.href = "/"
    } catch (error) {
      console.error("Erro ao criar a vaga:", error)
      setErrorMessage("Erro ao criar a vaga. Por favor, tente novamente.")
    }
  }

  return (
    <div className={styles["create-vaga-container"]}>
      <div className={styles["create-vaga-form"]}>
        <h1>Criar Nova Vaga</h1>
        {errorMessage && (
          <p className={styles["error-message"]}>{errorMessage}</p>
        )}
        <label>Nome da Vaga:</label>
        <input
          type="text"
          value={jobName}
          onChange={(e) => setJobName(e.target.value)}
        />
        <label>Descrição:</label>
        <textarea
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Tags (separadas por vírgula):</label>
        <input type="text" value={tags} onChange={handleTagInputChange} />
        <label>Link:</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <label>Localização:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleCreateVaga}>Criar Vaga</button>
      </div>
    </div>
  )
}
