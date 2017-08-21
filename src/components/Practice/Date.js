import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Counter from './Counter';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      clockIn: ''
    }
    this.punchTimeClock = this.punchTimeClock.bind(this);
  }

  punchTimeClock(){
    this.setState({
      clockIn: moment().format()
    })
  }
  
  render() {
    const { counter, clockIn } = this.state
    

    return (
      <Container>
        <Title className={ (this.props.count < 5) ? "notManyPlants" : "lotsOfPlants" } >
          { (this.props.count===1) ? "Plant" : "Plants" }
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
  padding: 10px;
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