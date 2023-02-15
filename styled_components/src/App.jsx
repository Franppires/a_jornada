
import { ButtonStyledComponente, StyleButton } from "./components/Button.styled"
import { Wrapper } from "./components/Wrapper.style"


function App() {


  return (
    <Wrapper>
      
      <StyleButton>Front Beginners</StyleButton>
      <StyleButton backgroundColor="blue">Front Beginners</StyleButton>
      <StyleButton>Front Beginners</StyleButton>
      <ButtonStyledComponente>Teste Componente</ButtonStyledComponente>
      <a href="https://www.google.com/" target={"_blank"}>vá para o google</a>

    </Wrapper>
  )
}

export default App
