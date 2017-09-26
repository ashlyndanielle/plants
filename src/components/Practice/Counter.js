import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Date from './Date';
import InputBox from './InputBox';
import Tables from './Tables';

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
                <Link to='/page2'>
                    <Button>Other Page</Button>
                </Link>
                {this.state.counter}
                <Date count={this.state.counter} />
                <InputBox />
                <Tables />
            </Container>
        );
    }
}

export default Counter;

const Container = styled.section`
    font-size: 28px;
    color: #8EA4A2;
    text-align: center;
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
const Button = styled.button`
    padding: 10px;
    background: #02043E;
    color: white;
    font-size: 22px;
    border-radius: 5px;
    margin-top: 20px;
`