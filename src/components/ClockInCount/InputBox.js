import React, { Component } from 'react';
import styled from 'styled-components'
import Words from './Words';

class InputBox extends Component {
    constructor(props){
        super(props);

        this.state = {
            input: '',
            clicked: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputClick = this.handleInputClick.bind(this);
    }
    handleInputChange(e){
        this.setState({
            input: e.target.value
        })
    }
    handleInputClick(){
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        return (
            <Container>
                <TextBox 
                    value={this.state.input}
                    onChange={this.handleInputChange}/>
                <Button onClick={this.handleInputClick}>Print Please</Button>
                <Divider/>
                {(this.state.clicked) ? <Name>{this.state.input}</Name> : null}
                <Words input={this.state.input}/>
            </Container>
        );
    }
}

export default InputBox;

const Container = styled.section`
    text-align: center;
    font-size: 22px;
`
const TextBox = styled.input`
    border: 1px solid purple;
    border-radius: 10px;
    color: purple;
    margin: 10px;
`
const Button = styled.button`
    background: purple;
    padding: 10px;
    color: white;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
`
const Divider = styled.div`
    width: 500px;
    height: 3px;
    background: purple;
    margin: 10px;
`
const Name = styled.h1`
    color: purple;
    text-align: center;
`