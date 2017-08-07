import React, { Component } from 'react';
import styled from 'styled-components';


class App extends Component {
  render() {
    return (
      <div>
        <Title>Hello Plants</Title>
      </div>
    );
  }
}

export default App;

const Title = styled.h1`
  color: ${props => props.theme.colorPrimary};
  background: ${props => props.theme.colorSecondary};
  margin: 0;
  text-align: center;
`
