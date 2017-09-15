import React from 'react';
import styled from 'styled-components';

import wakeboard from '../../assets/wakeboard.m4v';

const Video = () => {
  return (
    <div>
      <Media controls>
        <source src={ wakeboard }/>
      </Media>
    </div>
  );
};

export default Video;

const Media = styled.video`
  height: 600px;
`