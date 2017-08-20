import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      clockIn: ''
    }
    this.punchTimeClock = this.punchTimeClock.bind(this);
    this.count = this.count.bind(this)
  }

  punchTimeClock(){
    this.setState({
      clockIn: moment().format()
    })
    console.log('Clocked in at ', this.state.clockIn)
  }

  count() {
    console.log('i wssdlkfjawl')
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
  render() {
    const { counter, clockIn } = this.state
    
    // setInterval( this.count, 1000)
    // setTimeout(() => this.count(), 1000)

    return (
      <Container>
        <Title className={ (counter < 5) ? "notManyPlants" : "lotsOfPlants" } >
          {counter} { (counter===1) ? "Plant" : "Plants" }
        </Title>
        <Button onClick={this.punchTimeClock}>Punch Me</Button>
        { (clockIn) ? <div>clocked in at {clockIn}</div> : null }
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