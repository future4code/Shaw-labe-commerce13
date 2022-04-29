import React from 'react';
import styled from 'styled-components'


const FiltrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  width: 22%;
  padding: 0.5%;
    input{
        max-width: 150px;
    }
`

export default class Filtros extends React.Component{
    render(){
        return(
            <FiltrosContainer>
                <h3>Filtros</h3>
                <label>Valor Minimo: <input type="number" value={this.props.minFilter} onChange={this.props.onChangeMinFilter}></input></label>
                <label>Valor Maximo: <input type="number" value={this.props.maxFilter} onChange={this.props.onChangeMaxFilter}></input></label>
                <label>Busca por nome: <input type="text" value={this.props.nameFilter} onChange={this.props.onChangeNameFilter}></input></label>
            </FiltrosContainer>
        )
    }
}