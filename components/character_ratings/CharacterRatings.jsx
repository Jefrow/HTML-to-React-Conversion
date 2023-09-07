import React from 'react'
import './CharacterRatings.css'

export const CharacterRatings = ({data}) => {
  const tableHeadings = ['Name', 'Skillset', 'Votes']; 
  return (
    <section id = 'character-ratings'>
      <h4>Top Characters</h4>
      <table>
        <thead>
          {
            tableHeadings.map((heading) => (
              <th key = {heading}>{heading}</th>
            ))
          }
        </thead>
        <tbody>
          {
            data.filter((character) => character.votes > 90)
                .map((character, index) => (
                  <tr key = {character.name} className = {index % 2 === 0 ? 'dark' : 'light'}>
                    <td>{character.name}</td>
                    <td>{character.skillset}</td>
                    <td>{character.votes}</td>
                  </tr>
                ))
          }
        </tbody>
      </table>
    </section>
  )
}