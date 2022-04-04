import React from 'react';
import styled from 'styled-components'

const MainCard = styled.div`
 display: flex;
 justify-items: center;
 justify-content: space-around;
    button{
        height: 1.8em;
        align-self: center;
        margin-left: 10px;
    }
`

class CarCard extends React.Component{
    render(){
        return(
            <MainCard>
                <p>{this.props.cartItem.quantity}x</p>
                <p>{this.props.cartItem.name}</p>
                <button onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}>Remover</button>
            </MainCard>
        )
    }
}

export default CarCard;