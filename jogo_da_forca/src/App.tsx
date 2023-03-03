import './App.css'
import HangmanDrawing from './components/hangman-drawing'
import HangmanWord from './components/hangman-word'
import Keyboard from './components/keyboard'
import styled from 'styled-components'
import { useCallback, useEffect, useState } from 'react'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`

const HangmanPart = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  width: 375px;
`

const words = [
  'axioma', 'azulejo', 'blitz', 'catarro', 'coçar', 'crespo', 'cripta','fucsia','girar','gnóstico','haicai', 'duplex','hera', 'hifen', 'icterícia', 'indigno', 'intrigante', 'jazz', 'linfa', 'marfim', 'onix', 'psique', 'quartzo', 'quiz', 'quorum', 'tonto', 'topázio', 'torpor', 'valsa', 'vaporizar', 'vertiginoso', 'vicissitude', 'vórtice', 'xilofone'
]

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => { // palavra que adivinha 
    return words[Math.floor(Math.random() * words.length)]
  })

  //pega as letras que chutou e filtra quais letras não tem
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]) // letra que digitamos

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  )

  const correctGuesses = guessedLetters.filter(letter => 
    wordToGuess.includes(letter)
  )

  const isLoser = incorrectGuesses.length >= 6
  const isWinner = wordToGuess
    .split('') //transforma em um array de letras ..
    .every((letter) => guessedLetters.includes(letter))  

  const addGuessedLetters = useCallback( // evita redenrizar ainda vai aparecer no console mas sem a redenrização
  (letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return // se já existe a letra 

    setGuessedLetters((guessedLetters) => [...guessedLetters, letter]) // se não foi digitada adiciona junto a outras ja digitadas
  
  }, [guessedLetters]) 


  useEffect(()=> {
    const handler = ((e: KeyboardEvent ) => {
      const key = e.key // pega a letra 

      if(!key.match(/[a-zA-Z]/)) return // verificar se realmente é uma letra 

      e.preventDefault() // se for letra faz preventdefault
      addGuessedLetters(key) //chama a função para adicionar a letra
    }) as unknown as EventListener

    document.addEventListener("keypress", handler) // esse evento sera executado quando clicar no teclado

    return (() => { 
      document.removeEventListener("keypress", handler)

    })
  }, [guessedLetters])



  return (
    <Wrapper>
      <HangmanPart>
        
        <h2>Front Beginners - Jogo da velha</h2>
        <HangmanDrawing 
          numberOfGuesses={incorrectGuesses.length}
        />
        <HangmanWord 
          reveal={isLoser}
          guessedLetters={guessedLetters} 
          word={wordToGuess}
        />
        {isLoser && 'Você perdeu! Atualize a pagina e tente novamente '}
        {isWinner && 'Parabens Você Ganhou! Atualize a pagina e jogue novamente '}
      </HangmanPart>
        <Keyboard 
          disabled={isLoser || isWinner}
          activeLetters={correctGuesses} 
          inactiveLetters={incorrectGuesses}
          addGuessedLetters={addGuessedLetters}
        />
    </Wrapper>
  )
}

export default App
