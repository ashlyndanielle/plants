import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    const { counter } = this.state
    const displayDate = <div>{Date()}</div>
    setTimeout( () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 1000)
// in the title is a example of conditional classes
    return (
      <Container>
        <Title className={ (counter < 5) ? "notManyPlants" : "lotsOfPlants" } >
          {counter} { (counter===1) ? "Plant" : "Plants" }
        </Title>
        <div>{new Date().toLocaleTimeString()}</div>
        { (counter>5 && counter<10) ? displayDate : null }
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