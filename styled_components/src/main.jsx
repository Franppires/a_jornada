import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { GlobalStyled } from './components/GlobalStyled'
import { theme } from './components/Theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyled />
      <App />  
    </ThemeProvider>
   
  </React.StrictMode>,
)
