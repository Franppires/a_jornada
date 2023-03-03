import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: sans-serif;
` 
const Letter = styled.span`
  border-bottom: 0.1em solid white;
  gap: 2rem;
  height: 80px;
  min-width: 50px;
`

interface HangmanWordProps { 
  reveal: boolean;
  word: string;
  guessedLetters: string[];
}

export default function HangmanWord({  word, guessedLetters, reveal}: HangmanWordProps) {

  return (
    <Wrapper>
      {word.split("").map((letter, index) => (
        <Letter key={index}>
          <span style={{
            visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden', 
            color: !guessedLetters.includes(letter) && reveal ? 'red' : 'green'}}>
              {letter}
          </span>
        </Letter>
      ))}
    </Wrapper>
  )
}
