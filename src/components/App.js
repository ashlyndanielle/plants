import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      clockIn: ''
    }
    this.punchTimeClock = this.punchTimeClock.bind(this);
  }

  punchTimeClock(){
    this.setState({
      clockIn: new Date()
    })
    console.log('Clocked in at ', this.state.clockIn)
  }

  render() {
    const { counter, clockIn } = this.state

    setTimeout( () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 1000)

    
    return (
      <Container>
        <Title className={ (counter < 5) ? "notManyPlants" : "lotsOfPlants" } >
          {counter} { (counter===1) ? "Plant" : "Plants" }
        </Title>
        <Button onClick={this.punchTimeClock}>Punch Me</Button>

        { (clockIn) ? <div>clocked in {new Date().toTimeString()}</div> : null }
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