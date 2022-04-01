import React from 'react';
import styled from 'styled-components'
import Cards from './Cards';

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
 padding-left: 1em;
 padding-right: 1em;
`
const CardsContainer = styled.section`
  display: grid;
  grid-gap: 3%;
  flex-wrap: wrap;
  padding-top: 1em;
  padding-bottom: 3em;
  padding-left: 1em;
  height: 100%;
  width: 100%;
  justify-content: initial;
  grid-template-columns: repeat(auto-fit, 11vw);
`



 class Produtos extends React.Component {

    state = {
      sort: "CRESCENTE"
    }

    getFilteredAndOrderedList = () => {
      return this.props.products
        .filter((product) => product.price <= this.props.maxFilter)
        .filter((product) => product.price >= this.props.minFilter)
        .filter((product) => product.name.includes(this.props.nameFilter))
        .sort((a,b) => this.state.sort === "CRESCENTE" ?a.price - b.price : b.price - a.price)
    }

    onChangeSort = (event) => {
      this.setState({sort: event.target.value})
    }

    render(){
      const filteredAndOrderedList = this.getFilteredAndOrderedList()
    return (
      <MainProdutos>
        <ProdutosTOP>
          <p>Quantidade de produtos: {filteredAndOrderedList.length}</p>
          <label>Ordenar por:
            <select value={this.state.sort} onChange={this.onChangeSort}>
              <option value="CRESCENTE" selected >Crescente</option>
              <option value="DECRESCENTE">Decrescente</option>
            </select>
          </label>
        </ProdutosTOP>
        <CardsContainer>
          {filteredAndOrderedList.map((product) =>{
            return <Cards product={product}/>
          })}
        </CardsContainer>  
      </MainProdutos>
    )}
  }

  export default Produtos;