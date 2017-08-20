import React, { Component } from 'react';
import styled from 'styled-components';


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
            <div>
                {this.state.counter}
            </div>
        );
    }
}

export default Counter;