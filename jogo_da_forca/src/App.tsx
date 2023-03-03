import './App.css'
import HangmanDrawing from './components/hangman-drawing'
import HangmanWord from './components/hangman-word'
import Keyboard from './components/keyboard'
import styled from 'styled-components'

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
  gap: 1.5rem;
  width: 375px;
`

function App() {

  return (
    <Wrapper>
      <HangmanPart>
        <h2>Front Beginners - Jogo da velha</h2>
        <HangmanDrawing />
        <HangmanWord />
      </HangmanPart>
        <Keyboard />
    </Wrapper>
  )
}

export default App
