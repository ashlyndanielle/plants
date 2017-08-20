import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Counter from './ClockInCount/Counter';

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

const Title = styled.h1`
  margin: 0;
  text-align: center;
`
const Container = styled.section`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
  background: purple;
  padding: 10px;
  color: white;
  border: 1px solid black;
  border-radius: 10px;
`