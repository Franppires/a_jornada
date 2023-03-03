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
  margin-bottom: 1.5rem;
`

export default function HangmanWord() {
  const word = 'teste'
  const guessedLetters = ['s', 't']

  return (
    <Wrapper>
      {word.split("").map((letter, index) => (
        <Letter key={index}>
          <span style={{visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'}}>
            {letter}
          </span>
        </Letter>
      ))}
    </Wrapper>
  )
}
