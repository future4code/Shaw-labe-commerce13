import React from 'react';
import styled from 'styled-components'



const MainProdutos = styled.div`
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

export default class Produtos extends React.Component {

    render(){
    return (

<MainProdutos>
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
</MainProdutos>
)
}
}