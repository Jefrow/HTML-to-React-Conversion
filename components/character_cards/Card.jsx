import React from 'react'
import './Card.css'

export const Card = ({character}) => {
  return (
    <div className ='card'>
      <div className ='card-titles'>
        <h3>{character.name}</h3>
        <h4>{character.nickName}</h4>
      </div>
      <img 
        src={character.imageUrl} alt={`${character.name} image`}
      />
      <p>{character.background}</p>
    </div>
  )
}