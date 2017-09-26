import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class HtmlPractice extends Component {
  render() {
    return (
      <Container>
        HtmlPractice
        <Link to='/'>
          <Button>Home Page</Button>
        </Link>
      </Container>
    );
  }
}

export default HtmlPractice;

const Container = styled.section`
  font-size: 52px;
  color: black;
  background: lightseagreen;
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