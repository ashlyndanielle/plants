import React from 'react';
import styled from 'styled-components';

import wakeboard from '../../assets/wakeboard.m4v';
import galaxy from '../../assets/throatGalaxy.jpg'

const Video = () => {
  return (
    <div>
      <Media controls poster={ galaxy }>
        <source src={ wakeboard }/>
      </Media>
    </div>
  );
};

export default Video;

const Media = styled.video`
  height: 500px;
`