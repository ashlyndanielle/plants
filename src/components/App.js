import React, { Component } from 'react';
import styled from 'styled-components';

import Counter from './Practice/Counter';

import './App.css';

class App extends Component {
  render() {
    

    return (
      <Container>
        <Counter/>
      </Container>
    );
  }
}

export default App;

const Container = styled.section`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`