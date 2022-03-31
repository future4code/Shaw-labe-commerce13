import React from 'react';
// import { render } from 'react-dom';
import styled from 'styled-components'
import Carrinho from './components/Carrinho';
import Produtos from './components/Produtos';
import Filtros from './components/Filtros';



const MainContainer = styled.div`
  display: flex;
  background-color: black;
  min-height: 100vh;
`

function App() {

    
    return (
      <MainContainer>
        <Filtros></Filtros>
        <Produtos></Produtos>
        <Carrinho></Carrinho>
      </MainContainer>
    
    );
}


export default App;
