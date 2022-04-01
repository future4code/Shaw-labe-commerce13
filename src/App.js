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
const products = [
  {
      id: 1,
      name: 'Camiseta NASA Preta',
      img: 'https://images2.imgbox.com/d1/e5/kF02pWQQ_o.jpg',
      price: 150
    },

    {
      id: 2,
      name: 'Camiseta NASA Branca',
      img: 'https://images2.imgbox.com/03/70/oX7P2WyD_o.jpg',
      price: 180
    },

    {
      id: 3,
      name: 'Camiseta Gato Astronauta ',
      img: 'https://images2.imgbox.com/1d/e4/dqrUoqDq_o.jpg',
      price: 250
    },

    {
      id: 4,
      name: 'Camiseta Planetas',
      img: 'https://images2.imgbox.com/5a/be/IySszcVy_o.jpg',
      price: 200
    },

    {
      id: 5,
      name: 'Camiseta "I need Space"',
      img: 'https://images2.imgbox.com/af/e2/ABdnZE87_o.jpg',
      price: 50
    },

    {
      id: 6,
      name: 'Camiseta Alien',
      img: 'https://images2.imgbox.com/1e/9a/x6I45BAP_o.jpg',
      price: 300
    }
]

class App extends React.Component{
  state = {
    minFilter: 0,
    maxFilter: 1000,
    nameFilter: "",
    productsInCart: []
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }


  render(){
    return (
      <MainContainer>
        <Filtros
        minFilter = {this.state.minFilter}
        maxFilter = {this.state.maxFilter}
        nameFilter = {this.state.nameFilter}
        onChangeMinFilter = {this.onChangeMinFilter}
        onChangeMaxFilter = {this.onChangeMaxFilter}
        onChangeNameFilter = {this.onChangeNameFilter}
        ></Filtros>
        <Produtos
        minFilter = {this.state.minFilter}
        maxFilter = {this.state.maxFilter}
        nameFilter = {this.state.nameFilter}
        products = {products}
        ></Produtos>
        <Carrinho></Carrinho>
      </MainContainer>
    
    );}
}


export default App;
