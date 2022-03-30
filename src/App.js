import React from 'react';
import styled from 'styled-components'

const MainContainer = styled.div `
  display:  flex;
  background-color: black;
  min-height: 100vh;
`
const Filtros = styled.div`
  background-color: green;
  width: 22%;
`

const Produtos = styled.div `
  background-color: red;
  width: 56%;
`

const Carrinho = styled.div`
  background-color: blue;
  width: 22%;
`

function App() {
  return (
    <MainContainer>
      <Filtros>
        <h3>Filtros</h3>
        <label>Valor Minimo: <input type="number" value="100"></input></label>
        <label>Valor Maximo: <input type="number" value="1000"></input></label>
        <label>Busca por nome: <input type="text"></input></label>
      </Filtros>
      <Produtos>
        <h3>Rapaziada</h3>
      </Produtos>
      <Carrinho>
        <h3>Olá</h3>
      </Carrinho>


    </MainContainer>
  );
}

export default App;
