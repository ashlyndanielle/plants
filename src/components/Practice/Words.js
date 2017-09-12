import React from 'react';
import styled from 'styled-components';

const Words = ({ input, desc }) => {
    return (
        <Container>
            <Term>{ input }</Term>
            <Description>{ desc }</Description>
        </Container>
    );
};

export default Words;
const Container = styled.section`
    font-size: 12px;
    margin: 0;
    padding: 0;
`
const Term = styled.dt`
    font-size: 12px;
    ${props => props.theme.floatLeft({width: 40})};
    clear: right;
`
const Description = styled.dd`
    ${props => props.theme.floatRight({width: 60})};
    font-size: 12px;
`