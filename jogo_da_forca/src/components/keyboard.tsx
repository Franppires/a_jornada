import styled from "styled-components"

const Keys = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  gap: 0.5rem;
  width: 600px;
`

const Button = styled.button<{ isActive: boolean }>`
  opacity: ${prop => prop.isActive ? 'null' : '0.3'};

  &:focus:disabled { 
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }

  &:focus-visible:disabled { 
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }
  
  &:hover:disabled { 
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }
`

interface KeyBoardProps { 
  disabled?: boolean
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetters: (letter: string) => void
}

export default function Keyboard({activeLetters, inactiveLetters, addGuessedLetters, disabled = false}: KeyBoardProps) {
  return (
    <Wrapper>
      {Keys.map((letter) => {
        const isActive = !activeLetters.includes(letter)
        const isInactive = !inactiveLetters.includes(letter)

        return (
          <Button 
            onClick={() => {addGuessedLetters(letter)}} 
            isActive={isActive && isInactive} 
            key={letter}
            disabled={!(isActive && isInactive) || disabled}
            >
              {letter.toUpperCase()}
          </Button>
        )
      })}
    </Wrapper>
    
  )
}
