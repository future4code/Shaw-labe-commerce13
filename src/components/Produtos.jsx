import React from 'react';
import styled from 'styled-components'
import data from '../Data/data.json'



const MainProdutos = styled.div`
  width: 56%;
  padding: 0px;
  background-color: darkgray;
  display: inline-flex;
  flex-direction: column;
`
const ProdutosTOP = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
`
const CardsContainer = styled.section`
  display: grid;
  grid-gap: 3%;
  flex-wrap: wrap;
  border: 1px solid red;
  padding-top: 1em;
  padding-bottom: 3em;
  height: 100%;
  width: 100%;
  justify-content: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 11vw)
`

const Card1 = styled.div`
  display: grid;
  border-style: solid;
  border-width: thin;
  align-items: start;
  text-align: center;
  justify-items: stretch;

  img{
    width: 9em;
    height: 9em;
  }
`

/* const Card2 = styled.div`
  display: grid;
  border-style: solid;
  border-width: thin;
  align-items: start;
  text-align: center;
  justify-items: stretch;

  img{
    width: 9em;
    height: 9em;
  }
`

const Card3 = styled.div`
  display: grid;
  border-style: solid;
  border-width: thin;
  align-items: start;
  text-align: center;
  justify-items: stretch;

  img{
    width: 9em;
    height: 9em;
  }
`

const Card4 = styled.div`
  display: grid;
  border-style: solid;
  border-width: thin;
  align-items: start;
  text-align: center;
  justify-items: stretch;

  img{
    width: 9em;
    height: 9em;
  }
`

const Card5 = styled.div`
  display: grid;

  border-style: solid;
  border-width: thin;
  align-items: start;
  text-align: center;
  justify-items: stretch;

  img{
    width: 9em;
    height: 9em;
  }
`

const Card6 = styled.div`
  display: grid;
  border-style: solid;
  border-width: thin;
  align-items: start;
  text-align: center;
  justify-items: stretch;

  img{
    width: 9em;
    height: 9em;
  }
  ` */

export default class Produtos extends React.Component {

    state = [
      {
        id: Date.now(),
        name: 'Camiseta NASA Preta',
        img: 'https://images2.imgbox.com/d1/e5/kF02pWQQ_o.jpg',
        price: 'R$150,00'
      },

      {
        id: Date.now(),
        name: 'Camiseta NASA Branca',
        img: 'https://images2.imgbox.com/03/70/oX7P2WyD_o.jpg',
        price: 'R$180,00'
      },

      {
        id: Date.now(),
        name: 'Camiseta Gato Astronauta ',
        img: 'https://images2.imgbox.com/1d/e4/dqrUoqDq_o.jpg',
        price: 'R$250,00'
      },

      {
        id: Date.now(),
        name: 'Camiseta Planetas',
        img: 'https://images2.imgbox.com/5a/be/IySszcVy_o.jpg',
        price: 'R$200,00'
      },

      {
        id: Date.now(),
        name: 'Camiseta "I need Space"',
        img: 'https://images2.imgbox.com/af/e2/ABdnZE87_o.jpg',
        price: 'R$50,00'
      },

      {
        id: Date.now(),
        name: 'Camiseta Alien',
        img: 'https://images2.imgbox.com/1e/9a/x6I45BAP_o.jpg',
        price: 'R$300,00'
      }
    ]


    

    render(){
     const Card = (props) =>{
        return <Card1>
          <img src={this.props.data.img}/>
          <p {...this.props.data.name}>{this.props.data.name}</p>
          <p {...this.props.data.price}>{this.props.data.price}</p>
          <button>Adicionar ao carrinho</button>
        </Card1>
      }
    return (

  <MainProdutos>
    <ProdutosTOP>
      <p>Quantidade de produtos: {}</p>
      <label>Ordenação:
        <select>
          <option value="CRESCENTE">Crescente</option>
          <option value="DECRESCENTE">Decrescente</option>
        </select>
      </label>
    </ProdutosTOP>
    <CardsContainer>
      {this.state
    .map(data => {
        return <Card key={data.id} data={data} />
      })}
    /* <Card1>
        <img src={this.state[0].img} />
        <p>{this.state[0].name}</p>
        <p>{this.state[0].price}</p>
        <button>Adicionar ao carrinho</button>
      </Card1> */
    </CardsContainer>  
  </MainProdutos>
  )}
  }