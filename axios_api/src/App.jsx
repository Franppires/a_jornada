
import './App.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => { 
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => {
        setPokemonList(res.data.results)
      })
      .catch((err) => console.log(err))
  }, [])

  

  return (
    <div className="App">
      <h1>Front</h1>
      <div>
        {pokemonList.map((pokemon, index) => (
          <div key={index}>{pokemon.name}</div>
        ))}
      </div>
    </div>
  )
}

export default App
