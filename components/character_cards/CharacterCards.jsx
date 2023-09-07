import React from "react";
import { Card } from "./Card";
import './CharacterCards.css'

class CharacterCards extends React.Component {
  render() {

    const {data} = this.props

    return (
      <section id='character-cards'>
        {data.map((character) => (
          <Card character={character}/>
        ))}
      </section>
    )
  }
}

export default CharacterCards; 