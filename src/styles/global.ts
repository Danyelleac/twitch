'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin:0; // zera as margens
    padding:0; // zera o padding
    box-sizing:border-box; // faz com que o padding e a borda não aumentem o tamanho do elemento
  }
  html{
    font-size:62.5%; // 1rem = 10px- facilita a conversão de px para rem

  } 
  html, body, #__next{
    height:100%; // faz com que o body ocupe 100% da tela
  }
  body{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; // fonte padrão do sistema de cada usuário
  }

    
`
