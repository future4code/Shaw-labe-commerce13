import React from "react";
import styled from "styled-components";
import App from "../App";
import Produtos from "./Produtos";

const Card = styled.div`
  display: grid;
  border-style: solid;
  border-color: black;
  border-width: thin;
  align-items: start;
  text-align: center;
  justify-items: stretch;
  max-height: 294px;

  img{
    width: 9em;
    height: 9em;
  }
`

class Cards extends React.Component{
    render(){
        return(
            <Card>
                <img src={this.props.product.img}/>
                <p>{this.props.product.name}</p>
                <p>R$: {this.props.product.price},00</p>
                <button onClick={() => this.props.onAddProductToCart(this.props.product.id)}>Adicionar ao carrinho</button>
            </Card>
        )
    }
}

export default Cards;