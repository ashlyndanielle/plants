import React from 'react';
import styled from 'styled-components';

import wakeboard from '../../assets/wakeboard.m4v';
import trees from '../../assets/trees.jpg'

// this looks like shit so I don't want it displayed

const Video = () => {
  return (
    <Container>
      <Media controls poster={ trees }>
        <source src={ wakeboard }/>
      </Media>
      <Embedded width="560" height="315" src="https://www.youtube.com/embed/3yOYsMyuIFI?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></Embedded>
    </Container>
  );
};

export default Video;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Media = styled.video`
  height: 500px;
  margin: 20px 0;
`
const Embedded = styled.iframe`
  display: block;
  @media (max-width: 730px){
    width: 400px;
  }
`