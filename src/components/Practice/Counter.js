import React, { Component } from 'react';
import styled from 'styled-components';

import Date from './Date';
import InputBox from './InputBox'

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
                <InputBox />
            </Container>
        );
    }
}

export default Counter;

const Container = styled.section`
    font-size: 28px;
    color: #8EA4A2;
    text-align: center;
`