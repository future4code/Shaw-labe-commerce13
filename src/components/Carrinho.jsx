import React from 'react';
import styled from 'styled-components'

const MainCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  width: 22%;
`

export default class Carrinho extends React.Component {

    render(){
    return (
        <div>
        <MainCarrinho>
        <h3>Carrinho:</h3>
            <div>
                 <p>1x</p>
                <p>Produto 4</p>
                <button>Remover</button>
            </div>

            <p>Valor total: R$70,00</p>
        </MainCarrinho>
        </div>
    )
    }


}