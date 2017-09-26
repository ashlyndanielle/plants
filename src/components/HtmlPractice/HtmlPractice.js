import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class HtmlPractice extends Component {
  render() {
    return (
      <Container>
        <Words>HtmlPractice</Words>
        <Link to='/'>
          <Button>Home Page</Button>
        </Link>
      </Container>
    );
  }
}

export default HtmlPractice;

const Container = styled.section`
  color: black;
  background: lightseagreen;
  padding: 20px;
`
const Words = styled.p`
  font-size: 3em;
  line-height: 1;
`
const Button = styled.button`
  padding: 10px;
  background: #02043E;
  color: white;
  font-size: 22px;
  border-radius: 5px;
  margin-top: 20px;
  display: block;
  text-decoration: none;
`