import React from 'react'
import './MovieAdd.css'
import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react'
const MovieAdd = ({addMovie}) => {
const [Titre,setTitre]=useState('')
const [PosteUrl,setPosteUrl]=useState('')
const [Rate,setRate]=useState('')
const[description,setDescription]=useState('')

const addi=()=>{
  addMovie(
    {
      id:  uuidv4() ,
      Titre:Titre,
      PosterURL:PosteUrl,
      Description:description,
      Rate:Rate
    }
  )
}

  return (
    <div>
      <div className="container form-container">
  <h1>Ajout film form</h1>
  <form onsubmit="handleSubmit(event)" autoComplete="off">
    <fieldset>
      <legend>Informations du film </legend>
      <label >Titre:</label>
      {/* input titre  */}
      <input
        type="text"
        name="Prénom"
        placeholder="Entrez votre Titre"
        required=""
        value={Titre}
        onChange={(e)=>setTitre(e.target.value)}
      />
      <label >PostUrl:</label>



{/* input post url */}

      <input
        type="text"
        id="PostUrl"
        name="PostUrl"
        placeholder="Entrez votre PostUrl"
        autoComplete="off"
        value={PosteUrl}
        onChange={(e)=>setPosteUrl(e.target.value)}
      />
      <label >Rate:</label>

      {/* inout rate  */}
      <input
        type="text"
        id="Rate"
        name="Rate"
        placeholder="Entrez votre Rate"
        required=""
        autoComplete="off"
        value={Rate}
        onChange={(e)=>setRate(e.target.value)}
      />
      <label >description</label>
      {/* description */}
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Entrez votre description"
        required=""
        autoComplete="off"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />
    </fieldset>
    <button type="button" onClick={()=>addi()}  >ajouter</button>
  </form>
</div>
    </div>
  )
}

export default MovieAdd