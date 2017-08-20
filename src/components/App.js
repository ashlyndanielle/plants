import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 0
    }
    this.createDate = this.createDate.bind(this);
  }

  createDate(){
    return <div>{ Date() }</div>
  }

  render() {
    const { counter } = this.state
    setTimeout( () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 1000)
// in the title is a example of conditional classes
    return (
      <div>
        <Title className={ (counter < 5) ? "notManyPlants" : "lotsOfPlants" } >
          {counter} { (counter===1) ? "Plant" : "Plants" }
        </Title>
        <div>{new Date().toLocaleTimeString()}</div>
        { this.createDate() }
      </div>
    );
  }
}

export default App;

const Title = styled.h1`
  margin: 0;
  text-align: center;
`

