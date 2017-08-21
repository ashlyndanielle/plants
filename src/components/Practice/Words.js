import React from 'react';
import styled from 'styled-components';

const Words = ({ input }) => {
    return (
        <Container>
            { input }
        </Container>
    );
};

export default Words;
const Container = styled.section`
    font-size: 32px;
    margin: 0;
    padding: 0;
`