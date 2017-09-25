import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Counter from './Practice/Counter';
import HtmlPractice from './HtmlPractice/HtmlPractice';

import './App.css';

class App extends Component {
  render() {
    

    return (
      <Switch>
        <Route exact path='/' component={ Counter } />
        <Route path='/page2' component={ HtmlPractice } />
      </Switch>
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
  min-height: 88vh;
  background: -webkit-radial-gradient(#648880, #293f50);
  background:    -moz-radial-gradient(#648880, #293f50);
  background:         radial-gradient(#648880, #293f50);
`