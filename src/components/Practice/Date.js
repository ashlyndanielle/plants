import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Counter from './Counter';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      clockIn: '',
      clockOut: '',
      clicked: false
    }
    this.punchTimeClock = this.punchTimeClock.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
    this.clockOut = this.punchOut.bind(this);
  }
  toggleClick(){
    this.setState({
      clicked: !this.state.clicked
    })
    if (this.state.clicked) {
      this.punchOut()
    } else {
    this.punchTimeClock()
    }
  }
  punchOut(){
    this.setState({
      clockOut: moment().format("h:mm:ss a dddd, MMMM Do, YYYY")
    })
  }
  punchTimeClock(){
    this.setState({
      clockIn: moment().format("h:mm:ss a dddd, MMMM Do, YYYY")
    })
  }
  
  
  render() {

    // this is basically the same as using jQuery $()
    // getElementById('#button').on('click', function(){
    // })

    const { counter, clockIn, clockOut } = this.state

    return (
      <Container>
        <Title className={ ( this.props.count%2 ) ? "notManyPlants" : "lotsOfPlants" } >
          { (this.props.count===1) ? "Plant" : "Plants" }
        </Title>
        <Button onClick={this.toggleClick}>Punch Me</Button>
        { (clockIn) ? <div>clocked in at {clockIn}</div> : null }
        { (clockOut) ? <div>clocked out at {clockOut}</div> : null }
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
  background: #8EA4A2;
  padding: 10px;
  color: #02043E;
  border: 1px solid #8EA4A2;
  border-radius: 10px;
`