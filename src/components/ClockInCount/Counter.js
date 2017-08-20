import React, { Component } from 'react';
import styled from 'styled-components';

import Date from './Date';
// this component needs to render the date component

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }
    render() {
        setTimeout( () => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)

        return (
            <Container>
                {this.state.counter}
                <Date count={this.state.counter} />
            </Container>
        );
    }
}

export default Counter;

const Container = styled.section`
    font-size: 28px;
    color: purple;
    text-align: center;
`