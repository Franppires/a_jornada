import styled from 'styled-components'
import ButtonComponente from './Button'


//tag functions
export const StyleButton = styled.button`
    background-color: ${(prop) => prop.backgroundColor ? prop.backgroundColor : 'black'}; 
    color: white;
    font-size: 1rem;
    padding: 1rem;
    margin: 1rem;
    cursor: pointer;
    border: none;
    height: ${({ theme }) => theme.size.xxl};

    &:hover {
        background-color: gray;
        color: pink;
        border: none;
    }

    &:active {
        background-color: purple;
        
    }    
`

export const ButtonStyledComponente = styled(ButtonComponente)`
    background-color: ${({ theme }) => theme.colors.primary };
    font-size: 1rem;
    margin: 1rem;
    padding: 1rem;
    cursor: pointer;
    border: none;
`