import React from 'react';
import styled from 'styled-components'
import CarCard from './CarCard';

const MainCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  width: 22%;
  align-items: center;
`
const CardListContainer = styled.div`

`
export default class Carrinho extends React.Component {
    getTotalValue = () => {
        let totalValue = 0

        for(let product of this.props.productsInCart) {
            totalValue += product.price * product.quantity
        }

        return totalValue
    }
    render(){
    return (
        <MainCarrinho>
            <h3>Carrinho:</h3>
            <CardListContainer>
                {this.props.productsInCart.map((product) =>{
                    return <CarCard 
                                cartItem = {product}
                                onRemoveProductFromCart = {this.props.onRemoveProductFromCart}
                    />
                })}
                <p>Valor total: R${this.getTotalValue()},00</p>
            </CardListContainer>
        </MainCarrinho>
    )
    }


}