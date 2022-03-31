import React from 'react';
import styled from 'styled-components'


const FiltrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  width: 22%;
`

export default class Filtros extends React.Component{
    render(){
        return(
            <FiltrosContainer>
                <h3>Filtros</h3>
                <label>Valor Minimo: <input type="number" value="100"></input></label>
                <label>Valor Maximo: <input type="number" value="1000"></input></label>
                <label>Busca por nome: <input type="text"></input></label>
            </FiltrosContainer>
        )
    }
}