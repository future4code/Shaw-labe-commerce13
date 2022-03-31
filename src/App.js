import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components'

const MainContainer = styled.div`
  display:  flex;
  background-color: black;
  min-height: 100vh;
`
const Filtros = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  width: 22%;
`

const Produtos = styled.div`
  width: 56%;
  padding: 0px 16px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
`
const ProdutosTOP = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
`

const ProdutosVenda = styled.div`
border: 1px solid black;
display: grid;
width: 30vh;
`

const Carrinho = styled.div`
  background-color: gray;
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
          <ProdutosTOP>
            <p>Quantidade de produtos: 0</p>
            <label>Ordenação:
              <select>
                <option value="CRESCENTE">Crescente</option>
                <option value="DECRESCENTE">Decrescente</option>
              </select>
            </label>
          </ProdutosTOP>

          <ProdutosVenda>
            <p>Produto 2</p>
            <p>R$200,00</p>
            <button>Adicionar ao carrinho</button>
          </ProdutosVenda>
        </Produtos>
        <Carrinho>
          <h3>Carrinho:</h3>
          <div>
            <p>1x</p>
            <p>Produto 4</p>
            <button>Remover</button>
          </div>

          <p>Valor total: R$70,00</p>
        </Carrinho>

      </MainContainer>
    );
}


export default App;
