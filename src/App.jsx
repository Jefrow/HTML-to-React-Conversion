import { useState } from 'react'
import {data} from '../public/fma-data'
import { Header } from '../components/header/header'
import { CharacterRatings } from '../components/character_ratings/CharacterRatings'
import CharacterCards from '../components/character_cards/CharacterCards'

function App() {
  return (
    <>
      <Header />
      <CharacterRatings 
        data = {data}
      />
      <CharacterCards 
        data = {data}
      />
    </>
  )
}

export default App
